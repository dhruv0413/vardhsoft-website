'use server'

import { getPayload } from 'payload'
import config from '@payload-config'
import { Resend } from 'resend'

export async function submitContactForm(prevState: unknown, formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const companyName = formData.get('companyName') as string
  const phone = formData.get('phone') as string
  const service = formData.get('service') as string
  const budget = formData.get('budget') as string
  const message = formData.get('message') as string

  if (!name || !email || !message) {
    return { success: false, error: 'Name, email, and message are required fields.' }
  }

  try {
    const payload = await getPayload({ config })

    // Save lead in PostgreSQL database via Payload CMS local API
    await payload.create({
      collection: 'leads',
      data: {
        name,
        email,
        companyName: companyName || undefined,
        phone: phone || undefined,
        service: service || undefined,
        budget: budget || undefined,
        message,
        status: 'new',
      },
    })

    // Fetch business settings for email sender identity
    const settings = await payload.findGlobal({ slug: 'website-settings' })
    const businessEmail = settings.email || 'info@vardhsoft.com'
    const businessName = settings.companyName || 'VardhSoft'

    // Handle Resend Email Dispatch
    const apiKey = process.env.RESEND_API_KEY
    if (apiKey && apiKey !== 'placeholder' && !apiKey.startsWith('re_placeholder')) {
      try {
        const resend = new Resend(apiKey)

        // Send notification to administrator
        await resend.emails.send({
          from: `${businessName} Contact <onboarding@resend.dev>`,
          to: businessEmail,
          subject: `New Lead: ${name} (${companyName || 'Individual'})`,
          html: `
            <h3>New ${businessName} Lead Form Submission</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${companyName || 'N/A'}</p>
            <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
            <p><strong>Service Requested:</strong> ${service || 'N/A'}</p>
            <p><strong>Budget Range:</strong> ${budget || 'N/A'}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `,
        })

        // Send auto-response confirmation to lead
        await resend.emails.send({
          from: `${businessName} <onboarding@resend.dev>`,
          to: email,
          subject: `We received your message — ${businessName}`,
          html: `
            <h3>Hi ${name},</h3>
            <p>Thank you for reaching out to ${businessName}.</p>
            <p>We have successfully received your inquiry about <strong>${service || 'custom software development'}</strong>.</p>
            <p>A member of our team will contact you shortly to schedule an initial discussion.</p>
            <br/>
            <p>Best regards,</p>
            <p><strong>${businessName} Team</strong></p>
          `,
        })
      } catch (emailErr) {
        console.warn('Payload lead was saved, but email notification failed:', emailErr)
        // Do not fail the submission — the lead was successfully recorded in the DB
      }
    }

    return { success: true, error: null }
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Something went wrong. Please try again later.'
    console.error('Error in submitContactForm Server Action:', error)
    return { success: false, error: message }
  }
}

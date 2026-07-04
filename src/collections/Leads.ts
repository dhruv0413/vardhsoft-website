import type { CollectionConfig } from 'payload'

export const Leads: CollectionConfig = {
  slug: 'leads',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    create: () => true, // Allow anyone to submit contact leads
    read: ({ req: { user } }) => !!user, // Only logged-in admin users can read
    update: ({ req: { user } }) => !!user, // Only admin can update status
    delete: ({ req: { user } }) => !!user, // Only admin can delete
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'companyName',
      type: 'text',
      required: false,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
      required: false,
    },
    {
      name: 'service',
      type: 'text',
      required: false,
    },
    {
      name: 'budget',
      type: 'text',
      required: false,
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'new',
      options: [
        { label: 'New', value: 'new' },
        { label: 'Contacted', value: 'contacted' },
        { label: 'In Progress', value: 'in-progress' },
        { label: 'Closed', value: 'closed' },
      ],
    },
  ],
}

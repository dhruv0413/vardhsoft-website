'use client'

import React, { useEffect, useRef } from 'react'

export default function HeroBgParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    const parent = canvas.parentElement
    let width = (canvas.width = parent?.clientWidth || window.innerWidth)
    let height = (canvas.height = parent?.clientHeight || window.innerHeight)

    const particles: Array<{
      x: number
      y: number
      r: number
      vx: number
      vy: number
      alpha: number
      color: string
      trail: Array<{ x: number; y: number }>
    }> = []

    const numParticles = 45 // Increased count for "more" subtle particles
    const maxTrailLength = 15 // Fading trails of 15 steps

    // Brand matching color palette: teal, blue, indigo, cyan
    const colors = ['#2dd4bf', '#3b82f6', '#6366f1', '#06b6d4']

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.5 + 0.8, // subtle particle sizes
        vx: (Math.random() - 0.5) * 0.45, // slightly faster for trail visibility
        vy: (Math.random() - 0.5) * 0.45,
        alpha: Math.random() * 0.25 + 0.08, // opacity range from 8% to 33%
        color: colors[Math.floor(Math.random() * colors.length)],
        trail: [],
      })
    }

    // Mouse interactive tracking
    const mouse = { x: 0, y: 0, active: false }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
      mouse.active = true
    }

    const handleMouseLeave = () => {
      mouse.active = false
    }

    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove)
      parent.addEventListener('mouseleave', handleMouseLeave)
    }

    const handleResize = () => {
      if (!canvas) return
      const nextParent = canvas.parentElement
      width = canvas.width = nextParent?.clientWidth || window.innerWidth
      height = canvas.height = nextParent?.clientHeight || window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      // DRAW FLOATING NODES & TRAILS
      particles.forEach((p) => {
        // Convert hex to rgb for opacity control
        const hex = p.color.replace('#', '')
        const rVal = parseInt(hex.substring(0, 2), 16)
        const gVal = parseInt(hex.substring(2, 4), 16)
        const bVal = parseInt(hex.substring(4, 6), 16)

        // Draw trail points (oldest first)
        p.trail.forEach((point, index) => {
          const ratio = (index + 1) / p.trail.length
          const trailAlpha = p.alpha * ratio * 0.4 // Fade out older coordinates
          const trailRadius = p.r * (0.3 + ratio * 0.7) // Shrink older trail points

          ctx.beginPath()
          ctx.arc(point.x, point.y, trailRadius, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${rVal}, ${gVal}, ${bVal}, ${trailAlpha})`
          ctx.fill()
        })

        // Draw main node
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${rVal}, ${gVal}, ${bVal}, ${p.alpha})`
        ctx.fill()

        // Push current position to trail before updates
        p.trail.push({ x: p.x, y: p.y })
        if (p.trail.length > maxTrailLength) {
          p.trail.shift()
        }

        // Apply mouse force if active (subtle repulsion/push)
        if (mouse.active) {
          const dx = p.x - mouse.x
          const dy = p.y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const maxDist = 120
          if (dist < maxDist) {
            const force = (maxDist - dist) / maxDist
            // Push away
            const pushX = (dx / dist) * force * 0.8
            const pushY = (dy / dist) * force * 0.8
            p.x += pushX
            p.y += pushY
          }
        }

        // Update standard movement
        p.x += p.vx
        p.y += p.vy

        // Wrap around borders & clear trails to avoid drawing long connecting lines
        if (p.x < 0) {
          p.x = width
          p.trail = []
        } else if (p.x > width) {
          p.x = 0
          p.trail = []
        }

        if (p.y < 0) {
          p.y = height
          p.trail = []
        } else if (p.y > height) {
          p.y = 0
          p.trail = []
        }
      })

      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', handleResize)
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove)
        parent.removeEventListener('mouseleave', handleMouseLeave)
      }
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  )
}

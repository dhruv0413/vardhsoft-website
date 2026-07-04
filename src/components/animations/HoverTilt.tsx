'use client'

import React, { useRef, useState } from 'react'
import { motion, useSpring, useMotionValue, useReducedMotion } from 'framer-motion'

interface HoverTiltProps {
  children: React.ReactNode
  maxTilt?: number // Maximum rotation in degrees
  scale?: number // Scale on hover
  perspective?: number // 3D perspective depth
  className?: string
  glowColor?: string // Custom glow gradient color
}

export const HoverTilt: React.FC<HoverTiltProps> = ({
  children,
  maxTilt = 8,
  scale = 1.02,
  perspective = 1000,
  className = '',
  glowColor = 'rgba(20, 184, 166, 0.15)', // Default teal/emerald glow
}) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  // Motion values for rotation and shine positioning
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const glowX = useMotionValue(0)
  const glowY = useMotionValue(0)
  const glowOpacity = useMotionValue(0)

  // Smooth springs for rotation
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 }
  const springRotateX = useSpring(rotateX, springConfig)
  const springRotateY = useSpring(rotateY, springConfig)
  const springScale = useSpring(1, springConfig)
  const springGlowOpacity = useSpring(glowOpacity, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || shouldReduceMotion) return

    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    // Center coordinates as (0, 0)
    const centerX = mouseX - width / 2
    const centerY = mouseY - height / 2

    // Calculate rotation angles
    const calculatedRotateX = -(centerY / (height / 2)) * maxTilt
    const calculatedRotateY = (centerX / (width / 2)) * maxTilt

    rotateX.set(calculatedRotateX)
    rotateY.set(calculatedRotateY)

    // Set glow position in percentage
    glowX.set(mouseX)
    glowY.set(mouseY)
  }

  const handleMouseEnter = () => {
    if (shouldReduceMotion) return
    setIsHovered(true)
    springScale.set(scale)
    glowOpacity.set(1)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    rotateX.set(0)
    rotateY.set(0)
    springScale.set(1)
    glowOpacity.set(0)
  }

  // If reduced motion is requested, render a standard wrapper with subtle scaling
  if (shouldReduceMotion) {
    return (
      <motion.div
        ref={cardRef}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
        className={className}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        perspective: perspective,
        rotateX: springRotateX,
        rotateY: springRotateY,
        scale: springScale,
      }}
      className={`relative overflow-hidden ${className}`}
    >
      {/* 3D card content */}
      <div style={{ transform: 'translateZ(10px)' }} className="h-full w-full">
        {children}
      </div>

      {/* Dynamic Cursor-following Gradient Glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 -z-10 transition-opacity duration-300"
        style={{
          opacity: springGlowOpacity,
          background: `radial-gradient(circle 180px at ${glowX}px ${glowY}px, ${glowColor}, transparent 80%)`,
        }}
      />
    </motion.div>
  )
}

export default HoverTilt

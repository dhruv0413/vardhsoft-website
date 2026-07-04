'use client'

import React, { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

export type RevealVariant = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale-in'

interface ScrollRevealProps {
  children: React.ReactNode
  variant?: RevealVariant
  delay?: number
  duration?: number
  threshold?: number
  once?: boolean
  className?: string
  staggerChildren?: number
}

const getVariants = (variant: RevealVariant, shouldReduceMotion: boolean | null) => {
  if (shouldReduceMotion) {
    return {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: 0.2 },
      },
    }
  }

  switch (variant) {
    case 'fade-up':
      return {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }
    case 'fade-down':
      return {
        hidden: { opacity: 0, y: -30 },
        visible: { opacity: 1, y: 0 },
      }
    case 'fade-left':
      return {
        hidden: { opacity: 0, x: 30 },
        visible: { opacity: 1, x: 0 },
      }
    case 'fade-right':
      return {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0 },
      }
    case 'scale-in':
      return {
        hidden: { opacity: 0, scale: 0.93 },
        visible: { opacity: 1, scale: 1 },
      }
    default:
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }
  }
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
  once = true,
  className = '',
  staggerChildren = 0,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  const isInView = useInView(ref, {
    once,
    amount: isMobile ? 0.05 : threshold,
  })
  const shouldReduceMotion = useReducedMotion()

  const variants = getVariants(variant, shouldReduceMotion)

  const parentVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : staggerChildren,
        delayChildren: delay,
      },
    },
  }

  if (staggerChildren > 0) {
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={parentVariants}
        className={className}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98], // smooth premium easing
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default ScrollReveal

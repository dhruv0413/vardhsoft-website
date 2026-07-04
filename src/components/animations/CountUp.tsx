'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useInView, animate, useReducedMotion } from 'framer-motion'

interface CountUpProps {
  to: number
  from?: number
  duration?: number
  delay?: number
  suffix?: string
  prefix?: string
  className?: string
}

export const CountUp: React.FC<CountUpProps> = ({
  to,
  from = 0,
  duration = 1.8,
  delay = 0,
  suffix = '',
  prefix = '',
  className = '',
}) => {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const shouldReduceMotion = useReducedMotion()
  const [count, setCount] = useState(from)
  const isStarted = useRef(false)

  useEffect(() => {
    if (!isInView || isStarted.current) return

    if (shouldReduceMotion) {
      setCount(to)
      return
    }

    isStarted.current = true

    const timeout = setTimeout(() => {
      const controls = animate(from, to, {
        duration,
        ease: 'easeOut',
        onUpdate: (value) => {
          setCount(Math.floor(value))
        },
      })
      return () => controls.stop()
    }, delay * 1000)

    return () => clearTimeout(timeout)
  }, [isInView, from, to, duration, delay, shouldReduceMotion])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export default CountUp

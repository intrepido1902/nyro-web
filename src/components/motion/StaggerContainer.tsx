'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode, CSSProperties } from 'react'

export default function StaggerContainer({
  children, className, style
}: { children: ReactNode, className?: string, style?: CSSProperties }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.12 } }
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children, className, style
}: { children: ReactNode, className?: string, style?: CSSProperties }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1, y: 0,
          transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
        }
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}

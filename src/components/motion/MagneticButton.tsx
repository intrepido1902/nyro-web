'use client'
import { useRef, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

interface MagneticButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  className?: string
  style?: React.CSSProperties
}

export default function MagneticButton({
  children, href, onClick, className, style
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useSpring(0, { stiffness: 200, damping: 20 })
  const y = useSpring(0, { stiffness: 200, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const distX = e.clientX - centerX
    const distY = e.clientY - centerY
    const distance = Math.sqrt(distX ** 2 + distY ** 2)

    if (distance < 80) {
      x.set(distX * 0.35)
      y.set(distY * 0.35)
      setIsHovered(true)
    }
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  const inner = (
    <motion.div
      ref={ref}
      style={{ x, y, display: 'inline-block', ...style }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      <motion.div
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    </motion.div>
  )

  if (href) {
    return <a href={href} target="_blank" rel="noopener noreferrer"
      style={{ textDecoration: 'none' }}>{inner}</a>
  }
  return <div onClick={onClick}>{inner}</div>
}

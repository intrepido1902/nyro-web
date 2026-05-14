'use client'
import { useState, useEffect, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const HOME_SECTIONS = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'casos', label: 'Casos de éxito' },
  { id: 'contacto', label: 'Contacto' },
]

const NOSOTROS_SECTIONS = [
  { id: 'nosotros-hero', label: 'Nosotros' },
  { id: 'nosotros-mision', label: 'Misión' },
  { id: 'nosotros-fundador', label: 'Fundador' },
]

export default function SectionNavigator() {
  const pathname = usePathname()
  const sections = pathname === '/nosotros' ? NOSOTROS_SECTIONS : HOME_SECTIONS

  const [activeSection, setActiveSection] = useState(sections[0].id)
  const [isExpanded, setIsExpanded] = useState(false)
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Reset active section when route changes
  useEffect(() => {
    const defaultId = pathname === '/nosotros'
      ? NOSOTROS_SECTIONS[0].id
      : HOME_SECTIONS[0].id
    setActiveSection(defaultId)
    setVisible(false)
  }, [pathname])

  const updateState = useCallback(() => {
    const scrollY = window.scrollY
    const total = document.documentElement.scrollHeight - window.innerHeight

    setVisible(scrollY > 200)

    const newProgress = total > 0
      ? Math.min(100, Math.max(0, (scrollY / total) * 100))
      : 0
    setProgress(newProgress)

    let found = sections[0].id
    for (const section of sections) {
      const el = document.getElementById(section.id)
      if (el) {
        const rect = el.getBoundingClientRect()
        if (rect.top <= 150) {
          found = section.id
        }
      }
    }
    setActiveSection(found)
  }, [sections])

  useEffect(() => {
    if (!mounted) return
    window.addEventListener('scroll', updateState, { passive: true })
    updateState()
    return () => window.removeEventListener('scroll', updateState)
  }, [mounted, updateState])

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
    setIsExpanded(false)
  }, [])

  if (!mounted || !visible) return null
  if (pathname === '/blog') return null

  const activeLabel = sections.find(s => s.id === activeSection)?.label ?? 'NYRO'

  const circleSize = 22
  const strokeW = 2
  const radius = (circleSize - strokeW) / 2
  const circumference = 2 * Math.PI * radius
  const dashOffset = circumference - (progress / 100) * circumference

  const pillTransition = {
    type: 'tween' as const,
    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    duration: 0.45,
  }

  return (
    <>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsExpanded(false)}
            style={{
              position: 'fixed', inset: 0, zIndex: 9998,
              background: 'rgba(0,0,0,0.35)',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
            }}
          />
        )}
      </AnimatePresence>

      <div style={{
        position: 'fixed',
        bottom: '28px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 9999,
      }}>
        <motion.div
          onClick={() => { if (!isExpanded) setIsExpanded(true) }}
          animate={{
            width: isExpanded ? 256 : 210,
            height: isExpanded ? 260 : 46,
            borderRadius: isExpanded ? 18 : 23,
          }}
          transition={pillTransition}
          style={{
            background: 'rgba(11,13,24,0.96)',
            border: '1px solid rgba(74,126,255,0.18)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            cursor: isExpanded ? 'default' : 'pointer',
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 4px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(74,126,255,0.08)',
          }}
        >
          {/* PILL CLOSED */}
          <motion.div
            animate={{
              opacity: isExpanded ? 0 : 1,
              y: isExpanded ? -4 : 0,
            }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute', inset: 0,
              display: 'flex', alignItems: 'center',
              gap: '10px', padding: '0 14px',
              pointerEvents: isExpanded ? 'none' : 'auto',
            }}
          >
            <div style={{
              width: 6, height: 6, borderRadius: '50%',
              background: '#4A7EFF', flexShrink: 0,
              boxShadow: '0 0 6px rgba(74,126,255,0.6)',
            }} />

            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={activeSection}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                style={{
                  flex: 1,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  fontSize: '13px',
                  fontWeight: 500,
                  color: '#EEF0FF',
                  fontFamily: 'var(--font-dm-sans, DM Sans, sans-serif)',
                }}
              >
                {activeLabel}
              </motion.span>
            </AnimatePresence>

            {/* Progress circle */}
            <svg
              width={circleSize}
              height={circleSize}
              style={{ transform: 'rotate(-90deg)', flexShrink: 0 }}
            >
              <circle
                cx={circleSize / 2} cy={circleSize / 2} r={radius}
                fill="none"
                stroke="rgba(255,255,255,0.07)"
                strokeWidth={strokeW}
              />
              <circle
                cx={circleSize / 2} cy={circleSize / 2} r={radius}
                fill="none"
                stroke="#4A7EFF"
                strokeWidth={strokeW}
                strokeDasharray={circumference}
                strokeDashoffset={dashOffset}
                strokeLinecap="round"
                style={{ transition: 'stroke-dashoffset 0.2s ease' }}
              />
            </svg>
          </motion.div>

          {/* EXPANDED */}
          <motion.div
            animate={{ opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.2, delay: isExpanded ? 0.1 : 0 }}
            style={{
              position: 'absolute', inset: 0,
              display: 'flex', flexDirection: 'column',
              pointerEvents: isExpanded ? 'auto' : 'none',
            }}
          >
            <div style={{
              display: 'flex', alignItems: 'center',
              justifyContent: 'space-between',
              padding: '14px 16px 10px',
              borderBottom: '1px solid rgba(255,255,255,0.05)',
            }}>
              <span style={{
                fontFamily: 'var(--font-mono, JetBrains Mono, monospace)',
                fontSize: '10px', letterSpacing: '0.1em',
                color: '#3D4460', textTransform: 'uppercase',
              }}>En esta página</span>
              <button
                onClick={(e) => { e.stopPropagation(); setIsExpanded(false) }}
                style={{
                  background: 'none', border: 'none',
                  cursor: 'pointer', color: '#3D4460',
                  display: 'flex', padding: '2px',
                  transition: 'color 0.15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#7A84AA')}
                onMouseLeave={e => (e.currentTarget.style.color = '#3D4460')}
              >
                <X size={14} />
              </button>
            </div>

            <div style={{
              flex: 1, padding: '8px',
              display: 'flex', flexDirection: 'column', gap: '2px',
            }}>
              {sections.map((section) => {
                const isActive = activeSection === section.id
                return (
                  <button
                    key={section.id}
                    onClick={(e) => { e.stopPropagation(); scrollToSection(section.id) }}
                    style={{
                      background: isActive ? 'rgba(74,126,255,0.1)' : 'transparent',
                      border: `1px solid ${isActive ? 'rgba(74,126,255,0.2)' : 'transparent'}`,
                      borderRadius: '8px',
                      padding: '9px 12px',
                      textAlign: 'left',
                      cursor: 'pointer',
                      transition: 'all 0.15s',
                      display: 'flex', alignItems: 'center',
                      justifyContent: 'space-between',
                      width: '100%',
                    }}
                    onMouseEnter={e => {
                      if (!isActive) e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                    }}
                    onMouseLeave={e => {
                      if (!isActive) e.currentTarget.style.background = 'transparent'
                    }}
                  >
                    <span style={{
                      fontSize: '13px',
                      fontWeight: isActive ? 500 : 400,
                      color: isActive ? '#EEF0FF' : '#7A84AA',
                      fontFamily: 'var(--font-dm-sans, DM Sans, sans-serif)',
                    }}>
                      {section.label}
                    </span>
                    {isActive && (
                      <div style={{
                        width: 5, height: 5, borderRadius: '50%',
                        background: '#4A7EFF',
                        boxShadow: '0 0 6px rgba(74,126,255,0.5)',
                      }} />
                    )}
                  </button>
                )
              })}
            </div>

            {/* Progress bar at bottom */}
            <div style={{
              height: '2px',
              background: 'rgba(255,255,255,0.05)',
              margin: '0 16px 12px',
              borderRadius: '1px',
              overflow: 'hidden',
            }}>
              <div style={{
                height: '100%',
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #4A7EFF, #7AA3FF)',
                borderRadius: '1px',
                transition: 'width 0.2s ease',
              }} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}

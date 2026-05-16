'use client'
import { useState, useRef } from 'react'
import { motion, useInView, useMotionValue } from 'framer-motion'

const ITEMS = [
  {
    before: { icon: '📊', text: 'Excel con 47 pestañas', sub: 'datos perdidos, versiones duplicadas' },
    after:  { icon: '🗄️', text: 'Base de datos centralizada', sub: 'todo en tiempo real, sin errores' },
  },
  {
    before: { icon: '💬', text: 'WhatsApp para pedidos', sub: 'mensajes perdidos, sin historial' },
    after:  { icon: '⚡', text: 'Sistema de gestión digital', sub: 'registro automático, trazabilidad total' },
  },
  {
    before: { icon: '📞', text: 'Clientes por voz a voz', sub: 'sin métricas, sin seguimiento' },
    after:  { icon: '📈', text: 'Pipeline de clientes digital', sub: 'seguimiento automático, más cierres' },
  },
  {
    before: { icon: '⏰', text: 'Cotizaciones manuales: 2h', sub: 'errores frecuentes, cliente espera' },
    after:  { icon: '✅', text: 'Cotizaciones automáticas: 3min', sub: 'sin errores, cliente satisfecho' },
  },
]

export default function ChaosToOrder() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeTab, setActiveTab] = useState<'before' | 'after'>('before')
  const [isDragging, setIsDragging] = useState(false)
  const sliderX = useMotionValue(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [sliderPercent, setSliderPercent] = useState(15)

  const handleDrag = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    const percent = Math.min(95, Math.max(5, ((clientX - rect.left) / rect.width) * 100))
    setSliderPercent(percent)
  }

  void sliderX

  return (
    <section ref={ref} style={{
      padding: 'clamp(60px, 8vw, 100px) clamp(1.25rem, 4vw, 2rem)',
      background: '#070810',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '3rem' }}
        >
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: 11,
            color: '#4A7EFF', letterSpacing: '0.14em',
            textTransform: 'uppercase', display: 'block', marginBottom: '0.75rem',
          }}>La transformación</span>
          <h2 style={{
            fontFamily: 'var(--font-syne)',
            fontSize: 'clamp(26px, 3vw, 42px)',
            fontWeight: 700, color: '#EEF0FF',
            lineHeight: 1.1, letterSpacing: '-0.02em', margin: 0,
          }}>
            De operar en el caos<br />
            <span style={{ color: '#4A7EFF' }}>a un sistema que trabaja solo.</span>
          </h2>
        </motion.div>

        {/* DESKTOP: slider comparador */}
        <div className="hidden md:block">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              ref={containerRef}
              style={{
                position: 'relative',
                borderRadius: 16,
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.06)',
                cursor: 'col-resize',
                userSelect: 'none',
              }}
              onMouseMove={(e) => isDragging && handleDrag(e)}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
            >
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                minHeight: 320,
              }}>
                {/* Columna ANTES */}
                <div style={{
                  background: 'rgba(255, 68, 68, 0.04)',
                  borderRight: '1px solid rgba(255,68,68,0.1)',
                  padding: '2rem',
                }}>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    marginBottom: '1.5rem',
                  }}>
                    <div style={{
                      width: 8, height: 8, borderRadius: '50%',
                      background: '#FF4444',
                    }}/>
                    <span style={{
                      fontFamily: 'var(--font-mono)', fontSize: 11,
                      color: '#FF4444', letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}>Antes de NYRO</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {ITEMS.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -16 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                        style={{
                          display: 'flex', gap: 12, alignItems: 'flex-start',
                          padding: '0.75rem 1rem',
                          background: 'rgba(255,68,68,0.05)',
                          border: '1px solid rgba(255,68,68,0.1)',
                          borderRadius: 8,
                        }}
                      >
                        <span style={{ fontSize: 18, flexShrink: 0 }}>{item.before.icon}</span>
                        <div>
                          <p style={{ fontSize: 14, fontWeight: 500, color: '#EEF0FF', margin: 0 }}>
                            {item.before.text}
                          </p>
                          <p style={{ fontSize: 12, color: '#FF6666', margin: '2px 0 0' }}>
                            {item.before.sub}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Columna DESPUÉS */}
                <div style={{
                  background: 'rgba(74,126,255,0.04)',
                  padding: '2rem',
                }}>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    marginBottom: '1.5rem',
                  }}>
                    <div style={{
                      width: 8, height: 8, borderRadius: '50%',
                      background: '#4A7EFF',
                      boxShadow: '0 0 8px rgba(74,126,255,0.6)',
                    }}/>
                    <span style={{
                      fontFamily: 'var(--font-mono)', fontSize: 11,
                      color: '#4A7EFF', letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}>Con NYRO</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {ITEMS.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 16 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                        style={{
                          display: 'flex', gap: 12, alignItems: 'flex-start',
                          padding: '0.75rem 1rem',
                          background: 'rgba(74,126,255,0.06)',
                          border: '1px solid rgba(74,126,255,0.15)',
                          borderRadius: 8,
                        }}
                      >
                        <span style={{ fontSize: 18, flexShrink: 0 }}>{item.after.icon}</span>
                        <div>
                          <p style={{ fontSize: 14, fontWeight: 500, color: '#EEF0FF', margin: 0 }}>
                            {item.after.text}
                          </p>
                          <p style={{ fontSize: 12, color: '#4A7EFF', margin: '2px 0 0' }}>
                            {item.after.sub}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Divisor arrastrable */}
              <motion.div
                style={{
                  position: 'absolute', top: 0, bottom: 0,
                  left: `${sliderPercent}%`,
                  width: 2,
                  background: 'linear-gradient(180deg, transparent, #4A7EFF, transparent)',
                  cursor: 'col-resize',
                  zIndex: 10,
                }}
                animate={isInView && !isDragging ? { left: ['10%', '50%'] } : {}}
                transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div style={{
                  position: 'absolute', top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 36, height: 36, borderRadius: '50%',
                  background: '#0C0E1C',
                  border: '2px solid #4A7EFF',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 0 20px rgba(74,126,255,0.4)',
                  color: '#4A7EFF', fontSize: 14, fontWeight: 700,
                  userSelect: 'none',
                }}>⟺</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* MOBILE: tabs */}
        <div className="block md:hidden">
          <div style={{
            display: 'flex', gap: '0.5rem', marginBottom: '1.5rem',
            background: '#0C0E1C', padding: '4px',
            borderRadius: 10, border: '1px solid rgba(255,255,255,0.06)',
          }}>
            {(['before', 'after'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  flex: 1, padding: '0.625rem',
                  borderRadius: 8, border: 'none', cursor: 'pointer',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 12, letterSpacing: '0.08em',
                  transition: 'all 0.2s',
                  background: activeTab === tab
                    ? tab === 'before' ? 'rgba(255,68,68,0.15)' : 'rgba(74,126,255,0.15)'
                    : 'transparent',
                  color: activeTab === tab
                    ? tab === 'before' ? '#FF4444' : '#4A7EFF'
                    : '#3D4460',
                }}
              >
                {tab === 'before' ? '❌ Antes' : '✓ Con NYRO'}
              </button>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {ITEMS.map((item, i) => {
              const d = activeTab === 'before' ? item.before : item.after
              const isAfter = activeTab === 'after'
              return (
                <motion.div
                  key={`${activeTab}-${i}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                  style={{
                    display: 'flex', gap: 12, alignItems: 'flex-start',
                    padding: '0.875rem 1rem',
                    background: isAfter ? 'rgba(74,126,255,0.06)' : 'rgba(255,68,68,0.05)',
                    border: `1px solid ${isAfter ? 'rgba(74,126,255,0.15)' : 'rgba(255,68,68,0.1)'}`,
                    borderRadius: 8,
                  }}
                >
                  <span style={{ fontSize: 20, flexShrink: 0 }}>{d.icon}</span>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 500, color: '#EEF0FF', margin: 0 }}>
                      {d.text}
                    </p>
                    <p style={{
                      fontSize: 12, margin: '2px 0 0',
                      color: isAfter ? '#4A7EFF' : '#FF6666',
                    }}>{d.sub}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}

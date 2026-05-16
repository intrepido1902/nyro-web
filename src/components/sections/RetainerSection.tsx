'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const CARDS = [
  {
    icon: '🛡️',
    title: 'Observabilidad continua',
    desc: 'Monitoreo de infraestructura activa. Alertas automáticas, detección de anomalías y uptime garantizado sin intervención manual.',
  },
  {
    icon: '⚡',
    title: 'Integración continua',
    desc: 'Cada ciclo mensual incorpora nuevas integraciones, optimizaciones de rendimiento y expansión de flujos automatizados.',
  },
  {
    icon: '🤝',
    title: 'Acceso directo al equipo',
    desc: 'Canal dedicado con el equipo de ingeniería NYRO. Respuesta en menos de 4h hábiles para cualquier requerimiento técnico.',
  },
]

const TIMELINE = [
  { month: 'Mes 1', label: 'Sistema en producción', desc: 'Web, BD y automatizaciones activas' },
  { month: 'Mes 3', label: 'Primera evolución', desc: 'Nuevas integraciones según tu operación' },
  { month: 'Mes 6', label: 'Optimización completa', desc: 'IA y reportes avanzados integrados' },
  { month: 'Mes 12', label: 'Infraestructura madura', desc: 'Sistema autónomo, listo para escalar' },
]

export default function RetainerSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const timelineRef = useRef(null)
  const timelineInView = useInView(timelineRef, { once: true, margin: '-60px' })

  return (
    <section ref={ref} style={{
      background: '#0C0E1C',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      padding: 'clamp(60px, 8vw, 100px) clamp(1.25rem, 4vw, 2rem)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
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
          }}>Retainer mensual</span>

          <div style={{
            display: 'flex', alignItems: 'flex-end',
            justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem',
          }}>
            <h2 style={{
              fontFamily: 'var(--font-syne)',
              fontSize: 'clamp(26px, 3vw, 42px)',
              fontWeight: 700, color: '#EEF0FF',
              lineHeight: 1.1, letterSpacing: '-0.02em', margin: 0,
            }}>
              Software eterno.<br />Tu sistema evoluciona cada mes.
            </h2>

            <div style={{
              background: 'rgba(74,126,255,0.06)',
              border: '1px solid rgba(74,126,255,0.15)',
              borderRadius: 12,
              padding: '1rem 1.5rem',
              textAlign: 'center',
              flexShrink: 0,
            }}>
              <p style={{
                fontFamily: 'var(--font-syne)',
                fontSize: 16,
                fontWeight: 700,
                color: '#EEF0FF',
                margin: 0,
                marginBottom: 6,
              }}>Retainer mensual</p>
              <p style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: 13,
                color: '#7A84AA',
                margin: 0,
                maxWidth: 220,
                lineHeight: 1.5,
              }}>
                Tu infraestructura evoluciona en cada ciclo.
                Sin fricción, sin gestión adicional.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1rem', marginBottom: '4rem',
        }}>
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: '#070810',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 12, padding: '2rem',
              }}
            >
              <div style={{
                width: 44, height: 44, borderRadius: 10,
                background: 'rgba(74,126,255,0.08)',
                border: '1px solid rgba(74,126,255,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 20, marginBottom: '1.25rem',
              }}>{card.icon}</div>
              <h3 style={{
                fontFamily: 'var(--font-syne)', fontSize: 18,
                fontWeight: 700, color: '#EEF0FF', marginBottom: '0.5rem',
              }}>{card.title}</h3>
              <p style={{
                fontSize: 14, color: '#7A84AA', lineHeight: 1.65, margin: 0,
              }}>{card.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline horizontal */}
        <motion.div
          ref={timelineRef}
          initial={{ opacity: 0 }}
          animate={timelineInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: 11,
            color: '#3D4460', letterSpacing: '0.12em',
            textTransform: 'uppercase', marginBottom: '1.5rem',
          }}>Tu sistema en el tiempo</p>

          <div style={{ position: 'relative' }}>
            {/* Línea base */}
            <div className="nyro-timeline-line" style={{
              position: 'absolute', top: 16, left: 0, right: 0,
              height: 1, background: 'rgba(255,255,255,0.06)',
            }}/>
            {/* Línea animada */}
            <motion.div
              className="nyro-timeline-line"
              initial={{ scaleX: 0 }}
              animate={timelineInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'absolute', top: 16, left: 0, right: 0,
                height: 1, background: 'linear-gradient(90deg, #4A7EFF, #7AA3FF)',
                transformOrigin: 'left',
                boxShadow: '0 0 8px rgba(74,126,255,0.4)',
              }}
            />

            <div
              className="nyro-timeline-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '1rem',
                position: 'relative',
              }}
            >
              {TIMELINE.map((item, i) => (
                <motion.div
                  key={item.month}
                  initial={{ opacity: 0, y: 16 }}
                  animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Punto */}
                  <div style={{
                    width: 10, height: 10, borderRadius: '50%',
                    background: '#4A7EFF', marginBottom: '1rem',
                    boxShadow: '0 0 12px rgba(74,126,255,0.5)',
                    position: 'relative', zIndex: 1,
                    border: '2px solid #0C0E1C',
                  }}/>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: 10,
                    color: '#4A7EFF', letterSpacing: '0.1em',
                    textTransform: 'uppercase', display: 'block',
                    marginBottom: '0.25rem',
                  }}>{item.month}</span>
                  <p style={{
                    fontFamily: 'var(--font-syne)', fontSize: 14,
                    fontWeight: 700, color: '#EEF0FF', margin: '0 0 4px',
                  }}>{item.label}</p>
                  <p style={{
                    fontSize: 12, color: '#7A84AA', margin: 0, lineHeight: 1.5,
                  }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

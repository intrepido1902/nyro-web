'use client'
import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const WHATSAPP_URL = 'https://wa.me/573178051585?text=Hola%20NYRO%2C%20quiero%20iniciar%20un%20diagn%C3%B3stico%20arquitect%C3%B3nico%20para%20mi%20empresa.'

const PHASES = [
  {
    num: '01',
    label: 'Estado inicial de la operación',
    color: '#FF4444',
    items: ['Excel fragmentado sin control de versiones', 'Pedidos gestionados por mensajería sin registro', 'Adquisición no sistematizada, sin pipeline', 'Cotizaciones manuales: latencia promedio 120 min'],
  },
  {
    num: '02',
    label: 'Diagnóstico arquitectónico',
    color: '#F59E0B',
    items: ['Mapeo completo del flujo operacional', 'Identificación de 4 cuellos de botella críticos', 'Diseño del sistema integrado', 'Plan de implementación: 3 semanas'],
  },
  {
    num: '03',
    label: 'Infraestructura desplegada',
    color: '#4A7EFF',
    items: ['Arquitectura headless con catálogo operacional', 'Base de datos relacional centralizada (clientes, inventario, pedidos)', 'Motor de cotización automatizado', 'Dashboard de métricas en tiempo real'],
  },
  {
    num: '04',
    label: 'Impacto operacional medido',
    color: '#22C55E',
    items: ['−80% fricción operacional medida', '100% operación centralizada en un sistema', 'Cotizaciones: de 120 min a 4 min (96% reducción)', 'Pipeline de adquisición digital activo'],
  },
]

function CountUp({ end, duration = 1.5, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let startTime: number
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [isInView, end, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function DisaCase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} style={{
      padding: 'clamp(60px, 8vw, 100px) clamp(1.25rem, 4vw, 2rem)',
      background: '#070810',
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
          }}>Caso de arquitectura — DISA</span>
          <h2 style={{
            fontFamily: 'var(--font-syne)',
            fontSize: 'clamp(26px, 3vw, 42px)',
            fontWeight: 700, color: '#EEF0FF',
            lineHeight: 1.1, letterSpacing: '-0.025em', margin: 0,
          }}>
            Arquitectura operacional<br />
            <span style={{ color: '#4A7EFF' }}>construida en 3 semanas.</span>
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1px',
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: 16, overflow: 'hidden',
          marginBottom: '3rem',
        }}>
          {PHASES.map((phase, i) => (
            <motion.div
              key={phase.num}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: '#070810', padding: '2rem',
                borderLeft: i > 0 ? `2px solid ${phase.color}20` : 'none',
                position: 'relative',
              }}
            >
              <div style={{
                width: 4, height: '100%',
                position: 'absolute', left: 0, top: 0, bottom: 0,
                background: phase.color, opacity: 0.3,
              }}/>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: 11,
                color: phase.color, letterSpacing: '0.1em', display: 'block',
                marginBottom: '0.5rem',
              }}>{phase.num}</span>
              <h3 style={{
                fontFamily: 'var(--font-syne)', fontSize: 16,
                fontWeight: 700, color: '#EEF0FF',
                marginBottom: '1rem',
              }}>{phase.label}</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0,
                display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {phase.items.map((item) => (
                  <li key={item} style={{
                    display: 'flex', gap: 8, alignItems: 'flex-start',
                  }}>
                    <span style={{ color: phase.color, flexShrink: 0, fontSize: 12, marginTop: 2 }}>
                      {i === 0 ? '×' : '→'}
                    </span>
                    <span style={{ fontSize: 13, color: '#7A84AA', lineHeight: 1.5 }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Métricas con contador */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            background: '#0C0E1C',
            border: '1px solid rgba(74,126,255,0.15)',
            borderRadius: 16, padding: '2.5rem',
            marginBottom: '2rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
          }}
        >
          {[
            { value: 80, suffix: '%', label: 'reducción de fricción operacional' },
            { value: 100, suffix: '%', label: 'operación centralizada en un sistema' },
            { value: 96, suffix: '%', label: 'reducción en tiempo de cotización' },
          ].map((metric, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <p style={{
                fontFamily: 'var(--font-syne)', fontSize: 'clamp(32px, 5vw, 52px)',
                fontWeight: 800, color: '#4A7EFF', margin: 0, lineHeight: 1,
              }}>
                <CountUp end={metric.value} suffix={metric.suffix} duration={1.8} />
              </p>
              <p style={{
                fontSize: 13, color: '#7A84AA', margin: '8px 0 0',
              }}>{metric.label}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.65, duration: 0.5 }}
          style={{ textAlign: 'center' }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: '#4A7EFF', color: '#fff',
              borderRadius: 10, padding: '0.875rem 2rem',
              fontSize: 15, fontWeight: 500,
              textDecoration: 'none',
              transition: 'all 0.25s',
              boxShadow: '0 0 30px rgba(74,126,255,0.25)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = '#7AA3FF'
              ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = '#4A7EFF'
              ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'
            }}
          >
            Iniciar diagnóstico arquitectónico →
          </a>
        </motion.div>

      </div>
    </section>
  )
}

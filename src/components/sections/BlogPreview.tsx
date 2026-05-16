'use client'
import { motion } from 'framer-motion'
import AnimateOnScroll from '@/components/motion/AnimateOnScroll'

export default function BlogPreview() {
  return (
    <section style={{
      padding: 'clamp(60px, 8vw, 100px) clamp(1.25rem, 4vw, 2rem)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        <AnimateOnScroll>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '3rem',
            flexWrap: 'wrap',
            gap: '1rem',
          }}>
            <div>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                color: '#4A7EFF',
                letterSpacing: '0.14em',
                textTransform: 'uppercase' as const,
                display: 'block',
                marginBottom: '0.75rem',
              }}>Blog</span>
              <h2 style={{
                fontFamily: 'var(--font-syne)',
                fontSize: 'clamp(26px, 3vw, 40px)',
                fontWeight: 700,
                color: '#EEF0FF',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                margin: 0,
              }}>
                Insights para empresas<br />que quieren crecer.
              </h2>
            </div>
          </div>
        </AnimateOnScroll>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            background: '#0C0E1C',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 16,
            padding: 'clamp(2rem, 5vw, 3rem)',
            display: 'flex',
            flexDirection: 'column' as const,
            gap: '1.5rem',
            alignItems: 'flex-start',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Línea de gradiente arriba */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 1,
            background: 'linear-gradient(90deg, transparent, rgba(74,126,255,0.3), transparent)',
          }}/>

          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: 11,
            color: '#4A7EFF', letterSpacing: '0.1em',
            textTransform: 'uppercase' as const,
            background: 'rgba(74,126,255,0.08)',
            border: '1px solid rgba(74,126,255,0.15)',
            padding: '4px 12px', borderRadius: 4,
          }}>Próximamente</span>

          <p style={{
            fontFamily: 'var(--font-syne)',
            fontSize: 'clamp(18px, 2.5vw, 22px)',
            fontWeight: 600, color: '#EEF0FF',
            lineHeight: 1.5, margin: 0, maxWidth: 560,
          }}>
            Casos reales, guías técnicas y estrategias
            para construir infraestructura operacional empresarial.
          </p>

          <p style={{
            fontSize: 15, color: '#7A84AA',
            lineHeight: 1.7, margin: 0, maxWidth: 480,
          }}>
            Mientras tanto, si tienes preguntas sobre
            cómo modernizar tu operación, el equipo
            NYRO responde directamente.
          </p>

          <a
            href="https://wa.me/573178051585?text=Hola%20NYRO%2C%20tengo%20preguntas%20sobre%20infraestructura%20operacional."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              color: '#4A7EFF', fontFamily: 'var(--font-mono)',
              fontSize: 13, textDecoration: 'none',
              letterSpacing: '0.06em',
            }}
          >
            Hablar con el equipo →
          </a>
        </motion.div>

      </div>
    </section>
  )
}

'use client';
import { motion } from 'framer-motion';
import { PROCESS } from '@/content/data';
import StaggerContainer from '@/components/motion/StaggerContainer';

const CARD_VARIANTS = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
  },
};

export function Process() {
  return (
    <section
      id="proceso"
      className="section-transition-top section-transition-bottom"
      style={{
        background: '#0C0E1C',
        padding: 'clamp(60px, 8vw, 100px) clamp(1.25rem, 4vw, 1.5rem)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <div className="nyro-process-header" style={{ marginBottom: '4rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: '#4A7EFF',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
            }}
          >
            Cómo trabajamos
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-syne)',
              fontSize: 'clamp(28px, 3.5vw, 42px)',
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: '-0.02em',
              color: '#EEF0FF',
              margin: 0,
              maxWidth: 560,
            }}
          >
            Simple para ti, riguroso por dentro.
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 15,
              color: '#7A84AA',
              lineHeight: 1.65,
              margin: 0,
              maxWidth: 520,
            }}
          >
            No necesitas saber de tecnología. Nosotros nos encargamos de todo —
            tú solo nos cuentas cómo funciona tu empresa hoy y qué quieres lograr.
          </p>
        </div>

        {/* 4-col grid with stagger */}
        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-4"
          style={{
            gap: '1px',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 12,
            overflow: 'hidden',
          }}
        >
          {PROCESS.map((step) => (
            <motion.div
              key={step.step}
              variants={CARD_VARIANTS}
              style={{
                background: '#0C0E1C',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 13,
                  color: '#4A7EFF',
                  fontWeight: 500,
                }}
              >
                {step.step}
              </span>

              <h3
                style={{
                  fontFamily: 'var(--font-syne)',
                  fontSize: 18,
                  fontWeight: 700,
                  color: '#EEF0FF',
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                {step.title}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: 14,
                  color: '#7A84AA',
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {step.desc}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS } from '@/content/data';
import StaggerContainer from '@/components/motion/StaggerContainer';

function ProcessIcon({ step }: { step: string }) {
  const base = {
    width: 48, height: 48,
    background: 'rgba(74,126,255,0.06)',
    border: '1px solid rgba(74,126,255,0.15)',
    borderRadius: 10,
    display: 'flex' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    flexShrink: 0 as const,
  }
  const icons: Record<string, React.ReactElement> = {
    '01': (
      <div style={base}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="8" r="4" stroke="#4A7EFF" strokeWidth="1.5" fill="rgba(74,126,255,0.1)"/>
          <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#4A7EFF" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        </svg>
      </div>
    ),
    '02': (
      <div style={base}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="#4A7EFF" strokeWidth="1.5" fill="rgba(74,126,255,0.08)"/>
          <rect x="13" y="3" width="8" height="8" rx="1.5" stroke="#4A7EFF" strokeWidth="1.5" fill="rgba(74,126,255,0.08)"/>
          <rect x="3" y="13" width="8" height="8" rx="1.5" stroke="#4A7EFF" strokeWidth="1.5" fill="rgba(74,126,255,0.08)"/>
          <rect x="13" y="13" width="8" height="8" rx="1.5" stroke="#4A7EFF" strokeWidth="1.5" fill="rgba(74,126,255,0.08)"/>
        </svg>
      </div>
    ),
    '03': (
      <div style={base}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <polyline points="4,17 9,12 13,15 20,8" stroke="#4A7EFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <polyline points="16,8 20,8 20,12" stroke="#4A7EFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <line x1="4" y1="20" x2="20" y2="20" stroke="#4A7EFF" strokeWidth="1" strokeLinecap="round" opacity="0.3"/>
        </svg>
      </div>
    ),
    '04': (
      <div style={base}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="8" stroke="#4A7EFF" strokeWidth="1.5" fill="rgba(74,126,255,0.06)"/>
          <polyline points="9,12 11,14 15,10" stroke="#4A7EFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      </div>
    ),
  }
  return icons[step] ?? icons['01']
}

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
            El proceso está diseñado para que tu equipo no necesite contexto técnico.
            Tú describes la operación, nosotros diseñamos y construimos la arquitectura.
          </p>
        </div>

        {/* 4-col grid with stagger */}
        <StaggerContainer
          className="nyro-process-grid grid sm:grid-cols-2 lg:grid-cols-4"
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
              <ProcessIcon step={step.step} />

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

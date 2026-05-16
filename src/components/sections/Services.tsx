'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '@/content/data';
import StaggerContainer from '@/components/motion/StaggerContainer';

function ServiceIcon({ type }: { type: string }) {
  const base = {
    width: 64, height: 64,
    background: 'rgba(74,126,255,0.06)',
    border: '1px solid rgba(74,126,255,0.15)',
    borderRadius: 12,
    display: 'flex' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    marginBottom: '0.5rem',
    flexShrink: 0 as const,
  }
  const icons: Record<string, React.ReactElement> = {
    Server: (
      <div style={base}>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <rect x="3" y="5" width="22" height="7" rx="2"
            stroke="#4A7EFF" strokeWidth="1.5" fill="rgba(74,126,255,0.08)"/>
          <rect x="3" y="16" width="22" height="7" rx="2"
            stroke="#4A7EFF" strokeWidth="1.5" fill="rgba(74,126,255,0.08)"/>
          <circle cx="21" cy="8.5" r="1.5" fill="#4A7EFF" opacity="0.8"/>
          <circle cx="21" cy="19.5" r="1.5" fill="#4A7EFF" opacity="0.8"/>
          <line x1="7" y1="8.5" x2="16" y2="8.5"
            stroke="#4A7EFF" strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>
          <line x1="7" y1="19.5" x2="16" y2="19.5"
            stroke="#4A7EFF" strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>
        </svg>
      </div>
    ),
    Database: (
      <div style={base}>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <ellipse cx="14" cy="8" rx="9" ry="3.5"
            stroke="#4A7EFF" strokeWidth="1.5" fill="rgba(74,126,255,0.1)"/>
          <path d="M5 8v6c0 1.93 4.03 3.5 9 3.5s9-1.57 9-3.5V8"
            stroke="#4A7EFF" strokeWidth="1.5" fill="none"/>
          <path d="M5 14v6c0 1.93 4.03 3.5 9 3.5s9-1.57 9-3.5v-6"
            stroke="#4A7EFF" strokeWidth="1.5" fill="none"/>
        </svg>
      </div>
    ),
    Zap: (
      <div style={base}>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <polygon points="16,4 8,16 14,16 12,24 20,12 14,12"
            fill="rgba(74,126,255,0.15)" stroke="#4A7EFF" strokeWidth="1.5"
            strokeLinejoin="round"/>
          <circle cx="22" cy="6" r="3" fill="rgba(74,126,255,0.2)"
            stroke="#4A7EFF" strokeWidth="1" opacity="0.6"/>
          <circle cx="6" cy="22" r="2" fill="rgba(74,126,255,0.2)"
            stroke="#4A7EFF" strokeWidth="1" opacity="0.4"/>
        </svg>
      </div>
    ),
    TrendingUp: (
      <div style={base}>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <polyline points="4,20 10,13 15,17 24,8"
            stroke="#4A7EFF" strokeWidth="2" strokeLinecap="round"
            strokeLinejoin="round" fill="none"/>
          <polyline points="19,8 24,8 24,13"
            stroke="#4A7EFF" strokeWidth="2" strokeLinecap="round"
            strokeLinejoin="round" fill="none"/>
          <path d="M4 20 Q14 14 24 8" fill="rgba(74,126,255,0.05)" stroke="none"/>
          <rect x="4" y="21" width="20" height="1.5" rx="0.75"
            fill="rgba(74,126,255,0.2)"/>
        </svg>
      </div>
    ),
  }
  return icons[type] ?? icons['Server']
}

const CARD_VARIANTS = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
  },
};

export function Services() {
  return (
    <section
      id="servicios"
      style={{ padding: 'clamp(60px, 8vw, 80px) clamp(1.25rem, 4vw, 1.5rem)' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <div
          className="grid md:grid-cols-2 gap-12"
          style={{ marginBottom: '3rem', alignItems: 'end' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                color: '#4A7EFF',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
              }}
            >
              Plataforma
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-syne)',
                fontSize: 'clamp(32px, 4vw, 46px)',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: '#EEF0FF',
                margin: 0,
              }}
            >
              Infraestructura operacional completa.<br />Un ecosistema autónomo.
            </h2>
          </div>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 17,
              color: '#7A84AA',
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            Cada pilar resuelve una capa de fricción operacional. Juntos, eliminan la dependencia
            de procesos manuales y construyen la base para escalar sin límites estructurales.
          </p>
        </div>

        {/* 2×2 grid with stagger */}
        <StaggerContainer
          className="nyro-services-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1px',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 12,
            overflow: 'hidden',
          }}
        >
          {SERVICES.map((service) => {
            return (
              <motion.div
                key={service.num}
                variants={CARD_VARIANTS}
                className="group relative transition-colors duration-200 bg-[#070810] hover:bg-[#0C0E1C]"
                style={{ padding: 'clamp(1.25rem, 4vw, 2.5rem)', overflow: 'hidden' }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                {/* Radial gradient overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(circle at top left, rgba(74,126,255,0.04), transparent 60%)',
                  }}
                />

                <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {/* Step number */}
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 11,
                      color: '#3D4460',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {service.num}
                  </span>

                  {/* Subtitle */}
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 10,
                      color: '#4A7EFF',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {service.subtitle}
                  </span>

                  {/* Icon */}
                  <ServiceIcon type={service.icon} />

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: 'var(--font-syne)',
                      fontSize: 20,
                      fontWeight: 700,
                      color: '#EEF0FF',
                      margin: 0,
                    }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: 14,
                      color: '#7A84AA',
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {service.desc}
                  </p>

                  {/* Link */}
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 12,
                      color: '#4A7EFF',
                      cursor: 'pointer',
                    }}
                  >
                    Ver más ↗
                  </span>

                  {/* Result badge */}
                  <div
                    style={{
                      display: 'inline-flex',
                      background: 'rgba(74,126,255,0.08)',
                      border: '1px solid rgba(74,126,255,0.15)',
                      borderRadius: 20,
                      padding: '4px 12px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: 11,
                      color: '#4A7EFF',
                      marginTop: '0.75rem',
                    }}
                  >
                    {service.result}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

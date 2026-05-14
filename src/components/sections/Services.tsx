'use client';
import { motion } from 'framer-motion';
import { Server, Database, Zap, TrendingUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { SERVICES } from '@/content/data';
import StaggerContainer from '@/components/motion/StaggerContainer';

const ICONS: Record<string, LucideIcon> = {
  Server,
  Database,
  Zap,
  TrendingUp,
};

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
      style={{ padding: '80px 1.5rem' }}
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
              Qué hacemos
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
              Todo lo que necesita tu empresa para operar mejor y crecer.
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
            No vendemos tecnología por vender. Resolvemos problemas reales: el Excel que falla,
            el WhatsApp que se pierde, los clientes que no llegan. Cada sistema tiene un propósito
            claro.
          </p>
        </div>

        {/* 2×2 grid with stagger */}
        <StaggerContainer
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
            const Icon = ICONS[service.icon] ?? Server;
            return (
              <motion.div
                key={service.num}
                variants={CARD_VARIANTS}
                className="group relative transition-colors duration-200 bg-[#070810] hover:bg-[#0C0E1C]"
                style={{ padding: '2.5rem', overflow: 'hidden' }}
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
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      background: 'rgba(74,126,255,0.08)',
                      border: '1px solid rgba(74,126,255,0.18)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon size={20} color="#4A7EFF" strokeWidth={1.5} />
                  </div>

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

'use client'
import Link from 'next/link'
import Image from 'next/image'
import AnimateOnScroll from '@/components/motion/AnimateOnScroll'

export default function NosotrosPreview() {
  return (
    <section style={{
      padding: 'clamp(60px, 8vw, 100px) clamp(1.25rem, 4vw, 2rem)',
      background: '#0C0E1C',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        <AnimateOnScroll>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gap: '4rem',
              alignItems: 'center',
            }}
            className="md:grid-cols-[1fr_auto] grid-cols-1"
          >
            <div>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                color: '#4A7EFF',
                letterSpacing: '0.14em',
                textTransform: 'uppercase' as const,
                display: 'block',
                marginBottom: '1rem',
              }}>El equipo</span>

              <h2 style={{
                fontFamily: 'var(--font-syne)',
                fontSize: 'clamp(26px, 3vw, 40px)',
                fontWeight: 700,
                color: '#EEF0FF',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                marginBottom: '1rem',
              }}>
                Somos el equipo tecnológico<br />
                que tu empresa necesita.
              </h2>

              <p style={{
                fontSize: 16,
                color: '#7A84AA',
                lineHeight: 1.7,
                maxWidth: 480,
                marginBottom: '2rem',
              }}>
                NYRO nació para resolver un problema real: las empresas colombianas
                operan con herramientas del pasado mientras el mercado les exige
                operar como empresas del futuro. Nosotros construimos ese puente.
              </p>

              <Link
                href="/nosotros"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  color: '#4A7EFF',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 13,
                  textDecoration: 'none',
                  letterSpacing: '0.06em',
                  transition: 'gap 0.2s',
                }}
              >
                Conoce nuestra historia →
              </Link>
            </div>

            <div className="hidden md:flex" style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem',
              flexShrink: 0,
            }}>
              <div style={{
                width: 180,
                height: 180,
                borderRadius: 12,
                overflow: 'hidden',
                border: '1px solid rgba(74,126,255,0.25)',
                boxShadow: '0 0 40px rgba(74,126,255,0.1)',
                position: 'relative',
              }}>
                <Image
                  src="/images/foto-fundador.jpeg"
                  alt="Santiago Rayo — Founder & CEO"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center 10%' }}
                  sizes="180px"
                />
              </div>
              <div style={{ textAlign: 'center' }}>
                <p style={{
                  fontFamily: 'var(--font-syne)',
                  fontSize: 16,
                  fontWeight: 700,
                  color: '#EEF0FF',
                }}>Santiago Rayo</p>
                <p style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  color: '#4A7EFF',
                  textTransform: 'uppercase' as const,
                  letterSpacing: '0.1em',
                }}>Founder & CEO</p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

      </div>
    </section>
  )
}

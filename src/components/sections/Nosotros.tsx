'use client'
import { Target, Eye, Zap } from 'lucide-react'
import { WHATSAPP_LINKS } from '@/lib/whatsapp'
import AnimateOnScroll from '@/components/motion/AnimateOnScroll'
import StaggerContainer, { StaggerItem } from '@/components/motion/StaggerContainer'

const MISSION_CARDS = [
  {
    icon: Target,
    title: 'Nuestra misión',
    desc: 'Democratizar la tecnología empresarial. Que cada PYME en Colombia pueda operar con la infraestructura digital que antes solo tenían las grandes empresas.',
  },
  {
    icon: Eye,
    title: 'Nuestra visión',
    desc: 'Ser el partner tecnológico de referencia para empresas en crecimiento en LATAM — el equipo al que llaman cuando quieren escalar de verdad.',
  },
  {
    icon: Zap,
    title: 'Cómo lo hacemos',
    desc: 'Sin burocracia, sin intermediarios. Analizamos, construimos, lanzamos y mantenemos. Nos quedamos con el cliente después de entregar porque ahí es donde empieza el crecimiento real.',
  },
]

export default function NosotrosSection() {
  return (
    <div style={{ background: '#070810', minHeight: '100vh' }}>

      {/* ── Hero ── */}
      <section id="nosotros-hero" style={{ padding: '120px 2rem 80px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <AnimateOnScroll>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                color: '#4A7EFF',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '1.5rem',
              }}
            >
              Nosotros
            </span>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <h1
              style={{
                fontFamily: 'var(--font-syne, Syne, sans-serif)',
                fontSize: 'clamp(28px, 3vw, 44px)',
                fontWeight: 800,
                lineHeight: 1.12,
                letterSpacing: '-0.025em',
                color: '#EEF0FF',
                margin: 0,
                marginBottom: '1.5rem',
                maxWidth: 800,
              }}
            >
              Somos el equipo tecnológico que tu empresa necesita para{' '}
              <em style={{ fontStyle: 'normal', color: '#4A7EFF' }}>crecer.</em>
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: 18,
                color: '#7A84AA',
                lineHeight: 1.7,
                margin: 0,
                maxWidth: 640,
              }}
            >
              NYRO Systems nació para resolver un problema real: las pequeñas y medianas
              empresas en Colombia operan con herramientas del pasado — Excel, WhatsApp,
              procesos manuales — mientras el mercado les exige operar como empresas del
              futuro. Nosotros construimos ese puente.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Misión, Visión, Cómo ── */}
      <section id="nosotros-mision" style={{ padding: '0 2rem 60px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <StaggerContainer
            className="grid md:grid-cols-3"
            style={{ gap: '1.5rem' }}
          >
            {MISSION_CARDS.map((card) => {
              const Icon = card.icon
              return (
                <StaggerItem key={card.title}>
                  <div
                    style={{
                      background: '#0C0E1C',
                      border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: 12,
                      padding: '2rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem',
                      height: '100%',
                    }}
                  >
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
                    <h3
                      style={{
                        fontFamily: 'var(--font-syne)',
                        fontSize: 18,
                        fontWeight: 700,
                        color: '#EEF0FF',
                        margin: 0,
                      }}
                    >
                      {card.title}
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
                      {card.desc}
                    </p>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Fundador ── */}
      <section
        id="nosotros-fundador"
        style={{
          background: '#0C0E1C',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          padding: '60px 2rem 80px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Gradient transition — fades from page bg into section bg */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0,
            height: 80,
            background: 'linear-gradient(180deg, #070810 0%, transparent 100%)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gap: '4rem',
              alignItems: 'center',
            }}
          >
            {/* Left — text */}
            <AnimateOnScroll direction="left">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    color: '#4A7EFF',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                  }}
                >
                  Fundador
                </span>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: 16,
                    color: '#7A84AA',
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Especialista en infraestructura digital y automatización empresarial.
                  He transformado la operación de empresas colombianas implementando
                  sistemas que eliminan el caos y generan crecimiento real.
                </p>
                <a
                  href={WHATSAPP_LINKS.general}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    background: '#4A7EFF',
                    color: '#fff',
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: 14,
                    fontWeight: 600,
                    padding: '10px 22px',
                    borderRadius: 8,
                    textDecoration: 'none',
                    alignSelf: 'flex-start',
                  }}
                >
                  Escribirme por WhatsApp →
                </a>
              </div>
            </AnimateOnScroll>

            {/* Right — avatar */}
            <AnimateOnScroll direction="right">
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div
                  style={{
                    width: 160,
                    height: 160,
                    borderRadius: 16,
                    background: 'linear-gradient(135deg, #0C0E1C 0%, #11142A 100%)',
                    border: '1px solid rgba(74,126,255,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width={64} height={64} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="32" rx="7" fill="rgba(74,126,255,0.12)" stroke="rgba(74,126,255,0.35)" strokeWidth="0.75" />
                    <line x1="9" y1="22" x2="9" y2="10" stroke="#4A7EFF" strokeWidth="2.5" strokeLinecap="round"/>
                    <line x1="9" y1="10" x2="23" y2="22" stroke="#4A7EFF" strokeWidth="2.5" strokeLinecap="round"/>
                    <line x1="23" y1="10" x2="23" y2="22" stroke="#4A7EFF" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginTop: '1rem', alignItems: 'center' }}>
                  <span style={{
                    fontFamily: 'var(--font-syne)',
                    fontSize: 20,
                    fontWeight: 700,
                    color: '#EEF0FF',
                  }}>
                    Santiago Rayo
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    color: '#4A7EFF',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}>
                    Founder & CEO
                  </span>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section
        style={{
          padding: '120px 2rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 700,
            height: 400,
            background: 'radial-gradient(ellipse at center, rgba(74,126,255,0.07) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          <AnimateOnScroll>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                color: '#4A7EFF',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
              }}
            >
              ¿Listo para crecer?
            </span>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <h2
              style={{
                fontFamily: 'var(--font-syne)',
                fontSize: 'clamp(30px, 3.5vw, 46px)',
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                color: '#EEF0FF',
                margin: 0,
                maxWidth: 580,
              }}
            >
              Tu empresa puede operar mejor.<br />
              Te mostramos{' '}
              <em style={{ fontStyle: 'normal', color: '#4A7EFF' }}>cómo.</em>
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: 16,
                color: '#7A84AA',
                lineHeight: 1.65,
                margin: '0 auto',
                maxWidth: 560,
              }}
            >
              Agenda una llamada de 30 minutos. Sin compromiso. Te decimos exactamente
              qué necesita tu empresa para dejar el Excel, automatizar tus procesos y
              conseguir más clientes.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.3}>
            <a
              href={WHATSAPP_LINKS.llamada}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#4A7EFF',
                color: '#fff',
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '1rem',
                fontWeight: 600,
                padding: '14px 36px',
                borderRadius: 10,
                textDecoration: 'none',
                display: 'inline-block',
                boxShadow: '0 0 40px rgba(74,126,255,0.25)',
              }}
            >
              Quiero una llamada gratis →
            </a>
            <p
              style={{
                marginTop: '1rem',
                fontSize: 13,
                color: '#3D4460',
                textAlign: 'center',
                fontFamily: 'var(--font-dm-sans)',
              }}
            >
              Sin compromiso · Sin tecnicismos · Con resultados claros
            </p>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  )
}

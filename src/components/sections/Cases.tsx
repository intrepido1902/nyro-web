'use client'
import { motion } from 'framer-motion'
import StaggerContainer, { StaggerItem } from '@/components/motion/StaggerContainer'

const CASES = [
  {
    client: "DISA",
    type: "Transformación digital completa",
    before: "Excel, WhatsApp y voz a voz",
    title: "De operación manual a sistema digital que ahorra tiempo y dinero",
    desc: "DISA manejaba todo en Excel, conseguía clientes por voz a voz y gestionaba pedidos por WhatsApp. Construimos su web profesional, organizamos toda su información en una base de datos real y automatizamos su proceso de cotización — eliminando errores manuales y liberando tiempo valioso de su equipo.",
    results: [
      "Cotizaciones automáticas sin errores manuales",
      "Base de datos que reemplazó el 100% del Excel",
      "Presencia digital profesional desde cero",
      "Proceso de ventas más rápido y confiable",
    ],
    stack: ["Next.js", "Supabase", "Make", "Vercel"],
  },
  {
    client: "Campaña Senado 2026",
    type: "Plataforma política digital",
    before: "Sin presencia digital estructurada",
    title: "Plataforma digital de alto impacto para candidatura al Senado",
    desc: "Desarrollamos la presencia digital completa de la campaña: web profesional, sistema de gestión de seguidores y automatización de comunicaciones para maximizar el alcance electoral.",
    results: [
      "Web profesional lanzada en tiempo récord",
      "Gestión centralizada de contactos y seguidores",
      "Comunicaciones automatizadas multicanal",
      "Presencia digital que genera credibilidad",
    ],
    stack: ["Next.js", "Supabase", "Make", "OpenAI"],
  },
]

export function Cases() {
  return (
    <>
      <style>{`
        .nyro-case-card:hover {
          border-color: rgba(74,126,255,0.25) !important;
        }
        .nyro-case-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #4A7EFF, transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .nyro-case-card:hover::before {
          opacity: 1;
        }
      `}</style>

      <section id="casos" style={{ padding: 'clamp(60px, 8vw, 100px) clamp(1.25rem, 4vw, 2rem)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>

          {/* Header */}
          <div style={{ marginBottom: '3rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                color: '#4A7EFF',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
              }}
            >
              Casos de éxito
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-syne)',
                fontSize: 'clamp(30px, 4vw, 46px)',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: '#EEF0FF',
                margin: 0,
              }}
            >
              Resultados reales, sistemas que funcionan.
            </h2>
          </div>

          {/* Cards grid */}
          <StaggerContainer
            className="nyro-cases-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1.4fr 1fr',
              gap: '1.25rem',
            }}
          >
            {CASES.map((c) => (
              <StaggerItem key={c.client}>
                <motion.div
                  className="nyro-case-card"
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  style={{
                    background: '#0C0E1C',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 12,
                    padding: 'clamp(1.25rem, 4vw, 2.5rem)',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'border-color 0.25s',
                    height: '100%',
                  }}
                >
                  {/* 1. Client + type row */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '1rem',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-syne)',
                        fontSize: 13,
                        fontWeight: 700,
                        color: '#EEF0FF',
                      }}
                    >
                      {c.client}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 10,
                        color: '#3D4460',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        background: '#070810',
                        border: '1px solid rgba(255,255,255,0.06)',
                        padding: '4px 10px',
                        borderRadius: 4,
                      }}
                    >
                      {c.type}
                    </span>
                  </div>

                  {/* 2. Before badge */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                      marginBottom: '1.25rem',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 10,
                        color: '#3D4460',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                      }}
                    >
                      Antes:
                    </span>
                    <span
                      style={{
                        fontSize: 12,
                        color: '#7A84AA',
                        fontStyle: 'italic',
                      }}
                    >
                      {c.before}
                    </span>
                  </div>

                  {/* 3. Title */}
                  <h3
                    style={{
                      fontFamily: 'var(--font-syne)',
                      fontSize: 'clamp(17px, 2.5vw, 20px)',
                      fontWeight: 700,
                      color: '#EEF0FF',
                      lineHeight: 1.2,
                      marginBottom: '0.75rem',
                    }}
                  >
                    {c.title}
                  </h3>

                  {/* 4. Description */}
                  <p
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: 14,
                      color: '#7A84AA',
                      lineHeight: 1.65,
                      marginBottom: '1.5rem',
                    }}
                  >
                    {c.desc}
                  </p>

                  {/* 5. Results */}
                  <div>
                    <p
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 11,
                        color: '#4A7EFF',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        marginBottom: '0.5rem',
                      }}
                    >
                      Resultados:
                    </p>
                    {c.results.map((r) => (
                      <div key={r} style={{ display: 'flex', gap: 8, marginBottom: 4 }}>
                        <span style={{ color: '#4A7EFF', fontSize: 13, flexShrink: 0 }}>→</span>
                        <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 13, color: '#7A84AA' }}>
                          {r}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* 6. Stack tags */}
                  <div
                    style={{
                      display: 'flex',
                      gap: '0.5rem',
                      flexWrap: 'wrap',
                      marginTop: '1.5rem',
                    }}
                  >
                    {c.stack.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: 11,
                          color: '#3D4460',
                          background: '#070810',
                          border: '1px solid rgba(255,255,255,0.06)',
                          padding: '4px 10px',
                          borderRadius: 4,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  )
}

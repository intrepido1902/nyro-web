'use client'
import Link from 'next/link'
import AnimateOnScroll from '@/components/motion/AnimateOnScroll'

const POSTS = [
  {
    tag: 'Automatización',
    title: 'Cómo eliminamos el Excel en una empresa de 50 empleados en 2 semanas',
    desc: 'El caso real de DISA: de hojas de cálculo caóticas a un sistema digital que opera solo.',
    href: '/blog',
  },
  {
    tag: 'Infraestructura',
    title: '¿Por qué tu empresa necesita una base de datos antes que una app?',
    desc: 'El error más común de las PYMEs al digitalizarse y cómo evitarlo.',
    href: '/blog',
  },
  {
    tag: 'IA Empresarial',
    title: 'Agentes de IA para empresas: qué pueden hacer hoy en tu operación',
    desc: 'Casos concretos de automatización con inteligencia artificial sin necesitar un equipo técnico.',
    href: '/blog',
  },
]

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
            <Link href="/blog" style={{
              color: '#4A7EFF',
              fontFamily: 'var(--font-mono)',
              fontSize: 13,
              textDecoration: 'none',
              letterSpacing: '0.06em',
              whiteSpace: 'nowrap' as const,
            }}>
              Ver todos →
            </Link>
          </div>
        </AnimateOnScroll>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1rem',
        }}>
          {POSTS.map((post, i) => (
            <AnimateOnScroll key={post.title} delay={i * 0.1}>
              <Link href={post.href} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                <div
                  style={{
                    background: '#0C0E1C',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 12,
                    padding: 'clamp(1.25rem, 3vw, 2rem)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                    transition: 'border-color 0.2s, transform 0.2s',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(74,126,255,0.25)'
                    ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.06)'
                    ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'
                  }}
                >
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10,
                    color: '#4A7EFF',
                    textTransform: 'uppercase' as const,
                    letterSpacing: '0.1em',
                    background: 'rgba(74,126,255,0.08)',
                    border: '1px solid rgba(74,126,255,0.15)',
                    padding: '3px 10px',
                    borderRadius: 4,
                    alignSelf: 'flex-start',
                  }}>{post.tag}</span>

                  <h3 style={{
                    fontFamily: 'var(--font-syne)',
                    fontSize: 'clamp(16px, 2vw, 18px)',
                    fontWeight: 700,
                    color: '#EEF0FF',
                    lineHeight: 1.3,
                    margin: 0,
                  }}>{post.title}</h3>

                  <p style={{
                    fontSize: 14,
                    color: '#7A84AA',
                    lineHeight: 1.6,
                    margin: 0,
                    flex: 1,
                  }}>{post.desc}</p>

                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 12,
                    color: '#4A7EFF',
                    marginTop: '0.5rem',
                  }}>Leer más →</span>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>

      </div>
    </section>
  )
}

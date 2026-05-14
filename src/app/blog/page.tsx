import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — NYRO Systems',
  description: 'Insights sobre automatización, infraestructura digital y crecimiento empresarial.',
}

export default function BlogPage() {
  return (
    <main style={{
      minHeight: '100vh',
      paddingTop: '120px',
      paddingBottom: '80px',
      paddingLeft: '2rem',
      paddingRight: '2rem'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: '11px',
          letterSpacing: '0.14em', color: '#4A7EFF',
          textTransform: 'uppercase', display: 'block',
          marginBottom: '1rem'
        }}>Blog</span>

        <h1 style={{
          fontFamily: 'var(--font-syne)', fontSize: 'clamp(36px, 4vw, 52px)',
          fontWeight: 800, color: '#EEF0FF', lineHeight: 1.1,
          letterSpacing: '-0.025em', marginBottom: '1rem'
        }}>
          Insights sobre tecnología<br />y crecimiento empresarial.
        </h1>

        <p style={{
          fontSize: '17px', color: '#7A84AA', lineHeight: 1.7,
          maxWidth: '520px', marginBottom: '4rem'
        }}>
          Próximamente compartiremos guías, casos de estudio y
          estrategias para digitalizar y hacer crecer tu empresa.
        </p>

        <div style={{
          background: '#0C0E1C',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '12px', padding: '3rem',
          textAlign: 'center', maxWidth: '560px'
        }}>
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: '11px',
            color: '#4A7EFF', letterSpacing: '0.1em',
            textTransform: 'uppercase', marginBottom: '1rem'
          }}>Próximamente</p>
          <p style={{ fontSize: '16px', color: '#7A84AA', marginBottom: '2rem' }}>
            Mientras tanto, si tienes preguntas sobre cómo
            digitalizar tu empresa, hablemos directamente.
          </p>
          <a
            href="https://wa.me/573178051585?text=Hola%20NYRO%20Systems%2C%20quiero%20informaci%C3%B3n%20sobre%20sus%20servicios."
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#4A7EFF', color: '#fff', borderRadius: '8px',
              padding: '12px 24px', fontSize: '14px', fontWeight: 500,
              textDecoration: 'none', transition: 'all 0.2s'
            }}
          >
            Hablemos por WhatsApp →
          </a>
        </div>

      </div>
    </main>
  )
}

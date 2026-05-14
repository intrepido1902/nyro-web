'use client'
import { ContainerScroll } from '@/components/ui/container-scroll-animation'

export default function ProductShowcase() {
  return (
    <div style={{
      background: 'linear-gradient(180deg, #070810 0%, #0C0E1C 50%, #070810 100%)',
      marginTop: '-2rem'
    }}>
      <ContainerScroll
        titleComponent={
          <div style={{ textAlign: 'center', padding: '0 1rem' }}>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '11px',
              letterSpacing: '0.14em', color: '#4A7EFF',
              textTransform: 'uppercase', display: 'block',
              marginBottom: '1rem'
            }}>Lo que construimos</span>
            <h2 style={{
              fontFamily: 'var(--font-syne)',
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 800, color: '#EEF0FF',
              lineHeight: 1.1, letterSpacing: '-0.025em',
              marginBottom: '1rem'
            }}>
              Sistemas que tu equipo<br />
              <span style={{ color: '#4A7EFF' }}>usa todos los días.</span>
            </h2>
            <p style={{
              fontSize: '16px', color: '#7A84AA',
              maxWidth: '480px', margin: '0 auto', lineHeight: 1.7
            }}>
              Dashboards, plataformas y herramientas internas
              construidas específicamente para tu operación.
            </p>
          </div>
        }
      >
        <div style={{
          height: '100%',
          background: '#070810',
          display: 'flex',
          flexDirection: 'column',
          padding: '1.5rem'
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            marginBottom: '1.5rem',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            paddingBottom: '1rem'
          }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5F57' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FEBC2E' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28C840' }} />
            <span style={{
              marginLeft: '1rem', fontFamily: 'var(--font-mono)',
              fontSize: '11px', color: '#3D4460'
            }}>dashboard.nyrosystems.com</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
            {[
              { label: 'Clientes activos', value: '248', change: '+12%' },
              { label: 'Cotizaciones hoy', value: '34', change: '+8%' },
              { label: 'Tiempo ahorrado', value: '18h', change: '/semana' },
            ].map((stat) => (
              <div key={stat.label} style={{
                background: '#0C0E1C',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '10px', padding: '1rem'
              }}>
                <p style={{
                  fontSize: '11px', color: '#3D4460',
                  fontFamily: 'var(--font-mono)',
                  marginBottom: '0.5rem', textTransform: 'uppercase',
                  letterSpacing: '0.08em'
                }}>{stat.label}</p>
                <p style={{
                  fontFamily: 'var(--font-syne)',
                  fontSize: '24px', fontWeight: 800, color: '#EEF0FF'
                }}>{stat.value}</p>
                <p style={{ fontSize: '11px', color: '#4A7EFF', marginTop: '2px' }}>
                  {stat.change}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            flex: 1,
            background: '#0C0E1C',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '10px', padding: '1rem',
            display: 'flex', flexDirection: 'column', gap: '0.75rem'
          }}>
            <p style={{
              fontFamily: 'var(--font-mono)', fontSize: '11px',
              color: '#3D4460', textTransform: 'uppercase', letterSpacing: '0.08em'
            }}>Últimas cotizaciones</p>
            {[
              { client: 'Empresa ABC', value: '$4.200.000', status: 'Enviada', color: '#4A7EFF' },
              { client: 'Tech SAS', value: '$8.500.000', status: 'Aprobada', color: '#22C55E' },
              { client: 'Grupo XYZ', value: '$2.800.000', status: 'En revisión', color: '#F59E0B' },
              { client: 'Comercial 123', value: '$6.100.000', status: 'Aprobada', color: '#22C55E' },
            ].map((row) => (
              <div key={row.client} style={{
                display: 'flex', alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.5rem 0',
                borderBottom: '1px solid rgba(255,255,255,0.04)'
              }}>
                <span style={{ fontSize: '13px', color: '#7A84AA' }}>{row.client}</span>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '13px', color: '#EEF0FF'
                }}>{row.value}</span>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '10px',
                  color: row.color, background: `${row.color}18`,
                  padding: '3px 8px', borderRadius: '4px',
                  border: `1px solid ${row.color}30`
                }}>{row.status}</span>
              </div>
            ))}
          </div>
        </div>
      </ContainerScroll>
    </div>
  )
}

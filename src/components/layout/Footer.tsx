'use client';

import { NyroLogo } from '@/components/ui/NyroLogo';

const FOOTER_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Casos', href: '#casos' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
];

export function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        background: '#070810',
        padding: '2.5rem 1.5rem',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem',
        }}
      >
        <a href="/" aria-label="NYRO Systems — inicio" style={{ textDecoration: 'none' }}>
          <NyroLogo size={28} />
        </a>

        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap',
          }}
        >
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: '#3D4460',
                fontSize: '0.875rem',
                textDecoration: 'none',
                transition: 'color 0.15s ease',
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = '#7A84AA')
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = '#3D4460')
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        <span
          style={{
            color: '#3D4460',
            fontSize: '0.8125rem',
          }}
        >
          © 2025 NYRO Systems · Colombia
        </span>
      </div>
    </footer>
  );
}

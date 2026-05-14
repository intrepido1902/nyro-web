'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { NyroLogo } from '@/components/ui/NyroLogo';
import { WHATSAPP_LINKS } from '@/lib/whatsapp';

const NAV_LINKS = [
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Casos', href: '/#casos' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Blog', href: '/blog' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'background 0.25s ease, border-color 0.25s ease, backdrop-filter 0.25s ease',
        background: scrolled ? 'rgba(7,8,16,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(255,255,255,0.06)'
          : '1px solid transparent',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link href="/" aria-label="NYRO Systems — inicio">
          <NyroLogo size={32} />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const linkPath = link.href.includes('#') ? null : link.href;
            const isActive = linkPath !== null && pathname === linkPath;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: isActive ? '#EEF0FF' : '#7A84AA',
                  fontSize: '0.875rem',
                  fontWeight: isActive ? 600 : 500,
                  padding: '0.375rem 0.75rem',
                  borderRadius: '6px',
                  transition: 'color 0.15s ease, background 0.15s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = '#EEF0FF';
                  (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.04)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = isActive ? '#EEF0FF' : '#7A84AA';
                  (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <a
          href={WHATSAPP_LINKS.general}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: '#4A7EFF',
            color: '#fff',
            fontSize: '13px',
            fontWeight: 600,
            padding: '9px 18px',
            borderRadius: '8px',
            textDecoration: 'none',
            transition: 'background 0.15s ease',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.background = '#3a6aee')
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.background = '#4A7EFF')
          }
        >
          Hablemos →
        </a>
      </div>
    </header>
  );
}

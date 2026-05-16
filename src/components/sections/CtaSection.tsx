'use client';
import { WHATSAPP_LINKS } from '@/lib/whatsapp';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

export function CtaSection() {
  return (
    <section
      id="contacto"
      style={{
        padding: '120px 2rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: '#070810',
      }}
    >
      {/* Background radial glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 700,
          height: 400,
          background:
            'radial-gradient(ellipse at center, rgba(74,126,255,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem',
        }}
      >
        {/* Label */}
        <AnimateOnScroll delay={0}>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: '#4A7EFF',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
            }}
          >
            Siguiente paso
          </span>
        </AnimateOnScroll>

        {/* Heading */}
        <AnimateOnScroll delay={0.1}>
          <h2
            style={{
              fontFamily: 'var(--font-syne)',
              fontSize: 'clamp(26px, 3vw, 42px)',
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              color: '#EEF0FF',
              margin: '0 auto',
              maxWidth: 580,
            }}
          >
            Tu competencia ya opera con infraestructura digital.<br />
            <em style={{ fontStyle: 'normal', color: '#4A7EFF' }}>¿Tu empresa también?</em>
          </h2>
        </AnimateOnScroll>

        {/* Subtitle */}
        <AnimateOnScroll delay={0.2}>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 16,
              color: '#7A84AA',
              lineHeight: 1.65,
              margin: 0,
              maxWidth: 560,
            }}
          >
            Auditoría arquitectónica de 30 minutos. Mapeamos tu operación actual,
            identificamos los cuellos de botella críticos y definimos exactamente
            qué infraestructura construiríamos para eliminarlos.
          </p>
        </AnimateOnScroll>

        {/* CTA button */}
        <AnimateOnScroll delay={0.3}>
          <a
            href={WHATSAPP_LINKS.llamada}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-200 hover:-translate-y-0.5"
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
              maxWidth: 320,
              textAlign: 'center',
            }}
          >
            Agendar diagnóstico arquitectónico →
          </a>

          {/* Note */}
          <p
            style={{
              marginTop: '1rem',
              fontSize: 13,
              color: '#3D4460',
              textAlign: 'center',
              fontFamily: 'var(--font-dm-sans)',
            }}
          >
            Sin compromiso · Diagnóstico gratuito · Respuesta en &lt; 2h
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

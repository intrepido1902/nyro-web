'use client';

import React from 'react';
import { motion } from 'framer-motion';
import GlitchText from '@/components/motion/GlitchText';
import MagneticButton from '@/components/motion/MagneticButton';
import { HERO_STATS } from '@/content/data';
import { WHATSAPP_LINKS } from '@/lib/whatsapp';

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Hero() {
  return (
    <>
      <style>{`
        @keyframes nyro-float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }
        @keyframes nyro-glow-pulse {
          0%, 100% { opacity: 0.4; }
          50%       { opacity: 0.85; }
        }
        @keyframes nyro-dot-pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.3; }
        }
        .nyro-float      { animation: nyro-float 6s ease-in-out infinite; }
        .nyro-glow-pulse { animation: nyro-glow-pulse 3s ease-in-out infinite; }
        .nyro-dot-pulse  { animation: nyro-dot-pulse 2s ease-in-out infinite; }

        .nyro-btn-primary {
          display: inline-block;
          background: #4A7EFF;
          color: #fff;
          border: 1px solid #4A7EFF;
          border-radius: 8px;
          padding: 11px 24px;
          font-family: var(--font-dm-sans);
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.25s ease;
          text-decoration: none;
        }
        .nyro-btn-primary:hover {
          background: #7AA3FF;
          border-color: #7AA3FF;
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(74,126,255,0.3);
        }
        .nyro-btn-ghost {
          display: inline-block;
          background: transparent;
          color: #7A84AA;
          border: 1px solid rgba(74,126,255,0.2);
          border-radius: 8px;
          padding: 11px 24px;
          font-family: var(--font-dm-sans);
          font-size: 14px;
          cursor: pointer;
          transition: all 0.25s ease;
          text-decoration: none;
        }
        .nyro-btn-ghost:hover {
          color: #EEF0FF;
          border-color: #4A7EFF;
          background: rgba(74,126,255,0.05);
        }
      `}</style>

      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          overflowX: 'hidden',
          background: '#070810',
          padding: '80px 1.25rem 60px',
        }}
      >
        {/* Grid background */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            backgroundImage: [
              'linear-gradient(rgba(74,126,255,0.035) 1px, transparent 1px)',
              'linear-gradient(90deg, rgba(74,126,255,0.035) 1px, transparent 1px)',
            ].join(', '),
            backgroundSize: '60px 60px',
            WebkitMaskImage:
              'radial-gradient(ellipse 80% 80% at 50% 40%, black 30%, transparent 100%)',
            maskImage:
              'radial-gradient(ellipse 80% 80% at 50% 40%, black 30%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* Central glow */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(74,126,255,0.07) 0%, transparent 70%)',
            zIndex: 0,
            pointerEvents: 'none',
          }}
        />

        {/* Two-column grid */}
        <div
          className="grid md:grid-cols-2"
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            width: '100%',
            minWidth: 0,
            gap: '4rem',
            alignItems: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* ── Left column ── */}
          <div style={{ overflow: 'hidden', width: '100%' }}>
            {/* 1. Label */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
              style={{ marginBottom: '1.5rem' }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  color: '#4A7EFF',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                }}
              >
                NYRO SYSTEMS
              </span>
            </motion.div>

            {/* 2. H1 */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
            >
              <GlitchText as="h1" style={{
                fontFamily: 'var(--font-syne)',
                fontSize: 'clamp(36px, 5vw, 64px)',
                fontWeight: 800, lineHeight: 1.08,
                letterSpacing: '-0.03em', color: '#EEF0FF',
                marginBottom: '1.5rem',
              }}>
                Tu operación,{' '}
                <em style={{ fontStyle: 'normal', color: '#4A7EFF',
                  textShadow: '0 0 40px rgba(74,126,255,0.4)' }}>
                  sin caos.
                </em>
              </GlitchText>
            </motion.div>

            {/* 3. Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: 16,
                fontWeight: 300,
                color: '#7A84AA',
                lineHeight: 1.7,
                maxWidth: '100%',
                margin: 0,
                marginBottom: '2rem',
                wordBreak: 'break-word',
              }}
            >
              Reemplazamos Excel y WhatsApp con sistemas digitales
              que trabajan solos, día y noche.
            </motion.p>

            {/* 4. Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: EASE }}
              style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', width: '100%' }}
            >
              <MagneticButton
                href="https://wa.me/573178051585?text=Hola%20NYRO%2C%20quiero%20digitalizar%20mi%20empresa."
              >
                <button style={{
                  background: '#4A7EFF', color: '#fff',
                  border: '1px solid #4A7EFF', borderRadius: 8,
                  padding: '12px 28px', fontSize: 15, fontWeight: 500,
                  cursor: 'pointer', transition: 'all 0.25s',
                  display: 'flex', alignItems: 'center', gap: 8,
                  boxShadow: '0 0 30px rgba(74,126,255,0.2)',
                }}>
                  Digitaliza tu empresa ahora →
                </button>
              </MagneticButton>
              <a
                href={WHATSAPP_LINKS.servicios}
                target="_blank"
                rel="noopener noreferrer"
                className="nyro-btn-ghost"
                style={{ width: '100%', maxWidth: '320px', textAlign: 'center' as const, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                Ver cómo lo hacemos
              </a>
            </motion.div>

            {/* 5. Stats row */}
            <motion.div
              className="nyro-stats-row"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45, ease: EASE }}
              style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}
            >
              {HERO_STATS.map((stat, i) => (
                <React.Fragment key={stat.number + i}>
                  {i > 0 && (
                    <div
                      style={{
                        width: 1,
                        height: 32,
                        background: 'rgba(255,255,255,0.08)',
                        alignSelf: 'center',
                        flexShrink: 0,
                      }}
                    />
                  )}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-syne)',
                        fontSize: 'clamp(20px, 5vw, 26px)',
                        fontWeight: 800,
                        color: '#EEF0FF',
                        lineHeight: 1,
                      }}
                    >
                      {stat.number}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: 12,
                        color: '#7A84AA',
                      }}
                    >
                      {stat.label}
                    </span>
                  </div>
                </React.Fragment>
              ))}
            </motion.div>

            {/* 6. Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: EASE }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                marginTop: '1.5rem',
              }}
            >
              <span
                className="nyro-dot-pulse"
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: '#22C55E',
                  display: 'inline-block',
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  color: '#3D4460',
                  whiteSpace: 'normal' as const,
                  wordBreak: 'break-word' as const,
                }}
              >
                Operamos en Colombia 🇨🇴 · Ya transformamos empresas como la tuya.
              </span>
            </motion.div>
          </div>

          {/* ── Right column — Isometric SVG ── */}
          <div className="hidden md:flex relative justify-center items-center">
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: 500,
              animation: 'nyro-float 6s ease-in-out infinite',
            }}>
              <svg viewBox="0 0 460 400" width="100%" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <filter id="hero-glow-sm">
                    <feGaussianBlur stdDeviation="2.5" result="b"/>
                    <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
                  </filter>
                  <filter id="hero-glow-md">
                    <feGaussianBlur stdDeviation="6" result="b"/>
                    <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
                  </filter>
                  <linearGradient id="face-top" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#1a1f3a"/>
                    <stop offset="100%" stopColor="#0d1024"/>
                  </linearGradient>
                </defs>

                {/* Cubo trasero izquierdo */}
                <g opacity={0.6}>
                  <polygon points="110,160 165,130 220,160 165,190"
                    fill="#131628" stroke="#4A7EFF" strokeWidth={0.8} strokeOpacity={0.4}/>
                  <polygon points="110,160 110,220 165,250 165,190"
                    fill="#090B18" stroke="#4A7EFF" strokeWidth={0.8} strokeOpacity={0.2}/>
                  <polygon points="165,190 220,160 220,220 165,250"
                    fill="#0B0D1E" stroke="#4A7EFF" strokeWidth={0.8} strokeOpacity={0.2}/>
                </g>

                {/* Cubo trasero derecho */}
                <g opacity={0.6}>
                  <polygon points="240,160 295,130 350,160 295,190"
                    fill="#131628" stroke="#4A7EFF" strokeWidth={0.8} strokeOpacity={0.4}/>
                  <polygon points="240,160 240,220 295,250 295,190"
                    fill="#090B18" stroke="#4A7EFF" strokeWidth={0.8} strokeOpacity={0.2}/>
                  <polygon points="295,190 350,160 350,220 295,250"
                    fill="#0B0D1E" stroke="#4A7EFF" strokeWidth={0.8} strokeOpacity={0.2}/>
                </g>

                {/* Cubo central principal */}
                <g opacity={1}>
                  <polygon points="175,110 230,75 285,110 230,145"
                    fill="url(#face-top)" stroke="#4A7EFF" strokeWidth={1.2} strokeOpacity={0.7}/>
                  <polygon points="175,110 175,230 230,265 230,145"
                    fill="#090B18" stroke="#4A7EFF" strokeWidth={0.8} strokeOpacity={0.3}/>
                  <polygon points="230,145 285,110 285,230 230,265"
                    fill="#0D0F20" stroke="#4A7EFF" strokeWidth={0.8} strokeOpacity={0.3}/>
                  <line x1="175" y1="230" x2="230" y2="265"
                    stroke="#4A7EFF" strokeWidth={1} opacity={0.5}
                    filter="url(#hero-glow-sm)"/>
                  <line x1="230" y1="265" x2="285" y2="230"
                    stroke="#4A7EFF" strokeWidth={1} opacity={0.5}
                    filter="url(#hero-glow-sm)"/>
                </g>

                {/* Cubo frontal izquierdo */}
                <g opacity={0.7}>
                  <polygon points="145,240 190,215 235,240 190,265"
                    fill="#131628" stroke="#4A7EFF" strokeWidth={0.8} strokeOpacity={0.5}/>
                  <polygon points="145,240 145,285 190,310 190,265"
                    fill="#090B18" stroke="#4A7EFF" strokeWidth={0.8} strokeOpacity={0.2}/>
                  <polygon points="190,265 235,240 235,285 190,310"
                    fill="#0B0D1E" stroke="#4A7EFF" strokeWidth={0.8} strokeOpacity={0.2}/>
                </g>

                {/* Cubo frontal derecho */}
                <g opacity={0.7}>
                  <polygon points="225,240 270,215 315,240 270,265"
                    fill="#131628" stroke="#4A7EFF" strokeWidth={0.8} strokeOpacity={0.5}/>
                  <polygon points="225,240 225,285 270,310 270,265"
                    fill="#090B18" stroke="#4A7EFF" strokeWidth={0.8} strokeOpacity={0.2}/>
                  <polygon points="270,265 315,240 315,285 270,310"
                    fill="#0B0D1E" stroke="#4A7EFF" strokeWidth={0.8} strokeOpacity={0.2}/>
                </g>

                {/* Logo N */}
                <g filter="url(#hero-glow-md)">
                  <line x1="215" y1="195" x2="215" y2="155"
                    stroke="#4A7EFF" strokeWidth={3} strokeLinecap="round" opacity={0.95}/>
                  <line x1="215" y1="155" x2="245" y2="195"
                    stroke="#4A7EFF" strokeWidth={3} strokeLinecap="round" opacity={0.95}/>
                  <line x1="245" y1="155" x2="245" y2="195"
                    stroke="#4A7EFF" strokeWidth={3} strokeLinecap="round" opacity={0.95}/>
                </g>

                {/* Plataforma base */}
                <ellipse cx="230" cy="340" rx="160" ry="16"
                  fill="none" stroke="#4A7EFF" strokeWidth={1.5} opacity={0.35}
                  filter="url(#hero-glow-md)"/>
                <ellipse cx="230" cy="340" rx="90" ry="8"
                  fill="rgba(74,126,255,0.06)"/>

                {/* Líneas circuito */}
                <line x1="165" y1="250" x2="165" y2="270"
                  stroke="#4A7EFF" strokeWidth={0.5} opacity={0.3}/>
                <line x1="295" y1="250" x2="295" y2="270"
                  stroke="#4A7EFF" strokeWidth={0.5} opacity={0.3}/>
                <line x1="165" y1="270" x2="295" y2="270"
                  stroke="#4A7EFF" strokeWidth={0.5} opacity={0.2}/>

                {/* Partículas */}
                {([
                  [60,90,0.5],[390,80,0.4],[50,200,0.3],
                  [410,200,0.45],[370,130,0.35],[80,300,0.25],
                  [340,300,0.3],[420,320,0.2]
                ] as [number,number,number][]).map(([x,y,o],i) => (
                  <circle key={i} cx={x} cy={y} r={i%2===0?2:1.5}
                    fill="#4A7EFF" opacity={o}
                    filter="url(#hero-glow-sm)"/>
                ))}

                {/* Líneas scan */}
                <line x1="100" y1="150" x2="360" y2="150"
                  stroke="#4A7EFF" strokeWidth={0.3} opacity={0.15}/>
                <line x1="100" y1="200" x2="360" y2="200"
                  stroke="#4A7EFF" strokeWidth={0.3} opacity={0.1}/>
                <line x1="100" y1="250" x2="360" y2="250"
                  stroke="#4A7EFF" strokeWidth={0.3} opacity={0.08}/>
              </svg>

              <div style={{
                position: 'absolute',
                bottom: '5%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: 280,
                height: 50,
                borderRadius: '50%',
                background: 'radial-gradient(ellipse, rgba(74,126,255,0.18) 0%, transparent 70%)',
                animation: 'nyro-glow-pulse 3s ease-in-out infinite',
                pointerEvents: 'none',
              }}/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

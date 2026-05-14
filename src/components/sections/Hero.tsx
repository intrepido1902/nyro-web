'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HERO_STATS } from '@/content/data';
import { WHATSAPP_LINKS } from '@/lib/whatsapp';

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

function IsoCube({
  cx, cy, w, h, opacity = 1,
}: {
  cx: number; cy: number; w: number; h: number; opacity?: number;
}) {
  const hw = w / 2;
  const qh = w / 4;
  const top   = `${cx},${cy} ${cx+hw},${cy+qh} ${cx},${cy+hw} ${cx-hw},${cy+qh}`;
  const left  = `${cx-hw},${cy+qh} ${cx},${cy+hw} ${cx},${cy+hw+h} ${cx-hw},${cy+qh+h}`;
  const right = `${cx},${cy+hw} ${cx+hw},${cy+qh} ${cx+hw},${cy+qh+h} ${cx},${cy+hw+h}`;
  return (
    <g opacity={opacity}>
      <polygon points={top}   fill="#131628" stroke="#4A7EFF" strokeOpacity={0.55} strokeWidth={1}   />
      <polygon points={left}  fill="#0B0D1E" stroke="#4A7EFF" strokeOpacity={0.28} strokeWidth={0.7} />
      <polygon points={right} fill="#090B18" stroke="#4A7EFF" strokeOpacity={0.28} strokeWidth={0.7} />
    </g>
  );
}

const PARTICLES = [
  { x: 75,  y: 80,  o: 0.50 },
  { x: 390, y: 100, o: 0.40 },
  { x: 60,  y: 200, o: 0.30 },
  { x: 400, y: 220, o: 0.45 },
  { x: 350, y: 60,  o: 0.35 },
  { x: 100, y: 300, o: 0.25 },
];

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
          background: '#070810',
          padding: '80px 2rem 60px',
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
            gap: '4rem',
            alignItems: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* ── Left column ── */}
          <div>
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
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
              style={{
                fontFamily: 'var(--font-syne)',
                fontSize: 'clamp(34px, 3.8vw, 52px)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                color: '#EEF0FF',
                margin: 0,
                marginBottom: '1.5rem',
              }}
            >
              Transformamos empresas que operan en el caos en máquinas digitales que{' '}
              <em
                style={{
                  fontStyle: 'normal',
                  color: '#4A7EFF',
                  textShadow: '0 0 40px rgba(74,126,255,0.4)',
                }}
              >
                crecen solas.
              </em>
            </motion.h1>

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
                maxWidth: 440,
                margin: 0,
                marginBottom: '2rem',
              }}
            >
              Construimos tu web, organizamos tu información y automatizamos tus
              procesos para que tu empresa consiga más clientes y opere sin caos.
            </motion.p>

            {/* 4. Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: EASE }}
              style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}
            >
              <a href={WHATSAPP_LINKS.llamada} target="_blank" rel="noopener noreferrer" className="nyro-btn-primary">
                Quiero digitalizar mi empresa →
              </a>
              <a href={WHATSAPP_LINKS.servicios} target="_blank" rel="noopener noreferrer" className="nyro-btn-ghost">
                Ver cómo lo hacemos
              </a>
            </motion.div>

            {/* 5. Stats row */}
            <motion.div
              className="nyro-stats-row"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45, ease: EASE }}
              style={{ display: 'flex', gap: '2rem', marginTop: '1.5rem', flexWrap: 'wrap' }}
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
                        fontSize: 26,
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
                }}
              >
                Operamos en Colombia 🇨🇴 · Ya transformamos empresas como la tuya.
              </span>
            </motion.div>
          </div>

          {/* ── Right column — Isometric SVG ── */}
          <div className="hidden md:flex relative justify-center items-center">
            <div className="nyro-float">
              <svg
                viewBox="0 0 460 380"
                width="100%"
                style={{ maxWidth: 500 }}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <filter id="glow-sm" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <filter id="glow-md" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="5" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <filter id="glow-lg" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="10" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Cubos back → front */}
                <IsoCube cx={330} cy={130} w={90}  h={55}  opacity={0.65} />
                <IsoCube cx={130} cy={145} w={100} h={65}  opacity={0.70} />
                <IsoCube cx={230} cy={80}  w={150} h={135} opacity={1.00} />
                <IsoCube cx={140} cy={250} w={80}  h={40}  opacity={0.55} />
                <IsoCube cx={325} cy={235} w={75}  h={38}  opacity={0.50} />

                {/* N glyph on main cube */}
                <text
                  x="230"
                  y="178"
                  textAnchor="middle"
                  fontFamily="Syne,sans-serif"
                  fontSize="40"
                  fontWeight="800"
                  fill="#4A7EFF"
                  opacity="0.9"
                  filter="url(#glow-md)"
                >
                  N
                </text>

                {/* Glow ellipses at base */}
                <ellipse
                  cx={230} cy={310} rx={170} ry={18}
                  fill="none"
                  stroke="#4A7EFF" strokeWidth={1.5} opacity={0.4}
                  filter="url(#glow-md)"
                />
                <ellipse
                  cx={230} cy={310} rx={90} ry={9}
                  fill="rgba(74,126,255,0.05)"
                />

                {/* Particles */}
                {PARTICLES.map((p, i) => (
                  <circle
                    key={i}
                    cx={p.x} cy={p.y} r={2}
                    fill="#4A7EFF" fillOpacity={p.o}
                    filter="url(#glow-sm)"
                  />
                ))}
              </svg>
            </div>

            {/* Radial glow below SVG */}
            <div
              className="nyro-glow-pulse"
              aria-hidden="true"
              style={{
                position: 'absolute',
                bottom: '8%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: 280,
                height: 70,
                borderRadius: '50%',
                background:
                  'radial-gradient(ellipse, rgba(74,126,255,0.2) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}

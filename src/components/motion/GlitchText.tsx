'use client'
import { useEffect, useState } from 'react'

interface GlitchTextProps {
  children: React.ReactNode
  style?: React.CSSProperties
  className?: string
  as?: 'h1' | 'h2' | 'span' | 'p'
}

export default function GlitchText({
  children, style, className, as: Tag = 'h1'
}: GlitchTextProps) {
  const [glitching, setGlitching] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setGlitching(false), 900)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <style>{`
        @keyframes nyro-glitch-1 {
          0%   { clip-path: inset(0 0 95% 0); transform: translate(-1px, 0); }
          20%  { clip-path: inset(30% 0 50% 0); transform: translate(1px, 0); }
          40%  { clip-path: inset(70% 0 10% 0); transform: translate(-1px, 0); }
          60%  { clip-path: inset(10% 0 80% 0); transform: translate(0, 1px); }
          80%  { clip-path: inset(50% 0 30% 0); transform: translate(1px, -1px); }
          100% { clip-path: inset(0 0 95% 0); transform: translate(0, 0); }
        }
        @keyframes nyro-glitch-2 {
          0%   { clip-path: inset(80% 0 5% 0); transform: translate(1px, 0); }
          20%  { clip-path: inset(10% 0 70% 0); transform: translate(-1px, 0); }
          40%  { clip-path: inset(50% 0 20% 0); transform: translate(0, -1px); }
          60%  { clip-path: inset(5% 0 60% 0); transform: translate(-1px, 1px); }
          80%  { clip-path: inset(40% 0 40% 0); transform: translate(1px, 0); }
          100% { clip-path: inset(80% 0 5% 0); transform: translate(0, 0); }
        }
        .nyro-glitch-wrap { position: relative; display: inline-block; }
        .nyro-glitch-before, .nyro-glitch-after {
          content: attr(data-text);
          position: absolute; top: 0; left: 0;
          width: 100%; height: 100%;
          pointer-events: none;
        }
        .nyro-glitching .nyro-glitch-before {
          color: rgba(74,126,255,0.7);
          animation: nyro-glitch-1 0.15s infinite;
        }
        .nyro-glitching .nyro-glitch-after {
          color: rgba(122,163,255,0.5);
          animation: nyro-glitch-2 0.15s infinite;
          animation-delay: 0.05s;
        }
      `}</style>
      <Tag
        className={`nyro-glitch-wrap ${glitching ? 'nyro-glitching' : ''} ${className ?? ''}`}
        style={style}
      >
        <span className="nyro-glitch-before" aria-hidden="true">{children}</span>
        {children}
        <span className="nyro-glitch-after" aria-hidden="true">{children}</span>
      </Tag>
    </>
  )
}

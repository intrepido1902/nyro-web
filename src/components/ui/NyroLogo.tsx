'use client'

interface NyroLogoProps {
  size?: number
  showText?: boolean
}

function NyroLogo({ size = 32, showText = true }: NyroLogoProps) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      textDecoration: 'none',
      userSelect: 'none',
    }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        <rect
          width="32" height="32" rx="7"
          fill="rgba(74,126,255,0.12)"
          stroke="rgba(74,126,255,0.35)"
          strokeWidth="0.75"
        />
        <line x1="9" y1="22" x2="9" y2="10" stroke="#4A7EFF" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="9" y1="10" x2="23" y2="22" stroke="#4A7EFF" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="23" y1="10" x2="23" y2="22" stroke="#4A7EFF" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
          <span style={{
            fontFamily: 'var(--font-syne, Syne, sans-serif)',
            fontSize: '17px',
            fontWeight: 700,
            color: '#EEF0FF',
            letterSpacing: '0.04em',
            lineHeight: 1,
          }}>NYRO</span>
          <span style={{
            fontFamily: 'var(--font-mono, JetBrains Mono, monospace)',
            fontSize: '9px',
            fontWeight: 400,
            color: '#3D4460',
            letterSpacing: '0.12em',
            lineHeight: 1,
          }}>SYSTEMS</span>
        </div>
      )}
    </div>
  )
}

export { NyroLogo }
export default NyroLogo

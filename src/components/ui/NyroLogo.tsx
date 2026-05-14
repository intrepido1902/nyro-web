'use client'
import Image from 'next/image'

interface NyroLogoProps {
  size?: number
  showText?: boolean
}

function NyroLogo({ size = 32, showText = true }: NyroLogoProps) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      userSelect: 'none',
    }}>
      <Image
        src="/nyro-logo.png"
        alt="NYRO Systems"
        width={140}
        height={46}
        priority
        style={{
          height: size * 1.4,
          width: 'auto',
          objectFit: 'contain',
        }}
      />
    </div>
  )
}

export { NyroLogo }
export default NyroLogo

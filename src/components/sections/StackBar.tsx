'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

const STACK_ITEMS = [
  { label: 'Next.js',  logo: '/logos/nextjs.svg',  bg: '#000000' },
  { label: 'Supabase', logo: '/logos/supabase.svg', bg: '#1C1C1C' },
  { label: 'OpenAI',   logo: '/logos/openai.svg',   bg: '#000000' },
  { label: 'Make',     logo: '/logos/make.svg',     bg: '#1C1C1C' },
  { label: 'Python',   logo: '/logos/python.svg',   bg: '#1C1C1C' },
  { label: 'Vercel',   logo: '/logos/vercel.svg',   bg: '#000000' },
]

export function StackBar() {
  return (
    <div
      style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '1.5rem 2rem',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          gap: '3rem',
          flexWrap: 'wrap',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            color: '#3D4460',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
          }}
        >
          Tecnologías con las que construimos
        </span>

        <div
          style={{
            width: 1,
            height: 16,
            background: 'rgba(255,255,255,0.06)',
            flexShrink: 0,
          }}
        />

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          {STACK_ITEMS.map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                background: '#0C0E1C',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 8,
                padding: '8px 16px',
                cursor: 'default',
                transition: 'border-color 0.2s, filter 0.2s',
              }}
              className="hover:border-[rgba(74,126,255,0.2)] hover:brightness-125"
            >
              <div
                style={{
                  width: 28,
                  height: 28,
                  background: item.bg,
                  borderRadius: 6,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 4,
                  flexShrink: 0,
                }}
              >
                <Image
                  src={item.logo}
                  alt={item.label}
                  width={20}
                  height={20}
                  style={{ objectFit: 'contain' }}
                  unoptimized
                />
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: 14,
                  color: '#7A84AA',
                }}
              >
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

import type { Metadata } from 'next'
import NosotrosSection from '@/components/sections/Nosotros'

export const metadata: Metadata = {
  title: 'Nosotros — NYRO Systems',
  description: 'Conoce el equipo detrás de NYRO Systems.',
}

export default function NosotrosPage() {
  return <NosotrosSection />
}

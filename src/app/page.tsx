import { Hero } from '@/components/sections/Hero'
import { StackBar } from '@/components/sections/StackBar'
import ChaosToOrder from '@/components/sections/ChaosToOrder'
import ProductShowcase from '@/components/sections/ProductShowcase'
import { Services } from '@/components/sections/Services'
import { Process } from '@/components/sections/Process'
import DisaCase from '@/components/sections/DisaCase'
import RetainerSection from '@/components/sections/RetainerSection'
import NosotrosPreview from '@/components/sections/NosotrosPreview'
import BlogPreview from '@/components/sections/BlogPreview'
import { CtaSection } from '@/components/sections/CtaSection'

export default function Home() {
  return (
    <>
      <div id="inicio"><Hero /></div>
      <StackBar />
      <ChaosToOrder />
      <ProductShowcase />
      <div id="servicios"><Services /></div>
      <Process />
      <div id="casos"><DisaCase /></div>
      <RetainerSection />
      <NosotrosPreview />
      <BlogPreview />
      <div id="contacto"><CtaSection /></div>
    </>
  )
}

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
      <div className="nyro-section-sep" />
      <ChaosToOrder />
      <div className="nyro-section-sep" />
      <ProductShowcase />
      <div className="nyro-section-sep" />
      <div id="servicios"><Services /></div>
      <div className="nyro-section-sep" />
      <Process />
      <div className="nyro-section-sep" />
      <div id="casos"><DisaCase /></div>
      <div className="nyro-section-sep" />
      <RetainerSection />
      <div className="nyro-section-sep" />
      <NosotrosPreview />
      <div className="nyro-section-sep" />
      <BlogPreview />
      <div className="nyro-section-sep" />
      <div id="contacto"><CtaSection /></div>
    </>
  )
}

import { Hero } from '@/components/sections/Hero';
import { StackBar } from '@/components/sections/StackBar';
import { Services } from '@/components/sections/Services';
import { Process } from '@/components/sections/Process';
import { Cases } from '@/components/sections/Cases';
import { CtaSection } from '@/components/sections/CtaSection';
import ProductShowcase from '@/components/sections/ProductShowcase';

export default function Home() {
  return (
    <>
      <div id="inicio"><Hero /></div>
      <StackBar />
      <ProductShowcase />
      <div id="servicios"><Services /></div>
      <Process />
      <div id="casos"><Cases /></div>
      <div id="contacto"><CtaSection /></div>
    </>
  );
}

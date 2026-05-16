import type { Metadata } from 'next';
import { Syne, DM_Sans, JetBrains_Mono } from 'next/font/google';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

const syne = Syne({
  variable: '--font-syne',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: 'NYRO Systems — Infraestructura digital y automatización empresarial',
  description: 'Construimos sistemas digitales a la medida: bases de datos, automatización de procesos e integración de IA para empresas en Colombia y LATAM.',
  keywords: 'infraestructura digital, automatización empresarial, sistemas a la medida, bases de datos, integración IA, Colombia, LATAM',
  openGraph: {
    title: 'NYRO Systems — Infraestructura digital para empresas',
    description: 'De Excel y WhatsApp a sistemas digitales que trabajan solos.',
    url: 'https://nyro-web-theta.vercel.app',
    siteName: 'NYRO Systems',
    locale: 'es_CO',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

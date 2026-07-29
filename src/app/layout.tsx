import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'VALERY LATYPOV — Visual Architect & Artist | Private Exhibition',
  description:
    'Valery Latypov — Visual Architect & Artist. 25 Years of Capturing Raw Texture. High-status cinematic portraits, FaceTime 2020 isolation archive, Ink Energy physical artwork collection.',
  keywords: [
    'Valery Latypov',
    'Валерий Латыпов',
    'Visual Architect',
    'Executive Portrait Photography',
    'Ink Energy Art',
    'FaceTime Isolation Archive',
    'Manilia LS',
  ],
  authors: [{ name: 'Valery Latypov' }],
  openGraph: {
    title: 'VALERY LATYPOV — Private Art Museum & Digital Exhibition',
    description: 'Visual Architect & Artist. 25 Years of Capturing Raw Texture.',
    url: 'https://valerylatypov.com',
    siteName: 'Valery Latypov Art',
    locale: 'ru_RU',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-museum-bg text-museum-cream font-sans antialiased selection:bg-museum-gold selection:text-museum-bg min-h-screen">
        {children}
      </body>
    </html>
  );
}

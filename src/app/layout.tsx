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
  metadataBase: new URL('https://valerylatypov.com'),
  title: 'Валерий Латыпов — Портретный фотограф & Visual Architect | valerylatypov.com',
  description:
    'Валерий Латыпов — визуальный архитектор и фотохудожник. 25 лет опыта. Кинематографичные премиум-портреты руководителей, FaceTime архив 2020, авторская графика тушью (Ink Energy).',
  keywords: [
    'Валерий Латыпов',
    'Valery Latypov',
    'портретный фотограф Москва',
    'фотограф портретист Москва',
    'мужской портрет фотограф',
    'фотосессия для руководителей',
    'премиум фотосессия Москва',
    'кинематографичный портрет',
    'арт фотограф',
    'Executive Portrait Photography',
    'Visual Architect',
    'Ink Energy Art',
    'FaceTime Isolation Archive',
  ],
  authors: [{ name: 'Valery Latypov', url: 'https://valerylatypov.com' }],
  creator: 'Valery Latypov',
  publisher: 'Valery Latypov Art Museum',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Валерий Латыпов — Visual Architect & Fine Art Photographer',
    description: 'Кинематографичные портреты руководителей, закрытые фотоархивы и оригинальная графика тушью.',
    url: 'https://valerylatypov.com',
    siteName: 'Valery Latypov — Private Exhibition',
    locale: 'ru_RU',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Валерий Латыпов',
    alternateName: 'Valery Latypov',
    jobTitle: 'Visual Architect & Fine Art Photographer',
    url: 'https://valerylatypov.com',
    sameAs: [
      'https://instagram.com/valery.latypov',
      'https://t.me/valerylatypov',
    ],
    knowsAbout: [
      'Портретная фотосъемка',
      'Кинематографичный портрет',
      'Executive Portrait Photography',
      'Fine Art Photography',
      'Искусство туши',
      'Ink Energy Art',
    ],
    description:
      'Персональная цифровая галерея и портфолио художника и визуального архитектора Валерия Латыпова. Премиальные портреты, архивы и авторская графика.',
  };

  return (
    <html lang="ru" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-museum-bg text-museum-cream font-sans antialiased selection:bg-museum-gold selection:text-museum-bg min-h-screen">
        {children}
      </body>
    </html>
  );
}


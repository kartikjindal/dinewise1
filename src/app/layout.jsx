import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import SmoothScrollProvider from '@/components/SmoothScrollProvider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata = {
  title: 'DineVibe Studio — Restaurant Marketing Agency',
  description:
    'DineVibe Studio helps restaurants grow faster with data-driven ads, social media, influencer campaigns, CRM, and platform optimisation. Trusted by 15+ restaurant partners across India.',
  keywords: [
    'restaurant marketing agency',
    'restaurant digital marketing',
    'zomato optimisation',
    'swiggy marketing',
    'restaurant ads management',
    'food marketing india',
  ],
  icons: {
    icon: '/logo.jpg',
    apple: '/logo.jpg',
  },
  authors: [{ name: 'DineVibe Studio' }],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://dinevibestudio.in',
    title: 'DineVibe Studio — Restaurant Marketing Agency',
    description:
      'Data-driven marketing for restaurants that want to grow. Ads, social, influencer & platform optimisation — all under one roof.',
    siteName: 'DineVibe Studio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DineVibe Studio Restaurant Marketing Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DineVibe Studio — Restaurant Marketing Agency',
    description:
      'Data-driven marketing for restaurants that want to grow. 15+ restaurant partners, consistent orders generated.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://dinevibestudio.in',
  name: 'DineVibe Studio',
  description:
    'Restaurant marketing agency specialising in ads management, social media, influencer marketing, CRM, and food delivery platform optimisation.',
  url: 'https://dinevibestudio.in',
  telephone: '+91 9258494901',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://www.instagram.com/dinevibe.studio',
    'https://www.linkedin.com/company/dinewise-studio',
  ],
  knowsAbout: [
    'Restaurant Marketing',
    'Digital Advertising',
    'Zomato Optimisation',
    'Swiggy Marketing',
    'Influencer Marketing',
    'WhatsApp CRM',
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} noise`}>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  )
}

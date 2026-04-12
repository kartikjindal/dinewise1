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
  title: 'DineWise — Restaurant Marketing Agency',
  description:
    'DineWise helps restaurants grow faster with data-driven ads, social media, influencer campaigns, CRM, and platform optimisation. Trusted by 100+ restaurants across India.',
  keywords: [
    'restaurant marketing agency',
    'restaurant digital marketing',
    'zomato optimisation',
    'swiggy marketing',
    'restaurant ads management',
    'food marketing india',
  ],
  authors: [{ name: 'DineWise' }],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://dinewise.in',
    title: 'DineWise — Restaurant Marketing Agency',
    description:
      'Data-driven marketing for restaurants that want to grow. Ads, social, influencer & platform optimisation — all under one roof.',
    siteName: 'DineWise',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DineWise Restaurant Marketing Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DineWise — Restaurant Marketing Agency',
    description:
      'Data-driven marketing for restaurants that want to grow. 100+ restaurants, 50k+ orders generated.',
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
  '@id': 'https://dinewise.in',
  name: 'DineWise',
  description:
    'Restaurant marketing agency specialising in ads management, social media, influencer marketing, CRM, and food delivery platform optimisation.',
  url: 'https://dinewise.in',
  telephone: '+91-XXXXXXXXXX',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://instagram.com/dinewise',
    'https://linkedin.com/company/dinewise',
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

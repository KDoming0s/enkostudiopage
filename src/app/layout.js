import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ENKO Studio - UI/UX Design & Web Development Agency | Transform Ideas into Digital Experiences',
  description: 'ENKO Studio is a creative digital agency specializing in UI/UX design, web development, and brand identity. We transform ideas into memorable digital experiences that engage users and drive business growth.',
  keywords: 'UI/UX design, web development, brand identity, digital agency, user experience, web design, mobile app design, creative studio, digital transformation',
  authors: [{ name: 'ENKO Studio' }],
  creator: 'ENKO Studio',
  publisher: 'ENKO Studio',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://enkostudios.com',
    siteName: 'ENKO Studio',
    title: 'ENKO Studio - Transform Ideas into Digital Experiences',
    description: 'Creative digital studio specializing in UI/UX design, web development, and brand identity. We help businesses create memorable digital experiences.',
    images: [
      {
        url: 'https://enkostudios.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ENKO Studio - Digital Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ENKO Studio - Transform Ideas into Digital Experiences',
    description: 'Creative digital studio specializing in UI/UX design, web development, and brand identity.',
    images: ['https://enkostudios.com/twitter-image.jpg'],
    creator: '@enkostudio',
  },
  icons: {
    icon: '/logo_final.ico',
    shortcut: '/logo_final-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

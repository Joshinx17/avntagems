import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CommerceProvider } from '@/components/store/CommerceProvider';
import { CartDrawer } from '@/components/store/CartDrawer';
export const metadata: Metadata = { metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.avntagems.com'), title: { default: 'AVNTA GEMS | Gemstones & Jewellery', template: '%s | AVNTA GEMS' }, description: 'A considered destination for gemstones and jewellery.', alternates: { canonical: '/' }, openGraph: { type: 'website', siteName: 'AVNTA GEMS', title: 'AVNTA GEMS | Gemstones & Jewellery', description: 'A considered destination for gemstones and jewellery.' }, twitter: { card: 'summary_large_image' } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><CommerceProvider><Header /><main>{children}</main><Footer /><CartDrawer /></CommerceProvider></body></html>; }

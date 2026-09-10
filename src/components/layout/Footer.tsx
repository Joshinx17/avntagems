import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container-custom mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 border-b border-white/10 pb-12 mb-8">
        <div className="lg:col-span-2">
          <Link href="/" className="font-serif text-2xl tracking-widest font-bold text-white inline-block mb-6">
            AVNTA<span className="text-primary font-light">GEMS</span>
          </Link>
          <p className="text-white/70 text-sm leading-relaxed max-w-sm mb-6">
            Authentic gemstones, thoughtfully selected and beautifully presented. Discover naturally beautiful gemstones and jewellery curated for your journey.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-4 text-primary">Shop</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li><Link href="/collections/gemstones" className="hover:text-white transition-colors">Gemstones</Link></li>
            <li><Link href="/collections/jewellery" className="hover:text-white transition-colors">Jewellery</Link></li>
            <li><Link href="/collections/purpose" className="hover:text-white transition-colors">By Purpose</Link></li>
            <li><Link href="/collections/zodiac" className="hover:text-white transition-colors">By Zodiac</Link></li>
            <li><Link href="/collections/new" className="hover:text-white transition-colors">New Arrivals</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-4 text-primary">Help</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            <li><Link href="/shipping" className="hover:text-white transition-colors">Shipping Policy</Link></li>
            <li><Link href="/returns" className="hover:text-white transition-colors">Returns & Refunds</Link></li>
            <li><Link href="/faq" className="hover:text-white transition-colors">FAQs</Link></li>
            <li><Link href="/track" className="hover:text-white transition-colors">Track Order</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-4 text-primary">About</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li><Link href="/about" className="hover:text-white transition-colors">Our Story</Link></li>
            <li><Link href="/authenticity" className="hover:text-white transition-colors">Authenticity</Link></li>
            <li><Link href="/certification" className="hover:text-white transition-colors">Certification</Link></li>
            <li><Link href="/journal" className="hover:text-white transition-colors">Journal</Link></li>
          </ul>
        </div>
      </div>

      <div className="container-custom mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-xs text-white/50 space-y-4 md:space-y-0">
        <p>&copy; {new Date().getFullYear()} AVNTA GEMS. All rights reserved.</p>
        <div className="flex space-x-6">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

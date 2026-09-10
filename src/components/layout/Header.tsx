import Link from 'next/link';
import { Search, User, Heart, ShoppingBag, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Header() {
  return (
    <header className="w-full border-b border-border bg-background sticky top-0 z-50">
      {/* Announcement Bar */}
      <div className="bg-primary text-white text-xs font-medium py-2 px-4 text-center">
        Free Shipping Across India | Authenticity Guaranteed | Secure Payments
      </div>

      {/* Main Header */}
      <div className="container-custom mx-auto px-4 h-20 flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <button className="lg:hidden p-2 -ml-2 text-foreground" aria-label="Menu">
          <Menu className="w-6 h-6" />
        </button>

        {/* Logo */}
        <div className="flex-1 lg:flex-none text-center lg:text-left">
          <Link href="/" className="font-serif text-2xl tracking-widest font-bold text-foreground inline-block">
            AVNTA<span className="text-primary font-light">GEMS</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium text-foreground/80">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <Link href="/collections/gemstones" className="hover:text-primary transition-colors">Gemstones</Link>
          <Link href="/collections/jewellery" className="hover:text-primary transition-colors">Jewellery</Link>
          <Link href="/collections/purpose" className="hover:text-primary transition-colors">By Purpose</Link>
          <Link href="/collections/zodiac" className="hover:text-primary transition-colors">By Zodiac</Link>
          <Link href="/about" className="hover:text-primary transition-colors">Our Story</Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4 lg:space-x-6 text-foreground">
          <button aria-label="Search" className="hover:text-primary transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <Link href="/account" aria-label="Account" className="hidden lg:block hover:text-primary transition-colors">
            <User className="w-5 h-5" />
          </Link>
          <Link href="/wishlist" aria-label="Wishlist" className="hidden lg:block hover:text-primary transition-colors">
            <Heart className="w-5 h-5" />
          </Link>
          <button aria-label="Cart" className="hover:text-primary transition-colors relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1.5 -right-1.5 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
          </button>
        </div>
      </div>
    </header>
  );
}

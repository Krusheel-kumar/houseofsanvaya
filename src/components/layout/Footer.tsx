import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-theme-green text-[#F8EEE7] pt-16 pb-8 px-4 sm:px-6 lg:px-8 mt-12 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/20 pb-12 mb-8">
        
        {/* Brand */}
        <div className="space-y-4">
                              <Link href="/" className="inline-block py-1">
            <img 
              src="/assets/luxury-logo-white.png" 
              alt="House of Sanvaya" 
              className="h-10 sm:h-12 w-auto max-w-[200px] object-contain" 
            />
          </Link>
          <p className="text-[10px] uppercase tracking-widest opacity-80 pb-2">WEAR YOUR STORY</p>
          <p className="text-sm opacity-80 leading-relaxed max-w-xs">
            A luxury Indian boutique offering premium ethnic wear and modern silhouettes for every occasion. Curated with love, made for your story.
          </p>
        </div>

        {/* Shop */}
        <div>
          <h3 className="font-serif text-lg mb-4">Shop</h3>
          <ul className="space-y-3 text-sm opacity-80">
            <li><Link href="/sarees" className="hover:opacity-100 transition-opacity">New Arrivals</Link></li>
            <li><Link href="/sarees" className="hover:opacity-100 transition-opacity">Sarees</Link></li>
            <li><Link href="#" className="hover:opacity-100 transition-opacity">Dresses</Link></li>
            <li><Link href="#" className="hover:opacity-100 transition-opacity">Kurtis</Link></li>
            <li><Link href="#" className="hover:opacity-100 transition-opacity">Accessories</Link></li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className="font-serif text-lg mb-4">Customer Care</h3>
          <ul className="space-y-3 text-sm opacity-80">
            <li><Link href="#" className="hover:opacity-100 transition-opacity">Contact Us</Link></li>
            <li><Link href="#" className="hover:opacity-100 transition-opacity">Shipping Policy</Link></li>
            <li><Link href="#" className="hover:opacity-100 transition-opacity">Returns & Exchanges</Link></li>
            <li><Link href="#" className="hover:opacity-100 transition-opacity">Size Guide</Link></li>
            <li><Link href="#" className="hover:opacity-100 transition-opacity">Track Order</Link></li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="font-serif text-lg mb-4">About Poetic</h3>
          <ul className="space-y-3 text-sm opacity-80 mb-6">
            <li><Link href="#" className="hover:opacity-100 transition-opacity">Our Story</Link></li>
            <li><Link href="#" className="hover:opacity-100 transition-opacity">Sustainability</Link></li>
            <li><Link href="#" className="hover:opacity-100 transition-opacity">Journal</Link></li>
            <li><Link href="#" className="hover:opacity-100 transition-opacity">Store Locator</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-60">
        <p>© 2026 Poetic Boutique. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
          <Link href="#" className="hover:opacity-100 transition-opacity">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}


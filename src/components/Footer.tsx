import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="flex flex-col items-start mb-6">
              <span className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-gold tracking-wide">
                Heritage Cafe
              </span>
              <span className="font-[family-name:var(--font-lato)] text-xs text-gold-light/80 tracking-[0.3em] uppercase">
                & Resto
              </span>
            </Link>
            <p className="font-[family-name:var(--font-lato)] text-white/50 text-sm leading-relaxed max-w-md">
              Experience the finest Indonesian cuisine in an elegant setting beside the golf course. 
              Where tradition meets modern luxury.
            </p>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              <Link href="#about" className="font-[family-name:var(--font-lato)] text-white/50 text-sm hover:text-gold transition-colors">
                About Us
              </Link>
              <Link href="#menu" className="font-[family-name:var(--font-lato)] text-white/50 text-sm hover:text-gold transition-colors">
                Our Menu
              </Link>
              <Link href="#events" className="font-[family-name:var(--font-lato)] text-white/50 text-sm hover:text-gold transition-colors">
                Events
              </Link>
              <Link href="#gallery" className="font-[family-name:var(--font-lato)] text-white/50 text-sm hover:text-gold transition-colors">
                Gallery
              </Link>
              <Link href="#reservation" className="font-[family-name:var(--font-lato)] text-white/50 text-sm hover:text-gold transition-colors">
                Reservations
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-white mb-4">
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              <p className="font-[family-name:var(--font-lato)] text-white/50 text-sm">
                +62 21 7788 9900
              </p>
              <p className="font-[family-name:var(--font-lato)] text-white/50 text-sm">
                reservations@sawangan.id
              </p>
              <p className="font-[family-name:var(--font-lato)] text-white/50 text-sm">
                Jl. Sawangan Golf Estate No. 88<br />
                Sawangan, Depok 16519
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-[family-name:var(--font-lato)] text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Heritage Cafe & Resto. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="font-[family-name:var(--font-lato)] text-white/40 text-sm hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="font-[family-name:var(--font-lato)] text-white/40 text-sm hover:text-gold transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

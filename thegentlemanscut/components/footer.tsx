export function Footer() {
  return (
    <footer className="py-16 px-6 md:px-12 bg-foreground text-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-light tracking-widest mb-4">THE GENTLEMAN'S CUT</h3>
            <p className="text-xs text-background/60 leading-relaxed tracking-wide">
              Premium grooming experience since 2015. Where tradition meets innovation.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-xs tracking-widest uppercase">Services</h4>
            <ul className="space-y-2 text-xs text-background/60">
              <li>
                <a href="#barbering" className="hover:text-background transition-colors">
                  Barbering
                </a>
              </li>
              <li>
                <a href="#grooming" className="hover:text-background transition-colors">
                  Grooming & Wellness
                </a>
              </li>
              <li>
                <a href="#manicure" className="hover:text-background transition-colors">
                  Manicure & Pedicure
                </a>
              </li>
              <li>
                <a href="#pricelist" className="hover:text-background transition-colors">
                  Pricelist
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-xs tracking-widest uppercase">Quick Links</h4>
            <ul className="space-y-2 text-xs text-background/60">
              <li>
                <a href="#services" className="hover:text-background transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-background transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-background transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#appointment" className="hover:text-background transition-colors">
                  Book Appointment
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-xs tracking-widest uppercase">Connect</h4>
            <ul className="space-y-2 text-xs text-background/60">
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/10 text-center text-xs text-background/40 tracking-wide">
          <p>© 2025 The Gentleman's Cut. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

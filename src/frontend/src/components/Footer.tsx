import { Heart, Linkedin, MessageCircle } from "lucide-react";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Book", href: "#book" },
  { label: "Mentorship", href: "#mentorship" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined"
      ? window.location.hostname
      : "procurementwala.com";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="font-display text-2xl font-bold mb-3">
              Procurement <span className="text-primary">Wala</span>
            </div>
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              Empowering procurement professionals with 37 years of
              battle-tested expertise.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-primary-foreground/80 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    data-ocid="footer.link"
                    className="text-sm text-primary-foreground/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-primary-foreground/80 mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/ravinderkapoor"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary/30 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/919818469795"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary/30 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/50">
            &copy; {year} Procurement Wala. All rights reserved. | Ravinder
            Kapoor
          </p>
          <a
            href={caffeineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors flex items-center gap-1"
          >
            Built with <Heart className="w-3 h-3 text-primary" /> using
            caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}

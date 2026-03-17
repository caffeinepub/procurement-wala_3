import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Why Choose", href: "#why-choose" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="flex flex-col justify-center">
          <span className="font-display text-lg font-bold text-foreground leading-tight tracking-wide">
            PROCUREMENT <span className="text-accent">WALA</span>
          </span>
          <span className="text-xs text-muted-foreground font-body">
            by Ravinder Kapoor
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-5">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                data-ocid="nav.link"
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <Button
          asChild
          className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90"
          size="sm"
        >
          <a href="#contact" data-ocid="nav.primary_button">
            Get in Touch
          </a>
        </Button>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden p-2 rounded-md text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              data-ocid="nav.link"
              className="block text-sm font-medium text-foreground/70 hover:text-primary transition-colors py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            size="sm"
            onClick={() => {
              setMenuOpen(false);
              window.location.hash = "contact";
            }}
            data-ocid="nav.secondary_button"
          >
            Get in Touch
          </Button>
        </div>
      )}
    </header>
  );
}

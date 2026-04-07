import { useState, useEffect } from "react";

const links = [
  { label: "Bio", href: "#bio" },
  { label: "Timeline", href: "#timeline" },
  { label: "Records", href: "#records" },
  { label: "Gallery", href: "#gallery" },
  { label: "Tribute", href: "#tribute" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border/50" : ""
      }`}
    >
      <div className="container max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <a href="#" className="font-display text-lg font-bold gold-gradient-text">
          VK18
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-primary text-sm font-body uppercase tracking-widest transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { useState, useEffect } from "react";
import logoImg from "@/assets/logo.png";

const navItems = [
  { id: "about", label: "About" },
  { id: "service", label: "Service" },
  { id: "team", label: "Team" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background shadow-card"
          : "bg-transparent"
      }`}
    >
      {/* Top info bar */}
      <div className={`border-b transition-all duration-500 ${scrolled ? "border-border" : "border-transparent"}`}>
        <div className="container-custom mx-auto flex items-center justify-between py-3">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img src={logoImg} alt="The Bees Group 로고" className="h-10 w-10 object-contain" />
            <div className="flex flex-col leading-tight">
              <span className={`font-heading font-bold text-lg tracking-tight transition-colors duration-500 ${scrolled ? "text-foreground" : "text-brand-gold"}`}>
                THE BEES GROUP
              </span>
              <span className={`text-[10px] tracking-widest uppercase transition-colors duration-500 ${scrolled ? "text-muted-foreground" : "text-foreground/50"}`}>
                Global Business
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`font-heading font-medium text-[15px] uppercase px-5 py-3 transition-all duration-300 relative group ${
                  scrolled
                    ? "text-foreground hover:text-brand-gold"
                    : "text-foreground/80 hover:text-brand-gold"
                }`}
              >
                {item.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-brand-gold transition-all duration-300 group-hover:w-3/4" />
              </button>
            ))}

          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="메뉴 열기"
          >
            <span className={`block h-0.5 w-6 bg-brand-gold transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-6 bg-brand-gold transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-brand-gold transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-background border-b border-border transition-all duration-400 overflow-hidden ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-0 py-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-foreground hover:text-brand-gold font-heading font-medium text-base uppercase py-3 px-6 w-full text-center transition-colors duration-300"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="btn-style-one mt-3 mx-6"
          >
            문의하기
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

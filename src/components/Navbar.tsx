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
          ? "bg-brand-dark/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src={logoImg} alt="The Bees Group 로고" className="h-10 w-10 object-contain" />
          <div className="flex flex-col leading-tight">
            <span className="text-brand-gold font-black text-lg tracking-tight">THE BEES GROUP</span>
            <span className="text-white/60 text-[10px] tracking-widest uppercase">Global Business</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-white/80 hover:text-brand-gold font-medium text-sm tracking-widest uppercase transition-colors duration-300 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="px-5 py-2 gradient-gold text-brand-dark font-bold text-sm rounded-full hover:shadow-gold transition-all duration-300 hover:scale-105"
          >
            문의하기
          </button>
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

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-brand-dark/98 backdrop-blur-md transition-all duration-400 overflow-hidden ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-6 py-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-white/80 hover:text-brand-gold font-medium text-base tracking-widest uppercase transition-colors duration-300"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="px-8 py-3 gradient-gold text-brand-dark font-bold rounded-full hover:shadow-gold transition-all duration-300"
          >
            문의하기
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

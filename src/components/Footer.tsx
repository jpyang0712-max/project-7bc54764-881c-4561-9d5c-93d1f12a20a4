import logoImg from "@/assets/logo.png";

const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-dark border-t border-white/10">
      <div className="container-custom mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImg} alt="The Bees Group 로고" className="h-9 w-9 object-contain" />
              <div>
                <div className="text-brand-gold font-black text-base tracking-tight">THE BEES GROUP</div>
                <div className="text-white/40 text-[10px] tracking-widest">Global Business Group</div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              교육, 취업, 돌봄, 무역을 하나의 구조로 연결하는<br />
              Hive형 글로벌 비즈니스 그룹입니다.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-brand-gold font-black text-xs tracking-widest uppercase mb-4">Quick Links</div>
            <div className="space-y-2">
              {[
                { id: "about", label: "회사 소개" },
                { id: "service", label: "서비스" },
                { id: "team", label: "팀 소개" },
                { id: "contact", label: "문의하기" },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="block text-white/50 hover:text-brand-gold text-sm transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Brands */}
          <div>
            <div className="text-brand-gold font-black text-xs tracking-widest uppercase mb-4">Our Brands</div>
            <div className="space-y-2">
              {["Study Bees", "Work Bees", "Care Bees", "Queen Bees", "Trade Bees"].map((brand) => (
                <div key={brand} className="text-white/50 text-sm flex items-center gap-2">
                  <span className="text-brand-gold text-xs">🐝</span>
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © 2025 The Bees Group. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            서울특별시 강남구 | info@thebeesgroup.kr | 02-1234-5678
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

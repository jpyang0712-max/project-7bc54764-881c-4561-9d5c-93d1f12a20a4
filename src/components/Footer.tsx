import logoImg from "@/assets/logo.png";

const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer>
      {/* Footer main - Medic footer-main style */}
      <div className="bg-brand-navy">
        <div className="container-custom mx-auto px-4 pt-20 pb-14">
          <div className="grid md:grid-cols-3 gap-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <img src={logoImg} alt="The Bees Group 로고" className="h-9 w-9 object-contain" />
                <div>
                  <div className="text-brand-gold font-heading font-bold text-base tracking-tight">THE BEES GROUP</div>
                  <div className="text-background/40 text-[10px] tracking-widest font-body">Global Business Group</div>
                </div>
              </div>
              <p className="text-[#ababab] font-body text-[15px] leading-relaxed">
                교육, 취업, 돌봄, 무역을 하나의 구조로 연결하는
                Hive형 글로벌 비즈니스 그룹입니다.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h2 className="text-background font-heading text-lg font-normal uppercase pb-8">Quick Links</h2>
              <ul className="space-y-4">
                {[
                  { id: "about", label: "회사 소개" },
                  { id: "service", label: "서비스" },
                  { id: "team", label: "팀 소개" },
                  { id: "contact", label: "문의하기" },
                ].map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollTo(link.id)}
                      className="text-[#ababab] hover:text-brand-gold font-body text-[15px] tracking-wide transition-colors duration-300"
                    >
                      <span className="mr-3 text-xs">›</span>
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Brands */}
            <div>
              <h2 className="text-background font-heading text-lg font-normal uppercase pb-8">Our Brands</h2>
              <ul className="space-y-4">
                {["Study Bees", "Work Bees", "Care Bees", "Queen Bees", "Trade Bees"].map((brand) => (
                  <li key={brand} className="text-[#ababab] font-body text-[15px] flex items-center gap-2">
                    <span className="text-brand-gold text-xs">🐝</span>
                    {brand}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom - Medic footer-bottom style */}
      <div className="bg-brand-navy-dark py-6 px-4">
        <div className="container-custom mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#ababab] font-body text-[15px] tracking-wide capitalize">
            © 2025 The Bees Group. All rights reserved.
          </p>
          <p className="text-[#ababab] font-body text-[15px]">
            서울특별시 강남구 | info@thebeesgroup.kr | 02-1234-5678
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

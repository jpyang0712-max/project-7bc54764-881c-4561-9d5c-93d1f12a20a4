import { useEffect, useRef, useState } from "react";

const useInView = (threshold = 0.15) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
};

const AboutSection = () => {
  const { ref, inView } = useInView();

  const brands = [
    { name: "Study Bees", desc: "유학·교육·자격 취득 경로 설계", icon: "📚", color: "from-yellow-400 to-amber-500" },
    { name: "Work Bees", desc: "취업·현장·커리어 연계", icon: "💼", color: "from-amber-400 to-orange-500" },
    { name: "Care Bees", desc: "요양·돌봄·주거 연계", icon: "🏥", color: "from-orange-400 to-red-400" },
    { name: "Queen Bees", desc: "뷰티·라이프스타일·브랜드 사업", icon: "👑", color: "from-red-400 to-pink-500" },
    { name: "Trade Bees", desc: "무역·해외 확장 사업", icon: "🌏", color: "from-yellow-500 to-amber-600" },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom mx-auto" ref={ref}>
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block px-4 py-1 bg-brand-gold/10 text-brand-gold font-semibold text-sm rounded-full mb-4 tracking-wider uppercase">About Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-dark mb-6">
            우리는 누구인가요?
          </h2>
          <div className="w-16 h-1 gradient-gold mx-auto rounded-full" />
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <h3 className="text-2xl md:text-3xl font-black text-brand-dark mb-6 leading-tight">
              <span className="text-brand-gold">Hive(벌집)형</span><br />
              글로벌 비즈니스 그룹
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              The Bees Group은 교육, 취업, 돌봄, 무역을 하나의 구조로 연결하는 Hive형 글로벌 비즈니스 그룹입니다.
              우리는 단기 인력 송출이나 브로커 사업을 하지 않습니다.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              <strong className="text-brand-dark">사람이 성장 → 일 → 정착</strong>할 수밖에 없는 경로(Pathway)를 설계하는 회사입니다.
              교육 기반의 합법 모델만 운영하며, 단기 이익보다 장기 파트너십을 중시합니다.
            </p>

            {/* Values */}
            <div className="space-y-4">
              {[
                { icon: "✅", text: "교육 기반의 합법 모델만 운영" },
                { icon: "✅", text: "단기 이익보다 장기 파트너십 중시" },
                { icon: "✅", text: "국가·기관·개인 모두에게 지속 가능한 구조 설계" },
                { icon: "✅", text: "한국 정부 정책과 정합된 모델" },
              ].map((v, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-lg">{v.icon}</span>
                  <span className="text-brand-dark font-medium">{v.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Vision & Mission cards */}
          <div className={`space-y-6 transition-all duration-700 delay-400 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="bg-brand-dark rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <polygon points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5" fill="none" stroke="hsl(45,100%,51%)" strokeWidth="3" />
                </svg>
              </div>
              <div className="text-brand-gold font-black text-sm tracking-widest uppercase mb-3">Vision</div>
              <p className="text-white font-semibold text-lg leading-relaxed">
                "사람이 합법적으로 성장하고 정착할 수 있는<br />
                <span className="text-brand-gold">글로벌 경로를 만든다.</span>"
              </p>
            </div>
            <div className="bg-brand-gold/10 border border-brand-gold/30 rounded-2xl p-8 relative overflow-hidden">
              <div className="text-brand-gold font-black text-sm tracking-widest uppercase mb-3">Mission</div>
              <p className="text-brand-dark font-semibold text-lg leading-relaxed">
                교육·취업·돌봄·무역을 하나의 구조로 연결하여<br />
                <span className="text-brand-gold">지속 가능한 글로벌 생태계</span>를 구축합니다.
              </p>
            </div>

            {/* Logo story */}
            <div className="bg-muted/50 rounded-2xl p-6">
              <div className="text-brand-gold font-black text-sm tracking-widest uppercase mb-3">Logo Story</div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                <strong className="text-brand-dark">Bee(벌)</strong>는 각자의 역할이 분명한 전문성을 의미합니다.<br />
                <strong className="text-brand-dark">Hive(벌집)</strong>는 개인들이 연결되어 가치를 키우는 시스템과 생태계를 의미합니다.
              </p>
            </div>
          </div>
        </div>

        {/* Brands */}
        <div className={`transition-all duration-700 delay-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h3 className="text-center text-xl font-black text-brand-dark mb-8">
            Hive 브랜드 구조
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {brands.map((brand, i) => (
              <div
                key={i}
                className="group relative bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 text-center border border-border cursor-default"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${brand.color} flex items-center justify-center text-2xl mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  {brand.icon}
                </div>
                <div className="font-black text-brand-dark text-sm mb-2">{brand.name}</div>
                <div className="text-muted-foreground text-xs leading-relaxed">{brand.desc}</div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-gold to-amber-500 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import { useRef, useEffect, useState } from "react";

const useInView = (threshold = 0.1) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
};

const steps = [
  {
    step: "01",
    location: "베트남 현지",
    title: "인재 발굴 & 사전 준비",
    items: ["학생 모집 및 1차 상담", "사전 한국어 교육", "진로·적성 검증", "학생·부모 커뮤니케이션"],
    icon: "🇻🇳",
    color: "from-amber-400 to-yellow-500",
  },
  {
    step: "02",
    location: "한국 유학",
    title: "교육 & 자격 취득",
    items: ["한국 대학 요양보호 관련 학과 입학", "이론 + 실습 교육", "비자·행정·입국 관리", "재학 중 생활 지원"],
    icon: "🎓",
    color: "from-orange-400 to-amber-500",
  },
  {
    step: "03",
    location: "자격 취득",
    title: "국가자격 취득",
    items: ["요양보호사 국가자격 시험 준비", "시험 응시 지원", "자격증 취득 확인", "취업 준비 시작"],
    icon: "📜",
    color: "from-yellow-500 to-amber-600",
  },
  {
    step: "04",
    location: "취업 & 정착",
    title: "취업 연계 & 생활 정착",
    items: ["한국 요양기관 취업 연계", "장기 체류 및 정착 경로 검토", "생활 정착 지원", "사후 관리 및 케어"],
    icon: "🏠",
    color: "from-amber-600 to-orange-600",
  },
];

const serviceCards = [
  {
    icon: "📚",
    title: "Study Bees",
    subtitle: "유학 & 교육",
    desc: "베트남 청년 인재를 대상으로 한국어 교육부터 대학 유학, 국가자격 취득까지의 전체 경로를 설계하고 운영합니다.",
    tags: ["한국어 교육", "대학 유학", "자격 취득"],
  },
  {
    icon: "💼",
    title: "Work Bees",
    subtitle: "취업 연계",
    desc: "자격 취득 후 한국 요양기관과의 취업 연계, 커리어 관리, 현장 적응 지원까지 책임집니다.",
    tags: ["요양기관 취업", "커리어 관리", "현장 지원"],
  },
  {
    icon: "🏥",
    title: "Care Bees",
    subtitle: "돌봄 & 정착",
    desc: "요양·돌봄 서비스 제공과 함께 주거, 생활 정착 지원으로 한국에서의 안정적인 삶을 돕습니다.",
    tags: ["요양 돌봄", "주거 연계", "생활 정착"],
  },
  {
    icon: "🌏",
    title: "Trade Bees",
    subtitle: "무역 & 글로벌 확장",
    desc: "한국과 베트남 간 무역 사업 및 글로벌 비즈니스 확장을 통해 지속 가능한 사업 구조를 만들어갑니다.",
    tags: ["한-베 무역", "해외 확장", "글로벌 파트너"],
  },
];

const ServiceSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="service" className="section-padding bg-muted/40">
      <div className="container-custom mx-auto" ref={ref}>
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block px-4 py-1 bg-brand-gold/10 text-brand-gold font-semibold text-sm rounded-full mb-4 tracking-wider uppercase">Service</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-dark mb-6">
            우리가 하는 일
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
            단순한 인력 송출이 아닌, 교육에서 취업, 정착까지 연결된<br />
            <span className="text-brand-gold font-semibold">지속 가능한 글로벌 경로</span>를 설계합니다.
          </p>
          <div className="w-16 h-1 gradient-gold mx-auto rounded-full mt-6" />
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {serviceCards.map((card, i) => (
            <div
              key={i}
              className={`group bg-card border border-border rounded-2xl p-6 hover:border-brand-gold/50 hover:shadow-card-hover transition-all duration-400 hover:-translate-y-2 cursor-default ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 100 + 200}ms`, transition: "all 0.5s ease" }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{card.icon}</div>
              <div className="text-brand-gold font-black text-sm tracking-wider uppercase mb-1">{card.subtitle}</div>
              <h3 className="text-brand-dark font-black text-xl mb-3">{card.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{card.desc}</p>
              <div className="flex flex-wrap gap-2">
                {card.tags.map((tag, j) => (
                  <span key={j} className="px-2 py-1 bg-brand-gold/10 text-brand-gold text-xs rounded-full border border-brand-gold/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core Program - Pathway */}
        <div className={`transition-all duration-700 delay-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h3 className="text-center text-2xl md:text-3xl font-black text-brand-dark mb-4">
            핵심 프로그램 — <span className="text-brand-gold">Study Bees Pathway</span>
          </h3>
          <p className="text-center text-muted-foreground mb-12 text-sm">요양보호사 취업 과정 전체 경로</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-6 h-0.5 bg-gradient-to-r from-brand-gold to-amber-500 z-10" style={{ transform: "translateX(-12px)" }} />
                )}
                <div className="bg-card border border-border rounded-2xl p-6 hover:border-brand-gold/40 hover:shadow-card transition-all duration-300">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-xl mb-4`}>
                    {step.icon}
                  </div>
                  <div className="text-brand-gold font-black text-xs tracking-widest mb-1">STEP {step.step}</div>
                  <div className="text-muted-foreground text-xs mb-2">{step.location}</div>
                  <h4 className="text-brand-dark font-black text-sm mb-4">{step.title}</h4>
                  <ul className="space-y-2">
                    {step.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-muted-foreground text-xs">
                        <span className="text-brand-gold mt-0.5">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;

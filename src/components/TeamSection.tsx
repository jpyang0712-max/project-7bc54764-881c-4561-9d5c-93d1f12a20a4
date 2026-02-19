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

const members = [
  {
    name: "김대표",
    role: "CEO & Founder",
    desc: "글로벌 인재 육성과 교육 기반 합법 취업 모델의 선구자. 한국-베트남 비즈니스 20년 경력.",
    expertise: ["글로벌 전략", "교육 설계", "파트너십"],
    initial: "K",
  },
  {
    name: "이이사",
    role: "COO",
    desc: "요양보호 분야 전문가. 취업 연계 및 현장 운영 전반을 총괄하며 인재 정착을 지원합니다.",
    expertise: ["운영 관리", "취업 연계", "요양 전문"],
    initial: "L",
  },
  {
    name: "박매니저",
    role: "Education Manager",
    desc: "베트남 현지 교육 파트너 관리 및 한국어 교육 커리큘럼 개발을 담당합니다.",
    expertise: ["교육 커리큘럼", "한국어 교육", "현지 관리"],
    initial: "P",
  },
  {
    name: "최코디",
    role: "Settlement Coordinator",
    desc: "외국 인재의 한국 생활 정착을 돕는 전문 코디네이터. 주거·생활·문화 적응을 지원합니다.",
    expertise: ["생활 정착", "문화 적응", "주거 연계"],
    initial: "C",
  },
];

const TeamSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="team" className="section-padding bg-background">
      <div className="container-custom mx-auto" ref={ref}>
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block px-4 py-1 bg-brand-gold/10 text-brand-gold font-semibold text-sm rounded-full mb-4 tracking-wider uppercase">Our Team</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-dark mb-6">
            우리 팀을 소개합니다
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            각자의 전문성을 가진 Bee들이 모여<br />하나의 Hive를 이루고 있습니다.
          </p>
          <div className="w-16 h-1 gradient-gold mx-auto rounded-full mt-6" />
        </div>

        {/* Team Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, i) => (
            <div
              key={i}
              className={`group relative bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-400 hover:-translate-y-2 text-center border border-border cursor-default ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 100 + 200}ms`, transition: "all 0.5s ease" }}
            >
              {/* Avatar */}
              <div className="relative mx-auto mb-6 w-20 h-20">
                <div className="w-20 h-20 rounded-2xl gradient-gold flex items-center justify-center text-brand-dark font-black text-3xl group-hover:scale-105 transition-transform duration-300">
                  {member.initial}
                </div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-brand-gold border-2 border-white flex items-center justify-center">
                  <span className="text-brand-dark text-xs">🐝</span>
                </div>
              </div>

              <h3 className="text-brand-dark font-black text-lg mb-1">{member.name}</h3>
              <div className="text-brand-gold font-semibold text-sm mb-3">{member.role}</div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{member.desc}</p>

              {/* Expertise tags */}
              <div className="flex flex-wrap justify-center gap-2">
                {member.expertise.map((tag, j) => (
                  <span key={j} className="px-2 py-1 bg-brand-gold/10 text-brand-gold text-xs rounded-full border border-brand-gold/20 font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 gradient-gold rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-muted-foreground text-sm mt-8">
          * 팀 상세 정보는 업데이트 예정입니다. 문의사항은 Contact를 이용해주세요.
        </p>
      </div>
    </section>
  );
};

export default TeamSection;

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
    initial: "K",
  },
  {
    name: "이이사",
    role: "COO",
    desc: "요양보호 분야 전문가. 취업 연계 및 현장 운영 전반을 총괄하며 인재 정착을 지원합니다.",
    initial: "L",
  },
  {
    name: "박매니저",
    role: "Education Manager",
    desc: "베트남 현지 교육 파트너 관리 및 한국어 교육 커리큘럼 개발을 담당합니다.",
    initial: "P",
  },
  {
    name: "최코디",
    role: "Settlement Coordinator",
    desc: "외국 인재의 한국 생활 정착을 돕는 전문 코디네이터. 주거·생활·문화 적응을 지원합니다.",
    initial: "C",
  },
];

const TeamSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="team" className="section-padding bg-background">
      <div className="container-custom mx-auto" ref={ref}>
        {/* Header - Medic team-section style */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-[40px] leading-[50px] font-heading font-bold text-foreground section-title-decorator">
            우리 팀을 소개합니다
          </h2>
          <p className="text-muted-foreground font-body text-[15px] leading-relaxed max-w-xl mx-auto pb-8">
            각자의 전문성을 가진 Bee들이 모여 하나의 Hive를 이루고 있습니다.
          </p>
        </div>

        {/* Team Cards - Medic team-member style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, i) => (
            <div
              key={i}
              className={`group rounded-[10px] overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 100 + 200}ms`, transition: "all 0.5s ease" }}
            >
              {/* Avatar area */}
              <div className="bg-muted flex items-center justify-center py-10">
                <div className="w-24 h-24 rounded-full bg-brand-gold flex items-center justify-center text-foreground font-heading font-bold text-4xl group-hover:scale-105 transition-transform duration-300">
                  {member.initial}
                </div>
              </div>

              {/* Contents - Medic team-member .contents style */}
              <div className="bg-card p-9 text-center">
                <h4 className="font-heading font-semibold text-foreground uppercase tracking-wider mb-5 relative pb-3">
                  {member.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[30px] h-px bg-muted-foreground" />
                </h4>
                <div className="text-brand-gold font-body font-semibold text-sm mb-3 uppercase">{member.role}</div>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-5">{member.desc}</p>
                <button className="btn-style-two text-xs">
                  자세히 보기
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-muted-foreground font-body text-sm mt-10">
          * 팀 상세 정보는 업데이트 예정입니다. 문의사항은 Contact를 이용해주세요.
        </p>
      </div>
    </section>
  );
};

export default TeamSection;

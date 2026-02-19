import { useEffect, useRef, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-brand-dark/70" />

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 gradient-gold" />

      {/* Animated hexagon accents */}
      <div className="absolute top-20 right-10 w-32 h-32 opacity-10 animate-float">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-brand-gold">
          <polygon points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>
      <div className="absolute bottom-32 left-10 w-20 h-20 opacity-10" style={{ animation: "float 5s ease-in-out infinite 1s" }}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5" fill="none" stroke="hsl(45,100%,51%)" strokeWidth="2" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-6">
        <div
          className={`transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-brand-gold/40 rounded-full mb-8 bg-brand-gold/10 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
            <span className="text-brand-gold text-sm font-medium tracking-wider">Global Business Group</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            <span className="block">교육, 취업, 돌봄, 무역을</span>
            <span className="block mt-2">
              <span className="gold-shimmer">하나의 구조</span>로 연결하는
            </span>
          </h1>

          {/* Subheading */}
          <p
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-4 leading-relaxed"
            style={{ transitionDelay: "200ms" }}
          >
            The Bees Group은 교육, 취업, 돌봄, 무역을 하나의 구조로 연결하는
            <br className="hidden md:block" />
            <strong className="text-brand-gold"> Hive형 글로벌 비즈니스 그룹</strong>입니다.
          </p>

          <p className="text-white/50 text-sm md:text-base max-w-xl mx-auto mb-10">
            사람이 성장하고, 일하고, 정착할 수밖에 없는 경로(Pathway)를 설계합니다.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 gradient-gold text-brand-dark font-bold rounded-full shadow-gold hover:scale-105 transition-all duration-300 text-base"
            >
              회사 소개 보기
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 border border-white/30 text-white font-semibold rounded-full hover:border-brand-gold hover:text-brand-gold transition-all duration-300 text-base backdrop-blur-sm"
            >
              문의하기
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span className="text-white/60 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-brand-gold to-transparent animate-pulse" />
        </div>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-brand-dark/80 backdrop-blur-md border-t border-white/10">
        <div className="container-custom mx-auto px-6 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { num: "5", label: "브랜드 운영" },
              { num: "100%", label: "합법 모델 운영" },
              { num: "4개국", label: "글로벌 네트워크" },
              { num: "Long-term", label: "파트너십 중시" },
            ].map((stat, i) => (
              <div key={i} className="text-center py-2">
                <div className="text-brand-gold font-black text-xl md:text-2xl">{stat.num}</div>
                <div className="text-white/50 text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

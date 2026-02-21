import { useEffect, useState } from "react";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

const slides = [heroSlide1, heroSlide2, heroSlide3];

const HeroSection = () => {
  const [visible, setVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
    >
      {/* Slideshow backgrounds */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${slide})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: currentSlide === index ? 1 : 0,
          }}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-foreground/50" />

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4">
        <div
          className={`transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Offer text */}
          <p className="text-background/80 text-sm md:text-base font-body uppercase tracking-[7px] mb-4">
            Global Business Group
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-[60px] font-heading font-bold text-background capitalize leading-tight mb-6">
            교육, 취업, 돌봄, 무역을
            <br />
            <span className="gold-shimmer">하나의 구조</span>로 연결하는
          </h2>
          <p className="text-lg md:text-2xl text-background/90 font-body mb-10">
            The Bees Group은{" "}
            <strong className="text-brand-gold">Hive형 글로벌 비즈니스 그룹</strong>
            입니다.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-style-one"
            >
              회사 소개 보기
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-block text-sm font-semibold uppercase tracking-wide px-9 py-[10px] bg-transparent text-background border border-background transition-all duration-500 hover:bg-background hover:text-foreground"
            >
              문의하기
            </button>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-brand-gold scale-110" : "bg-background/50"
            }`}
          />
        ))}
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-foreground/60 backdrop-blur-sm border-t border-background/10">
        <div className="container-custom mx-auto px-4 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { num: "5", label: "브랜드 운영" },
              { num: "100%", label: "합법 모델 운영" },
              { num: "4개국", label: "글로벌 네트워크" },
              { num: "Long-term", label: "파트너십 중시" },
            ].map((stat, i) => (
              <div key={i} className="text-center py-2">
                <div className="text-brand-gold font-heading font-bold text-xl md:text-2xl">{stat.num}</div>
                <div className="text-background/50 text-xs font-body mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

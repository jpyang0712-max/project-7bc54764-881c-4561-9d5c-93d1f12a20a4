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
          <h2 className="text-3xl md:text-5xl lg:text-[35px] font-heading font-bold text-background capitalize leading-tight mb-6">
            교육, 취업, 돌봄, 무역을 하나의 구조로 연결하는
            <br />
            
          </h2>
          <p className="text-lg md:text-2xl text-background/90 font-body mb-10">
            The Bees Group은{" "}
            <strong className="text-brand-gold">Hive형 글로벌 비즈니스 그룹</strong>
            입니다.
          </p>

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
      
    </section>
  );
};

export default HeroSection;

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

const ContactSection = () => {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    { icon: "📍", label: "주소", value: "서울특별시 강남구 테헤란로 123\n역삼동 비즈니스센터 8층" },
    { icon: "📞", label: "전화", value: "02-1234-5678" },
    { icon: "✉️", label: "이메일", value: "info@thebeesgroup.kr" },
    { icon: "🕐", label: "운영시간", value: "평일 09:00 - 18:00\n(주말 및 공휴일 휴무)" },
  ];

  return (
    <section id="contact" className="section-padding bg-muted">
      <div className="container-custom mx-auto" ref={ref}>
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-[40px] leading-[50px] font-heading font-bold text-foreground section-title-decorator">
            문의하기
          </h2>
          <p className="text-muted-foreground font-body text-[15px] leading-relaxed max-w-xl mx-auto">
            파트너십, 프로그램 참여, 일반 문의 등 어떤 내용이든 편하게 연락해주세요.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Info + Map */}
          <div className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            {/* Contact info - Medic address-block media style */}
            <div className="space-y-5 mb-8">
              {contactInfo.map((info, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="text-brand-gold text-3xl block w-10">{info.icon}</span>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground text-lg mb-1">{info.label}</h3>
                    <p className="text-muted-foreground font-body text-[15px] leading-relaxed whitespace-pre-line">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-lg overflow-hidden shadow-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.4447766208!2d127.0266076!3d37.4979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca15a9cb16cbf%3A0xd7ee94c3e4f09cef!2z7YGs7Iqk7J207Yq4IOuztOyyneyLnCDthYzsiqTtirjroZw!5e0!3m2!1sko!2skr!4v1677000000000!5m2!1sko!2skr"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Bees Group 위치"
              />
            </div>
          </div>

          {/* Right - Contact Form - Medic contact-area style */}
          <div className={`transition-all duration-700 delay-400 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <h3 className="text-2xl font-heading font-bold text-foreground section-title-decorator text-center lg:text-left">
              메시지 보내기
            </h3>

            {submitted && (
              <div className="mb-6 p-4 bg-brand-gold/10 border border-brand-gold/40 text-brand-gold text-sm font-semibold text-center">
                ✅ 메시지가 전송되었습니다. 곧 연락드리겠습니다!
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 mt-8">
              <div>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  placeholder="이름 *"
                  className="w-full bg-muted border border-border px-5 py-4 text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-brand-gold transition-colors duration-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  placeholder="이메일 *"
                  className="w-full bg-muted border border-border px-5 py-4 text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-brand-gold transition-colors duration-300"
                />
              </div>
              <div>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  rows={7}
                  placeholder="문의 내용 *"
                  className="w-full bg-muted border border-border px-5 py-4 text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-brand-gold transition-colors duration-300 resize-none"
                />
              </div>
              <button
                type="submit"
                className="btn-style-one w-full py-4"
              >
                메시지 보내기
              </button>
            </form>

            <p className="text-muted-foreground font-body text-xs text-center mt-4">
              영업일 기준 1-2일 내에 답변드립니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

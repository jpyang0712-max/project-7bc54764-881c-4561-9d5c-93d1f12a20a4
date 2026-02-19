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

  const snsLinks = [
    { icon: "📸", name: "Instagram", handle: "@thebeesgroup_kr", href: "#" },
    { icon: "💬", name: "KakaoTalk", handle: "더비스그룹", href: "#" },
    { icon: "🌐", name: "YouTube", handle: "The Bees Group", href: "#" },
    { icon: "💼", name: "LinkedIn", handle: "The Bees Group", href: "#" },
  ];

  return (
    <section id="contact" className="section-padding bg-brand-dark">
      <div className="container-custom mx-auto" ref={ref}>
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block px-4 py-1 bg-brand-gold/20 text-brand-gold font-semibold text-sm rounded-full mb-4 tracking-wider uppercase">Contact</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
            문의하기
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            파트너십, 프로그램 참여, 일반 문의 등<br />어떤 내용이든 편하게 연락해주세요.
          </p>
          <div className="w-16 h-1 gradient-gold mx-auto rounded-full mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Info + Map */}
          <div className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            {/* Contact info */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, i) => (
                <div key={i} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-4 hover:border-brand-gold/30 transition-colors duration-300">
                  <span className="text-2xl mt-0.5">{info.icon}</span>
                  <div>
                    <div className="text-brand-gold font-semibold text-xs uppercase tracking-wider mb-1">{info.label}</div>
                    <div className="text-white/80 text-sm whitespace-pre-line">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* SNS */}
            <div className="mb-8">
              <div className="text-brand-gold font-black text-sm tracking-wider uppercase mb-4">SNS & 채널</div>
              <div className="grid grid-cols-2 gap-3">
                {snsLinks.map((sns, i) => (
                  <a
                    key={i}
                    href={sns.href}
                    className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3 hover:border-brand-gold/40 hover:bg-brand-gold/5 transition-all duration-300 group"
                  >
                    <span className="text-xl">{sns.icon}</span>
                    <div>
                      <div className="text-white/80 font-semibold text-xs group-hover:text-brand-gold transition-colors">{sns.name}</div>
                      <div className="text-white/40 text-xs">{sns.handle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Map (Gangnam area placeholder) */}
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.4447766208!2d127.0266076!3d37.4979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca15a9cb16cbf%3A0xd7ee94c3e4f09cef!2z7YGs7Iqk7J207Yq4IOuztOyyneyLnCDthYzsiqTtirjroZw!5e0!3m2!1sko!2skr!4v1677000000000!5m2!1sko!2skr"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Bees Group 위치"
              />
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className={`transition-all duration-700 delay-400 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-white font-black text-xl mb-6">메시지 보내기</h3>

              {submitted && (
                <div className="mb-6 p-4 bg-brand-gold/20 border border-brand-gold/40 rounded-xl text-brand-gold text-sm font-semibold text-center">
                  ✅ 메시지가 전송되었습니다. 곧 연락드리겠습니다!
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-white/60 text-xs uppercase tracking-wider mb-2">이름 *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    placeholder="홍길동"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-gold transition-colors duration-300 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-xs uppercase tracking-wider mb-2">이메일 *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    placeholder="example@email.com"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-gold transition-colors duration-300 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-xs uppercase tracking-wider mb-2">문의 내용 *</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    rows={5}
                    placeholder="파트너십, 프로그램 참여, 일반 문의 등 자유롭게 작성해주세요."
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-gold transition-colors duration-300 text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 gradient-gold text-brand-dark font-black rounded-xl hover:shadow-gold transition-all duration-300 hover:scale-[1.02] text-base"
                >
                  메시지 보내기 →
                </button>
              </form>

              <p className="text-white/30 text-xs text-center mt-4">
                영업일 기준 1-2일 내에 답변드립니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

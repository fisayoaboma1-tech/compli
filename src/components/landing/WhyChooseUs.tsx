import { useEffect, useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { benefits } from "./data";

export function WhyChooseUs() {
  const bgImages = [
    "https://res.cloudinary.com/dahp1ngcc/image/upload/v1782831713/closeup-working-table-workplace-office_1_iby4tj.jpg",
    "https://res.cloudinary.com/dahp1ngcc/image/upload/v1782831718/closeup-hands-passing-contract-unrecognizable-businessman_1_vadubj.jpg",
  ];
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(id);
  }, [bgImages.length]);

  return (
    <section id="why-us" className="py-28 bg-white border-y border-border/30 relative">
      {bgImages.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 pointer-events-none transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            opacity: i === idx ? 0.25 : 0,
          }}
        />
      ))}
      <div className="absolute inset-0 pointer-events-none bg-black/5" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
      <div className="max-w-4xl mx-auto px-5 relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Why Choose Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground" style={{ lineHeight: "1.15" }}>
              Your trusted compliance partner
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative grid md:grid-cols-3 gap-8">
          {/* Connecting line between steps (desktop only) */}
          <div className="hidden md:block absolute top-7 left-[calc(16.67%+28px)] right-[calc(16.67%+28px)] h-px border-t-2 border-dashed border-primary/20" />

          {benefits.map((s, i) => (
            <ScrollReveal key={s.num} delay={i * 100}>
              <div className="text-center relative">
                <div className="w-14 h-14 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-5 text-lg font-bold shadow-lg shadow-primary/15">
                  {s.num}
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

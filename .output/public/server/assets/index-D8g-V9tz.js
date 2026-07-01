import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect, useRef, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import { FileCheck, FlaskConical, Shield, CheckCircle2, Sparkles, TrendingUp, Menu, ArrowRight, ChevronDown, Star } from "lucide-react";
const HERO_IMAGES = [
  "https://res.cloudinary.com/dahp1ngcc/image/upload/v1782823046/a_siivgg.jpg",
  "https://res.cloudinary.com/dahp1ngcc/image/upload/v1782823040/a3_jlmqpq.jpg",
  "https://res.cloudinary.com/dahp1ngcc/image/upload/v1782823037/a4_zcsi5u.jpg",
  "https://res.cloudinary.com/dahp1ngcc/image/upload/v1782823037/a1_jdqca0.jpg",
  "https://res.cloudinary.com/dahp1ngcc/image/upload/v1782823033/a2_ubhenv.jpg",
  "https://res.cloudinary.com/dahp1ngcc/image/upload/v1782823030/a_6_1_xai9so.jpg"
];
const services = [
  {
    icon: FileCheck,
    title: "SNI Product Certification",
    desc: "Navigate the Indonesian National Standard (SNI) certification process with ease. We guide your business through mandatory product certifications required for regulated goods in Indonesia."
  },
  {
    icon: FlaskConical,
    title: "Laboratory Testing",
    desc: "Accredited testing services to verify product quality, safety, and compliance with national and international standards. Ensure your products meet all regulatory requirements."
  },
  {
    icon: Shield,
    title: "Halal Certification",
    desc: "Complete assistance in obtaining Halal certification through the SJPH (Sistem Jaminan Produk Halal). We help you meet Muslim consumer requirements and expand your market reach."
  }
];
const benefits = [
  {
    num: "1",
    icon: CheckCircle2,
    title: "Accredited & Authorized",
    desc: "Accredited by KAN (Komité Akreditasi Nasional) and authorized for government-required certifications across industries including electronics, cookware, industrial products, and energy."
  },
  {
    num: "2",
    icon: Sparkles,
    title: "End-to-End Support",
    desc: "From initial consultation to final certification, we guide you through every step of the process, ensuring smooth and efficient compliance."
  },
  {
    num: "3",
    icon: TrendingUp,
    title: "Industry Expertise",
    desc: "With deep knowledge of Indonesian regulations and international standards, we help businesses of all sizes achieve and maintain compliance."
  }
];
const reviews = [
  { name: "PT. Makmur Jaya", role: "Food Manufacturer", avatar: "https://res.cloudinary.com/dahp1ngcc/image/upload/v1782858921/WhatsApp_Image_2026-06-30_at_11.31.53_PM_q4ilu5.jpg", quote: '"Solusi SNI helped us navigate the SNI certification process smoothly. Their expertise and professionalism are unmatched."', rating: 5 },
  { name: "PT. Elektronik Nusantara", role: "Electronics Company", avatar: "https://res.cloudinary.com/dahp1ngcc/image/upload/v1782858922/WhatsApp_Image_2026-06-30_at_11.33.50_PM_r8qxoy.jpg", quote: '"Their laboratory testing services are thorough and accurate. They ensured our products meet all compliance standards."', rating: 4.5 },
  { name: "CV. Sentosa Abadi", role: "Export/Import Business", avatar: "https://res.cloudinary.com/dahp1ngcc/image/upload/v1782858922/WhatsApp_Image_2026-06-30_at_11.33.50_PM_2_g3ovgf.jpg", quote: '"The halal certification guidance was exceptional. They walked us through every step of the SJPH system."', rating: 3 },
  { name: "UD. Berkah Jaya", role: "Industrial Products", avatar: "https://res.cloudinary.com/dahp1ngcc/image/upload/v1782858921/WhatsApp_Image_2026-06-30_at_11.33.50_PM_1_agrvfv.jpg", quote: '"Professional, responsive, and knowledgeable. Solusi SNI is our go-to partner for all certification needs."', rating: 4 }
];
const LOGO_URL$1 = "https://res.cloudinary.com/dahp1ngcc/image/upload/v1782828720/WhatsApp_Image_2026-06-30_at_3.10.04_PM__1_-removebg-preview_x4cpws.png";
function ScrollReveal$1({ children, delay = 0 }) {
  return /* @__PURE__ */ jsx(Fragment, { children });
}
function Hero() {
  const [idx, setIdx] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    if (!HERO_IMAGES.length) return;
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % HERO_IMAGES.length);
    }, 4e3);
    return () => clearInterval(id);
  }, []);
  return /* @__PURE__ */ jsxs("section", { className: "relative pb-24 pt-0 lg:pb-32 lg:pt-8 xl:pb-40 xl:pt-12", style: { background: "#050d0a" }, children: [
    HERO_IMAGES.map((src, i) => /* @__PURE__ */ jsx(
      "img",
      {
        src,
        alt: "",
        width: 1920,
        height: 1080,
        "aria-hidden": "true",
        loading: i === 0 ? "eager" : "lazy",
        className: `absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none transition-opacity duration-1000 ease-in-out ${i === idx ? "opacity-100" : "opacity-0"}`
      },
      src
    )),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 pointer-events-none", style: { background: `linear-gradient(to right, rgba(5,13,10,0.5), rgba(5,13,10,0.13), transparent)` } }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 pointer-events-none", style: { background: `linear-gradient(to bottom, rgba(0,0,0,0.26), transparent, rgba(5,13,10,0))` } }),
    /* @__PURE__ */ jsxs("nav", { className: "relative z-20 max-w-5xl mx-auto px-5 h-16 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2.5", children: [
        /* @__PURE__ */ jsx("img", { src: LOGO_URL$1, alt: "Solusi SNI", className: "h-7 w-auto" }),
        /* @__PURE__ */ jsxs("span", { className: "text-xl font-semibold text-white/90 tracking-tight", children: [
          "PT ",
          /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold", children: "SS" }),
          "N"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-8 text-sm text-white", children: [
        /* @__PURE__ */ jsx("a", { href: "#services", className: "hover:text-white/70 transition-colors", children: "Services" }),
        /* @__PURE__ */ jsx("a", { href: "#why-us", className: "hover:text-white/70 transition-colors", children: "Why Us" }),
        /* @__PURE__ */ jsx("a", { href: "#agency", className: "hover:text-white/70 transition-colors", children: "About" }),
        /* @__PURE__ */ jsx("a", { href: "#reviews", className: "hover:text-white/70 transition-colors", children: "Clients" }),
        /* @__PURE__ */ jsx("a", { href: "#contact", className: "hover:text-white/70 transition-colors", children: "Contact" })
      ] }),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => setMenuOpen(true),
          className: "inline-flex items-center gap-1.5 rounded-xl border border-white/30 bg-white/10 text-white px-5 py-2.5 text-sm font-medium hover:bg-white/20 backdrop-blur-sm transition-all duration-200 active:scale-[0.97]",
          children: [
            "Menu",
            /* @__PURE__ */ jsx(Menu, { className: "w-3.5 h-3.5" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 max-w-5xl mx-auto px-5 pt-6 flex items-center gap-2", children: HERO_IMAGES.map((_, i) => /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setIdx(i),
        className: `h-1.5 rounded-full transition-all duration-300 focus:outline-none ${i === idx ? "w-6 bg-white" : "w-3 bg-white/50 hover:bg-white/80"}`,
        "aria-label": `Slide ${i + 1}`
      },
      i
    )) }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 max-w-5xl mx-auto px-5 pt-24 pb-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-xl", children: [
      /* @__PURE__ */ jsx(ScrollReveal$1, { delay: 80, children: /* @__PURE__ */ jsxs("h1", { className: "text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white text-left", style: { lineHeight: "1.08" }, children: [
        "Your Partner in",
        /* @__PURE__ */ jsx("br", {}),
        "Product Certification"
      ] }) }),
      /* @__PURE__ */ jsx(ScrollReveal$1, { delay: 160, children: /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg text-white text-left", style: { textWrap: "pretty", lineHeight: "1.6" }, children: "PT. Solusi Sertifikasi Nasional Indonesia provides comprehensive compliance solutions, including SNI certification, laboratory testing, and halal certification, to help your business thrive in the Indonesian market." }) }),
      /* @__PURE__ */ jsx(ScrollReveal$1, { delay: 240, children: /* @__PURE__ */ jsx("div", { className: "mt-10 flex flex-col sm:flex-row items-start gap-3", children: /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/login",
          className: "inline-flex items-center gap-2 rounded-xl bg-[#FDAA3E] text-[#1a1a1a] px-7 py-3.5 text-sm font-bold hover:bg-[#fdb95e] transition-all duration-200 active:scale-[0.97] shadow-lg shadow-[#FDAA3E]/25",
          children: [
            "Start your certification",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
          ]
        }
      ) }) })
    ] }) })
  ] });
}
function ScrollReveal({ children, delay = 0 }) {
  return /* @__PURE__ */ jsx(Fragment, { children });
}
const shadowBg = "/assets/shadow-bg-CdMACutT.jpg";
function Services() {
  return /* @__PURE__ */ jsxs("section", { id: "services", className: "py-28 relative bg-white", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 pointer-events-none", style: { backgroundImage: `url(${shadowBg})`, backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed", opacity: 0.75 } }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" }),
    /* @__PURE__ */ jsx("div", { className: "max-w-6xl mx-auto px-5 relative", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row items-start gap-12 lg:gap-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsx(ScrollReveal, { children: /* @__PURE__ */ jsxs("div", { className: "mb-10", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-primary mb-3", children: "Our Services" }),
          /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-bold tracking-tight text-foreground", style: { lineHeight: "1.15" }, children: "Comprehensive compliance solutions" }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground text-base sm:text-lg", style: { textWrap: "pretty" }, children: "We are your one-stop partner for all certification and compliance needs in Indonesia." })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 gap-5", children: services.map((s, i) => /* @__PURE__ */ jsx(ScrollReveal, { delay: i * 70, children: /* @__PURE__ */ jsxs("div", { className: "group relative rounded-2xl border border-black/[0.04] bg-black/[0.03] p-5 hover:bg-black/[0.05] hover:border-black/[0.08] transition-all duration-300 overflow-hidden", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 pointer-events-none", style: { backgroundImage: `url(${shadowBg})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.15 } }),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300", children: /* @__PURE__ */ jsx(s.icon, { className: "w-5 h-5 text-primary" }) }),
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground mb-1", children: s.title }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: s.desc })
          ] })
        ] }) }, s.title)) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "w-full lg:w-[420px] flex-shrink-0", children: /* @__PURE__ */ jsx(ScrollReveal, { children: /* @__PURE__ */ jsxs("div", { className: "rounded-xl bg-white border border-black/[0.06] shadow-xl overflow-hidden", children: [
        /* @__PURE__ */ jsxs("div", { className: "border-b border-black/5 px-5 py-3 flex items-center gap-3 bg-gray-50/80", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex gap-1.5", children: [
            /* @__PURE__ */ jsx("div", { className: "w-2.5 h-2.5 rounded-full bg-black/10" }),
            /* @__PURE__ */ jsx("div", { className: "w-2.5 h-2.5 rounded-full bg-black/10" }),
            /* @__PURE__ */ jsx("div", { className: "w-2.5 h-2.5 rounded-full bg-black/10" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex-1" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-6 space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs text-black/40", children: "Why choose us" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg font-semibold text-black/90 mt-0.5", children: "Trusted compliance partner" })
          ] }),
          [
            { label: "KAN Accredited", value: "Yes" },
            { label: "Industry Coverage", value: "Multiple sectors" },
            { label: "Average Processing Time", value: "Fast track" },
            { label: "Client Satisfaction", value: "98%" }
          ].map((item) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 rounded-xl border border-black/[0.06] bg-black/[0.02] px-4 py-3", children: [
            /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full flex-shrink-0 bg-[#FDAA3E]" }),
            /* @__PURE__ */ jsx("span", { className: "flex-1 text-sm text-black/70", children: item.label }),
            /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-black/90", children: item.value })
          ] }, item.label))
        ] })
      ] }) }) })
    ] }) })
  ] });
}
function WhyChooseUs() {
  const bgImages = [
    "https://res.cloudinary.com/dahp1ngcc/image/upload/v1782831713/closeup-working-table-workplace-office_1_iby4tj.jpg",
    "https://res.cloudinary.com/dahp1ngcc/image/upload/v1782831718/closeup-hands-passing-contract-unrecognizable-businessman_1_vadubj.jpg"
  ];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % bgImages.length);
    }, 5e3);
    return () => clearInterval(id);
  }, [bgImages.length]);
  return /* @__PURE__ */ jsxs("section", { id: "why-us", className: "py-28 bg-white border-y border-border/30 relative", children: [
    bgImages.map((src, i) => /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 pointer-events-none transition-opacity duration-1000 ease-in-out",
        style: {
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          opacity: i === idx ? 0.25 : 0
        }
      },
      src
    )),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 pointer-events-none bg-black/5" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-5 relative", children: [
      /* @__PURE__ */ jsx(ScrollReveal, { children: /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-primary mb-3", children: "Why Choose Us" }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-bold tracking-tight text-foreground", style: { lineHeight: "1.15" }, children: "Your trusted compliance partner" })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "relative grid md:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsx("div", { className: "hidden md:block absolute top-7 left-[calc(16.67%+28px)] right-[calc(16.67%+28px)] h-px border-t-2 border-dashed border-primary/20" }),
        benefits.map((s, i) => /* @__PURE__ */ jsx(ScrollReveal, { delay: i * 100, children: /* @__PURE__ */ jsxs("div", { className: "text-center relative", children: [
          /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-5 text-lg font-bold shadow-lg shadow-primary/15", children: s.num }),
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground text-lg mb-2", children: s.title }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto", children: s.desc })
        ] }) }, s.num))
      ] })
    ] })
  ] });
}
function Contact() {
  return /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden py-0 sm:py-20", style: { background: "#050d0a" }, children: [
    /* @__PURE__ */ jsx(
      "video",
      {
        autoPlay: true,
        loop: true,
        muted: true,
        playsInline: true,
        className: "absolute inset-0 w-full h-full object-cover object-center opacity-25 sm:opacity-25 pointer-events-none select-none",
        poster: "",
        children: /* @__PURE__ */ jsx("source", { src: "https://res.cloudinary.com/dahp1ngcc/video/upload/v1782852692/From_Klickpin.com-_734438651746736277-pin-id-734438651746736277_vpa785.mp4", type: "video/mp4" })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[#050d0a]/60 pointer-events-none" }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none" }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 max-w-3xl mx-auto px-5 py-20 sm:py-28 text-center", children: /* @__PURE__ */ jsxs(ScrollReveal, { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-bold tracking-tight text-white", style: { lineHeight: "1.15" }, children: "Get in touch" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-white/80 max-w-xl mx-auto", style: { textWrap: "pretty" }, children: "Reach out to PT. Solusi Sertifikasi Nasional Indonesia and get your products certified against all national standards." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-col sm:flex-row items-center justify-center gap-4", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "tel:+62123456789",
            className: "inline-flex items-center gap-3 rounded-xl bg-[#FDAA3E] text-[#1a1a1a] px-6 py-3 text-sm font-semibold hover:bg-[#fdb95e] transition-all duration-200 active:scale-[0.97] shadow-lg shadow-[#FDAA3E]/25",
            children: [
              /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "w-4 h-4", children: /* @__PURE__ */ jsx("path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" }) }),
              "+62 123 456 789"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "mailto:info@ptssn.co.id",
            className: "inline-flex items-center gap-3 rounded-xl bg-white/10 text-white border border-white/20 px-6 py-3 text-sm font-semibold hover:bg-white/20 transition-all duration-200",
            children: [
              /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "w-4 h-4", children: [
                /* @__PURE__ */ jsx("rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }),
                /* @__PURE__ */ jsx("path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" })
              ] }),
              "info@ptssn.co.id"
            ]
          }
        )
      ] })
    ] }) })
  ] });
}
const hardcodedCountries = [
  { code: "+93", name: "Afghanistan" },
  { code: "+355", name: "Albania" },
  { code: "+213", name: "Algeria" },
  { code: "+1", name: "American Samoa" },
  { code: "+376", name: "Andorra" },
  { code: "+244", name: "Angola" },
  { code: "+1", name: "Anguilla" },
  { code: "+1", name: "Antigua and Barbuda" },
  { code: "+54", name: "Argentina" },
  { code: "+374", name: "Armenia" },
  { code: "+297", name: "Aruba" },
  { code: "+61", name: "Australia" },
  { code: "+43", name: "Austria" },
  { code: "+994", name: "Azerbaijan" },
  { code: "+1", name: "Bahamas" },
  { code: "+973", name: "Bahrain" },
  { code: "+880", name: "Bangladesh" },
  { code: "+1", name: "Barbados" },
  { code: "+375", name: "Belarus" },
  { code: "+32", name: "Belgium" },
  { code: "+501", name: "Belize" },
  { code: "+229", name: "Benin" },
  { code: "+1", name: "Bermuda" },
  { code: "+975", name: "Bhutan" },
  { code: "+591", name: "Bolivia" },
  { code: "+387", name: "Bosnia and Herzegovina" },
  { code: "+267", name: "Botswana" },
  { code: "+55", name: "Brazil" },
  { code: "+1", name: "British Virgin Islands" },
  { code: "+673", name: "Brunei" },
  { code: "+359", name: "Bulgaria" },
  { code: "+226", name: "Burkina Faso" },
  { code: "+257", name: "Burundi" },
  { code: "+855", name: "Cambodia" },
  { code: "+237", name: "Cameroon" },
  { code: "+1", name: "Canada" },
  { code: "+238", name: "Cape Verde" },
  { code: "+1", name: "Cayman Islands" },
  { code: "+236", name: "Central African Republic" },
  { code: "+235", name: "Chad" },
  { code: "+56", name: "Chile" },
  { code: "+86", name: "China" },
  { code: "+61", name: "Christmas Island" },
  { code: "+61", name: "Cocos (Keeling) Islands" },
  { code: "+57", name: "Colombia" },
  { code: "+269", name: "Comoros" },
  { code: "+242", name: "Congo" },
  { code: "+243", name: "Congo (Democratic Republic)" },
  { code: "+682", name: "Cook Islands" },
  { code: "+506", name: "Costa Rica" },
  { code: "+225", name: "Côte d'Ivoire" },
  { code: "+385", name: "Croatia" },
  { code: "+53", name: "Cuba" },
  { code: "+357", name: "Cyprus" },
  { code: "+420", name: "Czech Republic" },
  { code: "+45", name: "Denmark" },
  { code: "+253", name: "Djibouti" },
  { code: "+1", name: "Dominica" },
  { code: "+1", name: "Dominican Republic" },
  { code: "+593", name: "Ecuador" },
  { code: "+20", name: "Egypt" },
  { code: "+503", name: "El Salvador" },
  { code: "+240", name: "Equatorial Guinea" },
  { code: "+291", name: "Eritrea" },
  { code: "+372", name: "Estonia" },
  { code: "+251", name: "Ethiopia" },
  { code: "+500", name: "Falkland Islands" },
  { code: "+298", name: "Faroe Islands" },
  { code: "+691", name: "Federated States of Micronesia" },
  { code: "+679", name: "Fiji" },
  { code: "+358", name: "Finland" },
  { code: "+33", name: "France" },
  { code: "+594", name: "French Guiana" },
  { code: "+689", name: "French Polynesia" },
  { code: "+241", name: "Gabon" },
  { code: "+220", name: "Gambia" },
  { code: "+995", name: "Georgia" },
  { code: "+49", name: "Germany" },
  { code: "+233", name: "Ghana" },
  { code: "+350", name: "Gibraltar" },
  { code: "+30", name: "Greece" },
  { code: "+299", name: "Greenland" },
  { code: "+1", name: "Grenada" },
  { code: "+590", name: "Guadeloupe" },
  { code: "+1", name: "Guam" },
  { code: "+502", name: "Guatemala" },
  { code: "+224", name: "Guinea" },
  { code: "+245", name: "Guinea-Bissau" },
  { code: "+592", name: "Guyana" },
  { code: "+509", name: "Haiti" },
  { code: "+504", name: "Honduras" },
  { code: "+852", name: "Hong Kong" },
  { code: "+36", name: "Hungary" },
  { code: "+354", name: "Iceland" },
  { code: "+91", name: "India" },
  { code: "+62", name: "Indonesia" },
  { code: "+98", name: "Iran" },
  { code: "+964", name: "Iraq" },
  { code: "+353", name: "Ireland" },
  { code: "+972", name: "Israel" },
  { code: "+39", name: "Italy" },
  { code: "+1", name: "Jamaica" },
  { code: "+81", name: "Japan" },
  { code: "+962", name: "Jordan" },
  { code: "+7", name: "Kazakhstan" },
  { code: "+254", name: "Kenya" },
  { code: "+686", name: "Kiribati" },
  { code: "+965", name: "Kuwait" },
  { code: "+996", name: "Kyrgyzstan" },
  { code: "+856", name: "Laos" },
  { code: "+371", name: "Latvia" },
  { code: "+961", name: "Lebanon" },
  { code: "+266", name: "Lesotho" },
  { code: "+231", name: "Liberia" },
  { code: "+218", name: "Libya" },
  { code: "+423", name: "Liechtenstein" },
  { code: "+370", name: "Lithuania" },
  { code: "+352", name: "Luxembourg" },
  { code: "+853", name: "Macao" },
  { code: "+389", name: "Macedonia" },
  { code: "+261", name: "Madagascar" },
  { code: "+265", name: "Malawi" },
  { code: "+60", name: "Malaysia" },
  { code: "+960", name: "Maldives" },
  { code: "+223", name: "Mali" },
  { code: "+356", name: "Malta" },
  { code: "+692", name: "Marshall Islands" },
  { code: "+596", name: "Martinique" },
  { code: "+222", name: "Mauritania" },
  { code: "+230", name: "Mauritius" },
  { code: "+262", name: "Mayotte" },
  { code: "+52", name: "Mexico" },
  { code: "+691", name: "Micronesia" },
  { code: "+373", name: "Moldova" },
  { code: "+377", name: "Monaco" },
  { code: "+976", name: "Mongolia" },
  { code: "+382", name: "Montenegro" },
  { code: "+1", name: "Montserrat" },
  { code: "+212", name: "Morocco" },
  { code: "+258", name: "Mozambique" },
  { code: "+95", name: "Myanmar" },
  { code: "+264", name: "Namibia" },
  { code: "+674", name: "Nauru" },
  { code: "+977", name: "Nepal" },
  { code: "+31", name: "Netherlands" },
  { code: "+687", name: "New Caledonia" },
  { code: "+64", name: "New Zealand" },
  { code: "+505", name: "Nicaragua" },
  { code: "+227", name: "Niger" },
  { code: "+234", name: "Nigeria" },
  { code: "+683", name: "Niue" },
  { code: "+672", name: "Norfolk Island" },
  { code: "+1", name: "Northern Mariana Islands" },
  { code: "+47", name: "Norway" },
  { code: "+968", name: "Oman" },
  { code: "+92", name: "Pakistan" },
  { code: "+680", name: "Palau" },
  { code: "+970", name: "Palestine" },
  { code: "+507", name: "Panama" },
  { code: "+675", name: "Papua New Guinea" },
  { code: "+595", name: "Paraguay" },
  { code: "+51", name: "Peru" },
  { code: "+63", name: "Philippines" },
  { code: "+48", name: "Poland" },
  { code: "+351", name: "Portugal" },
  { code: "+1", name: "Puerto Rico" },
  { code: "+974", name: "Qatar" },
  { code: "+40", name: "Romania" },
  { code: "+7", name: "Russia" },
  { code: "+250", name: "Rwanda" },
  { code: "+590", name: "Saint Barthélemy" },
  { code: "+290", name: "Saint Helena" },
  { code: "+1", name: "Saint Kitts and Nevis" },
  { code: "+1", name: "Saint Lucia" },
  { code: "+590", name: "Saint Martin" },
  { code: "+508", name: "Saint Pierre and Miquelon" },
  { code: "+1", name: "Saint Vincent and the Grenadines" },
  { code: "+685", name: "Samoa" },
  { code: "+378", name: "San Marino" },
  { code: "+239", name: "Sao Tome and Principe" },
  { code: "+966", name: "Saudi Arabia" },
  { code: "+221", name: "Senegal" },
  { code: "+381", name: "Serbia" },
  { code: "+248", name: "Seychelles" },
  { code: "+232", name: "Sierra Leone" },
  { code: "+65", name: "Singapore" },
  { code: "+1", name: "Sint Maarten" },
  { code: "+421", name: "Slovakia" },
  { code: "+386", name: "Slovenia" },
  { code: "+677", name: "Solomon Islands" },
  { code: "+252", name: "Somalia" },
  { code: "+27", name: "South Africa" },
  { code: "+82", name: "South Korea" },
  { code: "+34", name: "Spain" },
  { code: "+94", name: "Sri Lanka" },
  { code: "+249", name: "Sudan" },
  { code: "+597", name: "Suriname" },
  { code: "+47", name: "Svalbard and Jan Mayen" },
  { code: "+268", name: "Swaziland" },
  { code: "+46", name: "Sweden" },
  { code: "+41", name: "Switzerland" },
  { code: "+963", name: "Syria" },
  { code: "+886", name: "Taiwan" },
  { code: "+992", name: "Tajikistan" },
  { code: "+255", name: "Tanzania" },
  { code: "+66", name: "Thailand" },
  { code: "+228", name: "Togo" },
  { code: "+690", name: "Tokelau" },
  { code: "+676", name: "Tonga" },
  { code: "+1", name: "Trinidad and Tobago" },
  { code: "+216", name: "Tunisia" },
  { code: "+90", name: "Turkey" },
  { code: "+993", name: "Turkmenistan" },
  { code: "+1", name: "Turks and Caicos Islands" },
  { code: "+688", name: "Tuvalu" },
  { code: "+256", name: "Uganda" },
  { code: "+380", name: "Ukraine" },
  { code: "+971", name: "United Arab Emirates" },
  { code: "+44", name: "United Kingdom" },
  { code: "+1", name: "United States" },
  { code: "+598", name: "Uruguay" },
  { code: "+998", name: "Uzbekistan" },
  { code: "+678", name: "Vanuatu" },
  { code: "+58", name: "Venezuela" },
  { code: "+84", name: "Vietnam" },
  { code: "+1", name: "Virgin Islands (British)" },
  { code: "+1", name: "Virgin Islands (U.S.)" },
  { code: "+681", name: "Wallis and Futuna" },
  { code: "+967", name: "Yemen" },
  { code: "+260", name: "Zambia" },
  { code: "+263", name: "Zimbabwe" }
];
function ContactDirect() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+62",
    phone: "",
    reason: "",
    message: ""
  });
  const [countries, setCountries] = useState(hardcodedCountries);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef(null);
  const filtered = useMemo(() => {
    if (!search.trim()) return countries;
    const q = search.toLowerCase();
    return countries.filter((c) => c.name.toLowerCase().includes(q));
  }, [countries, search]);
  useEffect(() => {
    const indonesia = hardcodedCountries.find((c) => c.name === "Indonesia");
    if (indonesia) {
      setFormData((p) => ({ ...p, countryCode: indonesia.code }));
    }
  }, []);
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
        setSearch("");
      }
    };
    if (open) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);
  return /* @__PURE__ */ jsx("section", { id: "contact", className: "py-20 bg-white", children: /* @__PURE__ */ jsxs("form", { onSubmit: (e) => {
    e.preventDefault();
    console.log(formData);
  }, className: "max-w-3xl mx-auto px-5 space-y-5", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium mb-1.5", children: "Full Name" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          required: true,
          value: formData.name,
          onChange: (e) => setFormData({ ...formData, name: e.target.value }),
          className: "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40",
          placeholder: "Enter your full name"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium mb-1.5", children: "Email Address" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "email",
          required: true,
          value: formData.email,
          onChange: (e) => setFormData({ ...formData, email: e.target.value }),
          className: "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40",
          placeholder: "you@company.com"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium mb-1.5", children: "Phone Number" }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative", ref, children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              onClick: () => {
                setOpen(!open);
                setSearch("");
              },
              className: "w-24 h-12 rounded-xl border border-border bg-background px-3 text-sm flex items-center justify-between",
              children: [
                /* @__PURE__ */ jsx("span", { children: formData.countryCode }),
                /* @__PURE__ */ jsx(ChevronDown, { className: "w-4 h-4" })
              ]
            }
          ),
          open && /* @__PURE__ */ jsxs("div", { className: "absolute z-50 top-full mt-1 w-64 rounded-xl border border-border bg-white shadow-lg", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                value: search,
                onChange: (e) => setSearch(e.target.value),
                placeholder: "Search...",
                className: "w-full px-3 py-2 text-sm border-b focus:outline-none",
                autoFocus: true
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "max-h-60 overflow-auto", children: filtered.length === 0 ? /* @__PURE__ */ jsx("div", { className: "px-3 py-4 text-sm text-gray-400 text-center", children: "No results" }) : filtered.map((c, i) => /* @__PURE__ */ jsxs(
              "div",
              {
                onClick: () => {
                  setFormData({ ...formData, countryCode: c.code });
                  setOpen(false);
                  setSearch("");
                },
                className: "px-3 py-2 text-sm cursor-pointer hover:bg-gray-100 flex justify-between",
                children: [
                  /* @__PURE__ */ jsx("span", { children: c.name }),
                  /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: c.code })
                ]
              },
              `${c.code}-${c.name}-${i}`
            )) })
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "tel",
            required: true,
            value: formData.phone,
            onChange: (e) => setFormData({ ...formData, phone: e.target.value }),
            className: "flex-1 rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40",
            placeholder: "812 3456 789"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium mb-1.5", children: "Reason" }),
      /* @__PURE__ */ jsxs(
        "select",
        {
          required: true,
          value: formData.reason,
          onChange: (e) => setFormData({ ...formData, reason: e.target.value }),
          className: "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40",
          children: [
            /* @__PURE__ */ jsx("option", { value: "", children: "Select reason" }),
            /* @__PURE__ */ jsx("option", { children: "SNI Product Certification" }),
            /* @__PURE__ */ jsx("option", { children: "Laboratory Testing" }),
            /* @__PURE__ */ jsx("option", { children: "Halal Certification" }),
            /* @__PURE__ */ jsx("option", { children: "General Inquiry" }),
            /* @__PURE__ */ jsx("option", { children: "Other" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium mb-1.5", children: "Message" }),
      /* @__PURE__ */ jsx(
        "textarea",
        {
          required: true,
          value: formData.message,
          onChange: (e) => setFormData({ ...formData, message: e.target.value }),
          rows: 4,
          className: "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none",
          placeholder: "Tell us about your needs..."
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "submit",
        className: "w-full rounded-xl bg-[#FDAA3E] text-[#1a1a1a] px-8 py-4 text-sm font-semibold hover:bg-[#fdb95e] transition-all shadow-lg",
        children: "Send Message"
      }
    )
  ] }) });
}
function Reviews() {
  return /* @__PURE__ */ jsxs("section", { id: "reviews", className: "py-28 relative bg-white", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 pointer-events-none", style: { backgroundImage: `url(${shadowBg})`, backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed", opacity: 0.75 } }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-5 relative", children: [
      /* @__PURE__ */ jsx(ScrollReveal, { children: /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-primary mb-3", children: "Client Success Stories" }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-bold tracking-tight text-foreground", style: { lineHeight: "1.15" }, children: "Trusted by Indonesian businesses" })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 gap-5", children: reviews.map((r, i) => /* @__PURE__ */ jsx(ScrollReveal, { delay: i * 80, children: /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border/50 bg-card p-6 hover:shadow-md hover:border-border transition-all duration-200", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex gap-0.5 mb-3", children: [
          Array.from({ length: Math.floor(r.rating) }).map((_, j) => /* @__PURE__ */ jsx(Star, { className: "w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" }, `full-${j}`)),
          r.rating % 1 !== 0 && /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", className: "w-4 h-4", children: [
            /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: "halfGrad", children: [
              /* @__PURE__ */ jsx("stop", { offset: "50%", stopColor: "#D4AF37" }),
              /* @__PURE__ */ jsx("stop", { offset: "50%", stopColor: "#E5E7EB" })
            ] }) }),
            /* @__PURE__ */ jsx(
              "path",
              {
                d: "M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z",
                fill: "url(#halfGrad)",
                stroke: "#D4AF37",
                strokeWidth: "1"
              }
            )
          ] }, "half"),
          Array.from({ length: 5 - Math.ceil(r.rating) }).map((_, j) => /* @__PURE__ */ jsx(Star, { className: "w-4 h-4 text-gray-300" }, `empty-${j}`))
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground leading-relaxed mb-4", children: r.quote }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 pt-4 border-t border-border/50", children: [
          /* @__PURE__ */ jsx("img", { src: r.avatar, alt: r.name, className: "w-10 h-10 rounded-full object-cover", loading: "lazy" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-foreground", children: r.name }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: r.role })
          ] })
        ] })
      ] }) }, r.name)) })
    ] })
  ] });
}
const heroBg = "/assets/hero-bg-BL3Dului.jpg";
function FinalCTA() {
  return /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden py-28", style: { background: "#050d0a" }, children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: heroBg,
        alt: "",
        width: 1920,
        height: 1080,
        loading: "lazy",
        className: "absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none select-none",
        "aria-hidden": "true"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#050d0a] via-transparent to-[#050d0a] pointer-events-none" }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 max-w-2xl mx-auto px-5 text-center", children: /* @__PURE__ */ jsxs(ScrollReveal, { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-bold tracking-tight text-white", style: { lineHeight: "1.15" }, children: "Ready to achieve compliance?" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-white max-w-md mx-auto", style: { textWrap: "pretty" }, children: "Partner with PT. Solusi Sertifikasi Nasional Indonesia and ensure your products meet all national standards." }),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "/login",
          className: "mt-8 inline-flex items-center gap-2 rounded-xl bg-[#FDAA3E] text-[#1a1a1a] px-8 py-4 text-sm font-semibold hover:bg-[#fdb95e] transition-all duration-200 active:scale-[0.97] shadow-lg shadow-[#FDAA3E]/25",
          children: [
            "Start your certification",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
          ]
        }
      )
    ] }) })
  ] });
}
const LOGO_URL = "https://res.cloudinary.com/dahp1ngcc/image/upload/v1782828720/WhatsApp_Image_2026-06-30_at_3.10.04_PM__1_-removebg-preview_x4cpws.png";
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "border-t border-border/40 py-12", children: /* @__PURE__ */ jsx("div", { className: "max-w-5xl mx-auto px-5", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-between gap-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx("img", { src: LOGO_URL, alt: "Solusi SNI", className: "h-7 w-auto" }),
      /* @__PURE__ */ jsxs("span", { className: "font-semibold text-foreground text-sm", children: [
        "PT ",
        /* @__PURE__ */ jsx("span", { className: "text-lg font-bold", children: "SS" }),
        "N"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6 text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsx("a", { href: "#services", className: "hover:text-foreground transition-colors", children: "Services" }),
      /* @__PURE__ */ jsx("a", { href: "#why-us", className: "hover:text-foreground transition-colors", children: "Why Us" }),
      /* @__PURE__ */ jsx("a", { href: "#agency", className: "hover:text-foreground transition-colors", children: "About" }),
      /* @__PURE__ */ jsx("a", { href: "#reviews", className: "hover:text-foreground transition-colors", children: "Clients" }),
      /* @__PURE__ */ jsx(Link, { to: "/login", className: "hover:text-foreground transition-colors", children: "Contact" })
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " PT. Solusi Sertifikasi Nasional Indonesia"
    ] })
  ] }) }) });
}
function SectionBlendWrapper({
  children,
  className = ""
}) {
  return /* @__PURE__ */ jsx("div", { className: `relative ${className}`, children });
}
function LandingPage() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background text-foreground", style: {
    backgroundImage: "url(/fae.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }, children: [
    /* @__PURE__ */ jsx(SectionBlendWrapper, { className: "section-fade-bottom", children: /* @__PURE__ */ jsx(Hero, {}) }),
    /* @__PURE__ */ jsx(SectionBlendWrapper, { className: "section-fade-top section-fade-bottom", children: /* @__PURE__ */ jsx(Services, {}) }),
    /* @__PURE__ */ jsx(SectionBlendWrapper, { className: "section-fade-top section-fade-bottom", children: /* @__PURE__ */ jsx(WhyChooseUs, {}) }),
    /* @__PURE__ */ jsx(SectionBlendWrapper, { className: "section-fade-top section-fade-bottom", children: /* @__PURE__ */ jsx(Contact, {}) }),
    /* @__PURE__ */ jsx(SectionBlendWrapper, { className: "section-fade-top section-fade-bottom", children: /* @__PURE__ */ jsx(ContactDirect, {}) }),
    /* @__PURE__ */ jsx(SectionBlendWrapper, { className: "section-fade-top section-fade-bottom", children: /* @__PURE__ */ jsx(Reviews, {}) }),
    /* @__PURE__ */ jsx(SectionBlendWrapper, { className: "section-fade-top", children: /* @__PURE__ */ jsx(FinalCTA, {}) }),
    /* @__PURE__ */ jsx(SectionBlendWrapper, { className: "section-fade-top", children: /* @__PURE__ */ jsx(Footer, {}) })
  ] });
}
export {
  LandingPage as component
};

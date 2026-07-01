import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Hero,
  Services,
  WhyChooseUs,
  Reviews,
  Contact,
  ContactDirect,
  FinalCTA,
  Footer,
} from "@/components/landing/index";

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      { title: "Ptssn — Your Partner in Product Certification & Compliance" },
      { name: "description", content: "PT. Solusi Sertifikasi Nasional Indonesia provides comprehensive compliance solutions, including SNI certification, laboratory testing, and halal certification, to help your business thrive in the Indonesian market." },
    ],
  }),
});

function SectionBlendWrapper({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {children}
    </div>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground" style={{ backgroundImage: 'url(/fae.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <SectionBlendWrapper className="section-fade-bottom">
        <Hero />
      </SectionBlendWrapper>
      <SectionBlendWrapper className="section-fade-top section-fade-bottom">
        <Services />
      </SectionBlendWrapper>
      <SectionBlendWrapper className="section-fade-top section-fade-bottom">
        <WhyChooseUs />
      </SectionBlendWrapper>
      <SectionBlendWrapper className="section-fade-top section-fade-bottom">
        <Contact />
      </SectionBlendWrapper>
      <SectionBlendWrapper className="section-fade-top section-fade-bottom">
        <ContactDirect />
      </SectionBlendWrapper>
      <SectionBlendWrapper className="section-fade-top section-fade-bottom">
        <Reviews />
      </SectionBlendWrapper>
      <SectionBlendWrapper className="section-fade-top">
        <FinalCTA />
      </SectionBlendWrapper>
      <SectionBlendWrapper className="section-fade-top">
        <Footer />
      </SectionBlendWrapper>
    </div>
  );
}
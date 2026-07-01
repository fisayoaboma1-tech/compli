import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Hero,
  Reviews,
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

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground" style={{ backgroundImage: 'url(/fae.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <Hero />
      <Reviews />
      <FinalCTA />
      <Footer />
    </div>
  );
}

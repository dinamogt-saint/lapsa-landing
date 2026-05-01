import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import ExampleBrief from "@/components/sections/ExampleBrief";
import ProblemSection from "@/components/sections/ProblemSection";
import Features from "@/components/sections/Features";
import UseCases from "@/components/sections/UseCases";
import BuiltFor from "@/components/sections/BuiltFor";
import HowItWorks from "@/components/sections/HowItWorks";
import IntegrationStatus from "@/components/sections/IntegrationStatus";
import Comparison from "@/components/sections/Comparison";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <Navbar />
      <Hero />
      <ExampleBrief />
      <ProblemSection />
      <Features />
      <UseCases />
      <BuiltFor />
      <HowItWorks />
      <IntegrationStatus />
      <Comparison />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}

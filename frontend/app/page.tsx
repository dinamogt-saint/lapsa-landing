import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import ExampleBrief from "@/components/sections/ExampleBrief";
import Features from "@/components/sections/Features";
import Comparison from "@/components/sections/Comparison";
import FAQ from "@/components/sections/FAQ";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <Navbar />
      <Hero />
      <ExampleBrief />
      <Features />
      <Comparison />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}

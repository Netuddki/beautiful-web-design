import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PainPoints from "@/components/PainPoints";
import FeaturesGrid from "@/components/FeaturesGrid";
import HowItWorks from "@/components/HowItWorks";
import RequestFeature from "@/components/RequestFeature";
import rentuaryLogo from "@/assets/rentuary-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <PainPoints />
        <FeaturesGrid />
        <HowItWorks />
        <RequestFeature />
      </main>

      <footer className="bg-charcoal text-white/60 py-12 border-t border-white/5">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <img
                src={rentuaryLogo}
                alt="Rentuary logó"
                width={32}
                height={32}
                loading="lazy"
                className="w-8 h-8 object-contain"
              />
              <span className="font-heading font-bold text-white">Rentuary</span>
            </div>
            <p className="text-sm font-body">
              © 2026 Rentuary. Minden jog fenntartva.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

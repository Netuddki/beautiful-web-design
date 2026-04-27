import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-charcoal text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-100 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 15% 20%, hsl(14 78% 57% / 0.18) 0%, transparent 45%),
                             radial-gradient(circle at 85% 80%, hsl(14 90% 65% / 0.12) 0%, transparent 45%)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container relative z-10 py-24 lg:py-36">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-xs font-body uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            A SaaS, ami végre mindent tud
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold leading-[1.05] tracking-tight">
            Megfáradtál a{" "}
            <span className="text-gradient">félkész</span> szoftverektől?
          </h1>

          <p className="text-lg md:text-xl text-white/70 font-body max-w-2xl mx-auto leading-relaxed">
            A Rentuary azoknak épült, akik már mindent kipróbáltak — és mindenből hiányzott valami.
            Nálunk megtalálod, amit eddig hiányoltál. Ha mégsem, kérd, és beletesszük.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="#features"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-heading font-semibold text-sm uppercase tracking-wider transition-all hover:shadow-lg hover:shadow-primary/30"
            >
              Fedezd fel a Rentuary-t
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#request"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/15 text-white rounded-lg font-heading font-semibold text-sm uppercase tracking-wider transition-all"
            >
              Kérj funkciót
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 pt-6 text-sm text-white/60 font-body">
            {["Korlátlan funkciók", "Saját kérések beépítése", "Magyar támogatás"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 leading-[0]">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L1440 60L1440 20C1440 20 1200 0 720 0C240 0 0 20 0 20L0 60Z" fill="hsl(0 0% 97%)" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

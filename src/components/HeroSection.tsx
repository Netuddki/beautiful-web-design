import { Car, Shield, Clock, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-charcoal text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(14 78% 57% / 0.15) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, hsl(14 78% 57% / 0.1) 0%, transparent 40%)`
        }} />
      </div>

      <div className="container relative z-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-sm font-body">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Elérhető járművek
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-[1.1] tracking-tight">
              Béreljen járművet{" "}
              <span className="text-gradient">egyszerűen</span>
            </h1>

            <p className="text-lg text-white/70 font-body max-w-lg leading-relaxed">
              Nálunk minőséget kap a pénzéért. Válasszon személyautók, terepjárók és lakóautók közül kedvező áron.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#vehicles" className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-heading font-semibold text-sm uppercase tracking-wider transition-all hover:shadow-lg hover:shadow-primary/25">
                <Car className="w-5 h-5" />
                Járművek megtekintése
              </a>
            </div>
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Car, label: "Elérhető jármű", value: "25+", desc: "Széles választék" },
              { icon: Shield, label: "Biztosítás", value: "100%", desc: "Teljes fedezet" },
              { icon: Clock, label: "Gyors foglalás", value: "5 perc", desc: "Online folyamat" },
              { icon: MapPin, label: "Átvételi pont", value: "Több helyszín", desc: "Országszerte" },
            ].map((stat, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-primary/30 transition-all duration-300"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <stat.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-2xl font-heading font-bold">{stat.value}</div>
                <div className="text-sm text-white/50 font-body mt-1">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L1440 60L1440 20C1440 20 1200 0 720 0C240 0 0 20 0 20L0 60Z" fill="hsl(0 0% 97%)" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

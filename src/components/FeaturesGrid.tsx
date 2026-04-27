import {
  LayoutDashboard,
  CalendarRange,
  Users,
  CreditCard,
  FileText,
  BarChart3,
  Bell,
  Plug,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: LayoutDashboard,
    title: "Egységes vezérlőpult",
    desc: "Minden, amire szükséged van, egyetlen áttekinthető felületen.",
  },
  {
    icon: CalendarRange,
    title: "Foglalások & naptár",
    desc: "Vizuális naptár, ütközésfigyelés, ismétlődő foglalások.",
  },
  {
    icon: Users,
    title: "Ügyfélkezelés",
    desc: "Teljes ügyféltörténet, jegyzetek, dokumentumok egy helyen.",
  },
  {
    icon: CreditCard,
    title: "Számlázás & fizetés",
    desc: "NAV-kompatibilis számlázás, online fizetés, automatikus emlékeztetők.",
  },
  {
    icon: FileText,
    title: "Szerződések",
    desc: "Sablonok, e-aláírás, automatikus generálás kattintással.",
  },
  {
    icon: BarChart3,
    title: "Riportok",
    desc: "Bevétel, kihasználtság, trendek — valós időben, vizualizálva.",
  },
  {
    icon: Bell,
    title: "Értesítések",
    desc: "E-mail, SMS, push — sosem maradsz le egy fontos eseményről.",
  },
  {
    icon: Plug,
    title: "Integrációk",
    desc: "Naptár, könyvelés, CRM — beköthető, amit használsz.",
  },
  {
    icon: ShieldCheck,
    title: "GDPR & biztonság",
    desc: "EU adatkezelés, titkosítás, szerepkör-alapú jogosultság.",
  },
];

const FeaturesGrid = () => {
  return (
    <section id="features" className="bg-charcoal text-white py-20 lg:py-28">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block text-xs font-body uppercase tracking-widest text-primary mb-4">
            Funkciók
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight">
            Minden, amit eddig hiányoltál
          </h2>
          <p className="mt-4 text-white/60 font-body text-lg">
            Egyetlen platform, amit a felhasználói visszajelzések alakítottak.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group p-7 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-primary/30 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-5 group-hover:bg-primary/25 transition-colors">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-white/60 font-body text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;

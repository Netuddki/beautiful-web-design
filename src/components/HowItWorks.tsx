const steps = [
  {
    n: "01",
    title: "Regisztrálj percek alatt",
    desc: "Hozz létre fiókot, és kezdd el azonnal — bankkártya nem kell.",
  },
  {
    n: "02",
    title: "Állítsd be magadnak",
    desc: "Igazítsd a Rentuary-t a saját üzleti folyamataidhoz, sablonokkal vagy nulláról.",
  },
  {
    n: "03",
    title: "Hiányzik valami? Kérd!",
    desc: "Egy űrlap, egy üzenet — ha értelmes, beépítjük a következő körben.",
  },
];

const HowItWorks = () => {
  return (
    <section className="container py-20 lg:py-28">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <span className="inline-block text-xs font-body uppercase tracking-widest text-primary mb-4">
          Hogyan működik
        </span>
        <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight text-foreground">
          Három lépés a teljességig
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
        {steps.map((s, i) => (
          <div
            key={s.n}
            className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all animate-fade-in"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="text-6xl font-heading font-extrabold text-primary/15 leading-none mb-4">
              {s.n}
            </div>
            <h3 className="font-heading font-bold text-xl text-foreground mb-3">
              {s.title}
            </h3>
            <p className="text-muted-foreground font-body leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;

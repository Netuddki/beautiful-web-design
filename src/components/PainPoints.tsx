import { XCircle, CheckCircle2 } from "lucide-react";

const painPoints = [
  "Hiányzó funkciók, amikre éppen szükséged lenne",
  "Lassú, túlbonyolított felhasználói felület",
  "Drága csomagok az alapfunkciókért",
  "Senki nem válaszol, ha kérsz valamit",
];

const solutions = [
  "Minden lényeges funkció egy helyen, kompromisszumok nélkül",
  "Letisztult, gyors felület — magyar nyelven",
  "Tisztességes árazás, rejtett költségek nélkül",
  "Ha hiányzik valami, kérd és beletesszük",
];

const PainPoints = () => {
  return (
    <section className="container py-20 lg:py-28">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <span className="inline-block text-xs font-body uppercase tracking-widest text-primary mb-4">
          A probléma
        </span>
        <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight text-foreground">
          Ismerős a forgatókönyv?
        </h2>
        <p className="mt-4 text-muted-foreground font-body text-lg">
          Egyik szoftver után a másik — és valami mindig hiányzik. Mi tudjuk, mert mi is végigjártuk.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
        {/* Pain card */}
        <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
          <h3 className="font-heading font-bold text-xl text-foreground mb-6">
            Amit eddig kaptál
          </h3>
          <ul className="space-y-4">
            {painPoints.map((p) => (
              <li key={p} className="flex items-start gap-3 font-body text-muted-foreground">
                <XCircle className="w-5 h-5 text-destructive/70 shrink-0 mt-0.5" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Solution card */}
        <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/5 to-transparent p-8 lg:p-10 shadow-lg shadow-primary/5">
          <h3 className="font-heading font-bold text-xl text-foreground mb-6">
            Amit a Rentuary ad
          </h3>
          <ul className="space-y-4">
            {solutions.map((p) => (
              <li key={p} className="flex items-start gap-3 font-body text-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;

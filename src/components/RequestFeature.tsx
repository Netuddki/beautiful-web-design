import { useState } from "react";
import { Send, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const RequestFeature = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [idea, setIdea] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!idea.trim()) return;
    toast({
      title: "Köszönjük az ötletedet!",
      description: "Megnézzük és visszajelzünk, mikor kerülhet be a Rentuary-be.",
    });
    setEmail("");
    setIdea("");
  };

  return (
    <section id="request" className="bg-charcoal text-white py-20 lg:py-28 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-100 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, hsl(14 78% 57% / 0.15) 0%, transparent 60%)`,
        }}
      />
      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/20 border border-primary/30 mb-6">
            <Lightbulb className="w-7 h-7 text-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight">
            Hiányzik valami? <span className="text-gradient">Kérd, és beletesszük.</span>
          </h2>
          <p className="mt-4 text-white/60 font-body text-lg">
            Komolyan gondoljuk. Minden értelmes kérést átnézünk, és a roadmapünk a felhasználói visszajelzésekből épül.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto space-y-4 p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
        >
          <Input
            type="email"
            placeholder="E-mail cím (opcionális)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white/10 border-white/15 text-white placeholder:text-white/40 h-12"
          />
          <Textarea
            placeholder="Mi az, amit más szoftverekben hiányoltál?"
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            required
            rows={5}
            className="bg-white/10 border-white/15 text-white placeholder:text-white/40 resize-none"
          />
          <Button
            type="submit"
            size="lg"
            className="w-full font-heading font-semibold uppercase tracking-wider"
          >
            <Send className="w-4 h-4 mr-2" />
            Elküldöm az ötletet
          </Button>
        </form>
      </div>
    </section>
  );
};

export default RequestFeature;

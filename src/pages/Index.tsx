import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VehicleFilters from "@/components/VehicleFilters";
import VehicleCard from "@/components/VehicleCard";
import { vehicles } from "@/data/vehicles";
import { Car } from "lucide-react";

const Index = () => {
  const [activeType, setActiveType] = useState("all");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredVehicles = useMemo(() => {
    return vehicles.filter((v) => {
      const typeMatch = activeType === "all" || v.type === activeType;
      const catMatch = activeCategory === "all" || v.category.toLowerCase() === activeCategory.toLowerCase();
      return typeMatch && catMatch;
    });
  }, [activeType, activeCategory]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />

      {/* Vehicle section */}
      <section id="vehicles" className="container py-16 lg:py-20">
        <VehicleFilters
          activeType={activeType}
          activeCategory={activeCategory}
          onTypeChange={setActiveType}
          onCategoryChange={setActiveCategory}
        />

        {/* Vehicle grid */}
        <div className="mt-8">
          {filteredVehicles.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredVehicles.map((vehicle, i) => (
                <div
                  key={vehicle.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <VehicleCard vehicle={vehicle} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Car className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground font-body text-lg">
                Nincs találat a kiválasztott szűrőkkel.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white/60 py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Car className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-heading font-bold text-white">AutoBérlés</span>
            </div>
            <p className="text-sm font-body">
              © 2026 AutoBérlés. Minden jog fenntartva.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

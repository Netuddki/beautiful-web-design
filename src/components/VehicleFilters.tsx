import { useState } from "react";
import { MapPin } from "lucide-react";

interface VehicleFiltersProps {
  activeType: string;
  activeCategory: string;
  onTypeChange: (type: string) => void;
  onCategoryChange: (category: string) => void;
}

const vehicleTypes = [
  { id: "all", label: "Összes" },
  { id: "személyautó", label: "Személyautó" },
  { id: "lakóautó", label: "Lakóautó" },
];

const categories = [
  { id: "all", label: "Összes" },
  { id: "amerikai", label: "Amerikai" },
  { id: "kisautó", label: "Kisautó" },
  { id: "sport", label: "Sport" },
  { id: "terepjáró", label: "Terepjáró" },
];

const VehicleFilters = ({ activeType, activeCategory, onTypeChange, onCategoryChange }: VehicleFiltersProps) => {
  return (
    <div className="space-y-6">
      {/* Info banner */}
      <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
        <h2 className="text-xl font-heading font-bold text-foreground">Bérelhető járműveink</h2>
        <p className="text-muted-foreground font-body mt-1">Válasszon autót a foglalási naptár megnyitásához.</p>
      </div>

      {/* Location picker */}
      <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
        <label className="flex items-center gap-2 text-sm font-body font-medium text-foreground mb-3">
          <MapPin className="w-4 h-4 text-primary" />
          Hol szeretné átvenni az autót?
        </label>
        <select className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors">
          <option>Összes</option>
          <option>Budapest</option>
          <option>Debrecen</option>
          <option>Szeged</option>
        </select>
      </div>

      {/* Type filters */}
      <div className="bg-card rounded-2xl p-6 border border-border shadow-sm space-y-4">
        <div>
          <span className="text-xs font-heading font-semibold uppercase tracking-wider text-muted-foreground">Típus</span>
          <div className="flex flex-wrap gap-2 mt-3">
            {vehicleTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => onTypeChange(type.id)}
                className={`px-4 py-2 rounded-lg text-sm font-body font-medium transition-all ${
                  activeType === type.id
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        <div className="border-t border-border pt-4">
          <span className="text-xs font-heading font-semibold uppercase tracking-wider text-muted-foreground">Kategória</span>
          <div className="flex flex-wrap gap-2 mt-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onCategoryChange(cat.id)}
                className={`px-4 py-2 rounded-lg text-sm font-body font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleFilters;

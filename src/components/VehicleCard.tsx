import { Users, Gauge, Weight, Zap, Tag, MapPin, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface Vehicle {
  id: number;
  name: string;
  image: string;
  passengers: number;
  weight: number;
  maxWeight: number;
  horsepower: number;
  topSpeed: number;
  fuel: string;
  category: string;
  type: string;
  pricePerDay: number;
  includedKm: number;
  deposit: number;
  hasFloorPlan?: boolean;
}

interface VehicleCardProps {
  vehicle: Vehicle;
}

const VehicleCard = ({ vehicle }: VehicleCardProps) => {
  return (
    <div className="group bg-card rounded-2xl border border-border shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300 overflow-hidden">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1 rounded-full text-xs font-heading font-semibold bg-charcoal/80 text-white backdrop-blur-sm">
            {vehicle.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-heading font-bold text-foreground">{vehicle.name}</h3>
          <div className="text-right">
            <span className="text-xl font-heading font-extrabold text-primary">
              {vehicle.pricePerDay.toLocaleString("hu-HU")}
            </span>
            <span className="text-xs text-muted-foreground font-body block">Ft / nap</span>
          </div>
        </div>

        {/* Specs grid */}
        <div className="grid grid-cols-2 gap-2">
          {[
            { icon: Users, label: "Utasok", value: vehicle.passengers },
            { icon: Zap, label: "Lóerő", value: vehicle.horsepower },
            { icon: Weight, label: "Tömeg", value: `${vehicle.weight} kg` },
            { icon: Gauge, label: "Végseb.", value: `${vehicle.topSpeed} km/h` },
          ].map((spec, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground font-body">
              <spec.icon className="w-3.5 h-3.5 text-primary/60" />
              <span>{spec.label}:</span>
              <span className="font-medium text-foreground">{spec.value}</span>
            </div>
          ))}
        </div>

        {/* Details */}
        <div className="border-t border-border pt-3 space-y-1.5">
          <div className="flex items-center gap-2 text-xs text-muted-foreground font-body">
            <MapPin className="w-3.5 h-3.5" />
            <span>Tartalmazott táv: <strong className="text-foreground">{vehicle.includedKm} km</strong></span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground font-body">
            <Tag className="w-3.5 h-3.5" />
            <span>Kaució: <strong className="text-foreground">{vehicle.deposit.toLocaleString("hu-HU")} Ft</strong></span>
          </div>
          {vehicle.fuel && (
            <div className="flex items-center gap-2 text-xs text-muted-foreground font-body">
              <Zap className="w-3.5 h-3.5" />
              <span>Üzemanyag: <strong className="text-foreground">{vehicle.fuel}</strong></span>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-1">
          <Button className="flex-1 font-heading font-semibold text-xs uppercase tracking-wider">
            Foglalás
          </Button>
          {vehicle.hasFloorPlan && (
            <Button variant="outline" size="icon" className="shrink-0">
              <Info className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;

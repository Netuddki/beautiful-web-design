import { useState } from "react";
import { Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import rentuaryLogo from "@/assets/rentuary-logo.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-charcoal/95 backdrop-blur-md border-b border-white/10">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5">
          <img
            src={rentuaryLogo}
            alt="Rentuary logó"
            width={40}
            height={40}
            className="w-10 h-10 object-contain"
          />
          <span className="font-heading font-bold text-xl tracking-tight text-white">
            Rentuary
          </span>
        </a>

        {/* Desktop login */}
        <div className="hidden md:flex items-center gap-3">
          <select className="bg-white/10 text-white/80 border border-white/10 rounded-md px-3 py-2 text-sm font-body focus:outline-none focus:ring-1 focus:ring-primary">
            <option value="hu">Magyar</option>
            <option value="en">English</option>
            <option value="de">Deutsch</option>
          </select>
          <Input
            placeholder="E-mail cím"
            className="w-36 bg-white/10 border-white/10 text-white placeholder:text-white/40 text-sm h-9"
          />
          <Input
            type="password"
            placeholder="Jelszó"
            className="w-32 bg-white/10 border-white/10 text-white placeholder:text-white/40 text-sm h-9"
          />
          <Button size="sm" className="font-heading font-semibold text-xs uppercase tracking-wider">
            <User className="w-4 h-4 mr-1" />
            Bejelentkezés
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-charcoal border-t border-white/10 p-4 space-y-3">
          <Input placeholder="E-mail cím" className="bg-white/10 border-white/10 text-white placeholder:text-white/40" />
          <Input type="password" placeholder="Jelszó" className="bg-white/10 border-white/10 text-white placeholder:text-white/40" />
          <Button className="w-full font-heading font-semibold">
            <User className="w-4 h-4 mr-2" />
            Bejelentkezés
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import { ChevronDown, ArrowUpRight } from "lucide-react";

const Header = () => {
  return (
    <header className="flex w-full items-center justify-between px-[75px] py-4 bg-card border-b border-border">
      <img
        className="w-[184px] h-14 object-contain"
        src="https://c.animaapp.com/mgb0i1n04Vr9F3/img/demco-logo-1.svg"
        alt="Demco Logo"
      />
      
      <nav className="inline-flex items-center gap-6">
        <a
          href="#"
          className="font-sans font-normal text-foreground text-sm hover:text-primary transition-colors"
        >
          SNIEDZĒJIEM
        </a>
        <a
          href="#"
          className="font-sans font-normal text-foreground text-sm hover:text-primary transition-colors"
        >
          SADARBĪBA UN KONTAKTI
        </a>
        <a
          href="#"
          className="font-sans font-normal text-foreground text-sm hover:text-primary transition-colors"
        >
          SADARBĪBA UN KONTAKTI
        </a>
      </nav>

      <div className="inline-flex items-center gap-2.5">
        <button className="inline-flex h-14 justify-center gap-2.5 px-3 py-4 items-center hover:bg-muted transition-colors">
          <span className="font-sans font-normal text-foreground text-base">
            LV
          </span>
          <ChevronDown className="w-4 h-4" />
        </button>
        
        <button className="inline-flex justify-center gap-2.5 px-8 py-4 bg-gradient-hero items-center hover:opacity-90 transition-opacity">
          <span className="font-sans font-bold text-white text-base">
            Skatīt pakalpojumus
          </span>
          <ArrowUpRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </header>
  );
};

export default Header;

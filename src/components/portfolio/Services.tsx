import { Paintbrush, LayoutGrid, TrendingUp, MapPin, Zap, Component } from "lucide-react";

const services = [
  {
    icon: Paintbrush,
    tag: "Design",
    title: "UX/UI Design",
    desc: "Interfaces intuitivas e sem fricção, combinando estética, usabilidade e foco no negócio.",
    visual: (
      <div className="absolute inset-4 bg-background shadow-sm rounded-lg border border-neutral-200 p-3">
        <div className="flex gap-1.5 mb-3">
          <div className="w-2 h-2 rounded-full bg-red-400/80" />
          <div className="w-2 h-2 rounded-full bg-amber-400/80" />
          <div className="w-2 h-2 rounded-full bg-green-400/80" />
        </div>
        <div className="space-y-2">
          <div className="h-2 w-1/3 bg-neutral-200 rounded-full" />
          <div className="grid grid-cols-2 gap-2">
            <div className="h-16 bg-neutral-50 rounded border border-neutral-100" />
            <div className="h-16 bg-neutral-50 rounded border border-neutral-100" />
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: Component,
    tag: "Systems",
    title: "Design Systems",
    desc: "De tokens a componentes documentados — escala, consistência e velocidade para times de produto.",
    visual: (
      <div className="absolute inset-4 grid grid-cols-3 gap-2">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className={`rounded-md border ${
              i % 3 === 0 ? "bg-foreground" : "bg-background border-neutral-200"
            }`}
          />
        ))}
      </div>
    ),
  },
  {
    icon: TrendingUp,
    tag: "Growth",
    title: "Tráfego Pago",
    desc: "Campanhas de performance no Meta e Google Ads, criativos e funis pensados para conversão real.",
    visual: (
      <div className="absolute inset-4 bg-background rounded-lg border border-neutral-200 p-4 flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400">CTR</span>
          <span className="font-mono text-xs text-foreground">+182%</span>
        </div>
        <svg viewBox="0 0 100 30" className="w-full h-12">
          <polyline
            points="0,25 15,20 30,22 45,12 60,15 75,6 100,2"
            fill="none"
            stroke="hsl(var(--brand-accent))"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    ),
  },
  {
    icon: MapPin,
    tag: "Local",
    title: "Google Meu Negócio",
    desc: "Otimização completa do perfil, fotos, avaliações e SEO local para ranquear na sua região.",
    visual: (
      <div className="absolute inset-4 bg-background rounded-lg border border-neutral-200 p-3 flex gap-3">
        <div className="w-10 h-10 rounded-full bg-neutral-900 grid place-items-center">
          <MapPin className="w-5 h-5 text-background" />
        </div>
        <div className="flex-1 space-y-1.5">
          <div className="h-2 w-2/3 bg-neutral-200 rounded-full" />
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="w-2 h-2 bg-amber-400 rounded-sm" />
            ))}
          </div>
          <div className="h-1.5 w-1/2 bg-neutral-100 rounded-full" />
        </div>
      </div>
    ),
  },
  {
    icon: Zap,
    tag: "Automation",
    title: "Automações",
    desc: "Fluxos inteligentes para CRM, atendimento e operação — menos repetição, mais resultado.",
    visual: (
      <div className="absolute inset-4 bg-background rounded-lg border border-neutral-200 p-4 flex items-center justify-center gap-3">
        <div className="w-8 h-8 rounded-md border border-neutral-200 grid place-items-center font-mono text-[10px]">A</div>
        <div className="h-px flex-1 bg-neutral-300 relative">
          <span className="absolute -top-1 right-0 w-2 h-2 rounded-full bg-brand-accent" />
        </div>
        <div className="w-8 h-8 rounded-md bg-foreground text-background grid place-items-center font-mono text-[10px]">B</div>
      </div>
    ),
  },
  {
    icon: LayoutGrid,
    tag: "Brand",
    title: "Identidade Digital",
    desc: "Estratégia, branding e presença online consistentes — do logo ao social, pensados em conjunto.",
    visual: (
      <div className="absolute inset-4 bg-foreground rounded-lg p-4 flex items-end">
        <span className="font-semibold text-3xl tracking-tighter text-background">
          ldv<span className="text-neutral-400">.</span>
        </span>
      </div>
    ),
  },
];

const Services = () => {
  return (
    <section id="services" className="sm:px-8 px-6 bg-neutral-50 border-t border-neutral-200">
      <div className="py-24 max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest font-mono">
              Serviços
            </span>
            <div className="h-px flex-1 bg-neutral-200" />
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-4 max-w-3xl text-balance">
            Design, marketing e tecnologia — entregues como uma experiência única.
          </h2>
          <p className="text-base md:text-lg text-neutral-500 font-mono max-w-2xl">
            De interfaces escaláveis a campanhas de performance e SEO local — tudo
            pensado para que sua marca cresça com consistência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group bg-background border border-neutral-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-44 mb-6 bg-neutral-100 rounded-xl overflow-hidden relative border border-neutral-100">
                  {s.visual}
                </div>
                <div className="inline-flex gap-2 items-center bg-neutral-100 text-neutral-600 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-mono mb-4 border border-neutral-200">
                  <Icon className="w-3 h-3" /> {s.tag}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 tracking-tight">
                  {s.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed font-mono">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

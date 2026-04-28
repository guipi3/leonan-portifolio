const stats = [
  { value: "2+", label: "Anos de experiência" },
  { value: "30+", label: "Projetos entregues" },
  { value: "10+", label: "Clientes ativos" },
  { value: "100%", label: "Foco em resultado" },
];

const Agency = () => {
  return (
    <section id="agency" className="sm:px-8 px-6 bg-foreground text-background border-t border-neutral-900">
      <div className="py-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest font-mono">
                Agência
              </span>
              <div className="h-px flex-1 bg-neutral-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-balance">
              Uma operação completa de design + marketing.
            </h2>
            <p className="text-neutral-400 font-mono leading-relaxed mb-8">
              Junto a um time enxuto, ajudo negócios a crescerem combinando design
              de produto, tráfego pago e presença digital local. Tudo alinhado,
              tudo medido.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase border-b border-background pb-1 hover:text-neutral-400 hover:border-neutral-400 transition-all font-mono"
            >
              Trabalhe comigo →
            </a>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-px bg-neutral-600 border border-neutral-600 rounded-2xl overflow-hidden">
            {stats.map((s) => (
              <div key={s.label} className="bg-foreground p-8">
                <div className="text-5xl md:text-6xl font-semibold tracking-tighter mb-2">
                  {s.value}
                </div>
                <div className="text-xs uppercase tracking-widest text-neutral-400 font-mono">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agency;

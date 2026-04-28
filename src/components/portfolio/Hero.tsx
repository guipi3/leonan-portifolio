const Hero = () => {
  return (
    <header className="relative w-full min-h-screen flex flex-col justify-between p-6 sm:p-12 z-10 overflow-hidden bg-background">
      {/* Subtle radial backdrop */}
      <div
        className="absolute inset-0 -z-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 30%, hsl(0 0% 95%), transparent 70%)",
        }}
      />

      {/* Top Nav */}
      <div className="flex justify-between items-start w-full max-w-[1400px] mx-auto z-10 animate-fade-up">
        <div className="text-lg font-bold tracking-tight text-foreground">
          leonan<span className="text-neutral-400">.doval</span>
        </div>
        <nav className="hidden sm:flex gap-8 text-xs font-medium text-neutral-500 uppercase tracking-wider font-mono">
          <a className="hover:text-foreground transition-colors" href="#about">sobre</a>
          <a className="hover:text-foreground transition-colors" href="#services">serviços</a>
          <a className="hover:text-foreground transition-colors" href="#agency">agência</a>
          <a className="hover:text-foreground transition-colors" href="#contact">contato</a>
        </nav>
      </div>

      {/* Hero Footer Content */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-12 w-full max-w-[1400px] mx-auto mb-4 z-10">
        {/* Left Info */}
        <div className="max-w-xs space-y-8 animate-fade-up delay-200">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              Disponível para projetos
            </span>
          </div>
          <p className="text-sm leading-relaxed text-neutral-600 font-medium">
            Product Designer com foco em Design Systems escaláveis. Fundador de
            agência de marketing — unindo design, tráfego pago e presença digital
            para acelerar produtos e negócios.
          </p>
          <a
            href="#about"
            className="group inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase border-b border-foreground pb-1 hover:text-neutral-600 hover:border-neutral-400 transition-all cursor-pointer font-mono"
          >
            Explorar
            <span className="group-hover:translate-y-0.5 transition-transform duration-300">
              ↓
            </span>
          </a>
        </div>

        {/* Right Title */}
        <div className="text-right animate-fade-up delay-300">
          <h1 className="text-5xl md:text-7xl lg:text-[8.5rem] font-semibold tracking-tighter leading-[0.85] text-foreground">
            <span className="block">Leonan</span>
            <span className="block italic font-light text-neutral-600">do Val</span>
          </h1>
          <p className="text-xl md:text-3xl text-neutral-400 font-normal mt-4 tracking-tight font-mono">
            Product Designer · since 2024
          </p>
        </div>
      </div>
    </header>
  );
};

export default Hero;

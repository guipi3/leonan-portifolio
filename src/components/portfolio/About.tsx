import portrait from "@/assets/leonan-portrait.jpeg";
import { ArrowDownRight } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="sm:px-8 px-6 pt-24 pb-20 border-t border-neutral-100 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Portrait */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden bg-neutral-100 rounded-2xl aspect-[4/5] group">
              <img
                src={portrait}
                alt="Retrato de Leonan do Val"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
              <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm border border-neutral-200 px-3 py-1.5 rounded-full">
                <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-600">
                  Rio de Janeiro · BR
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <ArrowDownRight className="w-4 h-4 text-neutral-400" />
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                Sobre
              </span>
              <div className="h-px flex-1 bg-neutral-200" />
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 tracking-tight text-balance">
              Product Designer & founder de agência de marketing.
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-neutral-600 mb-10 font-mono">
              Sou Product Designer com 2 anos de experiência. Crio interfaces
              escaláveis com Design Systems sólidos — de tokens a componentes,
              automações, tráfego pago e Google Meu Negócio — garantindo
              consistência, eficiência e experiências digitais de alta qualidade
              para times de produto e tecnologia.
            </p>

            {/* Skills */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="space-y-3">
                <h3 className="text-xs font-semibold text-foreground font-mono uppercase tracking-widest">
                  Skills
                </h3>
                <ul className="text-sm text-neutral-500 space-y-2 font-mono">
                  <li>— UI/UX Design</li>
                  <li>— Design Systems</li>
                  <li>— Tokens & Componentes</li>
                  <li>— Automações</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-xs font-semibold text-foreground font-mono uppercase tracking-widest">
                  Marketing
                </h3>
                <ul className="text-sm text-neutral-500 space-y-2 font-mono">
                  <li>— Tráfego Pago</li>
                  <li>— Google Meu Negócio</li>
                  <li>— Performance</li>
                  <li>— SEO Local</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#services"
                className="px-6 py-3 rounded-lg bg-foreground text-background font-medium hover:bg-neutral-600 transition-colors font-mono text-sm"
              >
                Ver serviços
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=5521970443022&text=Ol%C3%A1+Leonan%2C+vim+pelo+seu+portfolio."
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-lg border border-neutral-200 text-foreground font-medium hover:bg-neutral-50 transition-colors font-mono text-sm"
              >
                Falar no WhatsApp →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

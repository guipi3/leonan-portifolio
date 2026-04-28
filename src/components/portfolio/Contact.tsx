import { Phone, MessageCircle, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="sm:px-8 px-6 border-t border-neutral-100 bg-background">
      <div className="py-28 max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest font-mono">
            Contato
          </span>
          <div className="h-px flex-1 bg-neutral-200" />
        </div>

        <h2 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[0.9] mb-12 text-balance">
          Vamos construir <br />
          <span className="italic font-light text-neutral-500">algo bom juntos.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          <a
            href="https://api.whatsapp.com/send/?phone=5521970443022&text=Ol%C3%A1+Leonan%2C+vim+pelo+seu+portfolio."
            target="_blank"
            rel="noreferrer"
            className="group border border-neutral-200 rounded-2xl p-6 hover:bg-neutral-50 transition-colors"
          >
            <MessageCircle className="w-5 h-5 text-neutral-400 mb-6 group-hover:text-foreground transition-colors" />
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-1">
              WhatsApp
            </div>
            <div className="text-lg font-medium tracking-tight">(21) 97044-3022</div>
          </a>
          <a
            href="tel:+5521970443022"
            className="group border border-neutral-200 rounded-2xl p-6 hover:bg-neutral-50 transition-colors"
          >
            <Phone className="w-5 h-5 text-neutral-400 mb-6 group-hover:text-foreground transition-colors" />
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-1">
              Telefone
            </div>
            <div className="text-lg font-medium tracking-tight">+55 21 97044-3022</div>
          </a>
          <a
            href="mailto:contato@leonandoval.com"
            className="group border border-neutral-200 rounded-2xl p-6 hover:bg-neutral-50 transition-colors"
          >
            <Mail className="w-5 h-5 text-neutral-400 mb-6 group-hover:text-foreground transition-colors" />
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-1">
              E-mail
            </div>
            <div className="text-lg font-medium tracking-tight">contato@leonandoval.com</div>
          </a>
        </div>

        <a
          href="https://api.whatsapp.com/send/?phone=5521970443022&text=Ol%C3%A1+Leonan%2C+vim+pelo+seu+portfolio."
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-foreground text-background font-medium hover:bg-neutral-600 transition-colors font-mono text-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent" />
          </span>
          Iniciar um projeto →
        </a>
      </div>

      <footer className="border-t border-neutral-100 py-8 max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-neutral-400 uppercase tracking-widest">
          <span>© {new Date().getFullYear()} Leonan do Val</span>
          <span>Product Designer · Rio de Janeiro</span>
        </div>
      </footer>
    </section>
  );
};

export default Contact;

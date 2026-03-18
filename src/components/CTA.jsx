import AnimatedTitle from './AnimatedTitle'

const WHATSAPP_URL =
  'https://wa.me/5518997975547?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Benevere.'
const PHONE_URL = 'tel:+5518997975547'

function CTA() {
  return (
    <section id="contato" className="parallax-section container-base py-16 sm:py-24">
      <div
        data-reveal
        className="reveal grid-pattern relative overflow-hidden rounded-3xl border border-white/35 bg-gradient-to-br from-navy via-[#2b4768] to-[#58c0f9] px-6 py-12 text-white shadow-[0_28px_70px_rgba(30,51,78,0.35)] sm:px-10 sm:py-14"
      >
        <div className="absolute inset-0 bg-navy/25" />
        <div
          data-parallax
          data-parallax-speed="0.08"
          className="hero-orb parallax-orb absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl"
        />
        <div
          data-parallax
          data-parallax-speed="0.06"
          className="hero-orb hero-orb-delayed parallax-orb absolute -left-12 bottom-0 h-28 w-28 rounded-full bg-blueGray/20 blur-2xl"
        />
        <div className="relative text-center">
          <AnimatedTitle
            text="Dê o próximo passo para um sorriso de alto padrão."
            className="text-3xl font-semibold tracking-tight text-white drop-shadow-sm sm:text-4xl"
          />
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-white sm:text-base">
            Atendimento exclusivo, diagnóstico preciso e plano personalizado para você conquistar um
            sorriso saudável, funcional e esteticamente natural.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-grayLight">
            <span className="cta-capsule rounded-full px-3 py-1.5">Atendimento individual</span>
            <span className="cta-capsule rounded-full px-3 py-1.5">Planejamento digital</span>
            <span className="cta-capsule rounded-full px-3 py-1.5">Resultados naturais</span>
          </div>
          <p className="mt-6 text-sm font-semibold text-white/90">
            Retorno rápido no WhatsApp durante horário comercial.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-medium tracking-wide text-[#1e334e] shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-grayLight"
            >
              Agendar pelo WhatsApp
            </a>
            <a
              href={PHONE_URL}
              className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-white/70 bg-white/10 px-7 py-3 text-sm font-medium tracking-wide text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/20"
            >
              Ligar para a clínica
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA

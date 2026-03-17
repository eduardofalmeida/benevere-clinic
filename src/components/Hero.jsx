import AnimatedTitle from './AnimatedTitle'

const WHATSAPP_URL =
  'https://wa.me/5518996119622?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Benevere.'

function Hero() {
  return (
    <section id="inicio" className="aurora-hero parallax-section relative overflow-hidden bg-gradient-to-br from-navy to-blueGray">
      <div className="absolute inset-0 bg-navy/35" />
      <div
        data-parallax
        data-parallax-speed="0.1"
        className="hero-orb parallax-orb absolute -left-14 top-20 h-44 w-44 rounded-full bg-blueGray/25 blur-3xl"
      />
      <div
        data-parallax
        data-parallax-speed="0.07"
        className="hero-orb hero-orb-delayed parallax-orb absolute right-10 top-16 h-56 w-56 rounded-full bg-blueGray/20 blur-3xl"
      />
      <div className="container-base relative py-14 sm:py-20 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div data-reveal className="reveal">
          <p className="mb-4 inline-flex rounded-full border border-white/45 bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white">
            Odontologia premium
          </p>
          <AnimatedTitle
            as="h1"
            text="Cuidamos do seu sorriso com atenção de verdade, do começo ao fim."
            className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
          />
          <p className="mt-6 max-w-xl text-base leading-relaxed text-grayLight sm:text-lg">
            Cada detalhe pensado pra você se sentir bem em todas as etapas. 😁
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold tracking-wide text-[#1e334e] shadow-[0_10px_30px_rgba(57,215,255,0.25)] transition duration-300 hover:-translate-y-0.5 hover:bg-grayLight"
            >
              Agendar Consulta
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center rounded-full border border-white/70 bg-white/10 px-7 py-3 text-sm font-semibold tracking-wide text-white backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:bg-white/20"
            >
              Conhecer Serviços
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-1.5 text-[10px] font-semibold uppercase tracking-[0.06em] text-grayLight sm:text-[11px]">
            <span className="rounded-full border border-white/35 bg-white/10 px-2.5 py-1">
              Resposta rápida no WhatsApp
            </span>
            <span className="rounded-full border border-white/35 bg-white/10 px-2.5 py-1">
              Atendimento com hora marcada
            </span>
            <span className="rounded-full border border-white/35 bg-white/10 px-2.5 py-1">
              Avaliação personalizada
            </span>
          </div>

          <div className="mt-9 grid max-w-xl grid-cols-2 gap-3">
            <div className="rounded-2xl border border-white/30 bg-white/15 p-4 text-center backdrop-blur-sm">
              <p className="text-2xl font-bold text-white">+12</p>
              <p className="mt-1 text-xs text-grayLight">Anos de atuação</p>
            </div>
            <div className="rounded-2xl border border-white/30 bg-white/15 p-4 text-center backdrop-blur-sm">
              <p className="text-2xl font-bold text-white">+5 mil</p>
              <p className="mt-1 text-xs text-grayLight">Sorrisos cuidados</p>
            </div>
          </div>
        </div>

        <div data-reveal className="reveal">
          <div className="relative">
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-blueGray/25 blur-2xl" />
            <img
              src="/hero-benevere-real.png"
              alt="Especialista da Benevere no consultorio"
              className="h-[370px] w-full rounded-3xl border border-white/80 object-cover shadow-[0_24px_70px_rgba(31,58,109,0.32)] sm:h-[460px]"
              loading="lazy"
            />
            <div className="absolute bottom-4 left-4 max-w-xs rounded-2xl border border-navy/20 bg-white p-4 shadow-premium">
              <p className="text-sm leading-relaxed text-[#1e334e]">
                &ldquo;Pra mim, cada paciente é único. Meu compromisso é cuidar do seu sorriso com
                atenção, calma e transparência, em cada etapa do tratamento.&rdquo;
              </p>
              <p className="mt-2 text-xs font-semibold text-[#1e334e]">— Dr. Diem</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Hero

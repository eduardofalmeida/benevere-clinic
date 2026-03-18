import AnimatedTitle from './AnimatedTitle'

const WHATSAPP_URL =
  'https://wa.me/5518997975547?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Benevere.'

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
          <div className="mt-8 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-[3.25rem] items-center justify-center rounded-full border border-white/30 bg-gradient-to-br from-[#1e334e] via-[#245a8a] to-[#58c0f9] px-2 py-2.5 text-center text-[11px] font-bold leading-tight tracking-wide text-white shadow-[0_10px_32px_rgba(30,51,78,0.55),0_0_24px_rgba(88,192,249,0.25)] transition duration-300 hover:brightness-110 active:scale-[0.98] sm:min-h-0 sm:border-transparent sm:bg-white sm:bg-none sm:px-7 sm:py-3 sm:text-sm sm:font-semibold sm:tracking-wide sm:text-[#1e334e] sm:shadow-[0_10px_30px_rgba(57,215,255,0.25)] sm:hover:-translate-y-0.5 sm:hover:bg-grayLight sm:hover:brightness-100 sm:active:scale-100"
            >
              Agendar Consulta
            </a>
            <a
              href="#servicos"
              className="flex min-h-[3.25rem] items-center justify-center rounded-full border border-white/70 bg-white/10 px-2 py-2.5 text-center text-[11px] font-semibold leading-tight tracking-wide text-white backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:bg-white/20 sm:min-h-0 sm:px-7 sm:py-3 sm:text-sm"
            >
              Conhecer Serviços
            </a>
          </div>

          <ul className="mx-auto mt-6 grid max-w-md list-none grid-cols-2 justify-items-center gap-x-2 gap-y-2 px-2 text-[10px] leading-snug text-white/75 sm:flex sm:max-w-none sm:flex-wrap sm:justify-center sm:gap-x-10 sm:px-0 sm:text-sm sm:text-grayLight">
            <li className="flex w-full max-w-[10.5rem] items-start justify-center gap-1.5 text-center sm:w-auto sm:max-w-none sm:justify-start sm:text-left">
              <span
                className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#58c0f9]"
                aria-hidden
              />
              <span className="font-medium normal-case tracking-normal">
                Resposta rápida no WhatsApp
              </span>
            </li>
            <li className="flex w-full max-w-[10.5rem] items-start justify-center gap-1.5 text-center sm:w-auto sm:max-w-none sm:justify-start sm:text-left">
              <span
                className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#58c0f9]"
                aria-hidden
              />
              <span className="font-medium normal-case tracking-normal">
                Avaliação personalizada
              </span>
            </li>
          </ul>

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
              alt="Especialista da Benevere no consultório"
              className="h-[370px] w-full rounded-3xl border border-white/80 object-cover shadow-[0_24px_70px_rgba(31,58,109,0.32)] sm:h-[460px]"
              loading="lazy"
            />
            <div className="absolute bottom-4 left-4 max-w-xs rounded-2xl border border-navy/20 bg-white p-4 shadow-premium">
              <p className="text-sm leading-relaxed text-[#1e334e]">
                &ldquo;Pra mim, cada paciente é único. Meu compromisso é cuidar do seu sorriso com
                atenção, calma e transparência, em cada etapa do tratamento.&rdquo;
              </p>
              <p className="mt-2 text-xs font-semibold text-[#1e334e]">— Dr. Diem</p>
                <p className="mt-1 text-[11px] font-semibold text-[#1e334e]/80">
                  CRO/SP: 105.569
                </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Hero

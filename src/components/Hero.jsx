const WHATSAPP_URL =
  'https://wa.me/SEUNUMERO?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Benevere.'

function Hero() {
  return (
    <section id="inicio" className="container-base py-14 sm:py-20 lg:py-28">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div data-reveal className="reveal">
          <p className="mb-4 inline-flex rounded-full border border-blueGray/40 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blueGray">
            Odontologia premium
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-navy sm:text-5xl lg:text-6xl">
            Benevere Odontologia
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-grayMedium sm:text-lg">
            Sorriso saudável com tecnologia e cuidado em cada detalhe.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Agendar Consulta
            </a>
            <a href="#servicos" className="btn-outline">
              Conhecer Serviços
            </a>
          </div>

          <div className="mt-9 grid max-w-xl grid-cols-3 gap-3">
            <div className="premium-card p-4 text-center">
              <p className="text-2xl font-bold text-navy">+12</p>
              <p className="mt-1 text-xs text-grayMedium">Anos de atuação</p>
            </div>
            <div className="premium-card p-4 text-center">
              <p className="text-2xl font-bold text-navy">+5 mil</p>
              <p className="mt-1 text-xs text-grayMedium">Sorrisos cuidados</p>
            </div>
            <div className="premium-card p-4 text-center">
              <p className="text-2xl font-bold text-navy">98%</p>
              <p className="mt-1 text-xs text-grayMedium">Satisfação</p>
            </div>
          </div>
        </div>

        <div data-reveal className="reveal">
          <div className="relative">
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-blueGray/25 blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=80"
              alt="Consultório odontológico moderno e elegante"
              className="h-[370px] w-full rounded-3xl border border-white/80 object-cover shadow-premium sm:h-[460px]"
              loading="lazy"
            />
            <div className="premium-card absolute bottom-4 left-4 max-w-xs p-4">
              <p className="text-sm font-semibold text-navy">Ambiente sofisticado e acolhedor</p>
              <p className="mt-1 text-xs leading-relaxed text-grayMedium">
                Estrutura moderna com foco em conforto, biossegurança e atendimento de excelência.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

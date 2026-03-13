import AnimatedTitle from './AnimatedTitle'

const items = [
  { title: 'Tecnologia avançada', icon: 'tech' },
  { title: 'Profissionais especializados', icon: 'team' },
  { title: 'Atendimento humanizado', icon: 'heart' },
]

function Icon({ type }) {
  if (type === 'team') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  }

  if (type === 'heart') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="3" width="7" height="7" rx="1.2" />
      <rect x="14" y="3" width="7" height="7" rx="1.2" />
      <rect x="14" y="14" width="7" height="7" rx="1.2" />
      <rect x="3" y="14" width="7" height="7" rx="1.2" />
    </svg>
  )
}

function About() {
  return (
    <section id="sobre" className="parallax-section lux-band border-y border-white/60 bg-white/70 py-16 sm:py-24">
      <div
        data-parallax
        data-parallax-speed="0.06"
        className="parallax-orb absolute right-[-60px] top-10 h-52 w-52 rounded-full bg-violet-300/20 blur-3xl"
      />
      <div className="container-base">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div data-reveal className="reveal">
            <AnimatedTitle text="Sobre a Benevere" className="section-title lux-title" accent />
            <p className="section-subtitle">
              A Benevere nasceu com o propósito de oferecer odontologia moderna, tecnológica e
              humanizada. Nosso foco é proporcionar saúde, estética e confiança através de
              tratamentos personalizados.
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-grayMedium sm:text-base">
              Trabalhamos com diagnóstico digital, planejamento individual e acompanhamento próximo em
              cada etapa. Aqui, cada paciente recebe uma experiência completa: acolhimento,
              previsibilidade e excelência clínica.
            </p>
          </div>
          <div data-reveal className="reveal">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80"
              alt="Equipe odontológica em ambiente moderno"
              className="h-72 w-full rounded-3xl border border-white/80 object-cover shadow-[0_24px_65px_rgba(38,65,120,0.2)] sm:h-80"
              loading="lazy"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              data-reveal
              className="reveal premium-card spotlight-card tech-card rounded-2xl p-6 transition hover:-translate-y-1"
            >
              <div className="mb-4 inline-flex rounded-full bg-gradient-to-br from-cyan-200/70 to-violet-300/40 p-3 text-navy">
                <Icon type={item.icon} />
              </div>
              <h3 className="text-lg font-medium text-navy">{item.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About

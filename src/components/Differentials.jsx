import AnimatedTitle from './AnimatedTitle'

const differentials = [
  {
    title: 'Equipamentos modernos',
    description: 'Tomografia e escaneamento digital para diagnósticos mais precisos.',
  },
  {
    title: 'Ambiente confortável',
    description: 'Projeto arquitetônico pensado para acolhimento e tranquilidade.',
  },
  {
    title: 'Atendimento personalizado',
    description: 'Planos de tratamento individualizados para cada objetivo.',
  },
  {
    title: 'Resultados naturais',
    description: 'Estética sofisticada respeitando os traços e a identidade do paciente.',
  },
  {
    title: 'Tecnologia digital',
    description: 'Planejamento 3D e protocolos modernos para maior previsibilidade.',
  },
]

function Differentials() {
  return (
    <section id="experiencia" className="parallax-section lux-band bg-gradient-to-b from-[#edf3ff] to-[#f8f4ff] py-16 sm:py-24">
      <div
        data-parallax
        data-parallax-speed="0.08"
        className="parallax-orb absolute right-[-65px] top-24 h-48 w-48 rounded-full bg-fuchsia-300/20 blur-3xl"
      />
      <div className="container-base">
        <div data-reveal className="reveal">
          <AnimatedTitle text="Por que escolher a Benevere?" className="section-title lux-title" accent />
          <p className="section-subtitle">Excelência clínica com experiência premium em cada detalhe da jornada.</p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map((item) => (
            <div
              key={item.title}
              data-reveal
              className="reveal premium-card spotlight-card tech-card p-5"
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#4f79ff] to-[#8a5bff] text-sm text-white">
                ✓
              </span>
              <p className="mt-3 text-base font-semibold text-navy">{item.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-grayMedium">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Differentials

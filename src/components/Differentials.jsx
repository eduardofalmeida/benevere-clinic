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
    <section
      id="experiencia"
      className="border-y border-navy/10 bg-white py-16 dark:border-navy/20 dark:bg-navy/5 sm:py-24"
    >
      <div className="container-base">
        <div data-reveal className="reveal break-words">
          <AnimatedTitle text="Por que escolher a Benevere?" className="section-title lux-title" accent />
          <p className="mt-4 max-w-3xl text-base font-normal leading-relaxed text-navy sm:text-lg dark:text-graySoft">
            Excelência clínica com experiência premium em cada detalhe da jornada.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map((item) => (
            <div
              key={item.title}
              data-reveal
              className="reveal premium-card spotlight-card tech-card border-navy/10 bg-white p-5 dark:bg-white/95"
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-navy text-sm text-white">
                ✓
              </span>
              <p className="mt-3 text-base font-semibold text-navy break-words">{item.title}</p>
              <p className="mt-1 break-words text-sm leading-relaxed text-grayMedium">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Differentials

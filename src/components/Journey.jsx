import AnimatedTitle from './AnimatedTitle'

const steps = [
  {
    number: '01',
    title: 'Diagnóstico detalhado',
    description: 'Análise clínica e digital para compreender necessidades funcionais e estéticas.',
  },
  {
    number: '02',
    title: 'Planejamento personalizado',
    description: 'Definição de estratégia sob medida com previsibilidade de etapas e resultados.',
  },
  {
    number: '03',
    title: 'Tratamento de excelência',
    description: 'Procedimentos com tecnologia avançada, conforto e acompanhamento contínuo.',
  },
  {
    number: '04',
    title: 'Manutenção e longevidade',
    description: 'Monitoramento periódico para preservar saúde, função e estética do sorriso.',
  },
]

function Journey() {
  return (
    <section className="parallax-section container-base py-16 sm:py-24">
      <div
        data-parallax
        data-parallax-speed="0.06"
        className="parallax-orb absolute left-[-60px] top-10 h-44 w-44 rounded-full bg-indigo-300/20 blur-3xl"
      />
      <div data-reveal className="reveal">
        <AnimatedTitle text="Como funciona sua jornada na Benevere" className="section-title lux-title" accent />
        <p className="section-subtitle">
          Um processo claro, elegante e seguro para transformar seu sorriso com previsibilidade.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {steps.map((step) => (
          <article key={step.number} data-reveal className="reveal premium-card spotlight-card tech-card p-6">
            <p className="text-xs font-bold tracking-[0.2em] text-[#4f79ff]">{step.number}</p>
            <h3 className="mt-2 text-xl font-semibold text-navy">{step.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-grayMedium">{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Journey

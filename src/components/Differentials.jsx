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
    <section id="experiencia" className="bg-grayLight/35 py-16 sm:py-24">
      <div className="container-base">
        <div data-reveal className="reveal">
          <h2 className="section-title">Por que escolher a Benevere?</h2>
          <p className="section-subtitle">Excelência clínica com experiência premium em cada detalhe da jornada.</p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map((item) => (
            <div
              key={item.title}
              data-reveal
              className="reveal premium-card p-5"
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-navy text-sm text-white">
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

const testimonials = [
  {
    name: 'Carla Menezes',
    text: 'Atendimento impecável e muito acolhedor. Saí da consulta com total confiança no tratamento.',
    treatment: 'Clareamento + estética',
  },
  {
    name: 'Renato Alves',
    text: 'Estrutura moderna, equipe excelente e resultado muito natural. Experiência realmente premium.',
    treatment: 'Implantes dentários',
  },
  {
    name: 'Juliana Prado',
    text: 'Sempre tive receio de dentista, mas na Benevere me senti tranquila desde o primeiro atendimento.',
    treatment: 'Ortodontia',
  },
]

function Testimonials() {
  return (
    <section id="depoimentos" className="container-base py-16 sm:py-24">
      <div data-reveal className="reveal">
        <h2 className="section-title">Depoimentos</h2>
        <p className="section-subtitle">Histórias reais de pacientes que confiaram na Benevere.</p>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {testimonials.map((item) => (
          <article
            key={item.name}
            data-reveal
            className="reveal premium-card p-6"
          >
            <p className="text-lg tracking-[0.28em] text-blueGray">★★★★★</p>
            <p className="mt-3 text-sm leading-relaxed text-grayMedium">{item.text}</p>
            <p className="mt-5 text-sm font-semibold text-navy">{item.name}</p>
            <p className="text-xs uppercase tracking-[0.12em] text-blueGray">{item.treatment}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Testimonials

import AnimatedTitle from './AnimatedTitle'

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
    <section id="depoimentos" className="border-y border-navy/10 bg-white py-16 dark:border-navy/20 dark:bg-navy/5 sm:py-24">
      <div className="container-base">
      <div data-reveal className="reveal break-words">
        <AnimatedTitle text="Depoimentos Premium" className="section-title lux-title" accent />
        <p className="section-subtitle">Histórias reais de pacientes que confiaram na Benevere.</p>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {testimonials.map((item) => (
          <article
            key={item.name}
            data-reveal
            className="reveal premium-card spotlight-card tech-card border-navy/10 bg-white p-6 dark:bg-white/95"
          >
            <p className="text-lg tracking-[0.28em] text-blueGray">★★★★★</p>
            <p className="mt-3 break-words text-sm leading-relaxed text-grayMedium">{item.text}</p>
            <p className="mt-5 text-sm font-semibold text-navy">{item.name}</p>
            <p className="text-xs uppercase tracking-[0.12em] text-blueGray">{item.treatment}</p>
          </article>
        ))}
      </div>
      </div>
    </section>
  )
}

export default Testimonials

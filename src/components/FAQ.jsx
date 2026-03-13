import AnimatedTitle from './AnimatedTitle'

const faqs = [
  {
    question: 'A Benevere atende somente estética dental?',
    answer:
      'Não. Trabalhamos com odontologia completa: prevenção, reabilitação, ortodontia e estética do sorriso, sempre com planejamento individual.',
  },
  {
    question: 'Como funciona a primeira avaliação?',
    answer:
      'Na primeira consulta realizamos uma análise detalhada, entendemos seus objetivos e montamos um plano personalizado com as melhores opções de tratamento.',
  },
  {
    question: 'Os tratamentos são dolorosos?',
    answer:
      'Priorizamos técnicas modernas e minimamente invasivas para oferecer conforto durante todo o processo, com protocolos de cuidado e segurança.',
  },
  {
    question: 'Posso parcelar os tratamentos?',
    answer:
      'Sim. Temos opções flexíveis de pagamento e condições que se adaptam ao planejamento definido na sua avaliação.',
  },
]

function FAQ() {
  return (
    <section id="faq" className="parallax-section container-base py-16 sm:py-24">
      <div
        data-parallax
        data-parallax-speed="0.05"
        className="parallax-orb absolute left-[-45px] top-24 h-40 w-40 rounded-full bg-blueGray/20 blur-3xl"
      />
      <div data-reveal className="reveal">
        <AnimatedTitle text="Perguntas frequentes" className="section-title lux-title" accent />
      </div>

      <div className="mt-10 space-y-4">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            data-reveal
            className="reveal premium-card spotlight-card tech-card group p-6 open:border-blue-300/45"
          >
            <summary className="cursor-pointer list-none pr-8 text-base font-semibold text-navy marker:content-['']">
              {faq.question}
            </summary>
            <p className="mt-4 text-sm leading-relaxed text-grayMedium">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

export default FAQ

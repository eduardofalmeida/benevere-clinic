import AnimatedTitle from './AnimatedTitle'

const services = [
  {
    title: 'Limpeza e prevenção',
    description: 'Cuidados periódicos para manter sua saúde bucal em dia e evitar complicações.',
    icon: 'spark',
    tag: 'Essencial',
  },
  {
    title: 'Clareamento dental',
    description: 'Protocolos seguros para um sorriso mais claro, mantendo a naturalidade.',
    icon: 'sun',
    tag: 'Estético',
  },
  {
    title: 'Implantes dentários',
    description: 'Reposição de dentes com precisão e conforto, devolvendo função e estética.',
    icon: 'implant',
    tag: 'Reabilitação',
  },
  {
    title: 'Ortodontia',
    description: 'Alinhamento dental com planejamento personalizado para cada fase do tratamento.',
    icon: 'align',
    tag: 'Funcional',
  },
  {
    title: 'Lentes de contato dental',
    description: 'Correções estéticas sutis para valorizar o formato e a harmonia do sorriso.',
    icon: 'smile',
    tag: 'Alta estética',
  },
  {
    title: 'Estética do sorriso',
    description: 'Soluções integradas para equilibrar beleza, saúde e confiança ao sorrir.',
    icon: 'star',
    tag: 'Premium',
  },
]

function Icon({ type }) {
  const common = 'h-5 w-5'

  switch (type) {
    case 'sun':
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.6">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2.5M12 19.5V22M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M2 12h2.5M19.5 12H22M4.93 19.07l1.77-1.77M17.3 6.7l1.77-1.77" />
        </svg>
      )
    case 'implant':
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M8 3h8M9 3v4h6V3M10 7v4M14 7v4M8 11h8M9 11v3.8l3 2.2 3-2.2V11" />
          <path d="M8 20h8" />
        </svg>
      )
    case 'align':
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.6">
          <rect x="3" y="4" width="18" height="16" rx="4" />
          <path d="M8 9h8M8 15h8" />
        </svg>
      )
    case 'smile':
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.6">
          <circle cx="12" cy="12" r="9" />
          <path d="M8 14.5c1 1 2.2 1.5 4 1.5s3-.5 4-1.5" />
          <path d="M9 10h.01M15 10h.01" />
        </svg>
      )
    case 'star':
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="m12 3 2.7 5.6 6.2.9-4.5 4.3 1.1 6.1L12 17l-5.5 2.9 1.1-6.1L3 9.5l6.2-.9L12 3Z" />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M12 3v18M3 12h18" />
        </svg>
      )
  }
}

function Services() {
  return (
    <section id="servicos" className="parallax-section container-base py-16 sm:py-24">
      <div
        data-parallax
        data-parallax-speed="0.07"
        className="parallax-orb absolute left-[-50px] top-20 h-44 w-44 rounded-full bg-blueGray/20 blur-3xl"
      />
      <div data-reveal className="reveal">
        <AnimatedTitle text="Serviços de alta performance" className="section-title lux-title" accent />
        <p className="section-subtitle">Tratamentos completos com estética refinada e precisão clínica.</p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            data-reveal
            className="reveal premium-card spotlight-card tech-card p-6 transition hover:-translate-y-1.5"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="inline-flex rounded-full bg-gradient-to-br from-blueGray/35 to-grayLight/60 p-3 text-navy">
                <Icon type={service.icon} />
              </div>
              <span className="rounded-full border border-blue-300/35 bg-blue-100/35 px-3 py-1 text-xs font-semibold text-navy">
                {service.tag}
              </span>
            </div>
            <h3 className="text-lg font-medium text-navy">{service.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-grayMedium">{service.description}</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-blueGray">
              Avaliação personalizada
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services

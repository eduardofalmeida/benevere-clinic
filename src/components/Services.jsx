import { Link } from 'react-router-dom'
import AnimatedTitle from './AnimatedTitle'

const featuredServices = [
  {
    title: 'Implantes dentários',
    description: 'Reposição de dentes com precisão e conforto, devolvendo função e estética. Tecnologia avançada e planejamento digital para resultados previsíveis e duradouros.',
    icon: 'implant',
    tag: 'Destaque',
    pageLink: '/implantes',
    pageLinkLabel: 'Conheça o tratamento de implantes',
    image: '/servico-implantes.png',
    imageAlt: 'Ilustração 3D: implante dentário no osso com coroa e dentes ao lado',
    imageFullCard: true,
  },
  {
    title: 'Clareamento dental',
    description: 'Protocolos seguros para um sorriso mais claro, mantendo a naturalidade. Resultados visíveis com acompanhamento profissional em cada etapa.',
    icon: 'sun',
    tag: 'Destaque',
    image: '/servico-clareamento.png',
    imageAlt: 'Comparativo antes e depois do clareamento dental',
    imageFullCard: true,
  },
]

const otherServices = [
  {
    title: 'Limpeza e prevenção',
    description: 'Cuidados periódicos para manter sua saúde bucal em dia.',
    icon: 'spark',
    tag: 'Essencial',
  },
  {
    title: 'Ortodontia',
    description: 'Alinhamento dental com planejamento personalizado.',
    icon: 'align',
    tag: 'Funcional',
  },
  {
    title: 'Lentes de contato dental',
    description: 'Correções estéticas sutis para harmonia do sorriso.',
    icon: 'smile',
    tag: 'Alta estética',
  },
  {
    title: 'Estética do sorriso',
    description: 'Soluções integradas para beleza, saúde e confiança.',
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

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {featuredServices.map((service) =>
          service.imageFullCard && service.image ? (
            <article
              key={service.title}
              data-reveal
              className="reveal premium-card spotlight-card tech-card relative min-h-[520px] overflow-hidden transition hover:-translate-y-1.5 sm:min-h-[580px]"
            >
              <img
                src={service.image}
                alt={service.imageAlt ?? ''}
                className="absolute inset-0 h-full w-full object-cover object-center"
                loading="lazy"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#030a12] via-[#030a12]/90 to-[#0a1a2e]/55"
                aria-hidden
              />
              <div className="relative z-10 flex min-h-[520px] flex-col p-8 sm:min-h-[580px] sm:p-10">
                <div className="flex items-start justify-between">
                  <div className="inline-flex rounded-full bg-white/95 p-4 text-[#1e334e] shadow-md dark:bg-white/90">
                    <Icon type={service.icon} />
                  </div>
                  <span className="rounded-full border-2 border-white/45 bg-black/25 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
                    {service.tag}
                  </span>
                </div>
                <div className="mt-auto pt-20">
                  <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-white/92 sm:text-lg">{service.description}</p>
                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#7dd3fc]">
                      Avaliação personalizada
                    </p>
                    {service.pageLink && (
                      <Link
                        to={service.pageLink}
                        className="text-sm font-semibold text-white underline decoration-white/50 underline-offset-4 transition hover:text-[#bae6fd] hover:decoration-[#bae6fd]"
                      >
                        {service.pageLinkLabel}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ) : (
            <article
              key={service.title}
              data-reveal
              className="reveal premium-card spotlight-card tech-card overflow-hidden transition hover:-translate-y-1.5"
            >
              {service.image ? (
                <div
                  className={`relative aspect-[16/10] w-full overflow-hidden ${
                    service.imageContain
                      ? service.imageBgLight
                        ? 'bg-[#e8eef3] dark:bg-[#1e293b]'
                        : 'bg-[#0a1018]'
                      : 'bg-[#1e334e]/10'
                  }`}
                >
                  <img
                    src={service.image}
                    alt={service.imageAlt ?? ''}
                    className={`h-full w-full object-center ${
                      service.imageContain ? 'object-contain p-3 sm:p-5' : 'object-cover'
                    }`}
                    loading="lazy"
                  />
                  {!service.imageContain ? (
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1e334e]/35 via-transparent to-transparent" />
                  ) : null}
                </div>
              ) : null}
              <div className="p-8 sm:p-10">
                <div className="mb-5 flex items-center justify-between">
                  <div className="inline-flex rounded-full bg-gradient-to-br from-blueGray/40 to-grayLight/70 p-4 text-navy dark:from-blueGray/25 dark:to-grayLight/30">
                    <Icon type={service.icon} />
                  </div>
                  <span className="rounded-full border-2 border-blueGray/50 bg-blueGray/20 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-navy dark:border-[#58c0f9]/35 dark:bg-[#58c0f9]/15 dark:text-[#e8f4fc]">
                    {service.tag}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-navy sm:text-2xl">{service.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-grayMedium sm:text-lg">{service.description}</p>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blueGray">
                    Avaliação personalizada
                  </p>
                  {service.pageLink && (
                    <Link
                      to={service.pageLink}
                      className="text-sm font-semibold text-[#0f1f33] underline decoration-[#1e334e]/40 underline-offset-4 transition hover:text-[#2b4768] dark:text-[#7dd3fc] dark:decoration-[#58c0f9]/50 dark:hover:text-[#bae6fd]"
                    >
                      {service.pageLinkLabel}
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ),
        )}
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {otherServices.map((service) => (
          <article
            key={service.title}
            data-reveal
            className="reveal premium-card spotlight-card tech-card p-4 transition hover:-translate-y-1 sm:p-5"
          >
            <div className="mb-3 flex items-center justify-between">
              <div className="inline-flex rounded-full bg-gradient-to-br from-blueGray/30 to-grayLight/50 p-2.5 text-navy">
                <Icon type={service.icon} />
              </div>
              <span className="rounded-full border border-blueGray/30 bg-blueGray/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-navy">
                {service.tag}
              </span>
            </div>
            <h3 className="text-base font-medium text-navy">{service.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-grayMedium">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services

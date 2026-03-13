const WHATSAPP_URL =
  'https://wa.me/5518996119622?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Benevere.'
const PHONE_URL = 'tel:+5518996119622'

function CTA() {
  return (
    <section id="contato" className="container-base py-16 sm:py-24">
      <div
        data-reveal
        className="reveal grid-pattern relative overflow-hidden rounded-3xl border border-blueGray/35 bg-gradient-to-br from-navy to-blueGray px-6 py-12 text-white shadow-premium sm:px-10 sm:py-14"
      >
        <div className="absolute inset-0 bg-navy/25" />
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
        <div className="relative text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white drop-shadow-sm sm:text-4xl">
            Dê o proximo passo para o sorriso que voce merece.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-white sm:text-base">
            Atendimento exclusivo, diagnostico preciso e plano personalizado para voce conquistar um
            sorriso saudavel, funcional e esteticamente natural.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.1em] text-grayLight">
            <span>Atendimento individual</span>
            <span>•</span>
            <span>Planejamento digital</span>
            <span>•</span>
            <span>Resultados naturais</span>
          </div>
          <p className="mt-6 text-sm font-semibold text-white/90">
            Retorno rapido no WhatsApp durante horario comercial.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex btn-primary min-w-[220px] bg-white text-navy hover:bg-grayLight"
            >
              Agendar pelo WhatsApp
            </a>
            <a
              href={PHONE_URL}
              className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-white/70 bg-white/10 px-7 py-3 text-sm font-medium tracking-wide text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/20"
            >
              Ligar para a clinica
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA

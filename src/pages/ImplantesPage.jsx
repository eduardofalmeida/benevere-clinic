import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import WhatsAppButton from '../components/WhatsAppButton'

const WHATSAPP_IMPLANTE =
  'https://wa.me/5518997975547?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20implantes%20dent%C3%A1rios%20na%20Benevere.'

const WHATSAPP_AVALIACAO =
  'https://wa.me/5518997975547?text=Ol%C3%A1!%20Quero%20agendar%20uma%20avalia%C3%A7%C3%A3o%20para%20implantes%20dent%C3%A1rios%20na%20Benevere.'

const trustItems = [
  { label: 'Planejamento com imagem', sub: 'Tomografia e diagnóstico preciso' },
  { label: 'Titânio de alta biocompatibilidade', sub: 'Materiais de referência' },
  { label: 'Acompanhamento em cada etapa', sub: 'Você sabe o que esperar' },
  { label: 'Benevere · Assis-SP', sub: 'Odontologia moderna e humanizada' },
]

const etapas = [
  {
    titulo: 'Avaliação e planejamento',
    texto:
      'Exames clínicos e de imagem para mapear osso e estruturas. Definimos quantos implantes, posição e tipo de prótese ideal para o seu caso.',
  },
  {
    titulo: 'Instalação do implante',
    texto:
      'Procedimento com anestesia local, em ambiente esterilizado. O implante é posicionado no osso e inicia a integração.',
  },
  {
    titulo: 'Osseointegração',
    texto:
      'O osso “abraça” o implante com firmeza. O tempo varia; em alguns casos há protocolo com carga imediata.',
  },
  {
    titulo: 'Prótese definitiva',
    texto:
      'Pilar, coroa, ponte ou prótese sobre implantes — mastigação, fala e estética de volta ao natural.',
  },
]

const vantagens = [
  'Reposição fixa sem desgastar dentes vizinhos',
  'Estabilidade e sensação próxima ao dente natural',
  'Planejamento digital para maior previsibilidade',
  'Longevidade com higiene e revisões periódicas',
]

const diferenciais = [
  {
    titulo: 'Tecnologia a favor do seu sorriso',
    texto: 'Diagnóstico por imagem e planejamento individualizado para segurança e resultado alinhado ao que você espera.',
  },
  {
    titulo: 'Experiência acolhedora',
    texto: 'Explicamos cada fase com clareza. Você decide com informação, sem pressa e sem surpresas desnecessárias.',
  },
  {
    titulo: 'Resultado que combina com você',
    texto: 'Coroas e próteses pensadas para função e estética natural — sorriso bonito e confortável no dia a dia.',
  },
]

const duvidas = [
  {
    pergunta: 'Dói colocar implante?',
    resposta:
      'O procedimento é feito com anestesia local. Na maioria dos casos o desconforto pós-operatório é controlado com orientações e medicação quando indicada.',
  },
  {
    pergunta: 'Quanto tempo dura o tratamento?',
    resposta:
      'Depende do seu osso e do protocolo. Alguns casos permitem dentes provisórios no mesmo dia; outros exigem meses de integração. Na avaliação você recebe um cronograme realista.',
  },
  {
    pergunta: 'Preciso fazer avaliação presencial?',
    resposta:
      'Sim. Só com exame clínico e imagem é possível definir viabilidade, quantidade de implantes e investimento com segurança.',
  },
]

function ImplantesPage() {
  useEffect(() => {
    document.title = 'Implantes dentários em Assis | Benevere Odontologia'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden bg-white pb-20 dark:bg-[#0d1826] sm:pb-0">
      <Navbar />
      <main>
        {/* Hero landing */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#1e334e] via-[#243d5c] to-[#1a4a6e] text-white">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 20%, rgb(88 192 249) 0%, transparent 45%),
                radial-gradient(circle at 80% 80%, rgb(88 192 249) 0%, transparent 40%)`,
            }}
          />
          <div className="container-base relative py-12 sm:py-16 lg:py-20">
            <nav className="mb-8 text-sm text-white/70">
              <Link to="/" className="transition hover:text-white">
                Início
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white/95">Implantes dentários</span>
            </nav>

            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7dd3fc]">
                  Benevere · Assis-SP
                </p>
                <h1 className="mt-4 text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]">
                  Volte a mastigar e sorrir com confiança — com{' '}
                  <span className="text-[#7dd3fc]">implantes dentários</span> feitos para o seu caso.
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/88">
                  Tratamento planejado com critério clínico, diagnóstico por imagem e acompanhamento
                  próximo. Sem soluções genéricas: o plano é pensado para você.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  <a
                    href={WHATSAPP_AVALIACAO}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-[#58c0f9] px-8 py-4 text-sm font-bold text-[#0f1f33] shadow-lg shadow-black/20 transition hover:bg-[#7dd3fc]"
                  >
                    Agendar avaliação no WhatsApp
                  </a>
                  <a
                    href={WHATSAPP_IMPLANTE}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border-2 border-white/40 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
                  >
                    Tirar dúvidas primeiro
                  </a>
                </div>
                <div className="mt-10 flex flex-wrap gap-2 text-xs font-medium text-white/75 sm:text-sm">
                  <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5">
                    Avaliação presencial
                  </span>
                  <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5">
                    Plano transparente
                  </span>
                  <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5">
                    Ambiente moderno
                  </span>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
                <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-[#58c0f9]/20 blur-3xl sm:h-40 sm:w-40" />
                <div className="absolute -bottom-4 -left-4 h-28 w-28 rounded-full bg-white/10 blur-2xl" />
                <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-[#0c1829] shadow-[0_32px_80px_rgba(0,0,0,0.45)]">
                  <img
                    src="/servico-implantes.png"
                    alt="Ilustração: implante dentário no osso com coroa — tratamento na Benevere"
                    className="h-full w-full object-cover object-center sm:min-h-[340px] lg:min-h-[400px]"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1525]/90 via-transparent to-transparent" />
                  <p className="absolute bottom-4 left-4 right-4 text-center text-xs text-white/80 sm:text-sm">
                    Representação ilustrativa do implante integrado ao osso
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust strip */}
        <section className="border-b border-[#1e334e]/10 bg-[#f0f4f8] py-10 dark:border-[#334155] dark:bg-[#152535]">
          <div className="container-base">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {trustItems.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-[#1e334e]/08 bg-white p-5 shadow-sm dark:border-[#334155] dark:bg-[#0f172a]"
                >
                  <p className="font-semibold text-[#1e334e] dark:text-white">{item.label}</p>
                  <p className="mt-1 text-sm text-[#2a3d52] dark:text-[#94a3b8]">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Empatia + proposta */}
        <section className="py-16 sm:py-24 dark:bg-[#0d1826]">
          <div className="container-base">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-semibold text-[#1e334e] dark:text-white sm:text-3xl">
                Cada dente perdido é uma história — a nossa é ajudar você a reescrever a sua
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-[#2a3d52] dark:text-[#cbd5e1]">
                Falta de dente afeta mastigação, autoestima e até a fala. O implante devolve a raiz
                artificial no osso e, em cima dela, a coroa ou prótese — para você voltar a viver sem
                pensar no que falta.
              </p>
            </div>
          </div>
        </section>

        {/* O que é + imagem consultório */}
        <section className="border-y border-[#1e334e]/10 bg-[#f5f7f8] py-16 dark:border-[#334155] dark:bg-[#1e293b] sm:py-20">
          <div className="container-base">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="order-2 lg:order-1">
                <h2 className="text-2xl font-semibold text-[#1e334e] dark:text-white sm:text-3xl">
                  O que é o implante dental?
                </h2>
                <p className="mt-5 text-base leading-relaxed text-[#1e334e] dark:text-[#e2e8f0] sm:text-lg">
                  É um parafuso de <strong className="font-semibold">titânio biocompatível</strong>,
                  colocado no osso, que substitui a raiz do dente perdido. Sobre ele fixamos coroa,
                  ponte ou prótese — com aparência e função próximas ao natural.
                </p>
                <p className="mt-4 text-base leading-relaxed text-[#2a3d52] dark:text-[#cbd5e1]">
                  Na Benevere, combinamos experiência clínica com recursos de diagnóstico por imagem
                  para que cada decisão seja segura e alinhada ao que você busca.
                </p>
                <a
                  href={WHATSAPP_AVALIACAO}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex rounded-full bg-[#1e334e] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#2b4768] dark:bg-[#58c0f9] dark:text-[#0f1f33] dark:hover:bg-[#7dd3fc]"
                >
                  Quero minha avaliação
                </a>
              </div>
              <div className="order-1 lg:order-2">
                <div className="overflow-hidden rounded-3xl border border-[#1e334e]/10 shadow-[0_24px_60px_rgba(30,51,78,0.15)] dark:border-[#334155] dark:shadow-none">
                  <img
                    src="/about-benevere-clinic.png"
                    alt="Consultório Benevere — estrutura para implantes e tratamentos odontológicos"
                    className="h-full w-full object-cover object-center sm:min-h-[320px]"
                    loading="lazy"
                  />
                </div>
                <p className="mt-3 text-center text-sm text-[#2a3d52] dark:text-[#94a3b8]">
                  Estrutura preparada para receber você com segurança e conforto
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section className="py-16 dark:bg-[#0d1826] sm:py-20">
          <div className="container-base">
            <h2 className="mx-auto max-w-2xl text-center text-2xl font-semibold text-[#1e334e] dark:text-white sm:text-3xl">
              Por que confiar na Benevere para o seu implante?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-[#2a3d52] dark:text-[#cbd5e1]">
              Não vendemos “pacote pronto”. Construímos um caminho clínico com você.
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {diferenciais.map((d) => (
                <div
                  key={d.titulo}
                  className="rounded-2xl border border-[#1e334e]/10 bg-white p-8 shadow-sm transition hover:border-[#58c0f9]/30 hover:shadow-md dark:border-[#334155] dark:bg-[#0f172a]"
                >
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#1e334e] to-[#58c0f9] text-lg text-white">
                    ✓
                  </div>
                  <h3 className="text-lg font-semibold text-[#1e334e] dark:text-white">{d.titulo}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#2a3d52] dark:text-[#cbd5e1]">
                    {d.texto}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Etapas */}
        <section className="border-y border-[#1e334e]/10 bg-[#f5f7f8] py-16 dark:border-[#334155] dark:bg-[#1e293b] sm:py-20">
          <div className="container-base">
            <h2 className="text-center text-2xl font-semibold text-[#1e334e] dark:text-white sm:text-3xl">
              Sua jornada, passo a passo
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-[#2a3d52] dark:text-[#cbd5e1]">
              Transparência em cada fase — você sempre sabe o que vem depois.
            </p>
            <ol className="mx-auto mt-12 max-w-3xl space-y-5">
              {etapas.map((item, i) => (
                <li
                  key={item.titulo}
                  className="flex gap-4 rounded-2xl border border-[#1e334e]/10 bg-white p-6 dark:border-[#334155] dark:bg-[#0f172a] sm:gap-6 sm:p-8"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1e334e] text-base font-bold text-white dark:bg-[#58c0f9] dark:text-[#1e334e]">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1e334e] dark:text-white">
                      {item.titulo}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#2a3d52] dark:text-[#cbd5e1] sm:text-base">
                      {item.texto}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Vantagens + FAQ + citação */}
        <section className="py-16 dark:bg-[#0d1826] sm:py-20">
          <div className="container-base">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="text-2xl font-semibold text-[#1e334e] dark:text-white sm:text-3xl">
                  O que você ganha com implantes bem planejados
                </h2>
                <ul className="mt-8 space-y-4">
                  {vantagens.map((v) => (
                    <li key={v} className="flex gap-3">
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1e334e] text-sm font-bold text-white dark:bg-[#58c0f9] dark:text-[#1e334e]">
                        ✓
                      </span>
                      <span className="text-base leading-relaxed text-[#1e334e] dark:text-[#e2e8f0]">
                        {v}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10 rounded-2xl border border-[#58c0f9]/25 bg-[#58c0f9]/08 p-6 dark:border-[#58c0f9]/20 dark:bg-[#58c0f9]/10">
                  <p className="text-sm italic leading-relaxed text-[#1e334e] dark:text-[#e2e8f0]">
                    &ldquo;Pra mim, cada paciente é único. Meu compromisso é cuidar do seu sorriso com
                    atenção, calma e transparência, em cada etapa do tratamento.&rdquo;
                  </p>
                  <p className="mt-3 text-sm font-semibold text-[#1e334e] dark:text-[#7dd3fc]">
                    — Dr. Diem · Benevere
                  </p>
                  <p className="mt-1 text-[11px] font-semibold text-[#1e334e]/80 dark:text-[#bae6fd]">
                    CRO/SP: 105.569
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-[#1e334e] dark:text-white sm:text-2xl">
                  Dúvidas frequentes
                </h2>
                <div className="mt-6 space-y-4">
                  {duvidas.map((d) => (
                    <details
                      key={d.pergunta}
                      className="group rounded-2xl border border-[#1e334e]/10 bg-[#f8fafc] p-5 dark:border-[#334155] dark:bg-[#0f172a]"
                    >
                      <summary className="cursor-pointer list-none font-semibold text-[#1e334e] dark:text-white [&::-webkit-details-marker]:hidden">
                        <span className="flex items-center justify-between gap-2">
                          {d.pergunta}
                          <span className="text-[#58c0f9] transition group-open:rotate-180">▼</span>
                        </span>
                      </summary>
                      <p className="mt-3 text-sm leading-relaxed text-[#2a3d52] dark:text-[#cbd5e1]">
                        {d.resposta}
                      </p>
                    </details>
                  ))}
                </div>
                <p className="mt-8 text-sm leading-relaxed text-[#2a3d52] dark:text-[#94a3b8]">
                  Higiene em casa e revisões periódicas prolongam a vida do implante. Na avaliação,
                  conversamos também sobre hábitos e saúde geral quando isso influencia o plano.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#1e334e] via-[#243d5c] to-[#1e334e] py-16 text-white sm:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0%200h60v60H0z%22%20fill%3D%22none%22%2F%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221.5%22%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.06%22%2F%3E%3C%2Fsvg%3E')] opacity-80" />
          <div className="container-base relative text-center">
            <h2 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">
              Dê o primeiro passo rumo ao sorriso que você merece
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/88">
              Agende sua avaliação na Benevere. Atendemos em{' '}
              <strong className="font-semibold text-white">Assis-SP</strong> — R. Smith Vasconcelos,
              711, Centro. Resposta rápida pelo WhatsApp.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={WHATSAPP_AVALIACAO}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#58c0f9] px-10 py-4 text-base font-bold text-[#0f1f33] shadow-xl transition hover:bg-[#7dd3fc] sm:w-auto"
              >
                Agendar avaliação agora
              </a>
              <a
                href={WHATSAPP_IMPLANTE}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full border-2 border-white/50 px-10 py-4 text-base font-semibold text-white transition hover:bg-white/10 sm:w-auto"
              >
                Só quero informações
              </a>
            </div>
            <Link
              to="/"
              className="mt-10 inline-block text-sm text-white/70 underline-offset-4 transition hover:text-white"
            >
              ← Voltar ao site da Benevere
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default ImplantesPage

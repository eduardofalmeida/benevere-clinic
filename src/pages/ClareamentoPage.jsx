import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import WhatsAppButton from '../components/WhatsAppButton'

const WHATSAPP_CLAREAMENTO =
  'https://wa.me/5518996119622?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20clareamento%20dental%20na%20Benevere.'

const WHATSAPP_AVALIACAO =
  'https://wa.me/5518996119622?text=Ol%C3%A1!%20Quero%20agendar%20uma%20avalia%C3%A7%C3%A3o%20para%20clareamento%20dental%20na%20Benevere.'

const trustItems = [
  { label: 'Protocolos seguros', sub: 'Produtos e concentrações indicadas clinicamente' },
  { label: 'Resultado natural', sub: 'Clareza sem “dente de porcelana” artificial' },
  { label: 'Acompanhamento profissional', sub: 'Do planejamento ao pós-tratamento' },
  { label: 'Benevere · Assis-SP', sub: 'Estética e saúde em primeiro lugar' },
]

const etapas = [
  {
    titulo: 'Avaliação do seu sorriso',
    texto:
      'Exame clínico para verificar saúde gengival, restaurações, sensibilidade e expectativas. Só assim definimos se o clareamento é ideal para você e qual técnica usar.',
  },
  {
    titulo: 'Planejamento da cor',
    texto:
      'Registramos o tom atual dos dentes e alinhamos uma meta realista — clareamento perceptível, harmonioso com seu rosto e com os dentes naturais.',
  },
  {
    titulo: 'Sessões de clareamento',
    texto:
      'Aplicação supervisionada do gel clareador, com tempo e repetições conforme o protocolo escolhido (consultório e/ou orientação para uso domiciliar quando indicado).',
  },
  {
    titulo: 'Orientação e manutenção',
    texto:
      'Instruções de higiene, alimentos que mancham menos nos primeiros dias e, se necessário, toques de manutenção ao longo do tempo.',
  },
]

const vantagens = [
  'Sorriso mais claro sem alterar o formato dos dentes',
  'Procedimento não invasivo quando bem indicado',
  'Pode ser combinado com outros tratamentos estéticos',
  'Autoestima e aparência renovadas em poucas sessões',
]

const diferenciais = [
  {
    titulo: 'Indicação correta',
    texto:
      'Nem todo caso é igual: manchas internas, restaurações na frente e sensibilidade mudam o plano. Você recebe uma proposta honesta, não promessa milagrosa.',
  },
  {
    titulo: 'Conforto e segurança',
    texto:
      'Monitoramos sensibilidade e ajustamos o protocolo. Clareamento em casa sem supervisão pode gerar danos — aqui o profissional guia cada etapa.',
  },
  {
    titulo: 'Estética que combina com você',
    texto:
      'Buscamos um branco vivo, mas natural — o tipo de sorriso que você quer mostrar no dia a dia e nas fotos.',
  },
]

const duvidas = [
  {
    pergunta: 'O clareamento machuca os dentes?',
    resposta:
      'Em mãos qualificadas e com produtos adequados, o procedimento é seguro. Pode haver sensibilidade temporária; na Benevere orientamos como minimizar e quando pausar o tratamento.',
  },
  {
    pergunta: 'Quanto tempo dura o resultado?',
    resposta:
      'Depende de hábitos (café, chimarrão, tabaco) e da higiene. Em geral o efeito dura meses a anos; toques de manutenção podem ser feitos quando necessário.',
  },
  {
    pergunta: 'Clareamento de farmácia é a mesma coisa?',
    resposta:
      'Não. Concentrações e moldeiras genéricas aumentam risco de queimar gengiva e sensibilidade. O acompanhamento profissional protege seu sorriso e melhora o resultado.',
  },
]

function ClareamentoPage() {
  useEffect(() => {
    document.title = 'Clareamento dental em Assis | Benevere Odontologia'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden bg-white pb-20 dark:bg-[#0d1826] sm:pb-0">
      <Navbar />
      <main>
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
              <span className="text-white/95">Clareamento dental</span>
            </nav>

            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7dd3fc]">
                  Benevere · Assis-SP
                </p>
                <h1 className="mt-4 text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]">
                  Um sorriso mais{' '}
                  <span className="text-[#7dd3fc]">branco e natural</span> — com clareamento
                  profissional pensado para você.
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/88">
                  Protocolos seguros, resultado harmonioso e acompanhamento de perto. Sem atalhos que
                  colocam sua saúde bucal em risco.
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
                    href={WHATSAPP_CLAREAMENTO}
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
                    Meta de cor realista
                  </span>
                  <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5">
                    Acompanhamento clínico
                  </span>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
                <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-[#58c0f9]/20 blur-3xl sm:h-40 sm:w-40" />
                <div className="absolute -bottom-4 -left-4 h-28 w-28 rounded-full bg-white/10 blur-2xl" />
                <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-[#0c1829] shadow-[0_32px_80px_rgba(0,0,0,0.45)]">
                  <img
                    src="/servico-clareamento.png"
                    alt="Comparativo antes e depois do clareamento dental na Benevere"
                    className="h-full w-full object-cover object-center sm:min-h-[340px] lg:min-h-[400px]"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1525]/85 via-transparent to-transparent" />
                  <p className="absolute bottom-4 left-4 right-4 text-center text-xs text-white/85 sm:text-sm">
                    Resultados variam conforme o caso — avaliação individualizada
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

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

        <section className="py-16 sm:py-24 dark:bg-[#0d1826]">
          <div className="container-base">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-semibold text-[#1e334e] dark:text-white sm:text-3xl">
                O sorriso é cartão de visitas — merece brilhar com segurança
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-[#2a3d52] dark:text-[#cbd5e1]">
                Manchas e escurecimento natural dos dentes incomodam muita gente. O clareamento
                dental supervisionado devolve luminosidade sem sacrificar a estrutura do dente,
                quando bem indicado — e é aí que entra o olhar profissional da Benevere.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-[#1e334e]/10 bg-[#f5f7f8] py-16 dark:border-[#334155] dark:bg-[#1e293b] sm:py-20">
          <div className="container-base">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="order-2 lg:order-1">
                <h2 className="text-2xl font-semibold text-[#1e334e] dark:text-white sm:text-3xl">
                  O que é o clareamento dental?
                </h2>
                <p className="mt-5 text-base leading-relaxed text-[#1e334e] dark:text-[#e2e8f0] sm:text-lg">
                  É um tratamento que utiliza <strong className="font-semibold">agentes clareadores</strong>{' '}
                  seguros, aplicados sobre o esmalte dentário, para reduzir pigmentações e deixar os
                  dentes mais claros. A técnica e o número de sessões variam conforme cada pessoa.
                </p>
                <p className="mt-4 text-base leading-relaxed text-[#2a3d52] dark:text-[#cbd5e1]">
                  Na Benevere, avaliamos saúde bucal, sensibilidade e restaurações antes de começar —
                  para que você clareie com tranquilidade e resultado alinhado à sua expectativa.
                </p>
                <a
                  href={WHATSAPP_AVALIACAO}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex rounded-full bg-[#1e334e] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#2b4768] dark:bg-[#58c0f9] dark:text-[#0f1f33] dark:hover:bg-[#7dd3fc]"
                >
                  Quero avaliar meu caso
                </a>
              </div>
              <div className="order-1 lg:order-2">
                <div className="overflow-hidden rounded-3xl border border-[#1e334e]/10 shadow-[0_24px_60px_rgba(30,51,78,0.15)] dark:border-[#334155] dark:shadow-none">
                  <img
                    src="/about-benevere-clinic.png"
                    alt="Consultório Benevere — clareamento e estética dental em Assis"
                    className="h-full w-full object-cover object-center sm:min-h-[320px]"
                    loading="lazy"
                  />
                </div>
                <p className="mt-3 text-center text-sm text-[#2a3d52] dark:text-[#94a3b8]">
                  Ambiente preparado para tratamentos estéticos com conforto
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 dark:bg-[#0d1826] sm:py-20">
          <div className="container-base">
            <h2 className="mx-auto max-w-2xl text-center text-2xl font-semibold text-[#1e334e] dark:text-white sm:text-3xl">
              Por que fazer clareamento com a Benevere?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-[#2a3d52] dark:text-[#cbd5e1]">
              Estética com responsabilidade clínica — do primeiro exame ao sorriso final.
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

        <section className="border-y border-[#1e334e]/10 bg-[#f5f7f8] py-16 dark:border-[#334155] dark:bg-[#1e293b] sm:py-20">
          <div className="container-base">
            <h2 className="text-center text-2xl font-semibold text-[#1e334e] dark:text-white sm:text-3xl">
              Como funciona na prática
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-[#2a3d52] dark:text-[#cbd5e1]">
              Transparência em cada etapa do seu clareamento.
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

        <section className="py-16 dark:bg-[#0d1826] sm:py-20">
          <div className="container-base">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="text-2xl font-semibold text-[#1e334e] dark:text-white sm:text-3xl">
                  Benefícios de um clareamento bem feito
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
                  Evite clareamentos caseiros sem orientação: podem causar sensibilidade forte e dano ao
                  esmalte. Na dúvida, agende uma avaliação — o investimento em segurança vale muito
                  mais que um produto genérico.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-gradient-to-br from-[#1e334e] via-[#243d5c] to-[#1e334e] py-16 text-white sm:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0%200h60v60H0z%22%20fill%3D%22none%22%2F%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221.5%22%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.06%22%2F%3E%3C%2Fsvg%3E')] opacity-80" />
          <div className="container-base relative text-center">
            <h2 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">
              Pronto para iluminar seu sorriso?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/88">
              Agende sua avaliação na Benevere. <strong className="font-semibold text-white">Assis-SP</strong>{' '}
              — R. Smith Vasconcelos, 711, Centro. Resposta rápida pelo WhatsApp.
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
                href={WHATSAPP_CLAREAMENTO}
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

export default ClareamentoPage

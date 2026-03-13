const WHATSAPP_URL =
  'https://wa.me/SEUNUMERO?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Benevere.'

const navLinks = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contato' },
]

function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/80 bg-white/80 backdrop-blur-xl">
      <div className="container-base flex h-20 items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3 text-xl font-semibold tracking-wide text-navy">
          <img
            src="/logo-benevere.png"
            alt="Logo Benevere"
            className="h-10 w-10 object-contain"
          />
          <span>Benevere</span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-grayMedium transition hover:text-navy"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="btn-primary px-5 py-2.5 text-xs sm:text-sm"
        >
          Agendar Consulta
        </a>
      </div>
    </header>
  )
}

export default Navbar

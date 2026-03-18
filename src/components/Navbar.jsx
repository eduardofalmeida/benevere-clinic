import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const WHATSAPP_URL =
  'https://wa.me/5518997975547?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Benevere.'

const navLinks = [
  { label: 'Sobre', hash: 'sobre' },
  { label: 'Serviços', hash: 'servicos' },
  { label: 'Experiência', hash: 'experiencia' },
  { label: 'Depoimentos', hash: 'depoimentos' },
  { label: 'FAQ', hash: 'faq' },
  { label: 'Contato', hash: 'contato' },
]

function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  function sectionHref(hash) {
    return isHome ? `#${hash}` : `/#${hash}`
  }

  function handleSectionClick(e, hash) {
    e.preventDefault()
    if (isHome) {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate({ pathname: '/', hash: `#${hash}` })
    }
  }
  const [isOpen, setIsOpen] = useState(false)

  function handleCloseMenu() {
    setIsOpen(false)
  }

  return (
    <header className="nav-shell sticky top-0 z-40 backdrop-blur-xl">
      <div className="container-base flex h-20 items-center justify-between">
        <Link to="/" className="flex min-w-0 items-center gap-3 text-navy">
          <img
            src="/logo-benevere.png"
            alt="Logo Benevere"
            className="h-10 w-10 object-contain"
          />
          <span className="flex flex-col leading-none">
            <span className="text-lg font-semibold tracking-wide sm:text-xl">Benevere</span>
            <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.16em] text-grayMedium sm:text-[11px]">
              dental clinic
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={sectionHref(item.hash)}
              onClick={(e) => handleSectionClick(e, item.hash)}
              className="text-sm font-medium text-grayMedium transition hover:text-blueGray"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-primary hidden px-5 py-2.5 text-xs lg:inline-flex lg:text-sm"
          >
            Agendar Consulta
          </a>
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls="menu-mobile"
            aria-label="Abrir menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/75 bg-white/70 text-navy transition hover:bg-white lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              {isOpen ? (
                <path d="M6 6 18 18M18 6 6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        id="menu-mobile"
        className={`border-t border-white/80 bg-white/90 px-5 py-4 backdrop-blur-xl transition lg:hidden ${isOpen ? 'block' : 'hidden'}`}
      >
        <nav className="flex flex-col gap-2">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={sectionHref(item.hash)}
              onClick={(e) => {
                handleSectionClick(e, item.hash)
                handleCloseMenu()
              }}
              className="rounded-xl px-3 py-2 text-sm font-medium text-grayMedium transition hover:bg-grayLight/35 hover:text-navy"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar

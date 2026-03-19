function Footer() {
  return (
    <footer className="border-t border-[#1e334e]/10 bg-white py-12 [color:#1e334e]">
      <div className="container-base grid gap-8 text-sm sm:grid-cols-2 lg:grid-cols-6">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/logo-benevere.png"
              alt="Logo Benevere"
              className="h-9 w-9 object-contain"
            />
            <p className="text-base font-bold text-[#0f172a]">Benevere Odontologia</p>
          </div>
          <p className="mt-2 font-medium text-[#1e334e]">Excelência em saúde e estética do sorriso.</p>
        </div>
        <div>
          <p className="font-semibold uppercase tracking-wide text-[#0f172a]">Telefone</p>
          <p className="mt-2 font-medium text-[#1e334e]">18 99797-5547</p>
        </div>
        <div>
          <p className="font-semibold uppercase tracking-wide text-[#0f172a]">Endereço</p>
          <p className="mt-2 break-words font-medium text-[#1e334e]">R. Smith Vasconcelos, 711 - Centro, Assis - SP, 19814-010</p>
        </div>
        <div>
          <p className="font-semibold uppercase tracking-wide text-[#0f172a]">Instagram</p>
          <a
            href="https://instagram.com/benevere_dentalclinic"
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-block font-medium text-[#1e334e] transition hover:text-[#0284c7]"
          >
            @benevere_dentalclinic
          </a>
        </div>
        <div>
          <p className="font-semibold uppercase tracking-wide text-[#0f172a]">Horário</p>
          <p className="mt-2 font-medium text-[#1e334e]">Seg a Sex: 08h às 19h</p>
          <p className="font-medium text-[#1e334e]">Sáb: 08h às 13h</p>
        </div>
        <div>
          <p className="font-semibold uppercase tracking-wide text-[#0f172a]">WhatsApp</p>
          <a
            href="https://wa.me/5518997975547?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Benevere."
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-block font-medium text-[#1e334e] transition hover:text-[#0284c7]"
          >
            Conversar agora
          </a>
        </div>
      </div>

      <div className="container-base mt-8 border-t border-[#1e334e]/15 pt-6 text-xs text-[#1e334e]">
        <p className="font-medium">© {new Date().getFullYear()} Benevere Odontologia. Todos os direitos reservados.</p>
        <div className="mt-2 flex flex-col items-center gap-2 text-center">
          <div>
            Desenvolvimento pela{' '}
            <a
              href="https://www.codity.com.br"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-[#1e334e] transition hover:text-[#0284c7]"
            >
              Codity Tecnologia
            </a>
          </div>
          <div>
            <span className="font-medium text-[#1e334e]/90">Site:</span>{' '}
            <a
              href="https://www.codity.com.br"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-[#1e334e] transition hover:text-[#0284c7]"
            >
              www.codity.com.br
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium text-[#1e334e]/90">Instagram:</span>
            <a
              href="https://instagram.com/codity.tecnologia"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-medium text-[#1e334e] transition hover:text-[#0284c7]"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                aria-hidden="true"
                fill="currentColor"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5Z" />
                <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
                <path d="M17.5 6.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
              </svg>
              @codity.tecnologia
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

function Footer() {
  return (
    <footer className="border-t border-[#1e334e]/20 bg-[#f5f7f8] py-12">
      <div className="container-base grid gap-8 text-sm text-[#1e334e] sm:grid-cols-2 lg:grid-cols-6">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/logo-benevere.png"
              alt="Logo Benevere"
              className="h-9 w-9 object-contain"
            />
            <p className="text-base font-semibold text-[#1e334e]">Benevere Odontologia</p>
          </div>
          <p className="mt-2 text-[#2a3d52]">Excelência em saúde e estética do sorriso.</p>
        </div>
        <div>
          <p className="font-medium text-[#1e334e]">Telefone</p>
          <p className="mt-2 text-[#2a3d52]">18 99797-5547</p>
        </div>
        <div>
          <p className="font-medium text-[#1e334e]">Endereço</p>
          <p className="mt-2 text-[#2a3d52]">R. Smith Vasconcelos, 711 - Centro, Assis - SP, 19814-010</p>
        </div>
        <div>
          <p className="font-medium text-[#1e334e]">Instagram</p>
          <a
            href="https://instagram.com/benevere_dentalclinic"
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-block text-[#2a3d52] transition hover:text-[#58c0f9]"
          >
            @benevere_dentalclinic
          </a>
        </div>
        <div>
          <p className="font-medium text-[#1e334e]">Horário</p>
          <p className="mt-2 text-[#2a3d52]">Seg a Sex: 08h às 19h</p>
          <p className="text-[#2a3d52]">Sáb: 08h às 13h</p>
        </div>
        <div>
          <p className="font-medium text-[#1e334e]">WhatsApp</p>
          <a
            href="https://wa.me/5518997975547?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Benevere."
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-block text-[#2a3d52] transition hover:text-[#58c0f9]"
          >
            Conversar agora
          </a>
        </div>
      </div>

      <div className="container-base mt-8 border-t border-[#1e334e]/15 pt-6 text-xs text-[#2a3d52]">
        <p>© {new Date().getFullYear()} Benevere Odontologia. Todos os direitos reservados.</p>
        <div className="mt-2 flex flex-col items-center gap-2 text-center">
          <div>
            Desenvolvimento pela{' '}
            <a
              href="https://www.codity.com.br"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#58c0f9]"
            >
              Codity Tecnologia
            </a>
          </div>
          <div>
            <span className="text-[#2a3d52]/70">Site:</span>{' '}
            <a
              href="https://www.codity.com.br"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#58c0f9]"
            >
              www.codity.com.br
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#2a3d52]/70">Instagram:</span>
            <a
              href="https://instagram.com/codity.tecnologia"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-[#58c0f9]"
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

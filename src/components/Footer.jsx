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
          <p className="mt-2 text-[#2a3d52]">+55 18 99611-9622</p>
        </div>
        <div>
          <p className="font-medium text-[#1e334e]">Endereço</p>
          <p className="mt-2 text-[#2a3d52]">R. Smith Vasconcelos, 711 - Centro, Assis - SP, 19814-010</p>
        </div>
        <div>
          <p className="font-medium text-[#1e334e]">Instagram</p>
          <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="mt-2 inline-block text-[#2a3d52] transition hover:text-[#58c0f9]">
            @benevere
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
            href="https://wa.me/5518996119622?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Benevere."
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
      </div>
    </footer>
  )
}

export default Footer

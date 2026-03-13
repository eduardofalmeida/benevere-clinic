function Footer() {
  return (
    <footer className="lux-band border-t border-white/70 bg-white/75 py-12 backdrop-blur">
      <div className="container-base grid gap-8 text-sm text-grayMedium sm:grid-cols-2 lg:grid-cols-6">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/logo-benevere.png"
              alt="Logo Benevere"
              className="h-9 w-9 object-contain"
            />
            <p className="text-base font-semibold text-navy">Benevere Odontologia</p>
          </div>
          <p className="mt-2">Excelência em saúde e estética do sorriso.</p>
        </div>
        <div>
          <p className="font-medium text-navy">Telefone</p>
          <p className="mt-2">+55 18 99611-9622</p>
        </div>
        <div>
          <p className="font-medium text-navy">Endereço</p>
          <p className="mt-2">R. Smith Vasconcelos, 711 - Centro, Assis - SP, 19814-010</p>
        </div>
        <div>
          <p className="font-medium text-navy">Instagram</p>
          <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="mt-2 inline-block transition hover:text-navy">
            @benevere
          </a>
        </div>
        <div>
          <p className="font-medium text-navy">Horário</p>
          <p className="mt-2">Seg a Sex: 08h às 19h</p>
          <p>Sáb: 08h às 13h</p>
        </div>
        <div>
          <p className="font-medium text-navy">WhatsApp</p>
          <a
            href="https://wa.me/5518996119622?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Benevere."
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-block transition hover:text-navy"
          >
            Conversar agora
          </a>
        </div>
      </div>
      <div className="container-base mt-8 border-t border-white/70 pt-6 text-xs text-graySoft">
        <p>© {new Date().getFullYear()} Benevere Odontologia. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer

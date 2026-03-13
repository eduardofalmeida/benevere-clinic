const WHATSAPP_URL =
  'https://wa.me/SEUNUMERO?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Benevere.'

function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Agendar consulta pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366]/30" />
      <svg viewBox="0 0 32 32" className="relative z-10 h-7 w-7 fill-current" aria-hidden="true">
        <path d="M19.11 17.42c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.22-.65.08-.3-.15-1.26-.46-2.4-1.46-.88-.78-1.48-1.74-1.66-2.04-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.64-.93-2.25-.25-.6-.5-.53-.68-.54h-.58c-.2 0-.53.08-.8.38-.28.3-1.06 1.03-1.06 2.52s1.08 2.93 1.23 3.13c.15.2 2.11 3.22 5.11 4.52.71.31 1.27.49 1.71.62.72.23 1.37.2 1.88.12.57-.08 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35Z" />
        <path d="M16.03 3.2c-7.08 0-12.82 5.74-12.82 12.82 0 2.26.59 4.47 1.71 6.42L3.2 28.8l6.53-1.7a12.77 12.77 0 0 0 6.3 1.65h.01c7.08 0 12.82-5.74 12.82-12.82 0-3.43-1.34-6.65-3.76-9.07A12.75 12.75 0 0 0 16.03 3.2Zm0 23.4h-.01a10.6 10.6 0 0 1-5.39-1.48l-.38-.22-3.88 1.01 1.04-3.78-.25-.39a10.64 10.64 0 0 1 1.63-13.39 10.58 10.58 0 0 1 7.24-2.86c5.84 0 10.59 4.75 10.59 10.59S21.87 26.6 16.03 26.6Z" />
      </svg>
    </a>
  )
}

export default WhatsAppButton

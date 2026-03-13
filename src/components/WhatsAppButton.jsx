const WHATSAPP_URL =
  'https://wa.me/5518996119622?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Benevere.'
const PHONE_URL = 'tel:+5518996119622'

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] shrink-0" fill="none" aria-hidden="true">
      <path
        d="M5 4.8c0-.44.36-.8.8-.8h2.47c.38 0 .71.27.78.64l.56 2.78a.8.8 0 0 1-.23.74L7.86 9.67a13.2 13.2 0 0 0 6.47 6.47l1.5-1.52a.8.8 0 0 1 .74-.23l2.78.56c.37.07.64.4.64.78v2.47a.8.8 0 0 1-.8.8h-1.6C10.45 19 5 13.55 5 6.4V4.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] shrink-0" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2.2c-5.36 0-9.7 4.33-9.7 9.67 0 1.7.45 3.37 1.28 4.84L2.2 21.8l5.26-1.38a9.7 9.7 0 0 0 4.58 1.15h.01c5.35 0 9.69-4.33 9.69-9.68 0-2.58-1.01-5.01-2.83-6.83A9.64 9.64 0 0 0 12.04 2.2Zm0 17.74h-.01c-1.42 0-2.82-.39-4.03-1.13l-.29-.18-3.12.82.84-3.04-.19-.31a8.1 8.1 0 0 1-1.23-4.23c0-4.47 3.63-8.1 8.1-8.1 2.16 0 4.2.84 5.73 2.36a8.07 8.07 0 0 1 2.37 5.74c0 4.47-3.63 8.09-8.09 8.09Zm4.44-6.05c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.2-1.4-1.34-1.64-.14-.24-.01-.37.1-.48.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.29-.74-1.77-.2-.47-.4-.41-.54-.42h-.46c-.16 0-.42.06-.65.3-.22.24-.82.8-.82 1.98 0 1.17.86 2.3.98 2.46.12.16 1.68 2.56 4.06 3.6.57.24 1 .4 1.35.5.57.18 1.09.15 1.5.09.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  )
}

function WhatsAppButton() {
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/60 bg-white/95 px-4 py-3 shadow-[0_-8px_24px_rgba(28,52,76,0.12)] backdrop-blur sm:hidden">
        <div className="mx-auto flex max-w-md items-center gap-2">
          <a
            href={PHONE_URL}
            className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-full border border-blueGray/40 bg-white px-3 text-xs font-semibold uppercase tracking-[0.08em] text-navy"
          >
            <PhoneIcon />
            Ligar
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-3 text-xs font-semibold uppercase tracking-[0.08em] text-white"
          >
            <WhatsAppIcon />
            WhatsApp
          </a>
        </div>
      </div>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Agendar consulta pelo WhatsApp"
        className="fixed bottom-5 right-5 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white ring-4 ring-[#25D366]/25 shadow-lg transition hover:scale-105 sm:inline-flex"
      >
        <WhatsAppIcon />
      </a>
    </>
  )
}

export default WhatsAppButton

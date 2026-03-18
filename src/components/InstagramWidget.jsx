import { useEffect } from 'react'

function InstagramWidget() {
  const profileUrl = 'https://www.instagram.com/benevere_dentalclinic/'

  useEffect(() => {
    // Evita carregar o script múltiplas vezes (principalmente em SPA).
    const existing = document.querySelector('script[data-instagram-embed="true"]')
    if (existing) return

    const script = document.createElement('script')
    script.async = true
    script.src = '//www.instagram.com/embed.js'
    script.dataset.instagramEmbed = 'true'
    document.body.appendChild(script)
  }, [])

  return (
    <div className="mx-auto max-w-[380px]">
      <blockquote
        className="instagram-media mx-auto"
        data-instgrm-permalink={profileUrl}
        data-instgrm-version="14"
        style={{
          maxWidth: '100%',
          width: '100%',
        }}
      />
      <div className="mt-2 text-center text-[11px] text-[#2a3d52]">
        <a
          href={profileUrl}
          target="_blank"
          rel="noreferrer"
          className="transition hover:text-[#58c0f9]"
        >
          Siga @benevere_dentalclinic no Instagram
        </a>
      </div>
    </div>
  )
}

export default InstagramWidget


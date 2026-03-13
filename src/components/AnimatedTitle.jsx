function AnimatedTitle({ as: Tag = 'h2', text, className = '', accent = false }) {
  const words = text.split(' ')

  return (
    <Tag aria-label={text} className={`letter-title ${className}`}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="letter-wrap">
        {(() => {
          let charIndex = 0

          return words.map((word, wordIndex) => (
            <span key={`${word}-${wordIndex}`} className="letter-word">
              {Array.from(word).map((char) => {
                const currentIndex = charIndex
                charIndex += 1

                return (
                  <span
                    key={`${char}-${currentIndex}`}
                    className={`letter-unit ${accent ? 'accent-char' : ''}`}
                    style={{ '--char-index': currentIndex }}
                  >
                    {char}
                  </span>
                )
              })}
              {wordIndex < words.length - 1 ? <span className="letter-gap"> </span> : null}
            </span>
          ))
        })()}
      </span>
    </Tag>
  )
}

export default AnimatedTitle

function AnimatedTitle({ as: Tag = 'h2', text, className = '', accent = false }) {
  return (
    <Tag aria-label={text} className={`letter-title ${className}`}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="letter-wrap">
        {Array.from(text).map((char, index) => (
          <span
            key={`${char}-${index}`}
            className={`letter-unit ${accent ? 'accent-char' : ''}`}
            style={{ '--char-index': index }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </span>
    </Tag>
  )
}

export default AnimatedTitle

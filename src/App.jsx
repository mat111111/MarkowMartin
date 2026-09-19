import { useState } from 'react'
import { author, books } from './content.js'

function BookCover({ title, gradient }) {
  return (
    <div className="cover-wrap">
      <div className="cover" style={{ backgroundImage: gradient }}>
        <span className="spine-title">{title}</span>
      </div>
    </div>
  )
}

function AboutView() {
  return (
    <section className="view about enter">
      <p className="about-eyebrow">{author.eyebrow}</p>
      <h2>{author.headline}</h2>
      {author.bio.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      <div className="about-links">
        {author.socials.map((s) => (
          <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer">
            {s.label}
          </a>
        ))}
      </div>
    </section>
  )
}

function BookView({ book }) {
  return (
    <section className="view enter">
      <div className="book-layout">
        <BookCover title={book.title} gradient={book.coverGradient} />
        <div>
          <p className="book-eyebrow">{book.eyebrow}</p>
          <h3 className="book-title">{book.title}</h3>
          <p className="book-meta">{book.meta}</p>
          <p className="book-intro">{book.intro}</p>
          <a className="book-cta" href={book.links[0].url} target="_blank" rel="noopener noreferrer">
            Ir al libro →
          </a>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  const [active, setActive] = useState('about')
  const [tick, setTick] = useState(0) // forces re-mount to replay entrance animation

  function go(target) {
    setActive(target)
    setTick((t) => t + 1)
  }

  const activeBook = books.find((b) => b.id === active)

  return (
    <div className="stage">
      <div className="bg">
        <div className="fiber" />
      </div>

      <aside className="shelf">
        <div className="brand">
          <span className="mark">{author.role}</span>
          <h1>{author.name}</h1>
        </div>

        <nav className="nav-section" aria-label="Sobre mí">
          <p className="kicker">Sobre mí</p>
          <button
            className={`nav-btn ${active === 'about' ? 'active' : ''}`}
            onClick={() => go('about')}
          >
            <span className="stitch" />
            Biografía y redes
          </button>
          <div className="socials" aria-label="Redes sociales">
            {author.socials.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            ))}
          </div>
        </nav>

        {books.map((book) => (
          <nav className="nav-section" aria-label={book.title} key={book.id}>
            <p className="kicker">{book.title}</p>
            {book.links.map((link, i) => (
              <button
                key={i}
                className={`nav-btn ${active === book.id ? 'active' : ''}`}
                onClick={() => go(book.id)}
              >
                <span className="stitch" />
                {link.label}
              </button>
            ))}
          </nav>
        ))}

        <p className="shelf-foot">© 2026 {author.name}. Todos los derechos reservados.</p>
      </aside>

      <main className="panel">
        <div key={tick}>
          {active === 'about' && <AboutView />}
          {activeBook && <BookView book={activeBook} />}
        </div>
      </main>
    </div>
  )
}

import { useState } from 'react'
import { author, books, videos } from './content.js'

function Vines() {
  return (
    <div className="vines" aria-hidden="true">
      {/* Enredadera esquina superior izquierda — capa lejana */}
      <svg className="vine vine-back vine-tl" viewBox="0 0 340 420" fill="none">
        <path d="M10 -10 C 30 60, -10 110, 40 170 C 90 230, 40 270, 90 330 C 120 365, 100 400, 140 430"
          stroke="var(--pine)" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="40" cy="170" r="7" fill="var(--pine)" />
        <circle cx="90" cy="330" r="5" fill="var(--gold)" />
        <path d="M40 170 C 65 155, 80 130, 70 100" stroke="var(--pine)" strokeWidth="1" strokeLinecap="round" />
        <path d="M90 330 C 115 320, 130 300, 122 275" stroke="var(--pine)" strokeWidth="1" strokeLinecap="round" />
      </svg>

      {/* Enredadera esquina superior izquierda — capa cercana */}
      <svg className="vine vine-front vine-tl" viewBox="0 0 340 420" fill="none">
        <path d="M-10 20 C 40 70, 0 130, 60 180 C 110 220, 70 260, 130 300"
          stroke="var(--pine)" strokeWidth="1" strokeLinecap="round" />
        <ellipse cx="60" cy="180" rx="12" ry="7" fill="var(--pine)" transform="rotate(-30 60 180)" />
        <ellipse cx="130" cy="300" rx="10" ry="6" fill="var(--gold)" transform="rotate(20 130 300)" />
        <ellipse cx="15" cy="55" rx="10" ry="6" fill="var(--pine)" transform="rotate(-60 15 55)" />
      </svg>

      {/* Enredadera esquina inferior derecha — capa lejana */}
      <svg className="vine vine-back vine-br" viewBox="0 0 340 420" fill="none">
        <path d="M330 430 C 300 360, 340 320, 290 260 C 250 210, 290 170, 240 120 C 210 90, 225 60, 190 20"
          stroke="var(--pine)" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="290" cy="260" r="7" fill="var(--pine)" />
        <circle cx="240" cy="120" r="5" fill="var(--gold)" />
        <path d="M290 260 C 265 248, 250 225, 258 198" stroke="var(--pine)" strokeWidth="1" strokeLinecap="round" />
      </svg>

      {/* Enredadera esquina inferior derecha — capa cercana */}
      <svg className="vine vine-front vine-br" viewBox="0 0 340 420" fill="none">
        <path d="M350 400 C 300 350, 340 290, 280 240 C 230 200, 270 160, 210 110"
          stroke="var(--pine)" strokeWidth="1" strokeLinecap="round" />
        <ellipse cx="280" cy="240" rx="12" ry="7" fill="var(--pine)" transform="rotate(35 280 240)" />
        <ellipse cx="210" cy="110" rx="10" ry="6" fill="var(--gold)" transform="rotate(-20 210 110)" />
      </svg>
    </div>
  )
}

function BookCover({ title, image, gradient }) {
  const background = image ? `url(${image})` : gradient
  return (
    <div className="cover-wrap">
      <div className="cover" style={{ backgroundImage: background }}>
        {!image && <span className="spine-title">{title}</span>}
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

function VideosView() {
  return (
    <section className="view enter">
      <p className="about-eyebrow">Multimedia</p>
      <h2 className="videos-title">Videos</h2>
      <div className="videos-grid">
        {videos.map((v) => (
          <div className="video-card" key={v.title}>
            <div className="video-frame">
              <iframe
                src={v.url}
                title={v.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <h3 className="video-card-title">{v.title}</h3>
            <p className="video-card-desc">{v.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

const TABS = [
  { id: 'intro', label: 'Introducción' },
  { id: 'purchase', label: 'Comprar' },
  { id: 'digital', label: 'Versión digital' },
]

function BookView({ book }) {
  const [tab, setTab] = useState('intro')

  return (
    <section className="view enter">
      <div className="book-layout">
        <BookCover title={book.title} image={book.cover} gradient={book.coverGradient} />
        <div>
          <p className="book-eyebrow">{book.eyebrow}</p>
          <h3 className="book-title">{book.title}</h3>
          <p className="book-meta">{book.meta}</p>

          <div className="book-tabs" role="tablist" aria-label={`Secciones de ${book.title}`}>
            {TABS.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={tab === t.id}
                className={`book-tab ${tab === t.id ? 'active' : ''}`}
                onClick={() => setTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>

          {tab === 'intro' && <p className="book-intro">{book.intro}</p>}

          {tab === 'purchase' && (
            <div className="book-pane">
              <p className="book-price">{book.purchase.price}</p>
              <p className="book-intro">{book.purchase.description}</p>
              <a className="book-cta" href={book.purchase.url} target="_blank" rel="noopener noreferrer">
                Comprar tapa dura →
              </a>
            </div>
          )}

          {tab === 'digital' && (
            <div className="book-pane">
              <p className="book-price">{book.digital.price}</p>
              <p className="book-intro">{book.digital.description}</p>
              <a className="book-cta" href={book.digital.url} target="_blank" rel="noopener noreferrer">
                Descargar versión digital →
              </a>
            </div>
          )}
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
        <Vines />
      </div>

      <aside className="shelf">
        <div className="brand">
          <span className="mark">{author.role}</span>
          <h1>{author.name}</h1>
        </div>

        <nav className="nav-section" aria-label="Navegación principal">
          <button
            className={`nav-btn ${active === 'about' ? 'active' : ''}`}
            onClick={() => go('about')}
          >
            <span className="stitch" />
            Sobre mí
          </button>

          {books.map((book) => (
            <button
              key={book.id}
              className={`nav-btn ${active === book.id ? 'active' : ''}`}
              onClick={() => go(book.id)}
            >
              <span className="stitch" />
              {book.title}
            </button>
          ))}

          <button
            className={`nav-btn ${active === 'videos' ? 'active' : ''}`}
            onClick={() => go('videos')}
          >
            <span className="stitch" />
            Videos
          </button>
        </nav>

        <nav className="nav-section" aria-label="Redes sociales">
          <p className="kicker">Redes</p>
          <div className="socials">
            {author.socials.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            ))}
          </div>
        </nav>

        <p className="shelf-foot">© 2026 {author.name}. Todos los derechos reservados.</p>
      </aside>

      <main className="panel">
        <div key={tick}>
          {active === 'about' && <AboutView />}
          {active === 'videos' && <VideosView />}
          {activeBook && <BookView book={activeBook} />}
        </div>
      </main>
    </div>
  )
}

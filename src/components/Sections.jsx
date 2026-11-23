import { useEffect, useRef, useState } from 'react'
import {
  company, nav, hero, about, featuresIntro, features, productsIntro, showcase,
  brandsIntro, brands, orderIntro, channels, locationIntro, faqIntro, faqs, cta, footer,
} from '../data/content'
import { Icon, AugustStoreLogo } from './Art'

const whatsapp = `https://wa.me/${company.whatsapp}`

function ShopButton({ children = 'Belanja di Shopee', variant = 'primary' }) {
  return (
    <a className={`btn btn-shop btn-${variant}`} href={company.shopee} target="_blank" rel="noreferrer">
      <Icon name="bag" />
      <span>{children}</span>
    </a>
  )
}

const delay = (i) => ({ '--d': i })

function Eyebrow({ children }) {
  return <p className="eyebrow">{children}</p>
}

export function Announcement() {
  return (
    <div className="announce">
      <div className="container">
        Belanja online di <a href={company.shopee} target="_blank" rel="noreferrer">Shopee August Store</a>
        <span className="announce-extra"> · Grosir &amp; eceran? <a href={whatsapp} target="_blank" rel="noreferrer">Tanya via WhatsApp</a></span>
      </div>
    </div>
  )
}

// Di desktop link ini disembunyikan agar logo tetap di tengah; tetap ada di menu HP & footer.
const headerExtras = ['#keunggulan', '#faq']

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-inner">
        <button className={`menu-toggle ${open ? 'is-open' : ''}`} aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span />
        </button>
        <nav className={`nav ${open ? 'is-open' : ''}`}>
          {nav.map((item) => (
            <a key={item.href} className={headerExtras.includes(item.href) ? 'nav-extra' : undefined} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
          ))}
        </nav>
        <a href="#top" className="logo" onClick={() => setOpen(false)} aria-label="CMB — kembali ke atas">
          <img className="logo-mark" src="/brand/cmb-logo.svg" alt="CMB" width="94" height="44" />
        </a>
        <div className="header-actions">
          <a className="icon-btn" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Hubungi via WhatsApp"><Icon name="phone" /></a>
          <ShopButton variant="small">Belanja</ShopButton>
        </div>
      </div>
    </header>
  )
}

function RotatingWord({ words }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = setInterval(() => setIndex((i) => (i + 1) % words.length), 2600)
    return () => clearInterval(timer)
  }, [words.length])

  return <em key={index} className="rotating-word">{words[index]}</em>
}

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-visual reveal reveal-scale" aria-hidden="true">
          <img className="hv hv-1" src="/products/trecy-economy.png" alt="" />
          <img className="hv hv-2" src="/products/trecy-facial-1kg.png" alt="" />
          <img className="hv hv-3" src="/products/trecy-belah.png" alt="" />
        </div>
        <div className="hero-copy">
          <h1 className="reveal" style={delay(0)}>{hero.title} <RotatingWord words={hero.accents} /></h1>
          <p className="lead reveal" style={delay(1)}>{hero.lead}</p>
          <div className="actions reveal" style={delay(2)}>
            <ShopButton variant="light" />
            <a className="btn btn-outline-light" href="#produk">Lihat produk</a>
          </div>
          <ul className="hero-points reveal" style={delay(3)}>
            {hero.points.map((p) => <li key={p}>{p}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}

export function About() {
  return (
    <section className="section" id="tentang">
      <div className="container">
        <div className="section-head center reveal">
          <Eyebrow>Tentang kami</Eyebrow>
          <h2>{about.title}</h2>
          <p>{about.lead}</p>
        </div>

        <div className="about-grid">
          <div className="prose">
            {about.story.map((text, i) => (
              <p key={i} className="reveal" style={delay(i)}>{text}</p>
            ))}
            <div className="audiences reveal" style={delay(3)}>
              <span className="audiences-label">Kami melayani</span>
              <ul>
                {about.audiences.map((a) => <li key={a}>{a}</li>)}
              </ul>
            </div>
          </div>
          <aside className="about-card reveal reveal-scale">
            <img src="/brand/cmb-logo.svg" alt="Logo CMB" width="140" height="66" />
            <dl>
              <div><dt>Nama perusahaan</dt><dd>{company.name}</dd></div>
              <div><dt>Berdiri</dt><dd>{company.founded}</dd></div>
              <div><dt>Bidang usaha</dt><dd>Kertas &amp; produk tissue</dd></div>
              <div><dt>Lokasi</dt><dd>Cipondoh, Kota Tangerang</dd></div>
            </dl>
          </aside>
        </div>

        <div className="vm">
          <div className="vm-card vm-vision reveal">
            <span className="vm-icon"><Icon name="eye" /></span>
            <h3>Visi</h3>
            <p>{about.vision}</p>
          </div>
          <div className="vm-card vm-mission reveal" style={delay(1)}>
            <span className="vm-icon"><Icon name="target" /></span>
            <h3>Misi</h3>
            <ol>
              {about.mission.map((m) => <li key={m}>{m}</li>)}
            </ol>
          </div>
        </div>

        <div className="values">
          {about.values.map((v, i) => (
            <div key={v.title} className={`value value-${i + 1} reveal`} style={delay(i)}>
              <span className="value-icon"><Icon name={v.icon} /></span>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Features() {
  return (
    <section className="section tint-cream" id="keunggulan">
      <div className="container">
        <div className="section-head center reveal">
          <Eyebrow>Keunggulan</Eyebrow>
          <h2>{featuresIntro.title}</h2>
          <p>{featuresIntro.text}</p>
        </div>
        <div className="features">
          {features.map((f, i) => (
            <div key={f.title} className="feature reveal" style={delay(i % 3)}>
              <span className="feature-icon"><Icon name={f.icon} /></span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductSlider({ items }) {
  // `dir` menentukan arah geser: 1 = ke kiri (berikutnya), -1 = ke kanan (sebelumnya)
  const [{ index, prev, dir }, setState] = useState({ index: 0, prev: null, dir: 1 })
  const [paused, setPaused] = useState(false)
  const touch = useRef(null)
  const go = (i, d) => setState((s) => {
    const next = (i + items.length) % items.length
    if (next === s.index) return s
    return { index: next, prev: s.index, dir: d ?? (next > s.index ? 1 : -1) }
  })

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = setInterval(() => go(index + 1, 1), 4000)
    return () => clearInterval(timer)
  }, [paused, index, items.length])

  return (
    <div
      className="slider reveal"
      data-paused={paused || undefined}
      style={{ '--dir': dir }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => { touch.current = e.touches[0].clientX; setPaused(true) }}
      onTouchEnd={(e) => {
        const dx = e.changedTouches[0].clientX - (touch.current ?? 0)
        if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1), dx < 0 ? 1 : -1)
        setPaused(false)
      }}
    >
      <div className="slider-stage">
        {items.map((p, i) => (
          <img
            key={p.src}
            className={`slide ${i === index ? 'is-active' : i === prev ? 'is-leaving' : ''}`}
            src={p.src}
            alt={p.alt}
            aria-hidden={i !== index}
          />
        ))}
        <div className="slider-shadow" aria-hidden="true" />
      </div>
      <button className="slider-arrow slider-prev" onClick={() => go(index - 1, -1)} aria-label="Produk sebelumnya">‹</button>
      <button className="slider-arrow slider-next" onClick={() => go(index + 1, 1)} aria-label="Produk berikutnya">›</button>
      <div className="slider-dots">
        {items.map((p, i) => (
          // key berubah agar progres titik aktif mulai ulang tiap ganti slide / jeda
          <button key={i === index ? `${p.src}-${paused}` : p.src} className={i === index ? 'is-active' : ''} onClick={() => go(i)} aria-label={`Tampilkan ${p.alt}`} />
        ))}
      </div>
    </div>
  )
}

export function Products() {
  return (
    <section className="section" id="produk">
      <div className="container">
        <div className="section-head center reveal">
          <Eyebrow>Produk</Eyebrow>
          <h2>{productsIntro.title}</h2>
          <p>{productsIntro.text}</p>
        </div>
        <div className="slider-panel">
          <ProductSlider items={showcase} />
        </div>
        <div className="products-note reveal">
          <p><strong>Tidak menemukan produk yang Anda cari?</strong> Kami juga menerima permintaan khusus untuk kebutuhan usaha.</p>
          <div className="actions">
            <a className="btn btn-primary" href={company.shopee} target="_blank" rel="noreferrer">Lihat katalog lengkap</a>
            <a className="btn btn-ghost" href={whatsapp} target="_blank" rel="noreferrer">Tanya via WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  )
}

// Baris logo terus bergerak, jadi :hover bawaan browser tidak ikut berpindah saat kursor diam.
// Logo di bawah kursor dicek setiap frame dan diberi class `is-hover`.
function useMarqueeHover(trackRef) {
  useEffect(() => {
    const track = trackRef.current
    if (!track || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const marquee = track.parentElement
    let pointer = null
    let frame = 0
    let current = null

    const setCurrent = (next) => {
      if (next === current) return
      current?.classList.remove('is-hover')
      next?.classList.add('is-hover')
      current = next
    }
    const tick = () => {
      const el = document.elementFromPoint(pointer.x, pointer.y)?.closest('.brand')
      setCurrent(el && track.contains(el) ? el : null)
      frame = requestAnimationFrame(tick)
    }
    const onMove = (e) => {
      pointer = { x: e.clientX, y: e.clientY }
      if (!frame) frame = requestAnimationFrame(tick)
    }
    const onLeave = () => {
      cancelAnimationFrame(frame)
      frame = 0
      setCurrent(null)
    }

    marquee.addEventListener('pointermove', onMove)
    marquee.addEventListener('pointerleave', onLeave)
    return () => {
      onLeave()
      marquee.removeEventListener('pointermove', onMove)
      marquee.removeEventListener('pointerleave', onLeave)
    }
  }, [trackRef])
}

export function Brands() {
  const trackRef = useRef(null)
  useMarqueeHover(trackRef)

  return (
    <section className="section brands-section" id="brand">
      <div className="container">
        <div className="section-head center reveal">
          <Eyebrow>Brand</Eyebrow>
          <h2>{brandsIntro.title}</h2>
          <p>{brandsIntro.text}</p>
        </div>
      </div>
      <div className="brands-marquee">
        <div className="brands-track" ref={trackRef}>
          {[...brands, ...brands].map((b, i) => (
            <div key={i} className="brand" aria-hidden={i >= brands.length || undefined}>
              {b.logo
                ? <img className={b.mono ? 'is-mono' : b.light ? 'is-light' : undefined} src={b.logo} alt={b.name} />
                : <span className="brand-name">{b.name}</span>}
            </div>
          ))}
        </div>
      </div>
      <div className="container brands-foot reveal">
        <p>Mencari merek lain? <a className="text-link" href={whatsapp} target="_blank" rel="noreferrer">Tanyakan stok via WhatsApp</a></p>
        <small>Nama dan logo merek adalah milik pemiliknya masing-masing.</small>
      </div>
    </section>
  )
}

export function HowToOrder() {
  return (
    <section className="section tint-blush" id="cara-belanja">
      <div className="container">
        <div className="section-head center reveal">
          <Eyebrow>Cara belanja</Eyebrow>
          <h2>{orderIntro.title}</h2>
          <p>{orderIntro.text}</p>
        </div>
        <div className="channels">
          {channels.map((c, i) => (
            <div key={c.key} className={`channel channel-${c.key} reveal`} style={delay(i)}>
              <div className="channel-head">
                <span className="channel-icon"><Icon name={c.icon} /></span>
                <span className="channel-badge">{c.badge}</span>
              </div>
              <h3>{c.title}</h3>
              {c.key === 'online' && (
                <a className="store-tag" href={company.shopee} target="_blank" rel="noreferrer">
                  <AugustStoreLogo />
                  <span>Toko resmi kami di Shopee</span>
                </a>
              )}
              <ol className="channel-steps">
                {c.steps.map((s) => (
                  <li key={s.title}>
                    <strong>{s.title}</strong>
                    <span>{s.text}</span>
                  </li>
                ))}
              </ol>
              {c.key === 'online'
                ? <ShopButton variant="light" />
                : <a className="btn btn-primary" href={company.directions} target="_blank" rel="noreferrer"><Icon name="pin" /> Petunjuk arah ke toko</a>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Location() {
  const embed = `https://www.google.com/maps?q=${encodeURIComponent(company.mapsQuery)}&z=17&output=embed`
  return (
    <section className="section" id="lokasi">
      <div className="container location">
        <div className="location-info reveal">
          <Eyebrow>Lokasi</Eyebrow>
          <h2>{locationIntro.title}</h2>
          <p className="section-text">{locationIntro.text}</p>
          <dl className="info">
            <div><dt>Alamat</dt><dd>{company.address}</dd></div>
            <div><dt>Jam buka</dt><dd>{company.hours}</dd></div>
            <div><dt>Telepon</dt><dd>{company.phone}</dd></div>
            <div><dt>Email</dt><dd><a href={`mailto:${company.email}`}>{company.email}</a></dd></div>
          </dl>
          <div className="actions">
            <a className="btn btn-primary" href={company.directions} target="_blank" rel="noreferrer">Petunjuk arah</a>
            <a className="btn btn-ghost" href={company.maps} target="_blank" rel="noreferrer">Buka di Google Maps</a>
          </div>
        </div>
        <div className="map reveal reveal-scale" style={delay(1)}>
          <iframe title="Lokasi CMB" src={embed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>
    </section>
  )
}

export function Faq() {
  return (
    <section className="section tint-cream" id="faq">
      <div className="container faq">
        <div className="faq-head reveal">
          <Eyebrow>FAQ</Eyebrow>
          <h2>{faqIntro.title}</h2>
          <p className="section-text">{faqIntro.text}</p>
          <a className="btn btn-primary" href={whatsapp} target="_blank" rel="noreferrer"><Icon name="phone" /> Tanya via WhatsApp</a>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <details key={f.q} className="faq-item reveal" style={delay(i % 3)} open={i === 0}>
              <summary>{f.q}<span className="faq-toggle" aria-hidden="true" /></summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CallToAction() {
  return (
    <section className="cta-wrap">
      <div className="container">
        <div className="cta reveal reveal-scale">
          <h2>{cta.title}</h2>
          <p>{cta.text}</p>
          <ul className="cta-perks">
            {cta.perks.map((p) => <li key={p}>{p}</li>)}
          </ul>
          <div className="actions">
            <a className="btn btn-light" href={whatsapp} target="_blank" rel="noreferrer">
              <Icon name="phone" /> Hubungi via WhatsApp
            </a>
            <ShopButton variant="outline-light" />
          </div>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="#top" className="logo">
            <img className="logo-mark" src="/brand/cmb-logo.svg" alt="CMB" width="94" height="44" />
          </a>
          <p>{footer.blurb}</p>
        </div>
        <div>
          <h4>Navigasi</h4>
          {nav.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </div>
        <div>
          <h4>Belanja</h4>
          <a className="footer-store" href={company.shopee} target="_blank" rel="noreferrer">
            <AugustStoreLogo />
          </a>
          <a href={company.shopee} target="_blank" rel="noreferrer">Shopee</a>
          <a href={company.maps} target="_blank" rel="noreferrer">Toko offline</a>
        </div>
        <div>
          <h4>Kontak</h4>
          <span>{company.address}</span>
          <span>{company.phone}</span>
          <a href={`mailto:${company.email}`}>{company.email}</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {company.name}</span>
        <a href="#top">Kembali ke atas ↑</a>
      </div>
    </footer>
  )
}

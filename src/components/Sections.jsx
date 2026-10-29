import { useEffect, useRef, useState } from 'react'
import {
  company, nav, hero, about, featuresIntro, features, productsIntro, showcase,
  brandsIntro, brands, orderIntro, channels, locationIntro, faqIntro, faqs, cta, footer,
} from '../data/content'
import { Icon, TissueSheet, TissueRollSide, AugustStoreLogo } from './Art'

function ShopButton({ children = 'Belanja di Shopee', variant = 'primary' }) {
  return (
    <a className={`btn btn-shop btn-${variant}`} href={company.shopee} target="_blank" rel="noreferrer">
      <Icon name="bag" />
      <span>{children}</span>
    </a>
  )
}

const delay = (i) => ({ '--d': i })

function SectionLabel({ index, children }) {
  return <p className="label"><span>{index}</span>{children}</p>
}

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#top" className="logo" onClick={() => setOpen(false)}>
          <img className="logo-mark" src="/brand/cmb-logo.svg" alt="CMB" width="90" height="42" />
          <span className="logo-text">Chandra Maju Bersama</span>
        </a>
        <nav className={`nav ${open ? 'is-open' : ''}`}>
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
          ))}
          <ShopButton variant="small">Belanja</ShopButton>
        </nav>
        <button className={`menu-toggle ${open ? 'is-open' : ''}`} aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span />
        </button>
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
  const [shift, setShift] = useState(0)

  useEffect(() => {
    let frame = 0
    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        setShift(Math.min(window.scrollY, 900))
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <section className="hero" id="top" style={{ '--hy': `${shift}px` }}>
      <div className="hero-decor" aria-hidden="true">
        <span className="decor decor-1"><TissueSheet /></span>
        <span className="decor decor-2"><TissueSheet /></span>
        <span className="decor decor-3"><TissueRollSide /></span>
        <span className="decor decor-4"><TissueRollSide /></span>
      </div>
      <div className="container">
        <div className="hero-copy">
          <h1 className="reveal" style={delay(0)}>{hero.title} <RotatingWord words={hero.accents} /></h1>
          <p className="lead reveal" style={delay(1)}>{hero.lead}</p>
          <div className="actions reveal" style={delay(2)}>
            <ShopButton />
            <a className="btn btn-ghost" href="#produk">Lihat produk</a>
          </div>
          <ul className="hero-points reveal" style={delay(3)}>
            {hero.points.map((p) => <li key={p}>{p}</li>)}
          </ul>
        </div>
      </div>
      <a className="scroll-cue" href="#tentang" aria-label="Gulir ke bagian berikutnya"><span />Gulir</a>
    </section>
  )
}

export function About() {
  return (
    <section className="section about" id="tentang">
      <div className="container">
        <div className="two-col about-intro">
          <div className="reveal">
            <SectionLabel index="01">Tentang kami</SectionLabel>
            <h2>{about.title}</h2>
          </div>
          <p className="about-lead reveal" style={delay(1)}>{about.lead}</p>
        </div>

        <div className="about-story">
          <aside className="about-card reveal reveal-scale">
            <img src="/brand/cmb-logo.svg" alt="Logo CMB" width="180" height="84" />
            <dl>
              <div><dt>Nama perusahaan</dt><dd>{company.name}</dd></div>
              <div><dt>Berdiri</dt><dd>{company.founded}</dd></div>
              <div><dt>Bidang usaha</dt><dd>Kertas &amp; produk tissue</dd></div>
              <div><dt>Lokasi</dt><dd>Cipondoh, Kota Tangerang</dd></div>
            </dl>
          </aside>
          <div className="prose">
            {about.story.map((text, i) => (
              <p key={i} className="reveal" style={delay(i + 1)}>{text}</p>
            ))}
            <div className="audiences reveal" style={delay(4)}>
              <span className="audiences-label">Kami melayani</span>
              <ul>
                {about.audiences.map((a) => <li key={a}>{a}</li>)}
              </ul>
            </div>
          </div>
        </div>

        <div className="vm">
          <div className="vm-card vm-vision reveal">
            <span className="vm-icon"><Icon name="eye" /></span>
            <h3>Visi</h3>
            <p>{about.vision}</p>
          </div>
          <div className="vm-card reveal" style={delay(1)}>
            <span className="vm-icon"><Icon name="target" /></span>
            <h3>Misi</h3>
            <ol>
              {about.mission.map((m) => <li key={m}>{m}</li>)}
            </ol>
          </div>
        </div>

        <div className="values">
          {about.values.map((v, i) => (
            <div key={v.title} className="value reveal" style={delay(i)}>
              <span className="value-num">{String(i + 1).padStart(2, '0')}</span>
              <Icon name={v.icon} />
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
    <section className="section section-alt" id="keunggulan">
      <div className="container">
        <div className="section-head reveal">
          <SectionLabel index="02">Keunggulan</SectionLabel>
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
        <div className="section-head split-head reveal">
          <div>
            <SectionLabel index="03">Produk</SectionLabel>
            <h2>{productsIntro.title}</h2>
            <p>{productsIntro.text}</p>
          </div>
          <a className="text-link" href={company.shopee} target="_blank" rel="noreferrer">Lihat katalog lengkap →</a>
        </div>
        <ProductSlider items={showcase} />
        <div className="products-note reveal">
          <p><strong>Tidak menemukan produk yang Anda cari?</strong> Kami juga menerima permintaan khusus untuk kebutuhan usaha.</p>
          <a className="text-link" href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noreferrer">Tanyakan via WhatsApp</a>
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
        <div className="section-head reveal">
          <SectionLabel index="04">Brand</SectionLabel>
          <h2>{brandsIntro.title}</h2>
          <p>{brandsIntro.text}</p>
        </div>
        <div className="brands-marquee reveal">
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
        <div className="brands-foot reveal">
          <p>Mencari merek lain? <a className="text-link" href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noreferrer">Tanyakan stok via WhatsApp</a></p>
          <small>Nama dan logo merek adalah milik pemiliknya masing-masing.</small>
        </div>
      </div>
    </section>
  )
}

export function HowToOrder() {
  return (
    <section className="section section-alt" id="cara-belanja">
      <div className="container">
        <div className="section-head reveal">
          <SectionLabel index="05">Cara belanja</SectionLabel>
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
                ? <ShopButton />
                : <a className="btn btn-ghost" href={company.directions} target="_blank" rel="noreferrer"><Icon name="pin" /> Petunjuk arah ke toko</a>}
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
      <div className="container two-col">
        <div className="reveal">
          <SectionLabel index="06">Lokasi</SectionLabel>
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
    <section className="section section-alt" id="faq">
      <div className="container two-col faq">
        <div className="reveal faq-head">
          <SectionLabel index="07">FAQ</SectionLabel>
          <h2>{faqIntro.title}</h2>
          <p className="section-text">{faqIntro.text}</p>
          <a className="btn btn-ghost" href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noreferrer"><Icon name="phone" /> Tanya via WhatsApp</a>
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
          <div>
            <h2>{cta.title}</h2>
            <p>{cta.text}</p>
            <ul className="cta-perks">
              {cta.perks.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </div>
          <div className="actions">
            <a className="btn btn-light" href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noreferrer">
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
            <img className="logo-mark" src="/brand/cmb-logo.svg" alt="CMB" width="90" height="42" />
            <span className="logo-text">Chandra Maju Bersama</span>
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

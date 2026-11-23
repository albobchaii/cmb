import { useState } from 'react'
import {
  company, nav, topbar, about, featuresIntro, features, catalogIntro, products, brands,
  locationIntro, faqIntro, faqs, footer,
} from '../data/content'
import { Icon, TrecyLogo } from './Art'

const whatsapp = `https://wa.me/${company.whatsapp}`
const askPrice = (name) => `${whatsapp}?text=${encodeURIComponent(`Halo CMB, saya ingin menanyakan harga ${name}.`)}`

function ShopButton({ children = 'Belanja di Shopee', variant = 'dark' }) {
  return (
    <a className={`btn btn-${variant}`} href={company.shopee} target="_blank" rel="noreferrer">
      <Icon name="bag" />
      <span>{children}</span>
    </a>
  )
}

const delay = (i) => ({ '--d': i })

export function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <span>{topbar}</span>
        <a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp {company.phone}</a>
      </div>
    </div>
  )
}

function SearchBox({ query, setQuery }) {
  return (
    <form className="search" role="search" onSubmit={(e) => { e.preventDefault(); document.getElementById('katalog')?.scrollIntoView() }}>
      <Icon name="search" />
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Cari produk atau merek…"
        aria-label="Cari produk"
      />
    </form>
  )
}

export function Header({ query, setQuery }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header-main">
        <a href="#top" className="logo" aria-label="CMB — kembali ke atas">
          <img className="logo-mark" src="/brand/cmb-logo.svg" alt="CMB" width="94" height="44" />
          <span className="logo-text">Chandra Maju Bersama</span>
        </a>
        <SearchBox query={query} setQuery={setQuery} />
        <div className="header-actions">
          <a className="btn btn-outline btn-sm" href={whatsapp} target="_blank" rel="noreferrer"><Icon name="phone" /><span>WhatsApp</span></a>
          <ShopButton variant="dark btn-sm">Shopee</ShopButton>
          <button className={`menu-toggle ${open ? 'is-open' : ''}`} aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            <span /><span />
          </button>
        </div>
      </div>
      <nav className={`nav ${open ? 'is-open' : ''}`}>
        <div className="container nav-inner">
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
          ))}
        </div>
      </nav>
    </header>
  )
}

// Kategori katalog = merek tissue. Trecy (produk CMB) di depan, lalu merek lain yang kami jual.
const categories = [
  { name: 'Trecy', wordmark: true },
  ...brands,
]
const countOf = (brand) => products.filter((p) => p.brand === brand).length

function CategoryTile({ cat, active, onSelect }) {
  const n = countOf(cat.name)
  return (
    <button className={`cat ${active ? 'is-active' : ''}`} onClick={onSelect} aria-pressed={active}>
      <span className="cat-logo">
        {cat.wordmark
          ? <TrecyLogo />
          : <img className={cat.mono ? 'is-mono' : cat.light ? 'is-light' : undefined} src={cat.logo} alt="" loading="lazy" />}
      </span>
      <span className="cat-name">{cat.name}</span>
      <span className="cat-count">{n ? `${n} produk` : 'Tanya stok'}</span>
    </button>
  )
}

function ProductCard({ item, index }) {
  return (
    <article className="card" style={delay(index % 8)}>
      <div className="card-media">
        <img src={item.image} alt={item.name} loading="lazy" />
      </div>
      <div className="card-body">
        <p className="card-label">{item.brand}</p>
        <h3>{item.name}</h3>
      </div>
    </article>
  )
}

export function Catalog({ query, setQuery }) {
  const [brand, setBrand] = useState(null)
  const q = query.trim().toLowerCase()
  const items = products.filter((p) =>
    (!brand || p.brand === brand) && (!q || `${p.brand} ${p.name}`.toLowerCase().includes(q)))
  const pick = (name) => {
    setBrand(brand === name ? null : name)
    document.getElementById('produk')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <section className="categories" id="katalog">
        <div className="container">
          <div className="catalog-head">
            <h1>{catalogIntro.title}</h1>
            <p>{catalogIntro.text}</p>
          </div>
          <div className="cat-head">
            <h2>Kategori merek</h2>
            <p>Pilih merek tissue untuk melihat produknya.</p>
          </div>
          <div className="cat-grid">
            {categories.map((c) => (
              <CategoryTile key={c.name} cat={c} active={brand === c.name} onSelect={() => pick(c.name)} />
            ))}
          </div>
        </div>
      </section>

      <section className="catalog" id="produk">
        <div className="container">
          <div className="toolbar">
            <h2>{brand ? `Produk ${brand}` : 'Semua produk'}</h2>
            <div className="chips">
              <button className={`chip ${!brand ? 'is-active' : ''}`} onClick={() => setBrand(null)}>Semua merek</button>
              {brand && <button className="chip is-active" onClick={() => setBrand(null)}>{brand} ✕</button>}
              {query && <button className="chip chip-clear" onClick={() => setQuery('')}>“{query}” ✕</button>}
            </div>
          </div>
          <p className="count">{items.length} produk</p>
          {items.length > 0 ? (
            <div className="grid">
              {items.map((item, i) => <ProductCard key={item.name} item={item} index={i} />)}
            </div>
          ) : (
            <div className="empty">
              <p>
                <strong>{brand ? `Produk ${brand} tersedia di toko kami.` : 'Produk tidak ditemukan.'}</strong>{' '}
                {brand ? 'Foto katalognya belum kami unggah — tanyakan varian dan stoknya lewat WhatsApp.' : 'Mungkin produknya tersedia tapi belum ada di katalog ini.'}
              </p>
              <a className="btn btn-dark" href={askPrice(brand ? `tissue ${brand}` : query || 'produk tissue')} target="_blank" rel="noreferrer"><Icon name="phone" /> Tanyakan via WhatsApp</a>
            </div>
          )}
          <div className="catalog-note">
            <p><strong>Butuh dalam jumlah besar?</strong> Kami melayani grosir untuk toko, hotel, kantor dan usaha kuliner.</p>
            <a className="btn btn-outline" href={askPrice('pembelian grosir')} target="_blank" rel="noreferrer">Minta penawaran grosir</a>
          </div>
        </div>
      </section>
    </>
  )
}

export function Features() {
  return (
    <section className="section" id="keunggulan">
      <div className="container">
        <div className="section-head reveal">
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

export function About() {
  return (
    <section className="section tint" id="tentang">
      <div className="container">
        <div className="about-grid">
          <div>
            <div className="section-head reveal">
              <h2>{about.title}</h2>
              <p>{about.lead}</p>
            </div>
            <div className="prose">
              {about.story.map((text, i) => (
                <p key={i} className="reveal" style={delay(i)}>{text}</p>
              ))}
            </div>
            <div className="audiences reveal">
              <span className="audiences-label">Kami melayani</span>
              <ul>
                {about.audiences.map((a) => <li key={a}>{a}</li>)}
              </ul>
            </div>
          </div>
          <aside className="about-card reveal">
            <img src="/brand/cmb-logo.svg" alt="Logo CMB" width="140" height="66" />
            <dl>
              <div><dt>Nama perusahaan</dt><dd>{company.name}</dd></div>
              <div><dt>Berdiri</dt><dd>{company.founded}</dd></div>
              <div><dt>Bidang usaha</dt><dd>Kertas &amp; produk tissue</dd></div>
              <div><dt>Lokasi</dt><dd>Cipondoh, Kota Tangerang</dd></div>
            </dl>
          </aside>
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
        <div className="reveal">
          <div className="section-head">
            <h2>{locationIntro.title}</h2>
            <p>{locationIntro.text}</p>
          </div>
          <dl className="info">
            <div><dt>Alamat</dt><dd>{company.address}</dd></div>
            <div><dt>Jam buka</dt><dd>{company.hours}</dd></div>
            <div><dt>Telepon</dt><dd>{company.phone}</dd></div>
            <div><dt>Email</dt><dd><a href={`mailto:${company.email}`}>{company.email}</a></dd></div>
          </dl>
          <div className="actions">
            <a className="btn btn-dark" href={company.directions} target="_blank" rel="noreferrer">Petunjuk arah</a>
            <a className="btn btn-outline" href={company.maps} target="_blank" rel="noreferrer">Buka di Google Maps</a>
          </div>
        </div>
        <div className="map reveal" style={delay(1)}>
          <iframe title="Lokasi CMB" src={embed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>
    </section>
  )
}

export function Faq() {
  return (
    <section className="section tint" id="faq">
      <div className="container faq">
        <div className="faq-head reveal">
          <h2>{faqIntro.title}</h2>
          <p>{faqIntro.text}</p>
          <a className="btn btn-dark" href={whatsapp} target="_blank" rel="noreferrer"><Icon name="phone" /> Tanya via WhatsApp</a>
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

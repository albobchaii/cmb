import { useState } from 'react'
import { TopBar, Header, Catalog, Features, About, Location, Faq, Footer } from './components/Sections'
import useReveal from './useReveal'

export default function App() {
  useReveal()
  // kata kunci dari kolom pencarian di header, dipakai untuk menyaring katalog
  const [query, setQuery] = useState('')

  return (
    <>
      <TopBar />
      <Header query={query} setQuery={setQuery} />
      <main id="top">
        <Catalog query={query} setQuery={setQuery} />
        <Features />
        <About />
        <Location />
        <Faq />
      </main>
      <Footer />
    </>
  )
}

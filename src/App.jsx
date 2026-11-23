import { useState } from 'react'
import { TopBar, Header, Catalog, HowToOrder, Features, About, Location, Faq, CallToAction, Footer } from './components/Sections'
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
        <HowToOrder />
        <Features />
        <About />
        <Location />
        <Faq />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}

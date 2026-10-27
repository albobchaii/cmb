import { Header, Hero, About, Features, Products, Brands, HowToOrder, Location, Faq, CallToAction, Footer } from './components/Sections'
import TissueRoll from './components/TissueRoll'
import useReveal from './useReveal'

export default function App() {
  useReveal()

  return (
    <>
      <Header />
      <TissueRoll />
      <main>
        <Hero />
        <About />
        <Features />
        <Products />
        <Brands />
        <HowToOrder />
        <Location />
        <Faq />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}

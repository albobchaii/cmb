import { Announcement, Header, Hero, About, Features, Products, Brands, HowToOrder, Location, Faq, CallToAction, Footer } from './components/Sections'
import useReveal from './useReveal'

export default function App() {
  useReveal()

  return (
    <>
      <Announcement />
      <Header />
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

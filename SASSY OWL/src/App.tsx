import { BoutiqueProvider } from './context/BoutiqueContext'
import { AboutSection } from './components/AboutSection'
import { CategoryGrid } from './components/CategoryGrid'
import { ContactSection } from './components/ContactSection'
import { CTASection } from './components/CTASection'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Hero } from './components/Hero'
import { InstagramSection } from './components/InstagramSection'
import { JewelleryShowcase } from './components/JewelleryShowcase'
import { Lightbox } from './components/Lightbox'
import { MobileMenu } from './components/MobileMenu'
import { Navbar } from './components/Navbar'
import { ProductGrid } from './components/ProductGrid'
import { ProductModal } from './components/ProductModal'
import { ReviewSection } from './components/ReviewSection'
import { SearchOverlay } from './components/SearchOverlay'
import { StoreSection } from './components/StoreSection'
import { WhatsAppButton } from './components/WhatsAppButton'
import { WishlistDrawer } from './components/WishlistDrawer'

function App() {
  return (
    <BoutiqueProvider>
      <a className="skip-link" href="#collections">
        Skip to collections
      </a>
      <Navbar />
      <MobileMenu />
      <SearchOverlay />
      <WishlistDrawer />
      <ProductModal />
      <Lightbox />
      <main>
        <Hero />
        <CategoryGrid />
        <ProductGrid />
        <JewelleryShowcase />
        <AboutSection />
        <StoreSection />
        <ReviewSection />
        <Gallery />
        <InstagramSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </BoutiqueProvider>
  )
}

export default App

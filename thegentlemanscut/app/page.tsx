import { BarberShopHero } from "@/components/barber-shop-hero"
import { ServicesSection } from "@/components/services-section"
import { TeamSection } from "@/components/team-section"
import { ProductsSection } from "@/components/products-section"
import { AppointmentSection } from "@/components/appointment-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative">
      <BarberShopHero />
      <ServicesSection />
      <TeamSection />
      <ProductsSection />
      <AppointmentSection />
      <Footer />
    </main>
  )
}

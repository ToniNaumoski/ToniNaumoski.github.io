"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const brands = [
  { name: "Kerastase", logo: "/thegentlemanscut/kerastase-logo.png" },
  { name: "Reuzel", logo: "/thegentlemanscut/reuzel-logo.jpg" },
  { name: "Label.m", logo: "/thegentlemanscut/label-m-logo.jpg" },
  { name: "Kevin Murphy", logo: "/thegentlemanscut/kevin-murphy-logo.jpg" },
]

export function ProductsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="products" className="py-20 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div ref={contentRef}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light tracking-wider text-foreground mb-4">
              A WIDE RANGE OF PRODUCTS
            </h2>
            <p className="text-sm text-muted-foreground tracking-wide">
              A CAREFULLY SELECTED RANGE OF BRANDED PRODUCTS FOR MEN ONLY
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 bg-card hover:bg-muted transition-colors"
              >
                <img
                  src={brand.logo || "/placeholder.svg"}
                  alt={brand.name}
                  className="max-w-full h-12 object-contain opacity-70"
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-[4/5] bg-card overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('/thegentlemanscut/luxury-barber-shop-product-display-shelf.jpg')`,
                }}
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-light tracking-wider text-foreground">
                THE GENTLEMAN'S
                <br />
                COLLECTION
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Discover our exclusive line of premium grooming products, specially formulated for the modern gentleman.
                Each product is crafted with the finest ingredients to deliver exceptional results.
              </p>
              <a
                href="#products"
                className="inline-block text-xs font-medium tracking-widest px-8 py-3 bg-foreground text-background hover:bg-foreground/90 transition-colors"
              >
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

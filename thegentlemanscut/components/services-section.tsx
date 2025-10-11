"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    title: "BARBERING",
    image: "/thegentlemanscut/professional-barber-cutting-hair-with-scissors.jpg",
    link: "#barbering",
  },
  {
    title: "GROOMING & WELLNESS",
    image: "/thegentlemanscut/luxury-spa-treatment-for-men-facial-massage.jpg",
    link: "#grooming",
  },
  {
    title: "MANICURE & PEDICURE",
    image: "/thegentlemanscut/professional-hand-and-nail-care-for-men.jpg",
    link: "#manicure",
  },
  {
    title: "DETAILED PRICELIST",
    image: "/thegentlemanscut/elegant-barber-shop-price-menu.jpg",
    link: "#pricelist",
  },
]

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
          y: 80,
          opacity: 0,
          duration: 1,
          delay: index * 0.15,
          ease: "power3.out",
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="services" className="py-20 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-wider text-foreground mb-4">TAILOR MADE SERVICES</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.link}
              ref={(el) => {
                cardsRef.current[index] = el
              }}
              className="group relative overflow-hidden bg-card aspect-[4/3] cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${service.image}')` }}
              >
                <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/30 transition-colors duration-500" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-2xl md:text-3xl font-light tracking-widest text-background text-center px-4">
                  {service.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

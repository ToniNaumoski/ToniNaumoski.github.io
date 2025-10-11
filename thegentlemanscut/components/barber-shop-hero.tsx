"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function BarberShopHero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const scrollTextRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 60,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
      })

      gsap.from(imageRef.current, {
        scale: 1.1,
        opacity: 0,
        duration: 2,
        ease: "power2.out",
      })

      if (scrollTextRef.current) {
        gsap.to(scrollTextRef.current, {
          x: "-50%",
          duration: 20,
          repeat: -1,
          ease: "none",
        })
      }
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={heroRef} className="relative">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-sm font-medium tracking-widest">
            <span className="text-foreground">THE GENTLEMAN'S CUT</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wider">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
              SERVICES
            </a>
            <a href="#team" className="text-muted-foreground hover:text-foreground transition-colors">
              TEAM
            </a>
            <a href="#products" className="text-muted-foreground hover:text-foreground transition-colors">
              PRODUCTS
            </a>
            <a href="#appointment" className="text-muted-foreground hover:text-foreground transition-colors">
              CONTACT
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#appointment"
              className="text-xs font-medium tracking-wider px-6 py-2 bg-foreground text-background hover:bg-foreground/90 transition-colors"
            >
              BOOK NOW
            </a>
            <button className="text-xs text-muted-foreground hover:text-foreground">EN</button>
          </div>
        </div>
      </nav>

      <div className="relative h-screen w-full overflow-hidden">
        <div
          ref={imageRef}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/thegentlemanscut/luxury-barber-shop-interior-with-warm-lighting-and.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/60" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1
              ref={titleRef}
              className="text-5xl md:text-7xl lg:text-8xl font-light tracking-wider text-foreground text-balance"
            >
              TAILOR MADE
              <br />
              <span className="font-normal">SERVICES</span>
            </h1>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <div className="w-px h-16 bg-foreground/30" />
          <span className="text-xs text-foreground/60 tracking-widest">SCROLL</span>
        </div>
      </div>

      <div className="relative overflow-hidden bg-foreground text-background py-6 border-y border-foreground">
        <div ref={scrollTextRef} className="flex whitespace-nowrap">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-2xl md:text-4xl font-light tracking-wider mx-8">
              WELCOME TO THE GENTLEMAN'S WORLD
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

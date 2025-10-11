"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const teamMembers = [
  {
    name: "GIANNIS SAKELLARAKIS",
    role: "OWNER & MASTER BARBER",
    image: "/thegentlemanscut/professional-male-barber-portrait-in-black-and-whi.jpg",
  },
  {
    name: "MICHAEL ANDERSON",
    role: "SENIOR BARBER",
    image: "/thegentlemanscut/professional-barber-with-beard-portrait.jpg",
  },
  {
    name: "DAVID MARTINEZ",
    role: "GROOMING SPECIALIST",
    image: "/thegentlemanscut/professional-grooming-specialist-portrait.jpg",
  },
]

export function TeamSection() {
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
          y: 60,
          opacity: 0,
          duration: 1,
          delay: index * 0.1,
          ease: "power3.out",
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="team" className="py-20 px-6 md:px-12 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-wider text-foreground mb-4">OUR TEAM</h2>
          <p className="text-sm text-muted-foreground tracking-wide">MEET THE MASTERS</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el
              }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[3/4] mb-4 bg-card">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${member.image}')` }}
                />
              </div>
              <h3 className="text-lg font-medium tracking-wider text-foreground mb-1">{member.name}</h3>
              <p className="text-xs text-muted-foreground tracking-wide">{member.role}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#team"
            className="inline-block text-xs font-medium tracking-widest px-8 py-3 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
          >
            VIEW ALL TEAM MEMBERS
          </a>
        </div>
      </div>
    </section>
  )
}

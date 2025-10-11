"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

gsap.registerPlugin(ScrollTrigger)

export function AppointmentSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(formRef.current, {
        scrollTrigger: {
          trigger: formRef.current,
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Appointment Requested",
      description: "We'll confirm your booking within 24 hours.",
    })

    setIsSubmitting(false)
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <section ref={sectionRef} id="appointment" className="py-20 px-6 md:px-12 bg-muted">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light tracking-wider text-foreground mb-4">BOOK APPOINTMENT</h2>
          <p className="text-sm text-muted-foreground tracking-wide">RESERVE YOUR SPOT WITH OUR MASTER BARBERS</p>
        </div>

        <div ref={formRef} className="bg-background p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-xs font-medium tracking-wider uppercase">
                  Full Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="h-12 bg-muted border-border focus:border-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-xs font-medium tracking-wider uppercase">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+1 (555) 123-4567"
                  className="h-12 bg-muted border-border focus:border-foreground"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs font-medium tracking-wider uppercase">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="h-12 bg-muted border-border focus:border-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="service" className="text-xs font-medium tracking-wider uppercase">
                  Service
                </Label>
                <select
                  id="service"
                  name="service"
                  required
                  className="h-12 w-full border border-border bg-muted px-3 text-sm focus:border-foreground focus:outline-none"
                >
                  <option value="">Select a service</option>
                  <option value="barbering">Barbering</option>
                  <option value="grooming">Grooming & Wellness</option>
                  <option value="manicure">Manicure & Pedicure</option>
                  <option value="package">Full Package</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="date" className="text-xs font-medium tracking-wider uppercase">
                  Preferred Date
                </Label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  required
                  className="h-12 bg-muted border-border focus:border-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="time" className="text-xs font-medium tracking-wider uppercase">
                  Preferred Time
                </Label>
                <select
                  id="time"
                  name="time"
                  required
                  className="h-12 w-full border border-border bg-muted px-3 text-sm focus:border-foreground focus:outline-none"
                >
                  <option value="">Select a time</option>
                  <option value="09:00">9:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="13:00">1:00 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                  <option value="17:00">5:00 PM</option>
                  <option value="18:00">6:00 PM</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes" className="text-xs font-medium tracking-wider uppercase">
                Additional Notes
              </Label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                placeholder="Any special requests..."
                className="w-full border border-border bg-muted px-3 py-2 text-sm focus:border-foreground focus:outline-none resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 text-xs font-medium tracking-widest bg-foreground hover:bg-foreground/90 text-background"
            >
              {isSubmitting ? "SUBMITTING..." : "BOOK NOW"}
            </Button>
          </form>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-sm font-medium tracking-wider mb-2 uppercase">Location</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              456 Madison Avenue
              <br />
              New York, NY 10022
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium tracking-wider mb-2 uppercase">Hours</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Mon-Fri: 9AM - 9PM
              <br />
              Sat-Sun: 10AM - 7PM
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium tracking-wider mb-2 uppercase">Contact</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              +1 (555) 123-4567
              <br />
              info@gentlemanscut.com
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

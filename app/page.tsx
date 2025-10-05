"use client"

import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Gallery } from "@/components/gallery"
import { Services } from "@/components/services"
import { BookingForm } from "@/components/booking-form"
import { ContactCard } from "@/components/contact-card"

export default function HomePage() {
  const bookingRef = useRef<HTMLDivElement | null>(null)
  const [service, setService] = useState<string>("Health Checkup")

  const scrollToBooking = (preset?: string) => {
    if (preset) setService(preset)
    bookingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <main className="min-h-dvh bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Navbar onBook={() => scrollToBooking()} />
          <ThemeToggle />
        </div>
      </header>

      <section id="about" className="container mx-auto px-4">
        <Hero onPrimaryCta={() => scrollToBooking()} />
      </section>

      <section id="gallery" className="container mx-auto px-4 py-12 md:py-16">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-pretty text-2xl font-semibold md:text-3xl">Photo Gallery</h2>
          <Button variant="outline" onClick={() => scrollToBooking()}>
            Book a Session
          </Button>
        </div>
        <Gallery />
      </section>

      <section id="services" className="container mx-auto px-4 py-12 md:py-16">
        <div className="mb-6">
          <h2 className="text-pretty text-2xl font-semibold md:text-3xl">Services</h2>
          <p className="text-muted-foreground mt-2 max-w-3xl leading-relaxed">
            Tailored programs in health, wellness and business mentoring. Choose a service and book your slot—messages
            are sent to WhatsApp and email automatically.
          </p>
        </div>
        <Services onSelect={(s) => scrollToBooking(s)} />
      </section>

      <section id="booking" ref={bookingRef} className="container mx-auto px-4 py-12 md:py-16">
        <Card>
          <CardHeader>
            <CardTitle className="text-pretty">Book a Consultation or Order Medicines</CardTitle>
          </CardHeader>
          <CardContent>
            <BookingForm defaultService={service} />
          </CardContent>
        </Card>
      </section>

      <section id="contact" className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Contact Developer</CardTitle>
            </CardHeader>
            <CardContent className="leading-relaxed text-muted-foreground">
              Looking for a standout portfolio or business website? Reach out to my developer, Kaustubh Sen, for fast,
              modern builds that look great and drive results.
            </CardContent>
          </Card>

          <ContactCard />
        </div>
      </section>

      <footer className="border-t">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Rajesh Verma. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">Made with {"💖"} by Kaustubh Sen</p>
        </div>
      </footer>
    </main>
  )
}

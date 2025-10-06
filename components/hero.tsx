"use client"

import { Button } from "@/components/ui/button"
import SocialLinks from "@/components/social-links"

type Props = { onPrimaryCta?: () => void }

export function Hero({ onPrimaryCta }: Props) {
  return (
    <div className="grid items-center gap-8 py-10 md:grid-cols-2 md:py-16">
      <div>
        <p className="text-muted-foreground mb-2 text-sm">Good health. Strong business. Better life.</p>
        <h1 className="text-balance text-3xl font-semibold md:text-5xl">Rajesh Verma</h1>
        <h2 className="text-pretty mt-2 text-base text-muted-foreground md:text-xl">
          Health &amp; Wellness Consultant, Business Mentor, STC Leader at MI Lifestyle
        </h2>
        <p className="text-muted-foreground mt-4 leading-relaxed">
          I help individuals and teams transform habits, build resilient systems, and grow sustainable businesses. Book
          a session to get personalized guidance, or order MI Lifestyle medicines directly.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button onClick={onPrimaryCta} className="bg-primary text-primary-foreground">
            Book a Session
          </Button>
          <a
            className="inline-flex items-center rounded-md border px-4 py-2 hover:bg-accent hover:text-accent-foreground"
            href="#services"
          >
            View Services
          </a>
        </div>
        <SocialLinks
          className="mt-6"
          links={{
            instagram: "https://www.instagram.com/rajeshverma503/", // TODO: replace with Instagram profile
            linkedin: "https://www.linkedin.com/in/rajesh-verma-5a3b99314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", // TODO: replace with LinkedIn profile
            twitter: "#", // TODO: replace with X/Twitter profile
            youtube: "https://www.youtube.com/@RajeshVermaMI-STCSP", // TODO: replace with YouTube channel
            facebook: "https://www.facebook.com/rajesh.verma.28958", // TODO: replace with Facebook profile
          }}
        />
      </div>

      <div className="mx-auto w-full max-w-sm">
        <img
          src="/rajesh_verma.jpg"
          alt="Rajesh Verma MI"
          className="aspect-square w-full rounded-xl border object-cover"
        />
        <p className="sr-only">Rajesh Verma portrait</p>
      </div>
    </div>
  )
}

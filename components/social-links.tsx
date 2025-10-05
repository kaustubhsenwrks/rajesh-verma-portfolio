"use client"

import { Instagram, Linkedin, Twitter, Youtube, Facebook } from "lucide-react"

type SocialLinksProps = {
  className?: string
  links?: Partial<{
    instagram: string
    linkedin: string
    twitter: string // X
    youtube: string
    facebook: string
  }>
}

const defaultLinks = {
  instagram: "#",
  linkedin: "#",
  twitter: "#",
  youtube: "#",
  facebook: "#",
}

const itemClasses =
  "inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground/80 hover:text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"

export default function SocialLinks({ className, links }: SocialLinksProps) {
  const merged = { ...defaultLinks, ...(links || {}) }
  return (
    <div className={["flex flex-wrap items-center gap-3", className].filter(Boolean).join(" ")}>
      <a
        href={merged.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className={itemClasses}
      >
        <Instagram size={20} aria-hidden />
        <span className="sr-only">Instagram</span>
      </a>
      <a href={merged.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={itemClasses}>
        <Linkedin size={20} aria-hidden />
        <span className="sr-only">LinkedIn</span>
      </a>
      <a
        href={merged.twitter}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X (Twitter)"
        className={itemClasses}
      >
        <Twitter size={20} aria-hidden />
        <span className="sr-only">X (Twitter)</span>
      </a>
      <a href={merged.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className={itemClasses}>
        <Youtube size={20} aria-hidden />
        <span className="sr-only">YouTube</span>
      </a>
      <a href={merged.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={itemClasses}>
        <Facebook size={20} aria-hidden />
        <span className="sr-only">Facebook</span>
      </a>
    </div>
  )
}

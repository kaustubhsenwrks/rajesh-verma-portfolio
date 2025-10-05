"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const DEV_EMAIL = "kaustubhwrks@gmail.com" // replace with Kaustubh Sen’s actual email

export function ContactCard() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = String(form.get("name") || "")
    const email = String(form.get("email") || "")
    const message = String(form.get("message") || "")

    const payload = `Portfolio Query for Kaustubh Sen\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
    const mailUrl = `mailto:${DEV_EMAIL}?subject=${encodeURIComponent("Portfolio query for Rajesh Verma website")}&body=${encodeURIComponent(payload)}`
    window.open(mailUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Developer (Kaustubh Sen)</CardTitle>
        <CardDescription>
          For a standout portfolio or a fast, professional website, get in touch with my developer, Kaustubh Sen—he’ll
          bring your vision online with precision and care.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-3" onSubmit={handleSubmit}>
          <div className="grid gap-2">
            <Label htmlFor="dev-name">Name</Label>
            <Input id="dev-name" name="name" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="dev-email">Email</Label>
            <Input id="dev-email" name="email" type="email" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="dev-message">Message</Label>
            <Textarea id="dev-message" name="message" rows={4} required />
          </div>
          <Button type="submit" variant="outline">
            Send to Developer
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

"use client"

import type React from "react"

import { useEffect, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

const SERVICES = [
  "Health Checkup",
  "Health & Wellness Consultation",
  "Business Consultation",
  "Mentoring Session",
  "Medicine Orders",
]

// Replace these with real details when ready
const WHATSAPP_NUMBER = "919752167416" // placeholder number; replace with Rajesh’s WhatsApp in international format without +
const EMAIL_TO = "rajeshsafal19@gmail.com" // placeholder email; replace with Rajesh’s email
const DEV_EMAIL = "kaustubhwrks@gmail.com" // used in ContactCard; kept here for clarity

export function BookingForm({ defaultService = "Health Checkup" }: { defaultService?: string }) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [service, setService] = useState(defaultService)
  const { toast } = useToast()

  useEffect(() => setService(defaultService), [defaultService])

  const payload = useMemo(() => {
    const lines = [
      `New Booking/Order Request`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Service: ${service}`,
      message ? `Message: ${message}` : undefined,
    ].filter(Boolean)
    return lines.join("\n")
  }, [name, phone, email, service, message])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Build WhatsApp and Email links
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(payload)}`
    const mailUrl = `mailto:${EMAIL_TO}?subject=${encodeURIComponent("New booking / order request")}&body=${encodeURIComponent(payload)}`

    // Open both to "auto-send" via the user’s preferred apps
    window.open(waUrl, "_blank", "noopener,noreferrer")
    window.open(mailUrl, "_blank", "noopener,noreferrer")

    toast({
      title: "Request prepared",
      description: "We opened WhatsApp and your email app with the details filled in.",
    })
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" required value={name} onChange={(e) => setName(e.target.value)} />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input id="phone" required inputMode="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" required type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div className="grid gap-2">
        <Label>Service</Label>
        <Select value={service} onValueChange={setService}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {SERVICES.map((s) => (
              <SelectItem key={s} value={s}>
                {s}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="md:col-span-2 grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Describe your goals or order details..."
        />
      </div>

      <div className="md:col-span-2">
        <Button type="submit" className="bg-primary text-primary-foreground">
          Send to WhatsApp & Email
        </Button>
      </div>

      <p className="text-muted-foreground md:col-span-2 text-sm">
        Note: This opens WhatsApp and your email client with details pre-filled, ensuring delivery to both channels.
      </p>
    </form>
  )
}

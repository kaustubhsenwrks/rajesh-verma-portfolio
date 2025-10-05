"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const ITEMS = [
  { title: "Health Checkup", desc: "Lifestyle assessment and routine checks." },
  { title: "Health & Wellness Consultation", desc: "Nutrition, habits, and holistic guidance." },
  { title: "Business Consultation", desc: "Grow your MI Lifestyle network with proven systems." },
  { title: "Mentoring Session", desc: "1:1 mentoring and accountability." },
  { title: "Medicine Orders", desc: "Order MI Lifestyle medicines with guidance." },
]

export function Services({ onSelect }: { onSelect: (service: string) => void }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {ITEMS.map((it) => (
        <Card key={it.title} className="flex flex-col">
          <CardHeader>
            <CardTitle>{it.title}</CardTitle>
            <CardDescription className="text-muted-foreground">{it.desc}</CardDescription>
          </CardHeader>
          <CardContent className="mt-auto">
            <Button className="bg-primary text-primary-foreground" onClick={() => onSelect(it.title)}>
              Book {it.title}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

const images = [
  "/health-workshop.png",
  "/IMG-20230811-WA0010.jpg",
  "/wellness-consultation.png",
  "/team-coaching.jpg",
  "/seminar-talk.jpg",
  "/DSC_4559.JPG",
]

export function Gallery() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string | null>(null)

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => {
              setActive(src)
              setOpen(true)
            }}
            className="group relative overflow-hidden rounded-lg border"
          >
            <img
              src={src || "/placeholder.svg"}
              alt={`Gallery image ${i + 1}`}
              className="aspect-[4/3] w-full object-cover transition-transform group-hover:scale-[1.02]"
            />
          </button>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl border bg-background p-0">
          {active && (
            <img src={active || "/placeholder.svg"} alt="Selected gallery image" className="h-auto w-full rounded-md" />
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

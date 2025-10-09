"use client"

import { useState, useEffect, useRef } from "react"
import { ThemeToggle } from "./theme-toggle"

type Props = { onBook?: () => void }

export function Navbar({ onBook }: Props) {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)
  const btnRef = useRef<HTMLButtonElement | null>(null)

  const menuItems = [
    { label: "About", href: "#about" },
    { label: "Gallery", href: "#gallery" },
    { label: "Services", href: "#services" },
    { label: "Booking", href: "#booking" },
    { label: "Contact", href: "#contact" },
  ]

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        btnRef.current &&
        !btnRef.current.contains(event.target as Node)
      ) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <nav className="w-full sticky top-4 z-50 px-4">
      <div className="mx-auto flex items-center justify-between rounded-xl bg-white/30 dark:bg-gray-900/40 backdrop-blur-md border border-white/40 dark:border-gray-700 shadow-lg py-3 px-5 md:px-8 transition-colors duration-300">
        {/* Logo / Name */}
        <a href="#about" className="font-semibold tracking-tight text-lg md:text-xl">
          Rajesh Verma
        </a>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-4 text-sm">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="hover:text-primary transition-colors">
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={onBook}
              className="rounded-md bg-primary px-3 py-1.5 text-primary-foreground"
            >
              Book Now
            </button>
          </li>
        </ul>

        {/* Mobile menu */}
        <div className="flex md:hidden items-center gap-3 relative">
          <button
            onClick={onBook}
            className="rounded-md bg-primary px-3 py-1.5 text-primary-foreground text-sm"
          >
            Book Now
          </button>

          <button
            ref={btnRef}
            onClick={() => setOpen(!open)}
            className="flex flex-col justify-center items-center w-8 h-8 gap-1"
          >
            <span
              className={`block h-0.5 w-6 bg-foreground transition-transform duration-300 ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-foreground transition-opacity duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-foreground transition-transform duration-300 ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>

          {/* Dropdown menu */}
          {open && (
            <div
              ref={menuRef}
              className="absolute right-0 top-full mt-2 w-48 rounded-xl bg-white/40 dark:bg-gray-900/60 backdrop-blur-md border border-white/30 dark:border-gray-700 shadow-lg flex flex-col py-2 z-50 animate-fadeIn"
            >
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors rounded-md"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

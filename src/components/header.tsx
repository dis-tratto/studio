"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Wheat } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "#about", label: "Nosotros" },
    { href: "#products", label: "Productos" },
    { href: "#contact", label: "Contacto" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="#home" className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
          <Wheat className="h-6 w-6 text-accent" />
          <span className="font-bold font-headline">Pan Calidez</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-accent">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-10">
                <Link href="#home" className="flex items-center space-x-2 mb-4" onClick={() => setIsMenuOpen(false)}>
                  <Wheat className="h-6 w-6 text-accent" />
                  <span className="font-bold font-headline">Pan Calidez</span>
                </Link>
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="transition-colors hover:text-accent text-muted-foreground" onClick={() => setIsMenuOpen(false)}>
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

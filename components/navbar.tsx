"use client";

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { phoneNumber } from "@/constants/phone-number";
import Link from "next/link";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 py-2">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="logo" className="h-18 w-20" />
          <div className="flex flex-col leading-none">
            <span className="font-serif text-xl font-bold tracking-tight text-foreground">
              Farm & Field
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Small Engine Repair
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+15551234567"
            className="flex items-center gap-2 text-sm font-medium text-foreground"
          >
            <Phone className="h-4 w-4 text-accent" />
            {phoneNumber}
          </a>
          <Button asChild>
            <Link href="#contact">Get a Quote</Link>
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-foreground py-2 border-b border-border"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:+${phoneNumber}`}
              className="flex items-center gap-2 text-base font-medium text-foreground py-2"
            >
              <Phone className="h-4 w-4 text-accent" />
              {phoneNumber}
            </a>
            <Button asChild className="w-full">
              <Link href="#contact" onClick={() => setMobileOpen(false)}>
                Get a Quote
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

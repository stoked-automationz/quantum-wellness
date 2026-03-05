"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/forge-your-life", label: "Forge Your Life" },
  { href: "/breath-circle", label: "Breath Circle" },
  { href: "/the-forge", label: "The Land" },
  { href: "/programs", label: "Programs" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Journal" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-obsidian/90 backdrop-blur-md border-b border-quantum-gold/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Omega Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-heading text-3xl font-bold text-quantum-gold group-hover:text-quantum-gold/80 transition-colors leading-none">
              &#937;
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-silver-mist hover:text-quantum-gold transition-colors tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              asChild
              className="bg-quantum-gold text-obsidian hover:bg-quantum-gold/90 font-heading tracking-wider gold-glow text-xs uppercase"
            >
              <Link href="/apply">Apply Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-silver-mist hover:text-quantum-gold transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-obsidian/98 backdrop-blur-lg md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8 -mt-16">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-heading text-2xl text-silver-mist hover:text-quantum-gold transition-colors tracking-widest"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4">
              <Button
                asChild
                className="bg-quantum-gold text-obsidian hover:bg-quantum-gold/90 font-heading tracking-widest gold-glow px-8 py-3 text-lg"
              >
                <Link href="/apply" onClick={() => setIsOpen(false)}>
                  Apply Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

import Link from "next/link";

const footerLinks = {
  programs: [
    { href: "/forge-your-life", label: "Forge Your Life" },
    { href: "/breath-circle", label: "Breath Circle" },
    { href: "/programs/permaculture-residency", label: "Permaculture Residency" },
    { href: "/programs/work-trade", label: "Work Trade" },
    { href: "/programs", label: "All Programs" },
  ],
  explore: [
    { href: "/the-forge", label: "The Land" },
    { href: "/not-a-retreat", label: "Not a Retreat" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Journal" },
    { href: "/community", label: "Community" },
  ],
  connect: [
    { href: "/apply", label: "Apply" },
    { href: "/contact", label: "Contact" },
    { href: "/shop", label: "Shop" },
    { href: "/sponsors", label: "Sponsors" },
  ],
};

export function Footer() {
  return (
    <footer className="relative border-t border-quantum-gold/10">
      {/* Forge Gradient Top Border */}
      <div className="h-px forge-gradient" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-heading text-3xl font-bold text-quantum-gold leading-none">
                &#937;
              </span>
            </Link>
            <p className="mt-4 text-sm text-silver-mist/70 leading-relaxed max-w-xs">
              Hawaii&apos;s first volcanic transformational center. Not a retreat
              — a rite of passage.
            </p>
            <p className="mt-4 text-xs text-muted-foreground">
              Hilo, Big Island, Hawai&apos;i
            </p>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-heading text-sm font-semibold text-quantum-gold tracking-widest uppercase mb-4">
              Programs
            </h3>
            <ul className="space-y-2">
              {footerLinks.programs.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-silver-mist/70 hover:text-quantum-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-heading text-sm font-semibold text-quantum-gold tracking-widest uppercase mb-4">
              Explore
            </h3>
            <ul className="space-y-2">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-silver-mist/70 hover:text-quantum-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-heading text-sm font-semibold text-quantum-gold tracking-widest uppercase mb-4">
              Connect
            </h3>
            <ul className="space-y-2">
              {footerLinks.connect.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-silver-mist/70 hover:text-quantum-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-quantum-gold/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Quantum Wellness Warrior. All
            rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built by{" "}
            <a
              href="https://stokedautomations.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-quantum-gold/70 hover:text-quantum-gold transition-colors"
            >
              Stoked Automations
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { Wrench } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary">
                <Wrench className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-serif text-xl font-bold text-background">
                Farm & Field
              </span>
            </Link>
            <p className="text-sm text-background/60 leading-relaxed">
              Trusted small engine repair for outdoor power equipment, ATVs, and
              dirt bikes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-12">
            <div>
              <h4 className="text-sm font-semibold text-background mb-4 uppercase tracking-wider">
                Quick Links
              </h4>
              <ul className="flex flex-col gap-3">
                {[
                  { href: "#services", label: "Services" },
                  { href: "#contact", label: "Contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-background/60 hover:text-background transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-background mb-4 uppercase tracking-wider">
                Services
              </h4>
              <ul className="flex flex-col gap-3">
                {[
                  "Lawn Mower Repair",
                  "Chainsaw Service",
                  "ATV Maintenance",
                  "Dirt Bike Repair",
                  "Generator Service",
                  "Seasonal Tune-Ups",
                ].map((service) => (
                  <li key={service}>
                    <span className="text-sm text-background/60">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-background mb-4 uppercase tracking-wider">
                Hours
              </h4>
              <ul className="flex flex-col gap-3 text-sm text-background/60">
                <li>Mon - Sun: 7AM - 5PM</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/40">
            Farm & Field Small Engine Repair. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

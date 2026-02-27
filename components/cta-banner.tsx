import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { phoneNumber } from "@/constants/phone-number";

export function CtaBanner() {
  return (
    <section className="py-20 bg-primary">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary-foreground text-balance mb-4">
          Don&apos;t Let a Broken Engine Slow You Down
        </h2>
        <p className="text-primary-foreground/80 max-w-xl mx-auto leading-relaxed mb-8">
          Whether it&apos;s a mower that won&apos;t start or an ATV that needs a
          full rebuild, we&apos;re here to help. Call today or request a quote
          online.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" variant="secondary" asChild className="text-base">
            <a href="tel:+15551234567">
              <Phone className="mr-2 h-4 w-4" />
              Call {phoneNumber}
            </a>
          </Button>
          <Button
            size="lg"
            asChild
            className="text-base bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <Link href="#contact">
              Request a Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Shield, ThumbsUp } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-end pb-16 pt-32 md:items-center md:pb-0 md:pt-0">
      <Image
        src="/images/hero.jpg"
        alt="Farm & Field repair shop exterior at golden hour"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-foreground/60" />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-6">
        <div className="max-w-2xl">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-background text-balance">
            Engines Fixed Right the First Time
          </h1>
          <p className="mt-6 text-lg md:text-xl text-secondary/90 leading-relaxed max-w-lg">
            From lawn mowers and chainsaws to ATVs and dirt bikes, we keep your
            equipment running strong all season long.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-base border-secondary/40 text-background hover:bg-background/10 hover:text-background bg-transparent"
            >
              <Link href="#services">View Services</Link>
            </Button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
          {[
            {
              icon: Clock,
              title: "Fast Turnaround",
              desc: "Most repairs in 2-3 days",
            },
            {
              icon: Shield,
              title: "Warranty Backed",
              desc: "90-day parts & labor",
            },
            {
              icon: ThumbsUp,
              title: "Honest Pricing",
              desc: "No surprises, no upsells",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-3 rounded-lg bg-background/10 backdrop-blur-sm p-4 border border-background/20"
            >
              <item.icon className="h-5 w-5 text-accent mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-background">
                  {item.title}
                </p>
                <p className="text-xs text-secondary/80">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

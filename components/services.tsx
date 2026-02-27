import Image from "next/image";
import { Cog, Bike, Tractor, Sparkles, Droplets, Gauge } from "lucide-react";

const services = [
  {
    icon: Tractor,
    title: "Outdoor Power Equipment",
    description:
      "Lawn mowers, chainsaws, trimmers, leaf blowers, snow blowers, and generators. We service all major brands.",
    image: "/images/services-mower.jpg",
    imageAlt: "Mechanic working on a small engine",
    items: [
      "Riding & push mowers",
      "Chainsaws & trimmers",
      "Snow blowers",
      "Generators",
      "And more...",
    ],
  },
  {
    icon: Cog,
    title: "ATV Service & Repair",
    description:
      "Complete ATV maintenance and repair. From routine oil changes to full engine rebuilds, we keep you on the trail.",
    image: "/images/services-atv.jpg",
    imageAlt: "ATV parked on a rural trail",
    items: [
      "Engine repairs",
      "Transmission repair",
      "Electrical diagnostics",
      "Suspension work",
    ],
  },
  {
    icon: Bike,
    title: "Dirt Bike Repair",
    description:
      "Expert dirt bike service for 2-stroke and 4-stroke engines. Get back on the track with confidence.",
    image: "/images/services-dirtbike.jpg",
    imageAlt: "Dirt bike in a rural setting",
    items: [
      "Top & bottom end rebuilds",
      "Carb tuning & jetting",
      "Suspension service",
      "Pre-race inspections",
    ],
  },
];

const additionalServices = [
  {
    icon: Sparkles,
    title: "Seasonal Tune-Ups",
    description:
      "Get ahead of the season with full maintenance packages to keep your equipment in peak condition.",
  },
  {
    icon: Droplets,
    title: "Fuel System Service",
    description:
      "Carburetor cleaning, fuel line replacement, and ethanol damage repair for long-lasting performance.",
  },
  {
    icon: Gauge,
    title: "Diagnostics",
    description:
      "Can't figure out what's wrong? We offer comprehensive diagnostics to find the problem fast.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-3">
            What We Do
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground text-balance">
            Services We Offer
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We handle everything from routine maintenance to complete engine
            rebuilds. If it has a small engine, we can fix it.
          </p>
        </div>

        <div className="flex flex-col gap-20">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className={`flex flex-col gap-8 lg:gap-16 ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center`}
            >
              <div className="relative w-full lg:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                    <service.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                    {service.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="grid grid-cols-2 gap-3">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
          {additionalServices.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl bg-card border border-border p-8"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-5">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-serif text-xl font-bold text-foreground mb-2">
                {service.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

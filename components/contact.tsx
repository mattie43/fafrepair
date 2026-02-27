"use client";

import { Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { phoneNumber } from "@/constants/phone-number";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: phoneNumber,
    href: `tel:+${phoneNumber}`,
  },
  {
    icon: Mail,
    title: "Email",
    value: "fafrepair@gmail.com",
    href: "mailto:fafrepair@gmail.com",
  },
  // {
  //   icon: MapPin,
  //   title: "Location",
  //   value: "4821 County Road 12, Millfield, OH 45761",
  //   href: "#",
  // },
  {
    icon: Clock,
    title: "Hours",
    value: "Mon-Sun 7AM-5PM",
    href: undefined,
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-card">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-3">
            Get In Touch
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground text-balance">
            Ready to Get It Fixed?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Drop off your equipment or give us a call. We&apos;ll provide a free
            estimate and get you back up and running.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="w-full lg:w-5/12">
            <div className="flex flex-col gap-6">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-0.5">
                      {item.title}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-foreground font-medium hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-7/12">
            <form
              action={"https://formspree.io/f/xgoldgkp"}
              method={"POST"}
              className="rounded-2xl bg-background border border-border p-8 md:p-10"
              // onSubmit={onSubmit}
            >
              <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                Request a Quote
              </h3>
              <p className="text-sm text-muted-foreground mb-8">
                Tell us about your equipment and we&apos;ll get back to you
                within 24 hours.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    type="text"
                    name="name"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 000-0000"
                    name="tel"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    name="email"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="equipment">Equipment Type</Label>
                  <Input
                    id="equipment"
                    type="text"
                    name="equipment"
                    required
                    placeholder="e.g. Riding Mower, ATV"
                  />
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <Label htmlFor="brand">Make & Model (if known)</Label>
                  <Input
                    id="brand"
                    type="text"
                    name="brand"
                    required
                    placeholder="e.g. John Deere X350, Honda TRX250"
                  />
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <Label htmlFor="details">Describe the Problem</Label>
                  <Textarea
                    id="details"
                    name="details"
                    required
                    placeholder="Tell us what's going on with your equipment..."
                    rows={5}
                  />
                </div>
              </div>

              <Button size="lg" className="w-full mt-8 text-base" type="submit">
                Submit Request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

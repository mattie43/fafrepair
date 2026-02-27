import Image from "next/image";

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "5,000+", label: "Engines Repaired" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "2-3", label: "Day Avg. Turnaround" },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="relative w-full lg:w-5/12 aspect-[3/4] rounded-2xl overflow-hidden">
            <Image
              src="/images/about.jpg"
              alt="Owner of Farm & Field standing in the shop doorway"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-primary/90 backdrop-blur-sm p-6">
              <p className="text-lg font-serif font-bold text-primary-foreground">
                Nick
              </p>
              <p className="text-sm text-primary-foreground/80">Owner</p>
            </div>
          </div>

          <div className="w-full lg:w-7/12">
            <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-3">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground text-balance mb-6">
              Built on Hard Work & Honest Service
            </h2>
            <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
              <p>
                Farm & Field started in 2005 out of a two-car garage with one
                goal: fix engines the right way, at a fair price. Owner Jim
                Hartley grew up tinkering with tractors and dirt bikes on his
                family's property, and turned that lifelong passion into a
                business the community depends on.
              </p>
              <p>
                Today, we operate out of a full-service shop equipped with
                modern diagnostic tools and a deep inventory of OEM parts. We
                work on everything from a homeowner's push mower to a rancher's
                fleet of UTVs. No job is too small, and no engine too stubborn.
              </p>
              <p>
                We believe in doing things right. That means transparent
                pricing, clear communication about what your equipment needs,
                and standing behind every repair with our 90-day warranty.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-serif text-3xl md:text-4xl font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

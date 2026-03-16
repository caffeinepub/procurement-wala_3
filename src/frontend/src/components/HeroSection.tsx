import { Button } from "@/components/ui/button";
import { Award, BookOpen, Users } from "lucide-react";
import { motion } from "motion/react";

const stats = [
  { icon: Award, label: "Years Experience", value: "37+" },
  { icon: Users, label: "Professionals Trained", value: "500+" },
  { icon: BookOpen, label: "Definitive Book", value: "1" },
];

export default function HeroSection() {
  return (
    <section className="relative pt-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              India&apos;s Premier Procurement Mentor
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-3">
              Master Procurement{" "}
              <span className="text-primary">&amp; Negotiation</span> with
              Ravinder Kapoor
            </h1>

            {/* Aquamarine accent line */}
            <div className="w-20 h-1 bg-primary rounded-full mb-6" />

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Learn proven strategies, avoid costly mistakes, and elevate your
              career with{" "}
              <strong className="text-foreground">
                37 years of procurement expertise.
              </strong>
            </p>

            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8"
                data-ocid="hero.primary_button"
              >
                <a href="#book">Get the Book</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 font-semibold px-8"
                data-ocid="hero.secondary_button"
              >
                <a href="#mentorship">Book Mentorship</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="w-5 h-5 text-primary mx-auto mb-1" />
                  <div className="font-display text-2xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-primary/10" />
              <div
                className="relative rounded-2xl overflow-hidden border-2 shadow-xl"
                style={{ borderColor: "oklch(0.78 0.14 185 / 0.3)" }}
              >
                <img
                  src="/assets/generated/ravinder-kapoor-hero.dim_800x900.jpg"
                  alt="Ravinder Kapoor — Procurement Mentor"
                  className="w-full max-w-sm md:max-w-md object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground">
                    Ravinder Kapoor
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Procurement Expert
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave divider */}
      <div
        className="h-8 bg-muted"
        style={{ clipPath: "ellipse(100% 100% at 50% 100%)" }}
      />
    </section>
  );
}

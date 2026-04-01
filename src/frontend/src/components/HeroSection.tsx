import { Button } from "@/components/ui/button";
import { Award, Briefcase, Users } from "lucide-react";
import { motion } from "motion/react";

const stats = [
  { icon: Award, label: "Years Experience", value: "37+" },
  { icon: Users, label: "Professionals Trained", value: "500+" },
  { icon: Briefcase, label: "Employees Supported", value: "28,000+" },
];

export default function HeroSection() {
  return (
    <section id="hero" className="relative pt-16 bg-white overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, oklch(0.28 0.08 255) 0, oklch(0.28 0.08 255) 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            {/* Brand headline */}
            <div className="mb-6">
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-none tracking-wide">
                PROCUREMENT <span className="text-accent">WALA</span>
              </h1>
              <p className="font-display text-lg md:text-xl text-accent italic mt-1 font-medium">
                by Ravinder Kapoor
              </p>
            </div>

            {/* Gold divider */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-0.5 w-12 bg-accent" />
              <div className="h-1.5 w-1.5 rounded-full bg-accent" />
              <div className="h-0.5 w-20 bg-accent" />
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-snug mb-3">
              Master Procurement &amp; Negotiation Skills
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8">
              37 Years of Procurement Leadership Experience
            </p>

            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 shadow-navy"
                data-ocid="hero.primary_button"
              >
                <a href="#programs">Join Procurement Training</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 font-semibold px-8"
                data-ocid="hero.secondary_button"
              >
                <a href="#contact">Book Mentorship</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center border border-border rounded-xl p-4 bg-muted/50"
                >
                  <stat.icon className="w-5 h-5 text-accent mx-auto mb-1" />
                  <div className="font-display text-2xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5 leading-tight">
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
              <div className="absolute -inset-3 rounded-3xl bg-primary/8" />
              {/* Gold corner accents */}
              <div className="absolute -top-2 -right-2 w-16 h-16 border-t-4 border-r-4 border-accent rounded-tr-2xl" />
              <div className="absolute -bottom-2 -left-2 w-16 h-16 border-b-4 border-l-4 border-accent rounded-bl-2xl" />
              {/* Rectangular image box with fixed dimensions */}
              <div
                className="relative rounded-2xl overflow-hidden border-2 border-primary/20 shadow-navy bg-muted"
                style={{ width: "340px", height: "440px" }}
              >
                <img
                  src="/assets/img_20260329_131202_812-019d46d5-f21a-7290-bcd6-743d5d0b1b01.webp"
                  alt="Ravinder Kapoor — Procurement Expert"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3 border border-border">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground">
                    Ravinder Kapoor
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Procurement Expert · 37 Years
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

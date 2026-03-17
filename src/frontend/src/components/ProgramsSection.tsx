import { Button } from "@/components/ui/button";
import { Rocket, Star, Target } from "lucide-react";
import { motion } from "motion/react";

const programs = [
  {
    icon: Rocket,
    title: "Procurement Career Accelerator",
    description:
      "A structured training program for fresh graduates and early-career professionals starting their procurement journey. Build a strong foundation in sourcing, vendor management, and cost analysis.",
    tags: ["Fresh Graduates", "Early Career", "Foundation"],
  },
  {
    icon: Target,
    title: "Negotiation Masterclass",
    description:
      "Advanced supplier negotiation strategies and cost-saving techniques used in real-world procurement environments. Learn tactics that deliver measurable results from day one.",
    tags: ["Advanced", "Supplier Strategy", "Cost Savings"],
  },
  {
    icon: Star,
    title: "Procurement Leadership Mentorship",
    description:
      "One-to-one mentoring for procurement professionals seeking career growth and leadership development. Personalised guidance from 37 years of procurement expertise.",
    tags: ["1-on-1", "Leadership", "Career Growth"],
  },
];

export default function ProgramsSection() {
  return (
    <section id="programs" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-2">
            What We Offer
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Programs
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-0.5 w-8 bg-accent" />
            <div className="h-1.5 w-1.5 rounded-full bg-accent" />
            <div className="h-0.5 w-16 bg-accent" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, i) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              data-ocid={`programs.item.${i + 1}`}
              className="group border border-border rounded-2xl p-7 bg-white hover:border-accent hover:shadow-navy transition-all duration-300 flex flex-col"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-accent/15 flex items-center justify-center mb-5 group-hover:bg-accent/25 transition-colors">
                <program.icon className="w-7 h-7 text-accent" />
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {program.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed text-sm flex-1 mb-5">
                {program.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {program.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium bg-muted text-muted-foreground px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Button
                asChild
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                data-ocid={`programs.secondary_button.${i + 1}`}
              >
                <a href="#contact">Learn More</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

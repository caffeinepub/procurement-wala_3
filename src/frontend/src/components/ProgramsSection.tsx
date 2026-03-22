import { Button } from "@/components/ui/button";
import {
  Briefcase,
  Monitor,
  Package,
  Rocket,
  Star,
  Target,
} from "lucide-react";
import { motion } from "motion/react";

const programs = [
  {
    icon: Rocket,
    title: "Procurement Career Accelerator",
    description:
      "A structured training program for fresh graduates and early-career professionals starting their procurement journey. Build a strong foundation in sourcing, vendor management, and cost analysis.",
    tags: ["Fresh Graduates", "Early Career", "Foundation"],
    featured: false,
  },
  {
    icon: Target,
    title: "Negotiation Masterclass",
    description:
      "Advanced supplier negotiation strategies and cost-saving techniques used in real-world procurement environments. Learn tactics that deliver measurable results from day one.",
    tags: ["Advanced", "Supplier Strategy", "Cost Savings"],
    featured: false,
  },
  {
    icon: Star,
    title: "Procurement Leadership Mentorship",
    description:
      "One-to-one mentoring for procurement professionals seeking career growth and leadership development. Personalised guidance from 37 years of procurement expertise.",
    tags: ["1-on-1", "Leadership", "Career Growth"],
    featured: false,
  },
];

const outsourcing = [
  {
    icon: Monitor,
    title: "IT Procurement Outsourcing",
    description:
      "We fully manage your IT procurement function — hardware, software, cloud, telecom, licensing, and IT service contracts. End-to-end vendor management with measurable savings.",
    tags: ["Hardware & Software", "Cloud & SaaS", "IT Contracts"],
  },
  {
    icon: Package,
    title: "Non-IT Procurement Outsourcing",
    description:
      "From office supplies and facilities to marketing materials, travel, HR vendors, and capex — we handle all non-core procurement so you focus on your business.",
    tags: ["Facilities", "Capex & Civil", "General Supplies"],
  },
];

export default function ProgramsSection() {
  return (
    <section id="programs" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Training Programs ── */}
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

        <div className="grid md:grid-cols-3 gap-8 mb-20">
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
              <div className="w-14 h-14 rounded-xl bg-accent/15 flex items-center justify-center mb-5 group-hover:bg-accent/25 transition-colors">
                <program.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {program.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm flex-1 mb-5">
                {program.description}
              </p>
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

        {/* ── Procurement Outsourcing ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-2">
            Major Offering
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Procurement Outsourcing
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-0.5 w-8 bg-accent" />
            <div className="h-1.5 w-1.5 rounded-full bg-accent" />
            <div className="h-0.5 w-16 bg-accent" />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Companies can outsource their entire procurement function to us —
            for both IT and Non-IT categories. We become your dedicated
            procurement team, delivering cost savings, compliance, and
            efficiency.
          </p>
        </motion.div>

        {/* Outsourcing highlight banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-primary rounded-2xl p-6 md:p-8 mb-8 flex flex-col md:flex-row items-start md:items-center gap-6"
        >
          <div className="bg-accent/20 p-4 rounded-xl shrink-0">
            <Briefcase className="w-10 h-10 text-accent" />
          </div>
          <div className="flex-1">
            <h3 className="font-display text-2xl font-bold text-white mb-2">
              Your Outsourced Procurement Partner
            </h3>
            <p className="text-white/80 text-sm leading-relaxed">
              From vendor identification and RFQ management to purchase orders
              and payment follow-ups — our team manages the complete procurement
              lifecycle, so your internal teams can focus on core business
              growth.
            </p>
          </div>
          <div className="flex flex-col gap-2 shrink-0">
            <div className="bg-accent/20 rounded-lg px-4 py-2 text-center">
              <div className="font-display text-2xl font-bold text-accent">
                10–30%
              </div>
              <div className="text-white/70 text-xs">Cost Reduction</div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {outsourcing.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              data-ocid={`outsourcing.item.${i + 1}`}
              className="group border-2 border-primary/20 hover:border-accent rounded-2xl p-7 bg-white hover:shadow-navy transition-all duration-300 flex flex-col"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <item.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm flex-1 mb-5">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Button
                asChild
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                data-ocid={`outsourcing.button.${i + 1}`}
              >
                <a href="#outsourcing">Explore This Service</a>
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-accent text-white hover:bg-accent/90 font-semibold px-10"
            data-ocid="programs.outsourcing_cta"
          >
            <a href="#outsourcing">Learn More About Outsourcing</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

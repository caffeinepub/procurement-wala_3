import { CheckCircle } from "lucide-react";
import { motion } from "motion/react";

const benefits = [
  {
    title: "37 Years of Industry Experience",
    description:
      "Decades of real procurement expertise spanning Fortune 500 companies, public sector enterprises, and SMEs across 15+ industries.",
  },
  {
    title: "Real-World Procurement Insights",
    description:
      "Strategies tested and refined across manufacturing, IT, infrastructure, and FMCG sectors — not theory, but practice-proven methods.",
  },
  {
    title: "Practical Negotiation Strategies",
    description:
      "Proven negotiation techniques that deliver measurable cost savings and supplier relationship improvements from day one.",
  },
  {
    title: "Personalised Career Mentorship",
    description:
      "One-on-one guidance tailored to your career stage, goals, and the specific challenges you face in your procurement role.",
  },
];

export default function WhyChooseSection() {
  return (
    <section id="why-choose" className="bg-muted py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-2">
            Your Advantage
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose <span className="text-primary">PROCUREMENT</span>{" "}
            <span className="text-accent">WALA</span>
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-0.5 w-8 bg-accent" />
            <div className="h-1.5 w-1.5 rounded-full bg-accent" />
            <div className="h-0.5 w-16 bg-accent" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              data-ocid={`why.item.${i + 1}`}
              className="bg-white rounded-2xl p-6 border border-border hover:border-accent/60 hover:shadow-navy transition-all duration-300 flex gap-4"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground text-lg mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

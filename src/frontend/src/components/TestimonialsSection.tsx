import { Quote } from "lucide-react";
import { motion } from "motion/react";

const testimonials = [
  {
    quote:
      "Ravinder's corporate training transformed our procurement team. 25% cost reduction in 6 months.",
    name: "Rajesh Gupta",
    role: "CFO",
    initials: "RG",
  },
  {
    quote:
      "The mentorship program gave me the confidence and skills to lead my company's procurement strategy.",
    name: "Neha Verma",
    role: "Senior Buyer",
    initials: "NV",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
            What Our Clients Say
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-white rounded-2xl shadow-md border border-border p-6 flex flex-col gap-4"
              data-ocid={`testimonials.card.${i + 1}`}
            >
              <Quote className="w-8 h-8 text-primary/40" />
              <p className="text-foreground leading-relaxed flex-1">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-sm">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">
                    {t.name}
                  </div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

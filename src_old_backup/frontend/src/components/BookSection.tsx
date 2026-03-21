import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CheckCircle2, Quote } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const features = [
  "Master the fundamentals of strategic procurement",
  "Avoid the 5 most costly procurement mistakes",
  "Negotiate effectively with suppliers and vendors",
  "Build long-term vendor relationships that deliver value",
  "Understand global supply chain dynamics",
  "Implement cost-saving strategies that actually work",
];

const testimonials = [
  {
    quote:
      "This book changed how I approach vendor negotiations. A must-read for every procurement professional.",
    author: "Amit Sharma",
    role: "Supply Chain Director",
  },
  {
    quote:
      "Ravinder's insights are practical, battle-tested, and immediately actionable. Highly recommended.",
    author: "Priya Mehta",
    role: "Procurement Manager",
  },
];

export default function BookSection() {
  const [summaryOpen, setSummaryOpen] = useState(false);

  return (
    <section id="book" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Procurement Wala – The Book
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Book cover */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-primary/5" />
              <img
                src="/assets/generated/book-cover.dim_400x550.jpg"
                alt="Procurement Wala Book Cover"
                className="relative rounded-xl shadow-2xl max-w-xs w-full object-cover"
              />
            </div>
          </motion.div>

          {/* Book content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              A definitive guide distilled from{" "}
              <strong className="text-foreground">
                37 years on the frontlines of procurement
              </strong>
              . Whether you are just starting out or looking to sharpen your
              edge, this book gives you the tools, mindset, and frameworks to
              excel.
            </p>

            <ul className="space-y-3 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground">{f}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 mb-10">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                data-ocid="book.primary_button"
              >
                <a
                  href="https://amazon.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy on Amazon
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 font-semibold"
                data-ocid="book.open_modal_button"
                onClick={() => setSummaryOpen(true)}
              >
                Read Book Summary
              </Button>
            </div>

            {/* Testimonials */}
            <div className="grid sm:grid-cols-2 gap-4">
              {testimonials.map((t) => (
                <Card key={t.author} className="p-4 border-border">
                  <Quote className="w-5 h-5 text-primary mb-2" />
                  <p className="text-sm text-muted-foreground italic mb-3">
                    {t.quote}
                  </p>
                  <div className="font-semibold text-sm text-foreground">
                    {t.author}
                  </div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Book Summary Modal */}
      <Dialog open={summaryOpen} onOpenChange={setSummaryOpen}>
        <DialogContent
          className="max-w-lg max-h-[80vh] overflow-y-auto"
          data-ocid="book.dialog"
        >
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">
              Book Summary
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Procurement Wala by Ravinder Kapoor
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 text-sm text-foreground leading-relaxed">
            <p>
              <strong>Part 1 — Procurement Foundations:</strong> The book opens
              by establishing why procurement is a strategic function, not
              merely an administrative one. Ravinder walks through the core
              principles that every procurement professional must internalise —
              supplier evaluation, total cost of ownership, and the procurement
              cycle.
            </p>
            <p>
              <strong>Part 2 — The 5 Costly Mistakes:</strong> Drawing from real
              case studies, Ravinder catalogues the five mistakes he has seen
              organisations make repeatedly — from reactive buying and
              sole-sourcing to neglecting contract management. Each mistake is
              paired with a corrective framework.
            </p>
            <p>
              <strong>Part 3 — Negotiation Mastery:</strong> Perhaps the most
              celebrated section of the book, this part reveals the mental
              models and tactical frameworks Ravinder has refined over 37 years.
              Preparation rituals, BATNA strategies, anchoring tactics, and
              relationship-building are covered in depth.
            </p>
            <p>
              <strong>Part 4 — Building Resilient Supply Chains:</strong> The
              final section addresses the macro landscape — globalisation,
              supply chain disruptions, and how organisations can future-proof
              their procurement operations through diversification, digital
              tools, and strong supplier partnerships.
            </p>
          </div>
          <div className="mt-4 flex justify-end">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
              onClick={() => setSummaryOpen(false)}
              data-ocid="book.close_button"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}

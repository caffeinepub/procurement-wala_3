import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, CheckCircle2, Quote, User } from "lucide-react";
import { motion } from "motion/react";

const individualBenefits = [
  "Customised learning roadmap",
  "Weekly 1-hour sessions",
  "Real case study walkthroughs",
  "Resume and interview coaching",
  "Ongoing email support",
];

const corporateBenefits = [
  "Customised curriculum for your industry",
  "On-site and virtual delivery",
  "Group and team workshops",
  "Post-training assessment",
  "Certificate of completion",
];

const testimonials = [
  {
    quote:
      "Ravinder's corporate training transformed our procurement team. We saw a 25% reduction in procurement costs within 6 months.",
    author: "Rajesh Gupta",
    role: "CFO, MegaCorp Ltd.",
  },
  {
    quote:
      "The mentorship program gave me the confidence and skills to lead my company's procurement strategy.",
    author: "Neha Verma",
    role: "Senior Buyer",
  },
];

export default function MentorshipSection() {
  return (
    <section id="mentorship" className="bg-muted py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Mentorship &amp; Corporate Training
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Individual mentorship */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            <Card className="h-full border-primary/20 hover:border-primary/50 transition-colors duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-display text-xl">
                  1-on-1 Mentorship
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-5">
                  Personalised guidance tailored to your procurement career
                  goals. Get direct access to Ravinder&apos;s 37 years of
                  expertise.
                </p>
                <ul className="space-y-2.5 mb-6">
                  {individualBenefits.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{b}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  data-ocid="mentorship.primary_button"
                >
                  <a href="#contact">Book a Session</a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Corporate training */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full border-primary/20 hover:border-primary/50 transition-colors duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-display text-xl">
                  Corporate Training Programs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-5">
                  Upskill your procurement team with structured training
                  workshops designed for organisations of all sizes.
                </p>
                <ul className="space-y-2.5 mb-6">
                  {corporateBenefits.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{b}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary/10"
                  data-ocid="mentorship.secondary_button"
                >
                  <a href="#contact">Request Corporate Training</a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="p-6 bg-white border-border">
                <Quote className="w-6 h-6 text-primary mb-3" />
                <p className="text-muted-foreground italic mb-4">{t.quote}</p>
                <div className="font-semibold text-foreground">{t.author}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

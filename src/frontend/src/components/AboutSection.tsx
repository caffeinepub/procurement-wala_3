import { motion } from "motion/react";

const timelineItems = [
  {
    year: "Early Career (1987)",
    description:
      "Began procurement journey in the manufacturing sector, mastering supply chain fundamentals and vendor negotiations.",
  },
  {
    year: "Key Achievements (2000s–2010s)",
    description:
      "Led procurement transformation for multiple large organisations, cutting costs by 20–30% and building resilient supplier ecosystems.",
  },
  {
    year: "Today",
    description:
      "Sharing 37 years of expertise through books, mentorship, and corporate training — empowering the next generation of procurement leaders.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-muted py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            The Journey Behind the Expertise
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Ravinder Kapoor is a procurement veteran with over{" "}
              <strong className="text-foreground">
                37 years of hands-on experience
              </strong>{" "}
              across Fortune 500 companies, public sector enterprises, and SMEs.
              He has led multi-crore procurement projects, negotiated
              high-stakes vendor contracts, and trained hundreds of
              professionals to build strategic procurement capabilities.
            </p>
            <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              His unique approach blends tactical precision with long-term
              strategic thinking — a philosophy born from decades on the
              frontlines of procurement across sectors including manufacturing,
              IT, infrastructure, and FMCG.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { label: "Industries Served", value: "15+" },
                { label: "Organisations Transformed", value: "50+" },
                { label: "Cost Savings Delivered", value: "₹100Cr+" },
                { label: "Workshops Conducted", value: "200+" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white rounded-xl p-4 border border-border"
                >
                  <div className="font-display text-2xl font-bold text-primary">
                    {item.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-primary/25" />
            <div className="space-y-10">
              {timelineItems.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative pl-14"
                >
                  <div className="absolute left-3 top-1 w-4 h-4 rounded-full bg-primary border-2 border-white shadow" />
                  <h3 className="font-display font-semibold text-foreground text-lg mb-2">
                    {item.year}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

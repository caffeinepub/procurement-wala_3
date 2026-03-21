import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "motion/react";

const articles = [
  {
    title: "Top 5 Procurement Mistakes (And How to Avoid Them)",
    excerpt:
      "Most procurement professionals make the same costly errors. Learn what they are and how to sidestep them before they damage your bottom line.",
    date: "March 2026",
    href: "blog/top-5-procurement-mistakes.html",
    tag: "Strategy",
  },
  {
    title: "Negotiation Secrets from 37 Years of Experience",
    excerpt:
      "Effective negotiation is not about pressure — it is about preparation and strategy. Discover the frameworks that work in real procurement settings.",
    date: "February 2026",
    href: "blog/negotiation-secrets.html",
    tag: "Negotiation",
  },
  {
    title: "Building a Resilient Supply Chain in 2026",
    excerpt:
      "Global disruptions have changed the procurement landscape. Here is how to future-proof your supply chain with smart vendor diversification.",
    date: "January 2026",
    href: "blog/resilient-supply-chain-2026.html",
    tag: "Supply Chain",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Procurement Insights
          </h2>
          <p className="text-muted-foreground">
            Practical knowledge from 37 years of experience
          </p>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              data-ocid={`blog.item.${i + 1}`}
            >
              <Card className="h-full hover:shadow-md transition-shadow duration-300 border-border group">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium bg-primary/10 text-primary px-2.5 py-1 rounded-full">
                      {article.tag}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </span>
                  </div>
                  <CardTitle className="font-display text-lg leading-snug group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <a
                    href={article.href}
                    data-ocid="blog.link"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all duration-200"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

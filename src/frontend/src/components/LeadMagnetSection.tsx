import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  AlertCircle,
  BookOpen,
  Download,
  FileText,
  Lightbulb,
  ListChecks,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { generatePdf } from "../lib/generatePdf";

const insideItems = [
  { icon: AlertCircle, text: "Top 5 Procurement Mistakes to Avoid" },
  { icon: Lightbulb, text: "7 Quick Negotiation Tips that Work" },
  { icon: ListChecks, text: "Procurement Task Checklist" },
  { icon: BookOpen, text: "Resources: Book & Mentorship Details" },
];

export default function LeadMagnetSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!email.trim() || !/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      generatePdf(name);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="guide"
      className="py-20 md:py-28"
      style={{ background: "oklch(0.95 0.04 185)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <FileText className="w-4 h-4" />
              Free Download
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              Download Your Free Procurement Guide
            </h2>
            <p className="text-lg font-medium text-primary mb-4">
              Procurement Wala: Quick Start Guide to Procurement &amp;
              Negotiation
            </p>
            <p className="text-muted-foreground mb-8">
              A 7-page actionable guide covering the top procurement mistakes,
              negotiation tips, and a ready-to-use task checklist. Completely
              free.
            </p>
            <div className="space-y-3">
              <p className="font-semibold text-foreground text-sm uppercase tracking-wide">
                What&apos;s Inside:
              </p>
              {insideItems.map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-primary/20">
              <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                Get Your Free Guide
              </h3>
              <div className="space-y-4">
                <div>
                  <Label
                    htmlFor="guide-name"
                    className="text-sm font-medium text-foreground"
                  >
                    Your Name *
                  </Label>
                  <Input
                    id="guide-name"
                    placeholder="e.g. Arjun Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1.5"
                    data-ocid="guide.input"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="guide-email"
                    className="text-sm font-medium text-foreground"
                  >
                    Email Address *
                  </Label>
                  <Input
                    id="guide-email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1.5"
                    data-ocid="guide.input"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="guide-company"
                    className="text-sm font-medium text-foreground"
                  >
                    Company (optional)
                  </Label>
                  <Input
                    id="guide-company"
                    placeholder="e.g. Tata Consultancy Services"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="mt-1.5"
                    data-ocid="guide.input"
                  />
                </div>

                {error && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {error}
                  </p>
                )}

                <Button
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                  size="lg"
                  onClick={handleDownload}
                  disabled={loading}
                  data-ocid="guide.primary_button"
                >
                  <Download className="w-4 h-4 mr-2" />
                  {loading ? "Generating..." : "Download Free Guide"}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  No spam. Your information is safe with us.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import {
  ArrowRight,
  Building2,
  CheckCircle,
  Monitor,
  Package,
  Shield,
  TrendingDown,
  Users,
} from "lucide-react";

const itServices = [
  "Hardware & Software Procurement",
  "IT Infrastructure Sourcing",
  "Cloud & SaaS Vendor Management",
  "IT AMC & Service Contracts",
  "Telecom & Networking Procurement",
  "Cybersecurity & Licensing",
];

const nonItServices = [
  "Office Supplies & Consumables",
  "Facilities & Housekeeping",
  "Marketing & Print Materials",
  "HR & Recruitment Vendors",
  "Travel & Logistics",
  "Capex & Civil Works",
];

const benefits = [
  {
    icon: TrendingDown,
    label: "10–30% Cost Reduction",
    desc: "Leverage our negotiation expertise to cut procurement costs",
  },
  {
    icon: Users,
    label: "Dedicated Procurement Team",
    desc: "Expert professionals managing your entire procurement function",
  },
  {
    icon: Shield,
    label: "Compliance & Risk Management",
    desc: "Policies, audits, and vendor due diligence handled for you",
  },
  {
    icon: Building2,
    label: "Scalable for Any Company Size",
    desc: "Startups to large enterprises — we adapt to your needs",
  },
];

export default function OutsourcingSection() {
  return (
    <section id="outsourcing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">
            New Service
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Procurement Outsourcing
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-5 rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Focus on your core business. Let us manage your entire procurement
            function — from vendor identification to purchase order closure —
            for both IT and Non-IT categories.
          </p>
        </div>

        {/* IT & Non-IT Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* IT Procurement */}
          <div className="bg-primary rounded-2xl p-8 text-white shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-accent/20 p-3 rounded-xl">
                <Monitor className="text-accent" size={28} />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold">
                  IT Procurement
                </h3>
                <p className="text-white/70 text-sm">
                  Technology & Digital Assets
                </p>
              </div>
            </div>
            <ul className="space-y-3">
              {itServices.map((s) => (
                <li
                  key={s}
                  className="flex items-start gap-2 text-white/90 text-sm"
                >
                  <CheckCircle
                    className="text-accent mt-0.5 shrink-0"
                    size={16}
                  />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Non-IT Procurement */}
          <div className="bg-foreground rounded-2xl p-8 text-white shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-accent/20 p-3 rounded-xl">
                <Package className="text-accent" size={28} />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold">
                  Non-IT Procurement
                </h3>
                <p className="text-white/70 text-sm">
                  Operations & General Supplies
                </p>
              </div>
            </div>
            <ul className="space-y-3">
              {nonItServices.map((s) => (
                <li
                  key={s}
                  className="flex items-start gap-2 text-white/90 text-sm"
                >
                  <CheckCircle
                    className="text-accent mt-0.5 shrink-0"
                    size={16}
                  />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Why Outsource */}
        <div className="bg-slate-50 rounded-2xl p-8 md:p-12 mb-14">
          <h3 className="font-display text-2xl font-bold text-foreground text-center mb-10">
            Why Outsource Procurement to Us?
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="text-center">
                <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-primary" size={26} />
                </div>
                <h4 className="font-semibold text-foreground text-sm mb-2">
                  {label}
                </h4>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* How it works */}
        <div className="mb-14">
          <h3 className="font-display text-2xl font-bold text-foreground text-center mb-10">
            How It Works
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                step: "01",
                title: "Discovery Call",
                desc: "We understand your procurement spend, categories, and pain points",
              },
              {
                step: "02",
                title: "Scope & Proposal",
                desc: "We design a customised outsourcing model with clear deliverables",
              },
              {
                step: "03",
                title: "Onboarding",
                desc: "Our team integrates with your processes, vendors, and systems",
              },
              {
                step: "04",
                title: "Manage & Optimise",
                desc: "Ongoing procurement management with monthly cost savings reports",
              },
            ].map(({ step, title, desc }) => (
              <div
                key={step}
                className="relative bg-white border border-border rounded-xl p-6 shadow-sm"
              >
                <span className="font-display text-4xl font-bold text-primary/10 block mb-2">
                  {step}
                </span>
                <h4 className="font-semibold text-foreground mb-2">{title}</h4>
                <p className="text-muted-foreground text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primary rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">
            Ready to Outsource Your Procurement?
          </h3>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Let Ravinder Kapoor's team take over your procurement function. You
            focus on growth — we handle the rest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-accent text-white font-semibold px-8 py-3 rounded-lg hover:bg-accent/90 transition-colors"
            >
              Request a Consultation <ArrowRight size={18} />
            </a>
            <a
              href="https://wa.me/919818469795"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/20 transition-colors border border-white/30"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

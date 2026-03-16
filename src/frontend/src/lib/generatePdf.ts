export function generatePdf(recipientName: string) {
  const aqua = "#20B2AA";
  const navy = "#0F172A";
  const white = "#FFFFFF";

  const recipientLine = recipientName
    ? `<p class="recipient">Prepared for: ${recipientName}</p>`
    : "";

  const css = `
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: Helvetica, Arial, sans-serif; color: #2a3a4a; background: #fff; }
.page { width: 210mm; min-height: 297mm; padding: 20mm; page-break-after: always; position: relative; }
.page:last-child { page-break-after: avoid; }
.top-bar { position: absolute; top: 0; left: 0; right: 0; height: 8px; background: ${aqua}; }
.bottom-bar { position: absolute; bottom: 0; left: 0; right: 0; height: 8px; background: ${aqua}; }
h2 { font-size: 18pt; font-weight: bold; margin-bottom: 6pt; }
p { font-size: 10pt; line-height: 1.6; margin-bottom: 8pt; }
.rule { height: 2px; background: ${aqua}; width: 50mm; margin: 8pt 0 16pt 0; }
.cover { background: ${navy}; color: ${white}; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; }
.cover h1 { font-size: 32pt; color: ${white}; margin-bottom: 12pt; }
.cover .subtitle { color: ${aqua}; font-size: 14pt; margin-bottom: 8pt; }
.cover .author { color: ${white}; font-size: 12pt; font-weight: bold; margin-top: 12pt; }
.cover .tagline { color: #b4c8dc; font-size: 10pt; font-style: italic; margin-top: 4pt; }
.cover .recipient { color: ${aqua}; font-size: 10pt; margin-top: 20pt; }
.cover .cover-rule { height: 1px; background: ${aqua}; width: 120mm; margin: 16pt 0; }
.light-bg { background: #f5f7fa; }
.dark-page { background: ${navy}; }
.dark-page h2 { color: ${white}; }
.dark-page p { color: #c8dceb; }
.mt { color: ${navy}; font-size: 12pt; font-weight: bold; margin-bottom: 4pt; margin-top: 16pt; }
.mb { color: #3c4b5f; font-size: 10pt; line-height: 1.6; }
.tip { color: #28374b; font-size: 11pt; line-height: 1.6; margin-bottom: 10pt; }
.ci { display: flex; align-items: flex-start; margin-bottom: 10pt; }
.cb { width: 8px; height: 8px; background: ${aqua}; flex-shrink: 0; margin-right: 8pt; margin-top: 3px; }
.ct { font-size: 11pt; color: #28374b; line-height: 1.5; }
.st { font-size: 14pt; font-weight: bold; color: ${navy}; margin-top: 24pt; margin-bottom: 6pt; }
.cl { font-size: 9pt; font-weight: bold; color: ${aqua}; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 2pt; }
.cv { font-size: 11pt; color: ${white}; margin-bottom: 14pt; }
`;

  const pages = [
    `<div class="page cover"><div class="top-bar"></div><h1>Procurement Wala</h1><div class="cover-rule"></div><p class="subtitle">Quick Start Guide to<br>Procurement &amp; Negotiation</p><p class="author">By Ravinder Kapoor</p><p class="tagline">37 Years of Expertise Distilled</p>${recipientLine}<div class="bottom-bar"></div></div>`,
    `<div class="page light-bg"><div class="top-bar"></div><h2>Welcome from Ravinder Kapoor</h2><div class="rule"></div><p>Dear Procurement Professional,</p><p>Thank you for downloading this Quick Start Guide. After 37 years working in procurement across Fortune 500 companies, public sector enterprises, and growing SMEs, I have seen first-hand what separates great procurement professionals from the rest.</p><p>The answer is rarely technical knowledge alone. It is strategy, mindset, and the discipline to avoid the common pitfalls that derail even experienced practitioners.</p><p>I hope this becomes a trusted reference in your procurement journey.</p><p style="margin-top:20pt">Warm regards,<br><strong>Ravinder Kapoor</strong><br>Procurement Wala</p></div>`,
    `<div class="page"><div class="top-bar"></div><h2>Top 5 Procurement Mistakes</h2><div class="rule"></div><p class="mt">1. Reactive Buying</p><p class="mb">Waiting until a need is urgent leaves no room for negotiation. Build demand forecasting into your process.</p><p class="mt">2. Sole-Sourcing Without Justification</p><p class="mb">Over-reliance on a single supplier creates risk. Always maintain at least 2-3 qualified alternatives.</p><p class="mt">3. Neglecting Contract Management</p><p class="mb">The deal does not end at signature. Poor contract management erodes savings and creates disputes.</p><p class="mt">4. Ignoring Total Cost of Ownership</p><p class="mb">Price is not cost. Factor in delivery, quality, support, and lifecycle costs in every evaluation.</p><p class="mt">5. Skipping Supplier Development</p><p class="mb">Great suppliers are built, not found. Invest in relationships and your supplier base will reward you.</p></div>`,
    `<div class="page light-bg"><div class="top-bar"></div><h2>7 Quick Negotiation Tips</h2><div class="rule"></div><p class="tip">1. Prepare more than you talk - research is your greatest advantage.</p><p class="tip">2. Know your BATNA before entering any discussion.</p><p class="tip">3. Let the other party make the first offer whenever possible.</p><p class="tip">4. Anchor high - the first number sets the psychological frame.</p><p class="tip">5. Never negotiate on price alone; bundle terms, delivery, and quality.</p><p class="tip">6. Use silence strategically - discomfort often leads to concessions.</p><p class="tip">7. Always confirm agreements in writing before the meeting ends.</p></div>`,
    `<div class="page"><div class="top-bar"></div><h2>Procurement Task Checklist</h2><div class="rule"></div><div class="ci"><div class="cb"></div><span class="ct">Define procurement requirements clearly before raising any PO</span></div><div class="ci"><div class="cb"></div><span class="ct">Verify supplier credentials and financial stability</span></div><div class="ci"><div class="cb"></div><span class="ct">Obtain minimum 3 competitive quotes for significant purchases</span></div><div class="ci"><div class="cb"></div><span class="ct">Conduct a thorough Total Cost of Ownership analysis</span></div><div class="ci"><div class="cb"></div><span class="ct">Review and negotiate all contract terms before signing</span></div><div class="ci"><div class="cb"></div><span class="ct">Set clear KPIs and SLAs in every supplier agreement</span></div><div class="ci"><div class="cb"></div><span class="ct">Schedule quarterly supplier performance reviews</span></div><div class="ci"><div class="cb"></div><span class="ct">Maintain an updated approved vendor list</span></div><div class="ci"><div class="cb"></div><span class="ct">Review spend analytics monthly to identify savings opportunities</span></div></div>`,
    `<div class="page light-bg"><div class="top-bar"></div><h2>About the Book &amp; Mentorship</h2><div class="rule"></div><p class="st">Procurement Wala - The Book</p><p>A definitive guide distilled from 37 years on the frontlines of procurement. Covers strategic fundamentals, the 5 costly mistakes, negotiation mastery, and building resilient supply chains.</p><p class="st">1-on-1 Mentorship</p><p>Personalised procurement career coaching with weekly 1-hour sessions, real case study walkthroughs, and ongoing support. Book at procurementwala.com.</p><p class="st">Corporate Training Programs</p><p>Structured procurement training workshops for organisations of all sizes. Customised curriculum, on-site and virtual delivery. Enquire at procurementwala.com.</p></div>`,
    `<div class="page dark-page"><div class="top-bar"></div><h2>Get in Touch</h2><div class="rule"></div><p>Ready to take your procurement career or team to the next level?</p><br/><p class="cl">Website</p><p class="cv">www.procurementwala.com</p><p class="cl">WhatsApp</p><p class="cv">+91 9818469795</p><p class="cl">Email</p><p class="cv">ravinder@procurementwala.com</p><p class="cl">LinkedIn</p><p class="cv">linkedin.com/in/ravinderkapoor</p><div class="bottom-bar"></div></div>`,
  ];

  const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Procurement Wala Quick Start Guide</title><style>${css}</style></head><body>${pages.join("")}</body></html>`;

  const blob = new Blob([html], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Procurement-Wala-Quick-Start-Guide.html";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

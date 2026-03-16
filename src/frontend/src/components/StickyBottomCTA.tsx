import { X } from "lucide-react";
import { useEffect, useState } from "react";

const SESSION_KEY = "sticky_cta_dismissed";

export default function StickyBottomCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem(SESSION_KEY);
    if (!dismissed) setVisible(true);
  }, []);

  const dismiss = () => {
    sessionStorage.setItem(SESSION_KEY, "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-primary text-primary-foreground shadow-2xl"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3">
        <p className="flex-1 text-sm font-medium leading-snug">
          <span className="hidden sm:inline">
            Get Your Free Procurement Guide –{" "}
          </span>
          <span className="font-bold">7 Pages of Actionable Tips!</span>
        </p>
        <button
          type="button"
          onClick={() => {
            dismiss();
            window.location.hash = "guide";
          }}
          className="shrink-0 bg-white text-primary text-sm font-bold px-4 py-2 rounded-full hover:bg-white/90 transition-colors"
          data-ocid="sticky_cta.primary_button"
        >
          Download Now
        </button>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Close"
          className="shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          data-ocid="sticky_cta.close_button"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
    clarity?: (action: string, event: string, data?: Record<string, unknown>) => void;
  }
}

export const CALENDLY_URL = "https://calendly.com/steven-pnwcloudservices/intro";

const CALENDLY_SCRIPT_URL = "https://assets.calendly.com/assets/external/widget.js";
const CALENDLY_CSS_URL = "https://assets.calendly.com/assets/external/widget.css";

let scriptLoaded = false;
let scriptLoading: Promise<void> | null = null;

function injectCalendlyCSS(): void {
  if (document.querySelector(`link[href="${CALENDLY_CSS_URL}"]`)) return;
  
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = CALENDLY_CSS_URL;
  document.head.appendChild(link);
}

function loadCalendlyScript(): Promise<void> {
  if (scriptLoaded && window.Calendly) {
    return Promise.resolve();
  }

  if (scriptLoading) {
    return scriptLoading;
  }

  scriptLoading = new Promise<void>((resolve, reject) => {
    if (document.querySelector(`script[src="${CALENDLY_SCRIPT_URL}"]`)) {
      const checkCalendly = setInterval(() => {
        if (window.Calendly) {
          clearInterval(checkCalendly);
          scriptLoaded = true;
          resolve();
        }
      }, 100);
      
      setTimeout(() => {
        clearInterval(checkCalendly);
        reject(new Error("Calendly script timeout"));
      }, 10000);
      return;
    }

    const script = document.createElement("script");
    script.src = CALENDLY_SCRIPT_URL;
    script.async = true;

    script.onload = () => {
      const checkCalendly = setInterval(() => {
        if (window.Calendly) {
          clearInterval(checkCalendly);
          scriptLoaded = true;
          resolve();
        }
      }, 100);

      setTimeout(() => {
        clearInterval(checkCalendly);
        reject(new Error("Calendly initialization timeout"));
      }, 10000);
    };

    script.onerror = () => {
      scriptLoading = null;
      reject(new Error("Failed to load Calendly script"));
    };

    document.head.appendChild(script);
  });

  return scriptLoading;
}

export interface OpenCalendlyOptions {
  source?: string;
}

export async function openCalendlyPopup(options: OpenCalendlyOptions = {}): Promise<void> {
  const { source } = options;

  try {
    injectCalendlyCSS();
    await loadCalendlyScript();

    if (!window.Calendly) {
      console.error("[Calendly] Widget not available after loading");
      return;
    }

    let url = CALENDLY_URL;
    if (source) {
      const separator = url.includes("?") ? "&" : "?";
      url = `${url}${separator}utm_source=${encodeURIComponent(source)}`;
    }

    window.Calendly.initPopupWidget({ url });
  } catch (error) {
    console.error("[Calendly] Failed to open popup:", error);
  }
}

export function fireAnalyticsEvent(source: string): void {
  try {
    if (window.clarity) {
      window.clarity("event", "schedule_free_consultation_clicked", {
        source,
        page: window.location.pathname,
      });
    }
  } catch (error) {
    console.error("[Analytics] Clarity event failed:", error);
  }

  try {
    fetch("/api/analytics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event: "schedule_free_consultation_clicked",
        source,
        path: window.location.pathname,
        timestamp: new Date().toISOString(),
      }),
    }).catch(() => {});
  } catch {
  }
}

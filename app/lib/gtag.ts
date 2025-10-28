declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

/**
 * Reporta una conversión de Google Ads
 */
export function reportConversion(url?: string): boolean {
  if (typeof window.gtag !== "function") {
    console.warn("⚠️ gtag todavía no está disponible");
    return false;
  }

  const callback = () => {
    if (url) {
      window.location.href = url;
    }
  };

  window.gtag("event", "conversion", {
    send_to: "AW-17493174136/dJNQCInWlpIbEPjOspVB",
    value: 1.0,
    currency: "USD",
    event_callback: callback,
  });

  return false;
}

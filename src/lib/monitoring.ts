// Client-side error monitoring wiring.
//
// Fully opt-in: nothing runs unless VITE_SENTRY_DSN is set at build time.
// To enable in production:
//   1. Create a project at https://sentry.io (free plan works).
//   2. Set the following env vars in your hosting/Lovable dashboard:
//        VITE_SENTRY_DSN=https://xxx@oyyy.ingest.sentry.io/zzz
//        VITE_SENTRY_ENV=production          (optional, defaults to "production")
//        VITE_SENTRY_RELEASE=<git-sha>       (optional)
//        VITE_SENTRY_TRACES=0.1              (optional, sample rate 0..1)
//
// The Sentry SDK is dynamically imported so it is code-split out of the main
// bundle when disabled — zero runtime cost for users when the DSN is empty.

export async function initMonitoring() {
  if (typeof window === "undefined") return;
  const dsn = import.meta.env.VITE_SENTRY_DSN as string | undefined;
  if (!dsn) return;

  try {
    const Sentry = await import("@sentry/react");
    Sentry.init({
      dsn,
      environment: (import.meta.env.VITE_SENTRY_ENV as string | undefined) ?? "production",
      release: import.meta.env.VITE_SENTRY_RELEASE as string | undefined,
      tracesSampleRate: Number(import.meta.env.VITE_SENTRY_TRACES ?? 0),
      replaysSessionSampleRate: 0,
      replaysOnErrorSampleRate: 0,
      // Avoid PII by default; the app already avoids collecting it.
      sendDefaultPii: false,
    });
  } catch (err) {
    // Never let monitoring break the app.
    console.warn("[monitoring] failed to initialize Sentry", err);
  }
}

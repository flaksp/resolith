export default function initialize() {
  window.Raven.config(process.env.SENTRY_DSN).install();
}

export default function () {
  window.Raven.config(process.env.SENTRY_DSN).install();
}

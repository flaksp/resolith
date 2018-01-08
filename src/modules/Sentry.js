export function initialize() {
  Raven.config('https://c394c49fafda419598e3d47991816fc7@sentry.io/268009').install();
}

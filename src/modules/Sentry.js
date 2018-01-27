'use strict';

export function initialize() {
  Raven.config(process.env.SENTRY_DSN).install();
}

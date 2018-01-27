import './app.css';
import * as Display from './modules/Display';
import * as YandexMetrika from './modules/YandexMetrika';
import * as GoogleAnalytics from './modules/GoogleAnalytics';
import * as Sentry from './modules/Sentry';

window.addEventListener('DOMContentLoaded', () => {
  const [width, height] = Display.getResolution();

  document.getElementById('resolution').innerHTML = `${width}&times;${height}`;
});

window.addEventListener('load', () => {
  YandexMetrika.initialize();
  GoogleAnalytics.initialize();
  Sentry.initialize();
});

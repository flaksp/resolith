import './index.css';
import * as YandexMetrika from './modules/YandexMetrika';
import * as GoogleAnalytics from './modules/GoogleAnalytics';
import * as Sentry from './modules/Sentry';

window.addEventListener('load', () => {
  const width = window.screen.width * window.devicePixelRatio;
  const height = window.screen.height * window.devicePixelRatio;

  document.getElementById('resolution').innerHTML = `${width}&times;${height}`;

  YandexMetrika.initialize();
  GoogleAnalytics.initialize();
  Sentry.initialize();
});

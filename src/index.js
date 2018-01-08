import * as YandexMetrika from 'modules/YandexMetrika';
import * as GoogleAnalytics from 'modules/GoogleAnalytics';
import * as Sentry from 'modules/Sentry';

window.addEventListener('load', () => {
  let width  = window.screen.width * window.devicePixelRatio;
  let height = window.screen.height * window.devicePixelRatio;

  document.getElementById('resolution').innerHTML = `${width}&times;${height}`;

  YandexMetrika.initialize();
  GoogleAnalytics.initialize();
  Sentry.initialize();
});

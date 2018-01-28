import './app.css';
import * as Display from './modules/Display';
import YandexMetrika from './modules/YandexMetrika';
import GoogleAnalytics from './modules/GoogleAnalytics';
import Sentry from './modules/Sentry';

window.addEventListener('DOMContentLoaded', () => {
  const [width, height] = Display.getResolution();

  document.getElementById('resolution').innerHTML = `${width}&times;${height}`;
});

window.addEventListener('load', () => {
  YandexMetrika();
  GoogleAnalytics();
  Sentry();
});

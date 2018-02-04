import './app.css';
import * as Display from './modules/Display';
import * as Navigation from './modules/Navigation';
import YandexMetrika from './modules/YandexMetrika';
import GoogleAnalytics from './modules/GoogleAnalytics';
import Sentry from './modules/Sentry';

window.addEventListener('DOMContentLoaded', () => {
  const [resolutionWidth, resolitionHeight] = Display.getResolution();

  document.querySelector('#resolution .slide__primary-text').innerHTML = `${resolutionWidth}&times;${resolitionHeight}`;

  const [viewportWidth, viewportHeight] = Display.getViewport();

  document.querySelector('#viewport .slide__primary-text').innerHTML = `${viewportWidth}&times;${viewportHeight}`;

  document.querySelector('#scrollbar-width .slide__primary-text').innerHTML = Display.getScrollbarWidth();

  Navigation.updateNavigationArrows(
    Navigation.getPreviousSlideId(),
    Navigation.getNextSlideId(),
  );
});

window.addEventListener('load', () => {
  YandexMetrika();
  GoogleAnalytics();
  Sentry();
});

window.addEventListener('hashchange', () => {
  if (Navigation.getSlideByCurrentHash() === null) {
    return; // Hash doesn't match any slide.
  }

  Navigation.updateNavigationArrows(
    Navigation.getPreviousSlideId(),
    Navigation.getNextSlideId(),
  );
}, false);


window.addEventListener('keydown', (event) => {
  const pressedKey = event.key;

  if (pressedKey !== Navigation.LEFT_ARROW_KEY
      && pressedKey !== Navigation.RIGHT_ARROW_KEY) {
    return;
  }

  window.location.hash = pressedKey === Navigation.LEFT_ARROW_KEY
    ? `#${Navigation.getPreviousSlideId()}`
    : `#${Navigation.getNextSlideId()}`;
});

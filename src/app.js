import './app.css';
import * as Display from './modules/Display';
import * as Navigation from './modules/Navigation';
import YandexMetrika from './modules/YandexMetrika';
import GoogleAnalytics from './modules/GoogleAnalytics';
import Sentry from './modules/Sentry';

function calculateScreenProperties() {
  // Resolution
  const [resolutionWidth, resolitionHeight] = Display.getResolution();

  document.querySelector('#resolution .slide__primary-text').innerHTML = `${resolutionWidth}&times;${resolitionHeight}`;

  // Aspect ratio
  const [aspectRatioX, aspectRatioY] = Display.getAspectRatio();

  document.querySelector('#aspect-ratio .slide__primary-text').innerHTML = `${aspectRatioX}&times;${aspectRatioY}`;

  // Viewport
  const [viewportWidth, viewportHeight] = Display.getViewport();

  document.querySelector('#viewport .slide__primary-text').innerHTML = `${viewportWidth}&times;${viewportHeight}`;

  // Scrollbar width
  document.querySelector('#scrollbar-width .slide__primary-text').innerHTML = Display.getScrollbarWidth();
}

window.addEventListener('DOMContentLoaded', () => {
  calculateScreenProperties();

  Navigation.updateNavigationArrows(
    Navigation.getPreviousSlideId(),
    Navigation.getNextSlideId(),
  );
});

window.addEventListener('resize', () => {
  calculateScreenProperties();
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

document.querySelectorAll('.slide__primary-text').forEach((element) => {
  element.addEventListener('click', () => {
    window.getSelection().selectAllChildren(element);

    if (navigator.share !== undefined) {
      navigator.share({
        title: document.title,
        text: element.text,
        url: window.location,
      });
    }
  });
});

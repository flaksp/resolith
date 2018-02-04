export const LEFT_ARROW_KEY = 'ArrowLeft';
export const RIGHT_ARROW_KEY = 'ArrowRight';

export function getSlideByCurrentHash() {
  if (window.location.hash === '') {
    // If no hash specified, we define last slide as default
    return document.getElementsByClassName('slide')[document.getElementsByClassName('slide').length - 1];
  }

  return document.getElementById(window.location.hash.replace('#', ''));
}

export function getPreviousSlideId() {
  const currentSlide = getSlideByCurrentHash();

  if (currentSlide === null) {
    return document.getElementsByClassName('slide')[document.getElementsByClassName('slide').length - 1].id;
  }

  return currentSlide.previousSibling
    ? currentSlide.previousSibling.id
    : document.getElementsByClassName('slide')[document.getElementsByClassName('slide').length - 1].id;
}

export function getNextSlideId() {
  const currentSlide = getSlideByCurrentHash();

  if (currentSlide === null) {
    return document.getElementsByClassName('slide')[0].id;
  }

  return currentSlide.nextSibling
    ? currentSlide.nextSibling.id
    : document.getElementsByClassName('slide')[0].id;
}

export function updateNavigationArrows(previousArrowNewHash, nextArrowNewHash) {
  document.getElementById('prev-arrow').href = `#${previousArrowNewHash}`;
  document.getElementById('next-arrow').href = `#${nextArrowNewHash}`;
}

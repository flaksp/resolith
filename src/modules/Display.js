/**
 * If device rotated in portrait (vertical) orientation.
 *
 * @returns {boolean}
 */
export function isPortraitOrientation() {
  return window.screen.width < window.screen.height;
}

/**
 * Nexus 5X returns wrong devicePixelRatio in all browsers.
 *
 * @returns {boolean}
 */
function isNexus5() {
  return window.devicePixelRatio === 2.625 && isPortraitOrientation()
    ? (window.screen.width === 412 && window.screen.height === 732)
    : (window.screen.width === 732 && window.screen.height === 412);
}

/**
 * Nexus 6 returns wrong devicePixelRatio in all browsers.
 *
 * @returns {boolean}
 */
function isNexus6() {
  return window.devicePixelRatio === 3.5 && isPortraitOrientation()
    ? (window.screen.width === 412 && window.screen.height === 732)
    : (window.screen.width === 732 && window.screen.height === 412);
}


/**
 * Returns screen resolution.
 *
 * @returns {*[]}
 */
export function getResolution() {
  let width = window.screen.width * window.devicePixelRatio;
  let height = window.screen.height * window.devicePixelRatio;

  if (isNexus5()) {
    [width, height] = [1080, 1920];

    if (isPortraitOrientation()) {
      [width, height] = [height, width];
    }
  }

  if (isNexus6()) {
    [width, height] = [1440, 2560];

    if (isPortraitOrientation()) {
      [width, height] = [height, width];
    }
  }

  return [width, height];
}

/**
 * Returns browser's scrollbar width.
 *
 * @returns {int}
 */
export function getScrollbarWidth() {
  const outerContainer = document.createElement('div');
  outerContainer.style.visibility = 'hidden';
  outerContainer.style.width = '100px';
  document.body.appendChild(outerContainer);

  const widthWithoutScroll = outerContainer.offsetWidth;

  outerContainer.style.overflow = 'scroll';

  const innerContainer = document.createElement('div');
  innerContainer.style.width = '100%';

  outerContainer.appendChild(innerContainer);

  const widthWithScroll = innerContainer.offsetWidth;

  outerContainer.parentNode.removeChild(outerContainer);

  return widthWithoutScroll - widthWithScroll;
}

export function getViewport() {
  return [
    Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
    Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
  ];
}

function gcd(a, b) {
  return (b === 0) ? a : gcd(b, a % b);
}

function isFloat(n) {
  return Number(n) === n && n % 1 !== 0;
}

export function getAspectRatio() {
  const [resolutionWidth, resolutionHeight] = getResolution();

  const ratio = gcd(resolutionWidth, resolutionHeight);

  let aspectRatioX = resolutionWidth / ratio;
  let aspectRatioY = resolutionHeight / ratio;

  if (isFloat(aspectRatioX) || isFloat(aspectRatioY)) {
    aspectRatioX = aspectRatioX.toFixed(2);
    aspectRatioY = aspectRatioY.toFixed(2);
  }

  return [aspectRatioX, aspectRatioY];
}

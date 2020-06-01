/**
 * Returns screen resolution.
 *
 * @returns {*[]}
 */
export function getResolution() {
  const pixelRatio = window.devicePixelRatio;

  const realWidth = Math.round(window.screen.width * pixelRatio);
  const realHeight = Math.round(window.screen.height * pixelRatio);

  return [realWidth, realHeight];
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

export function getDevicePixelRatio() {
  return window.devicePixelRatio;
}

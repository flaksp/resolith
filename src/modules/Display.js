/**
 * Returns screen resolution.
 *
 * @returns {*[]}
 */
export function getResolution() {
  let width  = window.screen.width * window.devicePixelRatio;
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

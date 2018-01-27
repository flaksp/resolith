'use strict';

export function initialize() {
  try {
    let yaCounter = new Ya.Metrika({
      id: process.env.YANDEX_METRIKA_ID,
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true
    });
  } catch(e) {}
}

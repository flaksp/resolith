export default function initialize() {
  window.Ya.Metrika({
    id: process.env.YANDEX_METRIKA_ID,
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
  });
}

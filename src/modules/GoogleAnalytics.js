export default function initialize() {
  window.dataLayer = window.dataLayer || [];

  function gtag(...args) {
    window.dataLayer.push(args);
  }

  gtag('js', new Date());
  gtag('config', process.env.GOOGLE_ANALYTICS_ID);
}

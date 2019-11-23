
// // set names for both precache & runtime cache
// workbox.core.setCacheNameDetails({
//   prefix: 'day-of-code-guides',
//   suffix: 'v1',
//   precache: 'precache',
//   runtime: 'runtime-cache'
// });

// // let Service Worker take control of pages ASAP
// workbox.skipWaiting();
// workbox.clientsClaim();

// // let Workbox handle our precache list
// workbox.precaching.precacheAndRoute(self.__precacheManifest);

// // use `networkFirst` strategy for `*.html`, like all my posts
// workbox.routing.registerRoute(
//   /\.html$/,
//   workbox.strategies.networkFirst()
// );

// // use `cacheFirst` strategy for images
// workbox.routing.registerRoute(
//   /assets\/(img|icons)/,
//   workbox.strategies.cacheFirst()
// );

// // use `networkFirst` strategy for `*.css`, like all my posts
// workbox.routing.registerRoute(
//   /\.css$/,
//   workbox.strategies.networkFirst()
// );

// // third party files
// workbox.routing.registerRoute(
//   /^https?:\/\/cdn.staticfile.org/,
//   workbox.strategies.staleWhileRevalidate()
// );

caches.keys().then(cacheNames => {
  cacheNames.forEach(cacheName => {
    caches.delete(cacheName);
  });
});

const CACHE_NAME = 'mm-vision-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './sw.js'
];

// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activate event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip external API calls
  if (url.hostname === 'generativelanguage.googleapis.com' || 
      url.hostname === 'api.groq.com') {
    return; // Don't cache API calls
  }

  // Network first for API calls
  if (request.method !== 'GET') {
    return;
  }

  // Cache first for assets
  event.respondWith(
    caches.match(request).then((response) => {
      return response || fetch(request).then((fetchResponse) => {
        if (!fetchResponse || fetchResponse.status !== 200) {
          return fetchResponse;
        }

        const responseToCache = fetchResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(request, responseToCache);
        });

        return fetchResponse;
      }).catch(() => {
        return caches.match('./index.html');
      });
    })
  );
});

var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  'index.html',
  'gameloop.html',
  'plushyPink.css',
  'perfectPurple.css',
  'style.css',
  'script.js',
  'gameplay.js',
  'gameMultiplayer.js',
  'localStorage.js',
  'manifest.json',
  'rock.png',
  'paper.png',
  'scissors.png',
  'stars.png',
  'starsfilled.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          if (response) {
            return response;
          }
  
          return fetch(event.request).then(
            function(response) {
              if(!response || response.status !== 200 || response.type !== 'basic') {
                return response;
              }
  
              var responseToCache = response.clone();
  
              caches.open(CACHE_NAME)
                .then(function(cache) {
                  cache.put(event.request, responseToCache);
                });
  
              return response;
            }
          );
        })
      );
  });

  self.addEventListener('activate', function(event) {
    var cacheAllowlist = ['pages-cache-v1', 'blog-posts-cache-v1'];
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.map(function(cacheName) {
            if (cacheAllowlist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });
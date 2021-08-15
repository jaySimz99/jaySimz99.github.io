const cache_name = 'v1';
const assets = [
  'index.html',
  'gameloop.html',
  'plushyPink.css',
  'perfectPurple.css',
  'styleForm.css',
  'script.js',
  'gameplay.js',
  'rock.png',
  'paper.png',
  'scissors.png',
  'load.png',
  'star.png',
  'starfilled.png',
  'cardback.png',
  'greenRock.png'
];


self.addEventListener('install', (e) => {
console.log('Service Worker: installed');

e.waitUntil(
caches
.open(cache_name)
.then(cache => {
  console.log('service work: caching files');
cache.addAll(assets);//sending cached files in assets
})
.then(() => self.skipWaiting())
);
});//call installation 


self.addEventListener('activate', (e) => {
  console.log('Service Worker: activated');
  });//call activation
  

  
self.addEventListener('fetch', (e) => {
  console.log('Service Worker: fetched');
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  )
  });//call activation
  


const cache_name = 'v1';
const assets = [
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
  'starsfilled.png',
  'load.png',
];


self.addEventListener('install', (e) => {
console.log('Service Worker: installed');

e.waitUntil(
caches
.open(cache_name)
.then(cache => {
  console.log('service work: caching files');
cache.addAll(assets);
})
.then(() => self.skipWaiting())
);
});//call installation 


self.addEventListener('activate', (e) => {
  console.log('Service Worker: activated');
  });//call activation
  

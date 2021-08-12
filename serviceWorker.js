const cache_name = 'v1';
const assets = [
  'index.html',
  'gameloop.html',
  'plushyPink.css',
  'perfectPurple.css',
  'styleForm.css',
  'script.js',
  'gameplay.js'
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
  

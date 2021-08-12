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
cache.addAll(assets);//sending cached files in assets
})
.then(() => self.skipWaiting())
);
});//call installation 


self.addEventListener('activate', (e) => {
  console.log('Service Worker: activated');
  e.waitUntil(caches.keys().then(cache_name => {
    return Promise.all(
      cache_name.map(cache => {
        if(cache !== cache_name){
          console.log('clearing old cache');
          return caches.delete(cache);

        }
      })
    )
  }));//deleting old cache 
  });//call activation
  

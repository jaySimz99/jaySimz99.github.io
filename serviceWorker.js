if ('ServiceWorker' in navigator){
navigator.serviceWorker.register(sw.js).then(registration => {
    console.log("SW Registered");
    console.log(registration);
})
}
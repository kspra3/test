/* Code caching (also known as bytecode caching) is an important optimization in browsers. 
It reduces the start-up time of commonly visited websites by caching the result of parsing + compilation. 
Most popular browsers implement some form of code caching, and Chrome is no exception. */

// Speed up slow functions by caching their results.

// Add Cache
let cacheName = 'userSettings'; 
let url = '/api/get/usersettings';

caches.open(cacheName).then( cache => {   
    cache.add(url).then( () => {
        console.log("Data cached ")
    });
});

// AddAll (array of URL)

let urls = ['/get/userSettings?userId=1', '/get/userDetails'];

caches.open(cacheName).then( cache => {
    cache.addAll(urls).then( () => {
        console.log("Data cached ")
    });
});

// Retrieving

const cacheName = 'userSettings'
const url = '/api/get/userSettings'

caches.open(cacheName).then(cache => {
  cache.match(url).then(settings => {
    console.log(settings);
  }
});

/* Response {
    body: (...),
    bodyUsed: false,
    headers: Headers,
    ok: true,
    status: 200,
    statusText: "OK",
    type: "basic",
    url: "https://test.com/api/get/userSettings"
} */

// Remove item from cache

let cacheName = userSettings; 
let urlToDelete = '/api/get/userSettings';

caches.open(cacheName).then(cache => {
  cache.delete(urlToDelete)
})


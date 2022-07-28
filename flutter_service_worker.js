'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "3f62c3dff04de3b00cbaa079b570fcb5",
"index.html": "8755859cf017958a36af6611049f79cb",
"/": "8755859cf017958a36af6611049f79cb",
"main.dart.js": "9c1c1ca554a314b6b062f42608e83f8b",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f99fabb58d0f788b99975b57fbbc0589",
"assets/AssetManifest.json": "ad3d24bc34fa1fe4b59cb8fce10ddf0b",
"assets/NOTICES": "e15d5b80fd6ea6ba451998eaebbc45eb",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/slimy_card/assets/flare/topSlime.flr": "9f381ee39c22b624c805f536b39171a6",
"assets/packages/slimy_card/assets/flare/bottomSlime.flr": "3a26ed39d3a9a9956105e9e6e4d5ad43",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/banner.jpg": "5534a667e8e2b70cb9ba57a3e1afdaee",
"assets/assets/images/usa.jpg": "3498c23b85e30d6a79c4be4d8e22e01c",
"assets/assets/images/avatar.jpg": "5fd409cb2cdb2b6f93eb58680b4d7f0b",
"assets/assets/images/indonesia.jpg": "49348e554dbf33544152625dbd523380",
"assets/assets/img/png/iron-outline..png": "eb8a5aeb016eb92f227635383d5731ab",
"assets/assets/img/png/googleplay.png": "30d45adf291e14ce7b3436924a8706da",
"assets/assets/img/png/price-tag.png": "bdba500991e16a87e003e504e289f2d5",
"assets/assets/img/png/car1.png": "70eb857ec7aa06ca2bb28c522f9a2dc0",
"assets/assets/img/png/wallet%2520(2).png": "2b4dbaef11536ec2399a8ff2cf71b4e9",
"assets/assets/img/png/click%2520to%2520edit-5-soon.png": "8cd9d1382e367696e233913dd983ff72",
"assets/assets/img/png/click%2520to%2520edit-4-soon.png": "8a7dbb7a3c6406e9398fd7b57984d5bf",
"assets/assets/img/png/clothes-hanger.png": "9eaffebbe44987cd9d3c8e8885b4d028",
"assets/assets/img/png/car2Toyota.png": "272401e4c3743b18cbb89840e265ed5b",
"assets/assets/img/png/click%2520to%2520edit-4.png": "5898c189d6a1acec8954b32c7caba4f2",
"assets/assets/img/png/click%2520to%2520edit-5.png": "633e3f996db4a2a2dbe1512759a5aadb",
"assets/assets/img/png/iron-machine.png": "ea2a2b5e756dcb013973bb779ea426d9",
"assets/assets/img/png/dry-cleaning-outline.png": "d1f34bfe64a5fe154aaf12b28dac85ce",
"assets/assets/img/png/dry-cleaning.png": "e5e27f1e98c288955722efe76e43582b",
"assets/assets/img/png/home.png": "0b3723cb0666da2612a9e9bb3d77856e",
"assets/assets/img/png/user.png": "a678e7d9aef19494a53ca133688cc53d",
"assets/assets/img/png/car4Bmw.png": "a0cb0877200ba91ab4096b01e8b842ca",
"assets/assets/img/png/click%2520to%2520edit-2.png": "46ea57f882ddd054b2d936dd3e959a86",
"assets/assets/img/png/click%2520to%2520edit-3.png": "8430556f40eb7e36573e5930eb79734e",
"assets/assets/img/png/logo%2520Al%2520NAseem.png": "bc2da59ebb6609d2bae2a743b79e1248",
"assets/assets/img/png/logo%2520Al%2520NAseem%2520no%2520color.png": "5284ddc51d103333c8d07937a69af74c",
"assets/assets/img/png/information.png": "c1cb4a8fc20e96c6d2ecc33f9f3fc3e3",
"assets/assets/img/png/click%2520to%2520edit-1.png": "4ba2ad01185deac5253f678a6ab527ba",
"assets/assets/img/png/appstore.png": "ec7e3dc2249ffaddb7429d0dde528858",
"assets/assets/img/png/search.png": "a9b87abf6a119e5bde4feadd6a4973c2",
"assets/assets/img/png/heart.png": "2ef7805067d234313bbe3d268df5a8ce",
"assets/assets/img/png/ndry%2520Al%2520Naseem.png": "40cffe13a5676145e11cc675f1224790",
"assets/assets/img/png/laundry-machine-outline..png": "028e7bf5a24fa20e2d5a70cce670bdba",
"assets/assets/img/png/car5Chevro.png": "7375b01293f46e5da9c64136cbd2fcee",
"assets/assets/img/png/washing-machine.png": "d7a628a08c303e35ab1607ad5313fecf",
"assets/assets/img/png/logo.png": "ee22eb46de3b933473be74159ea3d504",
"assets/assets/img/png/delivery-truck.png": "eff0ca3b33398d565ddf739adc5137d4",
"assets/assets/img/png/iron%2520(6).png": "f80df93a9ba9f6e535f8d4a1eb3f964a",
"assets/assets/img/png/click%2520to%2520edit.png": "46a0148e5e28916b25902207502a5794",
"assets/assets/img/png/phone.png": "2eee1c18267312ceca158c6f2b95cbf9",
"assets/assets/img/png/car3Tesla.png": "cb452f3df0d1dee75b832bcf82d8a599",
"assets/assets/img/png/laundry-machine.png": "666801f26bc1833a9471d31d90f58eb0",
"assets/assets/img/png/notification.png": "fb9c422de6db17df617768125ddcff3d",
"assets/assets/img/png/wallet%2520(1).png": "636e89835de1afd5ea7741d718218ae3",
"assets/assets/img/png/laundry%2520(6).png": "97bdaf705a8f44ef3f847d4227bc8e93",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

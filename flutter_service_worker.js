'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "515af506fd2ad6f8a19c4f924559f4b7",
"index.html": "6f99be20d32211b3eb28c09bc05ce532",
"/": "6f99be20d32211b3eb28c09bc05ce532",
"main.dart.js": "a83d3f48745f82484af7b27b331d4ad1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/favicon-16x16.png": "975394c19bc158dc22ccf8301f4ec4bf",
"icons/favicon.ico": "2e1eb201f960d12a3b1c95e63a80c5e1",
"icons/apple-icon.png": "972a5ece6569c0da41eed41a25fa1817",
"icons/apple-icon-144x144.png": "3955e5e4ebab60d3f76c5a379d328f04",
"icons/android-icon-192x192.png": "dda4893b5f94741bd1fc6abe20c08329",
"icons/apple-icon-precomposed.png": "972a5ece6569c0da41eed41a25fa1817",
"icons/apple-icon-114x114.png": "bba6e4e82f63d7e09381928d7feaf603",
"icons/ms-icon-310x310.png": "30dc9a741c27bde5f61d3b458b5ea7e9",
"icons/ms-icon-144x144.png": "3955e5e4ebab60d3f76c5a379d328f04",
"icons/apple-icon-57x57.png": "09127b235a72f70ca6ea792244e06318",
"icons/apple-icon-152x152.png": "ba24405e8c59d3f9a2c73305add64666",
"icons/ms-icon-150x150.png": "3a0bf99c257ab14a87f6121a00d42fe4",
"icons/android-icon-72x72.png": "f8e909ad7b94c7ff313f29a2575c33d6",
"icons/android-icon-96x96.png": "a6912c6fef1f6eb396cd42be1b0611c0",
"icons/android-icon-36x36.png": "56673f33f6b70aabacbed64891225ac8",
"icons/apple-icon-180x180.png": "e7f0ee9a46f4f949eccdcb183de83a19",
"icons/favicon-96x96.png": "a6912c6fef1f6eb396cd42be1b0611c0",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/android-icon-48x48.png": "241bd235ea779136b8d16c8baaa27e55",
"icons/apple-icon-76x76.png": "2a7a90fd9f965d4049eef0979e7a53cd",
"icons/apple-icon-60x60.png": "f3fb67ac0b6b090755c2dc684941983c",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/android-icon-144x144.png": "3955e5e4ebab60d3f76c5a379d328f04",
"icons/apple-icon-72x72.png": "f8e909ad7b94c7ff313f29a2575c33d6",
"icons/apple-icon-120x120.png": "365109e5400ce3894919aae4146c14bd",
"icons/favicon-32x32.png": "bb607553668029bdc112bbfb0f6e972f",
"icons/ms-icon-70x70.png": "04bb7feaa0daa84f603aa308a5e918cc",
"manifest.json": "820cdf53e28c548156565fb702625661",
"assets/images/three.jpeg": "649630c68b8b227670a5877f55fdfd66",
"assets/images/googleplay.png": "397a2ad42ea3673f9d961d9c20e6e479",
"assets/images/terapistin_logo.png": "f9206bb596a512857b77fa854846f5a0",
"assets/images/store.png": "f11ca73b49bb3c1bce257598d35a9e40",
"assets/images/appstore.png": "9f90c58b7f996ad56b2a19f8c1d542e9",
"assets/images/how2.png": "9650651380d4bc425f8bf3bd58d279dd",
"assets/images/how3.png": "205f04909b92d0746bb99876fddabdd0",
"assets/images/how1.png": "843c33788044a5805172e01de878ae7e",
"assets/images/scrollcontainer.png": "f9fa6b1c81604ee9eeea47424d68a653",
"assets/images/logo.png": "e7979fece199b70d9d80089f0e547526",
"assets/images/qr_code_apple.png": "e57c0666012c1a5a6f84c34aa44961e7",
"assets/images/twophones.png": "d31d6b67dbfb88e43e5868a052e6b9df",
"assets/images/t.png": "bb82821f797e9c56489d502127e21d92",
"assets/images/a.png": "4e75372d44ce37f5cf197e7b6e40fcd9",
"assets/images/scroll.png": "410ad3c81a1a15df89926e6933993943",
"assets/images/g.png": "adbd747a6591f8b655d54b6bd5847cfc",
"assets/AssetManifest.json": "a13f95c50b2ab325e337e7dfd1a57390",
"assets/NOTICES": "facccab89eca7f5f6fdff8246d11d10c",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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

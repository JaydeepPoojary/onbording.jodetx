'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "1c21a7ac9ec0bf7a11e88e595c0e3e4a",
"assets/AssetManifest.bin.json": "c23f8cf5dfde46524178893542770a24",
"assets/AssetManifest.json": "04c6568f304b590e1e9486abd97eb390",
"assets/assets/Jodetx_Wallpaper.jpg": "b083d0bd9401be2e768e3709c3bd80da",
"assets/assets/Jodetx_WallpaperTransparent.png": "8728789cb179479b01c1ea2f74ab9e9f",
"assets/assets/jode_logo.jpeg": "66450e71de5975cff1982467318ce5ba",
"assets/assets/pdf/AreaSalesManagerJD.pdf": "1cb6edc961aa71f655f786d722bf5852",
"assets/assets/pdf/full_stack_developer_jd.pdf": "a6201f5521233c226f114480f86de42e",
"assets/assets/pdf/Graphic_Motion_DesignerJD.pdf": "6aca59efaac2cbfd0b50b2a89f162850",
"assets/assets/pdf/JDBankAllianceManager.pdf": "6e6a19f748c3b627a11438da5a0c29ed",
"assets/assets/pdf/JDFORAccountant.pdf": "942b6a84c49397fbfd5138b1ef888e18",
"assets/assets/pdf/JDforDataentry.pdf": "17d5b815225d93a9e5a0ff004c67749a",
"assets/assets/pdf/JDFORMarketing.pdf": "e279628af5c2b9384d15314e2483db7c",
"assets/assets/pdf/JDFORRECEPTIONCUMADMIN.pdf": "a44b270678b9dd6266da5a9433d173d9",
"assets/assets/pdf/JDForSRHR.pdf": "e46559fc06061eeda50608fb8d945982",
"assets/assets/pdf/JDForTelesales.pdf": "30d4f37ed5606f210bc61f84440d0fed",
"assets/assets/pdf/JD_DBA_3YRS.pdf": "602029481ff310dfd2bd3d9de2bdc43a",
"assets/assets/pdf/JriOSNativeDeveloperSwift.pdf": "7c4266e41f1ccecf1cdb7b4d554a08c3",
"assets/assets/pdf/NESTJSPROPERJD.pdf": "04dc89ddd9dece7b89fba050d399ec9a",
"assets/assets/pdf/PringBootDeveloperJD.pdf": "0d1be5575b9b46a66c4b4dd1c9be3ad7",
"assets/assets/pdf/UI_UX_Designerjd.pdf": "8d30d424c529e0aa1ff7c25f9be774d2",
"assets/assets/sucess_lottie.json": "7d097e8f07dc9ffcabf43386abd41a5c",
"assets/assets/upload_photo.png": "88033080454ee3892631b42d321db0c3",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "8035f7c2a869fdfaca5e18f78f6434be",
"assets/NOTICES": "017a4a49e82df037f93bfdfaa5a7e3c9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "825e75415ebd366b740bb49659d7a5c6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "a5747f16340555b37963d4620c943eb8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "bf21cd8fd775a3c59fd53afdee39e0e6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "85cdb974aa27a6d69e76191c36116600",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"favicon-16x16.png": "7a2e1a6a53135c3f270effa15f0d0804",
"favicon-32x32.png": "7b7b6ae406037001717bf1e04a7d49ab",
"favicon.ico": "81fa5d4727fc354663b4e00160068512",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "d9fdcbeeb911eabb35b8c69a6c204981",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/jode_logo.jpeg": "66450e71de5975cff1982467318ce5ba",
"index.html": "671187ee86b7131b11a63df172ea5f2e",
"/": "671187ee86b7131b11a63df172ea5f2e",
"main.dart.js": "7abb83e55ccec61ea1d29c4313bc1cc2",
"manifest.json": "31bb1c831fd1e1cdf6252c336d4c3834",
"site.webmanifest": "053100cb84a50d2ae7f5492f7dd7f25e",
"version.json": "7351b7ece328a043574a0149fd6774e4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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

'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "fe90136c41632411001c5092b52f778e",
"assets/assets/AI_1.jpg": "7dccea65d7bac9e1def8811c8b366a0c",
"assets/assets/arara.png": "83df177eadbb784de04a6fe5f9062bbf",
"assets/assets/arvore.png": "7a7b2e8cdc2b79b3d5a7639052d0abf6",
"assets/assets/arvore2.png": "3dd39a80f9df92c4c885fdc38cf582fa",
"assets/assets/audios/10palavras.mp3": "d51b10ccee7f39916ea702ac971302e2",
"assets/assets/audios/4_palavras.mp3": "05a50eb6b5aa4d70f4451cb611a73c74",
"assets/assets/audios/aguacorrente-edited_v2.mp3": "43b19d83ad60fd4bce057690783df54b",
"assets/assets/audios/Chapeuzinho_Vermelho_cutted_smaller.mp3": "c926f7da9b8bd5737d0c16e6c3e22f73",
"assets/assets/audios/chuva_edited.mp3": "9605f524e60c150203a86342904098a7",
"assets/assets/cachorro.png": "50c15c0a75903a439e1ce41af68ff0bc",
"assets/assets/car.png": "abdbd173388aeb3d091f96efca9d3461",
"assets/assets/cat.png": "1fdfd10545981af84e29078e6fa3310b",
"assets/assets/coracao.png": "94ada24fba80e5433874cb237c4697ed",
"assets/assets/dog_app.png": "4a74624c6ad24a14a0be0951fedf6dd6",
"assets/assets/home_image-removebg.png": "f224159ac28f2d063cfdd97c2368ff1c",
"assets/assets/leao.png": "097d7f84d82a7efccf1622c68f4f79a5",
"assets/assets/motorcycle.png": "fc9328d4bb6b19403d0e56b386f705dc",
"assets/assets/numbers.json": "564e4b39bf9dec2a2577644c9a1a5858",
"assets/assets/number_sequence.json": "7bfe3bb2859948d9ef2785645acfec3f",
"assets/assets/paisagem_ponte.png": "3ac207a11e229e412a91159bd1784df8",
"assets/assets/pomba.png": "f9e10fa41083f2513dc5ef25fe3f91eb",
"assets/assets/teste_logica_1_0.jpg": "d7a461a349701d42955d210a1968cd51",
"assets/assets/teste_logica_1_a.jpg": "102ce6e2c905867a97987c66146ad0d8",
"assets/assets/teste_logica_1_b.jpg": "e4230a1c23a73ef0900a19a313818e88",
"assets/assets/teste_logica_1_c.jpg": "4c45f062149c8c053269512c8c80f84b",
"assets/assets/teste_logica_1_d.jpg": "12582a39f4af75fdb31de1722e055e7a",
"assets/assets/teste_logica_1_e.jpg": "d77289fb507beaf349575fde396f6f2f",
"assets/assets/teste_logica_1_f.jpg": "97ba6135b1cd2404fa9ad763d83998d6",
"assets/assets/teste_logica_2_0.jpg": "0e57fcede5b3ca11ebf78e730656de03",
"assets/assets/teste_logica_2_a.jpg": "e3729d1d870ee793aa9cee1ad616bf31",
"assets/assets/teste_logica_2_b.jpg": "e7ea60d2cd8bb612831fe6e69033c004",
"assets/assets/teste_logica_2_c.jpg": "d1c5c1a8164e58bc40c84a0b2e068458",
"assets/assets/teste_logica_2_d.jpg": "f9c654908e3c3e640859b5711d4cd3e8",
"assets/assets/teste_logica_2_e.jpg": "a5ccffe7864b9ce3ceebdbfd96b91da9",
"assets/assets/teste_logica_2_f.jpg": "fb123cd175064b6375a19d7acb9db121",
"assets/assets/teste_logica_3_0.jpg": "2de14c984470f03bdde11630963f5ca3",
"assets/assets/teste_logica_3_0_1.jpg": "6adfb08ee17484d5abcf55c200b84bad",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "2186ed494a370b423307ec9a2f8c284b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8c1d50cda84f7d25804dfe8a7239f6ba",
"/": "8c1d50cda84f7d25804dfe8a7239f6ba",
"main.dart.js": "0b52124ec6f30e8b477906048cbaa9cc",
"manifest.json": "dc9517e6323c386abd987665c1660516",
"version.json": "4496796f446470d8621888efe5a36414"
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

const CACHE_NAME = "recetas-pwa-v7";

const urlsToCache = [
  "./",
  "./index.html",
  "./receta.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./img/icon-192.png",
  "./img/icon-512.png",
  "./img/screenshot-mobile.png",
  "./img/screenshot-desktop.png",

  "./img/pancakes.jpg",
  "./img/huevos.jpg",
  "./img/ensalada.jpg",
  "./img/pasta.jpg",
  "./img/pollo.jpg",
  "./img/tacos.jpg",
  "./img/sopa.jpg",
  "./img/hamburguesa.jpg",
  "./img/pizza.jpg",
  "./img/arepa.jpg",
  "./img/batido.jpg",
  "./img/galletas.jpg",
  "./img/torta.jpg",
  "./img/flan.jpg",
  "./img/cupcakes.jpg",
  "./img/limonada.jpg",
  "./img/arroz.jpg",
  "./img/lasana.jpg",
  "./img/sandwich.jpg",
  "./img/mango.jpg"
];

// INSTALAR Y GUARDAR EN CACHÉ
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

// ACTIVAR Y BORRAR CACHÉ VIEJO
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// FETCH
self.addEventListener("fetch", event => {
  const requestUrl = new URL(event.request.url);

  // Solo manejar peticiones GET
  if (event.request.method !== "GET") return;

  // Ignorar extensiones de Chrome y otros esquemas no válidos
  if (requestUrl.protocol !== "http:" && requestUrl.protocol !== "https:") {
    return;
  }

  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        return response;
      }

      return fetch(event.request)
        .then(networkResponse => {
          // Solo guardar respuestas válidas del mismo origen o seguras
          if (
            !networkResponse ||
            networkResponse.status !== 200
          ) {
            return networkResponse;
          }

          const responseClone = networkResponse.clone();

          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseClone);
          });

          return networkResponse;
        })
        .catch(() => {
          if (event.request.mode === "navigate") {
            return caches.match("./index.html");
          }
        });
    })
  );
});
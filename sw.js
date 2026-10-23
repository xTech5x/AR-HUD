// Offline cache for the app shell. Map tiles and the camera model are fetched live.
const V = 'hud-v1';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './maplibre-gl.js', './maplibre-gl.css'];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(V).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== V).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin === location.origin) {
    // network first so updates arrive, cache as the offline fallback
    e.respondWith(fetch(req).then((res) => { const copy = res.clone(); caches.open(V).then((c) => c.put(req, copy)); return res; }).catch(() => caches.match(req)));
  } else if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(caches.open(V).then((c) => c.match(req).then((hit) => { const net = fetch(req).then((res) => { c.put(req, res.clone()); return res; }).catch(() => hit); return hit || net; })));
  }
});

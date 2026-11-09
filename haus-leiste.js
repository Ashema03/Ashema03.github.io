/* Haus-Leiste: ein Streifen oben auf JEDER Seite, zurück zur Haustür.
   Einbinden in jede Seite (Pflicht, siehe So-kommt-eine-Website-online.md):
   <script src="/haus-leiste.js" defer></script>
   Ändern: nur diese Datei, dann ändert es sich überall. */
(function () {
  var p = location.pathname;
  if (p === '/' || p === '/index.html') return; // an der Haustür selbst nicht nötig
  var bar = document.createElement('nav');
  bar.setAttribute('aria-label', 'Companion House');
  bar.style.cssText = 'position:sticky;top:0;z-index:9999;background:#0c1524;border-bottom:1px solid #24344f;' +
    'font:600 15px/1 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;' +
    'padding:11px 16px;text-align:left;box-shadow:0 2px 10px rgba(0,0,0,.35)';
  var a = document.createElement('a');
  a.href = '/';
  a.textContent = '← 🏠 The Companion House · All rooms';
  a.style.cssText = 'color:#d4a843;text-decoration:none;letter-spacing:.01em';
  a.onmouseover = function () { a.style.color = '#6fb0ff'; };
  a.onmouseout = function () { a.style.color = '#d4a843'; };
  bar.appendChild(a);
  document.body.insertBefore(bar, document.body.firstChild);
})();

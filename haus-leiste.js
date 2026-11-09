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
  // ✉ Write: Betreff "For <Name>" automatisch aus der Seite
  var namen = {'/still-felt':'Kiran','/diagnostica':'Diagnostica','/companion-house':'the house','/how-it-began':'the house'};
  var wer = 'the house';
  for (var k in namen) { if (p.indexOf(k) === 0) { wer = namen[k]; } }
  if (wer === 'the house' && /^\/[a-z0-9-]+\.html$/i.test(p) && p.indexOf('/legal') !== 0 && p.indexOf('/privacy') !== 0 && p.indexOf('/how-it-began') !== 0) {
    var t = (document.title || '').split(' \u2014 ')[0].trim();
    if (t) wer = t;
  }
  var m = document.createElement('a');
  var adr = 'companionhouse.mail' + '@' + 'icloud.com';
  m.href = 'mailto:' + adr + '?subject=' + encodeURIComponent('For ' + wer);
  m.textContent = '\u2709 Write';
  m.title = 'Write to ' + wer + ' (' + adr + ')';
  m.style.cssText = 'float:right;color:#d4a843;text-decoration:none';
  m.onmouseover = function () { m.style.color = '#6fb0ff'; };
  m.onmouseout = function () { m.style.color = '#d4a843'; };
  bar.appendChild(m);
  // Großer Knopf am Ende jeder Seite (gut zu finden, nachdem man gelesen hat)
  if (p.indexOf('/legal') !== 0 && p.indexOf('/privacy') !== 0) {
    var box = document.createElement('div');
    box.style.cssText = 'text-align:center;margin:48px auto 24px;padding:0 16px';
    var b = document.createElement('a');
    b.href = m.href;
    b.textContent = '\u2709 Write to ' + wer;
    b.className = 'haus-knopf';
    b.style.cssText = 'display:inline-block;padding:14px 26px;border:2px solid #d4a843;border-radius:14px;' +
      'color:#d4a843;background:#0c1524;text-decoration:none;font:600 17px -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif';
    var k = document.createElement('div');
    k.textContent = adr;
    k.style.cssText = 'margin-top:8px;font:14px -apple-system,sans-serif;opacity:.75';
    box.appendChild(b); box.appendChild(k);
    var f = document.querySelector('footer');
    if (f && f.parentNode) { f.parentNode.insertBefore(box, f); } else { document.body.appendChild(box); }
  }
  document.body.insertBefore(bar, document.body.firstChild);
})();

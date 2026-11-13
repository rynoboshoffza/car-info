(function () {
  var S = window.SITE || {};
  var b = document.body;
  var root = b.dataset.root || "";
  var modelSlug = b.dataset.model || "";
  var page = b.dataset.page || "";

  function fmt(iso) {
    try {
      return new Date(iso + "T12:00:00").toLocaleDateString("en-ZA", { day: "numeric", month: "long", year: "numeric" });
    } catch (e) { return iso; }
  }
  var updated = fmt(S.lastUpdated);
  var model = (S.models || []).filter(function (m) { return m.slug === modelSlug; })[0];

  /* header */
  var h = '<header class="site-header"><div class="wrap bar">' +
    '<a class="brand" href="' + root + 'index.html"><i></i>' + S.name + '</a>' +
    '<span class="updated hd" title="Chat messages covered: ' + S.chatCovered + '">Updated ' + updated + '</span>' +
    '<nav class="nav">' +
    '<a href="' + root + 'index.html#models"' + (page === "home" ? ' aria-current="page"' : "") + '>Models</a>' +
    '<a href="' + root + 'links.html"' + (page === "links" ? ' aria-current="page"' : "") + '>Links</a>' +
    (S.whatsappUrl ? '<a href="' + S.whatsappUrl + '" target="_blank" rel="noopener">Join group</a>' : "") +
    '</nav></div>';
  if (model) {
    h += '<div class="subnav"><div class="wrap">' +
      '<a href="' + root + model.slug + '/index.html"' + (page === "overview" ? ' aria-current="page"' : "") + '>' + model.name + '</a>' +
      model.pages.map(function (p) {
        return '<a class="' + (p.hot ? "hot" : "") + '" href="' + root + model.slug + '/' + p.slug + '.html"' +
          (page === p.slug ? ' aria-current="page"' : "") + '>' + p.title + '</a>';
      }).join("") + '</div></div>';
  }
  h += '</header>';
  b.insertAdjacentHTML("afterbegin", h);

  /* footer */
  b.insertAdjacentHTML("beforeend",
    '<footer class="site-footer"><div class="wrap"><div class="row">' +
    '<div><strong>' + S.name + '</strong><br>' + S.tagline + '.<br>Not affiliated with Chery or any dealer group.</div>' +
    '<div>Last updated <strong>' + updated + '</strong><br>Chat messages covered: ' + S.chatCovered +
    (S.whatsappUrl ? '<br><a href="' + S.whatsappUrl + '" target="_blank" rel="noopener">Join the WhatsApp group →</a>' : "") + '</div>' +
    '</div><p class="small" style="margin-top:18px">Compiled from a private WhatsApp owners\' group. Content is owner opinion and experience, not verified fact, and is anonymised. Always confirm with your dealer, the manufacturer or a qualified professional (especially electrical work).</p></div></footer>');

  /* WhatsApp buttons: filled from site-data.js, removed if no link is set */
  document.querySelectorAll("[data-wa]").forEach(function (el) {
    if (S.whatsappUrl) { el.href = S.whatsappUrl; el.target = "_blank"; el.rel = "noopener"; }
    else { el.remove(); }
  });

  /* home: model cards + changelog */
  var mg = document.getElementById("model-grid");
  if (mg) {
    mg.innerHTML = (S.models || []).map(function (m) {
      return '<a class="card" href="' + root + m.slug + '/index.html"><h3>' + m.name + '</h3><p class="muted">' + m.tagline + '</p><span class="arrow">Open →</span></a>';
    }).join("") + '<div class="card" style="border-style:dashed"><h3>More models</h3><p class="muted">Each car gets its own section. More will be added as owner groups are processed.</p></div>';
  }
  var cl = document.getElementById("changelog");
  if (cl) {
    cl.innerHTML = (S.changelog || []).map(function (c) {
      return '<li><time>' + fmt(c.date) + '</time><span>' + c.text + '</span></li>';
    }).join("");
  }

  /* dealer filter */
  var chips = document.querySelectorAll("[data-filter]");
  if (chips.length) {
    var items = document.querySelectorAll("[data-region]");
    chips.forEach(function (c) {
      c.addEventListener("click", function () {
        chips.forEach(function (x) { x.setAttribute("aria-pressed", x === c ? "true" : "false"); });
        var f = c.dataset.filter;
        items.forEach(function (i) { i.style.display = (f === "all" || i.dataset.region === f) ? "" : "none"; });
      });
    });
  }
})();

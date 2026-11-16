(function () {
  var S = window.SITE || {};
  var b = document.body;
  var page = b.dataset.page || "";
  var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  function fmt(iso) {
    var m = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}:\d{2})$/.exec(iso || "");
    if (!m) return iso || "";
    return parseInt(m[3], 10) + " " + MONTHS[parseInt(m[2], 10) - 1] + " " + m[1] + ", " + m[4];
  }

  var h = '<header class="site-header"><div class="wrap bar">' +
    '<a class="brand" href="index.html"><i></i>' + S.name + '</a>' +
    '<div class="right">' +
    (S.whatsappUrl ? '<a class="join" href="' + S.whatsappUrl + '" target="_blank" rel="noopener">Join WhatsApp group</a>' : "") +
    '</div></div>' +
    '<nav class="tabs" aria-label="Sections"><div class="wrap">' +
    (S.tabs || []).map(function (t) {
      return '<a href="' + t.href + '"' + (t.id === page ? ' aria-current="page"' : "") + '>' + t.title + '</a>';
    }).join("") + '</div></nav></header>';
  b.insertAdjacentHTML("afterbegin", h);

  b.insertAdjacentHTML("beforeend",
    '<footer class="site-footer"><div class="wrap">' +
    '<p>Last message processed: <strong>' + fmt(S.lastMessage) + '</strong></p>' +
    '<p>Unofficial and not affiliated with Chery. Compiled from a private owners\' WhatsApp group: owner reports and opinion, not verified fact. Dealers, staff and members are not named. Confirm with your dealer or a qualified professional, especially for electrical work.</p>' +
    '</div></footer>');

  var active = document.querySelector('.tabs a[aria-current]');
  if (active && active.scrollIntoView) { try { active.scrollIntoView({ inline: "center", block: "nearest" }); } catch (e) {} }
})();

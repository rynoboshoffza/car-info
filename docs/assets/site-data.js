/* Single source of truth for the footer timestamp, tabs and WhatsApp link.
   Edit this file whenever a new chat export is processed (see UPDATING.md). */
window.SITE = {
  name: "Chery Q Owner Notes",

  /* Timestamp of the LAST MESSAGE processed from the chat export (local time, as shown in the export). Shown in the footer only. */
  lastMessage: "2026-11-16T08:47",

  /* >>> PASTE YOUR WHATSAPP GROUP INVITE LINK BETWEEN THE QUOTES (e.g. "https://chat.whatsapp.com/XXXXXXXX").
     It shows once, as the "Join WhatsApp group" button in the header. Empty = button hidden. */
  whatsappUrl: "https://chat.whatsapp.com/GIdZQZGjHSlC2tlheNOUVE",

  tabs: [
    { href: "index.html", id: "overview", title: "Overview" },
    { href: "dealer-truths.html", id: "dealer-truths", title: "Dealer truths" },
    { href: "charging.html", id: "charging", title: "Charging" },
    { href: "providers.html", id: "providers", title: "Providers" },
    { href: "conflicts.html", id: "conflicts", title: "Conflicting info" },
    { href: "stock-shipping.html", id: "stock-shipping", title: "Stock & shipping" },
    { href: "tyres-wheels.html", id: "tyres-wheels", title: "Tyres & wheels" },
    { href: "tips.html", id: "tips", title: "Tips" },
    { href: "known-issues.html", id: "known-issues", title: "Issues & questions" }
  ]
};

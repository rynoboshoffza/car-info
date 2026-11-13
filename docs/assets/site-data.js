/* Single source of truth for the "last updated" stamp, the model registry and the changelog.
   Edit this file whenever a new chat export is processed (see UPDATING.md). */
window.SITE = {
  name: "Owner Notes",
  tagline: "Unofficial, owner-sourced notes for cars in South Africa",
  lastUpdated: "2026-11-13",
  chatCovered: "11 – 13 Nov 2026",
  /* >>> PASTE YOUR WHATSAPP GROUP INVITE LINK BETWEEN THE QUOTES (e.g. "https://chat.whatsapp.com/XXXXXXXX").
     While empty, every "Join the group" button/link on the site is hidden automatically. */
  whatsappUrl: "https://chat.whatsapp.com/GIdZQZGjHSlC2tlheNOUVE",
  models: [
    {
      slug: "chery-q",
      name: "Chery Q",
      tagline: "Compact electric hatch (Comfort & Elite). Dealer realities, charging, tyres, quirks.",
      pages: [
        { slug: "dealer-truths", title: "What the dealer doesn't tell you", hot: true },
        { slug: "dealers", title: "Dealer experiences" },
        { slug: "charging", title: "Charging" },
        { slug: "stock-shipping", title: "Stock & shipping" },
        { slug: "tips", title: "Tips & hidden features" },
        { slug: "tyres-wheels", title: "Tyres & wheels" },
        { slug: "known-issues", title: "Issues & open questions" }
      ]
    }
  ],
  changelog: [
    { date: "2026-11-13", text: "Site launched from the first chat export (11–13 Nov 2026): dealer truths, charging, stock & shipping, tips, tyres, open questions." }
  ]
};

// Session restore.
user_pref("browser.startup.page", 3); //102

// Disable RFP.
user_pref("privacy.resistFingerprinting", false); // 4501
user_pref("privacy.resistFingerprinting.letterboxing", false); // 4504 [pointless if not using RFP]
user_pref("webgl.disabled", false); // 4520 [mostly pointless if not using RFP]

// DNS over HTTPS.
user_pref("network.trr.mode", 3);
user_pref("network.trr.bootstrapAddr", "172.64.41.4");
user_pref("network.trr.url", "https://mozilla.cloudflare-dns.com/dns-query");
user_pref(
  "network.trr.custom_uri",
  "https://mozilla.cloudflare-dns.com/dns-query"
);

// Don't reset everything on close.
user_pref("privacy.sanitize.sanitizeOnShutdown", false);

user_pref("browser.formfill.enable", true);
user_pref("browser.search.suggest.enabled", true);
user_pref("browser.urlbar.suggest.searches", true);
user_pref("browser.newtabpage.enabled", true);

// Easier sign-in and such.
user_pref("signon.autofillForms", true);
user_pref("signon.formlessCapture.enabled", true);
user_pref("network.http.windows-sso.enabled", true);

//user_pref("browser.cache.disk.enable", true);
user_pref("toolkit.winRegisterApplicationRestart", true);

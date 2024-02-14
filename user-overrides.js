user_pref("browser.startup.page", 3); //102
user_pref("privacy.clearOnShutdown.history", false); // 2811

user_pref("privacy.resistFingerprinting", false); // 4501
user_pref("privacy.resistFingerprinting.letterboxing", false); // 4504 [pointless if not using RFP]
user_pref("webgl.disabled", false); // 4520 [mostly pointless if not using RFP]

user_pref("network.trr.mode", 3);
user_pref("network.trr.bootstrapAddr", "172.64.41.4");
user_pref("network.trr.url", "https://mozilla.cloudflare-dns.com/dns-query");
user_pref(
  "network.trr.custom_uri",
  "https://mozilla.cloudflare-dns.com/dns-query"
);

user_pref("browser.formfill.enable", true);
user_pref("browser.search.suggest.enabled", true);
user_pref("browser.urlbar.suggest.searches", true);
user_pref("browser.newtabpage.enabled", true);

user_pref("signon.autofillForms", true);
user_pref("signon.formlessCapture.enabled", true);
user_pref("network.http.windows-sso.enabled", true);

user_pref("browser.cache.disk.enable", true);
user_pref("toolkit.winRegisterApplicationRestart", true);

user_pref("privacy.clearOnShutdown.formdata", false);
user_pref("privacy.clearOnShutdown.history", false);
user_pref("privacy.clearOnShutdown.sessions", false);
user_pref("privacy.clearOnShutdown.openWindows", false);
user_pref("privacy.clearOnShutdown.cookies", false);

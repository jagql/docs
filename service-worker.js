/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "3dc6002ba927b2d7e8700d5e26d8aa77"
  },
  {
    "url": "android-icon-144x144.png",
    "revision": "53ab2be2b1a2a61428728f9dd5774fbe"
  },
  {
    "url": "android-icon-192x192.png",
    "revision": "3fd7d81fa6d7245d493b5186a774e529"
  },
  {
    "url": "android-icon-36x36.png",
    "revision": "84a8b88def3b616b247cb34b2c9f071d"
  },
  {
    "url": "android-icon-48x48.png",
    "revision": "110c1528cae33601168fe8b0fdefa2a5"
  },
  {
    "url": "android-icon-72x72.png",
    "revision": "2bb7fc3627183d5f17e395856d861856"
  },
  {
    "url": "android-icon-96x96.png",
    "revision": "d621ff92518c40deb9a01fcbb353061e"
  },
  {
    "url": "apple-icon-114x114.png",
    "revision": "44b1af5e3202981f6f7c801bd68dd7be"
  },
  {
    "url": "apple-icon-120x120.png",
    "revision": "129454ce6bd07f094371a1c937ce3e8e"
  },
  {
    "url": "apple-icon-144x144.png",
    "revision": "53ab2be2b1a2a61428728f9dd5774fbe"
  },
  {
    "url": "apple-icon-152x152.png",
    "revision": "5fb8e0fa5b6a02a0ea6203ec046b0e31"
  },
  {
    "url": "apple-icon-180x180.png",
    "revision": "70452fd22eca7279c6b55d31d7847f39"
  },
  {
    "url": "apple-icon-57x57.png",
    "revision": "1c6b546a2080fae5e1aa9ccf81ef607e"
  },
  {
    "url": "apple-icon-60x60.png",
    "revision": "d4736c378d517d722e5bc4f8a8fa8385"
  },
  {
    "url": "apple-icon-72x72.png",
    "revision": "2bb7fc3627183d5f17e395856d861856"
  },
  {
    "url": "apple-icon-76x76.png",
    "revision": "9e52efe0956bf68de0cab187f5853c84"
  },
  {
    "url": "apple-icon-precomposed.png",
    "revision": "b6e4c36947f1fe9ed1dae04706c9be37"
  },
  {
    "url": "apple-icon.png",
    "revision": "b6e4c36947f1fe9ed1dae04706c9be37"
  },
  {
    "url": "assets/css/0.styles.36bac4b5.css",
    "revision": "df2dfeebcc15f739134b11bb270eb492"
  },
  {
    "url": "assets/img/graphiql_default.df63f241.png",
    "revision": "df63f24155fdfcabed9a0d8da3f7567a"
  },
  {
    "url": "assets/img/graphiql_toolbox.e236696c.png",
    "revision": "e236696cb7e3ee5981afc90a6f0b8f1c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/swaggerui.5de438f0.png",
    "revision": "5de438f0971575dd0bab1303e279a810"
  },
  {
    "url": "assets/js/10.669f7a14.js",
    "revision": "8a0211fc5683e761d41d101e3fc48887"
  },
  {
    "url": "assets/js/11.0a9685d2.js",
    "revision": "eb661ecfef8b74dd6ede352f204b68b5"
  },
  {
    "url": "assets/js/12.57331711.js",
    "revision": "5f437c4c6c652af1b133e118a5867aeb"
  },
  {
    "url": "assets/js/13.04813cb7.js",
    "revision": "765ff345d40df8d212754ec83fa9929d"
  },
  {
    "url": "assets/js/14.1d5035c4.js",
    "revision": "018a824f196af1add28d6dc9ab7d60d4"
  },
  {
    "url": "assets/js/15.4e8e3905.js",
    "revision": "d830ca96e3641e482a38ecb7d8c6ace2"
  },
  {
    "url": "assets/js/16.e21d6992.js",
    "revision": "31bffc6d04add79bddfef7d7aefbaa0e"
  },
  {
    "url": "assets/js/17.3a05acca.js",
    "revision": "bf4d4d05e0f5016bae8e7490e0ebede7"
  },
  {
    "url": "assets/js/18.69c1a0d6.js",
    "revision": "7bdabf20344f1b5b2d8715bf743fde0b"
  },
  {
    "url": "assets/js/19.d9ea053b.js",
    "revision": "3653a8a722aeccf6d8dd3adc1516b2ab"
  },
  {
    "url": "assets/js/2.234811cb.js",
    "revision": "5d2aac1927fa4fc49f00c1a4a19837c7"
  },
  {
    "url": "assets/js/3.411e8ccb.js",
    "revision": "c43394fc356b836ea0fdf1bae63566a9"
  },
  {
    "url": "assets/js/4.0a4bda91.js",
    "revision": "27a4ca7c1addd1ff6d55f95cbd93c331"
  },
  {
    "url": "assets/js/5.e036f854.js",
    "revision": "fe5fc66bc092b04fb75426c57c43a675"
  },
  {
    "url": "assets/js/6.ed731565.js",
    "revision": "1cd517df24a9b640d058a31a7dbcd2f5"
  },
  {
    "url": "assets/js/7.d4babf6a.js",
    "revision": "b377c6b0f7f08f984c25633823ad394f"
  },
  {
    "url": "assets/js/8.ea440736.js",
    "revision": "8cdbde4a0ab66662065cbdc7db8894d5"
  },
  {
    "url": "assets/js/9.74a9c92a.js",
    "revision": "611f534ace9ef0e13f47117010857635"
  },
  {
    "url": "assets/js/app.33f40098.js",
    "revision": "9e74d17e963a2bc6dd351bd8d9a7053e"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "d10782a784cb2a75287ce873d45ef962"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "626f413de9c18e0e57bd9baa6d8e2ffc"
  },
  {
    "url": "favicon-96x96.png",
    "revision": "d621ff92518c40deb9a01fcbb353061e"
  },
  {
    "url": "index.html",
    "revision": "d5ff8b7cb957bfaaa9ab7d63d9066480"
  },
  {
    "url": "jagql.svg",
    "revision": "1629ffdfa22502880c3acc1f8e57e7ee"
  },
  {
    "url": "ms-icon-144x144.png",
    "revision": "53ab2be2b1a2a61428728f9dd5774fbe"
  },
  {
    "url": "ms-icon-150x150.png",
    "revision": "9f133b702cbac2cf39babe4169f8f2a7"
  },
  {
    "url": "ms-icon-310x310.png",
    "revision": "4f5c93bdb65a78f876e41d0a24711a4f"
  },
  {
    "url": "ms-icon-70x70.png",
    "revision": "4ae460d14dedcbc0f8e3593234acfdd4"
  },
  {
    "url": "pages/apidocs/graphql.html",
    "revision": "d790d8bd7e20c585c88d5b80566f0f7d"
  },
  {
    "url": "pages/apidocs/swagger.html",
    "revision": "31f6024bbbed5bb953599b86140b5d53"
  },
  {
    "url": "pages/configuration.html",
    "revision": "872a0ac3dbce2ba00f06a64205b188bc"
  },
  {
    "url": "pages/debugging/logging.html",
    "revision": "8ced988e9318b3180a68b3f966f29ba0"
  },
  {
    "url": "pages/debugging/metrics.html",
    "revision": "62f8b830068612a8debfc686eeae6822"
  },
  {
    "url": "pages/further_reading/migrate_from_express.html",
    "revision": "edf6f4562fa8ba026cebdcfd8357acec"
  },
  {
    "url": "pages/getting-started.html",
    "revision": "7a98610c73636aa72b48a0b6623717a5"
  },
  {
    "url": "pages/index.html",
    "revision": "7a65d43e1418af6190a02ee175e31d7b"
  },
  {
    "url": "pages/project_setup/chain_handlers.html",
    "revision": "d61e3900298720a63ff9b5376ab973b9"
  },
  {
    "url": "pages/project_setup/handlers.html",
    "revision": "9210a04b65e0f90988b7f3ba1f3c4d3a"
  },
  {
    "url": "pages/project_setup/query_filter.html",
    "revision": "694715440c1dce7520bf1be2084baf9f"
  },
  {
    "url": "pages/project_setup/relationships.html",
    "revision": "455fa1b51659659563579b00db88e873"
  },
  {
    "url": "pages/project_setup/resources.html",
    "revision": "346a0a64a0ae201f7c9ea05bdbaf34c8"
  },
  {
    "url": "pages/project_setup/suggested_structure.html",
    "revision": "dcde98cd80af36895cace8be59b23fe7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

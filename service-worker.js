"use strict";var precacheConfig=[["/react-portfolio/index.html","139340f2cfe7cfafe5423a8523dfee4e"],["/react-portfolio/static/css/main.b2142204.css","653921a59c8c05b8e87115db9916c0de"],["/react-portfolio/static/js/main.c9418aef.js","dd570db88627a0f7ae0b3c88f440fac7"],["/react-portfolio/static/media/ajay.86a3b743.png","86a3b743de3fc092206f6b87f37e72d9"],["/react-portfolio/static/media/drone_dashboard1.e5f5e7b8.png","e5f5e7b87bd2b13af4ffe576636e07be"],["/react-portfolio/static/media/ehub1.b630f914.png","b630f9147ba5d7dfb86e8c62e3fb87db"],["/react-portfolio/static/media/ehub2.9b07a14b.png","9b07a14b8f5b45e5331a3c374b9f6005"],["/react-portfolio/static/media/ehub3.789e067f.png","789e067fa435b17dfe6631f8875f416a"],["/react-portfolio/static/media/ehub4.9bfa06eb.png","9bfa06eb4c8fd3363606d716bb5b4245"],["/react-portfolio/static/media/ehub5.5a026768.png","5a0267688110b8d0b94ea13b8fcea847"],["/react-portfolio/static/media/github.3959958a.svg","3959958a15f3512c7edb9f28e3707417"],["/react-portfolio/static/media/h2h1.e341cee3.png","e341cee369e732970921be964ded9eca"],["/react-portfolio/static/media/h2h2.cad6f551.png","cad6f551c9e5f0e45561f5164f83382f"],["/react-portfolio/static/media/jscript.6fba3f04.svg","6fba3f041c3f37c613bffe8758cfbfee"],["/react-portfolio/static/media/lineups.102f3cae.png","102f3cae8a2da28acccff11bba0d631d"],["/react-portfolio/static/media/linkedin.c038f0c0.svg","c038f0c00ba02871617ec020a95cf001"],["/react-portfolio/static/media/linux.683fd64c.svg","683fd64c73e6ccedb1018c43bfa8eba4"],["/react-portfolio/static/media/logo.5d5d9eef.svg","5d5d9eefa31e5e13a6610d9fa7a283bb"],["/react-portfolio/static/media/pcow1.ac455f9f.png","ac455f9f82d7534b46f247c876f2f393"],["/react-portfolio/static/media/pcow2.905e6a3e.png","905e6a3e3681e2baeb20027bd9db3c9c"],["/react-portfolio/static/media/pcow3.322dffb5.png","322dffb5c3aca583ea3f71b188627a2c"],["/react-portfolio/static/media/pcow4.c6d27ffc.png","c6d27ffcceb422b35b6473737ab63b6c"],["/react-portfolio/static/media/playerProfile1.cbf5cd80.png","cbf5cd80dbc52d51f3b5512d9062dfff"],["/react-portfolio/static/media/playerProfile2.64c9339b.png","64c9339bb3a7ab2b0f3cffaa0065ac3e"],["/react-portfolio/static/media/playerProfile3.b481b8cc.png","b481b8cc0baef0f884aafd4364c05ac7"],["/react-portfolio/static/media/playerProfile4.3f12ed57.png","3f12ed5729d62005f7534c21e6b264a6"],["/react-portfolio/static/media/python.5af59229.svg","5af5922920dc09718891fffa3e150b5d"],["/react-portfolio/static/media/toplist_carries.fe1f030d.png","fe1f030db5fc421847ab1c3c716341bb"],["/react-portfolio/static/media/toplist_carries_2.ec21966a.png","ec21966a688c4082713bc181b0612f32"],["/react-portfolio/static/media/toplist_tackles.f1aefecf.png","f1aefecf9365a15d9877ed1b86dff4f2"],["/react-portfolio/static/media/toplist_tackles2.641a029d.png","641a029d4ff541e347f1466c7933db3e"],["/react-portfolio/static/media/toplist_tackles3.b0375054.png","b0375054203a9f8ad59586fb0d5e887f"],["/react-portfolio/static/media/ultrasonic_dashboard.9f341408.jpg","9f3414088b0ce4c9286ba39216d395ad"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,c){var r=new URL(e);return c&&r.pathname.match(c)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),r=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),e=urlsToCacheKeys.has(a));var r="/react-portfolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});
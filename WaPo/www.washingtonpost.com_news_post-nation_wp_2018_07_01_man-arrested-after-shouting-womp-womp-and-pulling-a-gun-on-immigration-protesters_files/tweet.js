__twttrll([7],{201:function(e,t){function n(e){return r.test(e)}var r=/^(dark|light)$/;e.exports=n},206:function(e,t,n){function r(e){e.selectors({fullTimestampToLocalize:".long-permalink time",relativeTimestampToLocalize:".permalink time"}),e.after("prepForInsertion",function(e){var t=o(this.el);t&&(this.select(e,"fullTimestampToLocalize").forEach(function(e){var n=e.getAttribute("datetime"),r=n&&t.localTimeStamp(n);r&&(e.innerHTML=r)}),this.select(e,"relativeTimestampToLocalize").forEach(function(e){var n=e.getAttribute("datetime"),r=n&&t.timeAgo(n);r&&(e.innerHTML=r)}))}),e.define("updateRelativeTimestamps",function(){var e,t=o(this.el);if(t)return e=this.select("relativeTimestampToLocalize").reduce(function(e,n){var r=n.getAttribute("datetime"),i=r&&t.timeAgo(r);return i&&e.push(function(){n.innerHTML=i}),e},[]),i.all(e.map(a.write))}),e.after("render",function(){var e=this;s.setInterval(function(){e.updateRelativeTimestamps()},d)})}var i=n(2),a=n(37),s=n(7),o=n(207),d=6e4;e.exports=r},207:function(e,t,n){function r(e){return new a(i.compact({months:(e.getAttribute("data-dt-months")||"").split("|"),phrases:{AM:e.getAttribute("data-dt-am"),PM:e.getAttribute("data-dt-pm"),now:e.getAttribute("data-dt-now"),s:e.getAttribute("data-dt-s"),m:e.getAttribute("data-dt-m"),h:e.getAttribute("data-dt-h"),second:e.getAttribute("data-dt-second"),seconds:e.getAttribute("data-dt-seconds"),minute:e.getAttribute("data-dt-minute"),minutes:e.getAttribute("data-dt-minutes"),hour:e.getAttribute("data-dt-hour"),hours:e.getAttribute("data-dt-hours")},formats:{full:e.getAttribute("data-dt-full"),explicit:e.getAttribute("data-dt-explicit-timestamp"),abbr:e.getAttribute("data-dt-abbr"),shortdate:e.getAttribute("data-dt-short"),longdate:e.getAttribute("data-dt-long")}}))}var i=n(12),a=n(208);e.exports=r},208:function(e,t){function n(e){return e<10?"0"+e:e}function r(e){function t(e,t){return i&&i[e]&&(e=i[e]),e.replace(/%\{([\w_]+)\}/g,function(e,n){return void 0!==t[n]?t[n]:e})}var i=e&&e.phrases,a=e&&e.months||o,s=e&&e.formats||d;this.timeAgo=function(e){var n,i,o,d=r.parseDate(e),p=+new Date,m=p-d;return d?isNaN(m)||m<2*c?t("now"):m<u?(n=Math.floor(m/c),t(s.abbr,{number:n,symbol:t(f,{abbr:t("s"),expanded:t(n>1?"seconds":"second")})})):m<l?(n=Math.floor(m/u),t(s.abbr,{number:n,symbol:t(f,{abbr:t("m"),expanded:t(n>1?"minutes":"minute")})})):m<h?(n=Math.floor(m/l),t(s.abbr,{number:n,symbol:t(f,{abbr:t("h"),expanded:t(n>1?"hours":"hour")})})):m<365*h?t(s.shortdate,{day:d.getDate(),month:t(a[d.getMonth()])}):s.explicit&&(i=s.explicit.split(" - "),o=i[1])?o:t(s.longdate,{day:d.getDate(),month:t(a[d.getMonth()]),year:d.getFullYear().toString().slice(2)}):""},this.localTimeStamp=function(e){var i,o;return s.explicit?s.explicit:(i=r.parseDate(e),o=i&&i.getHours(),i?t(s.full,{day:i.getDate(),month:t(a[i.getMonth()]),year:i.getFullYear(),hours24:n(o),hours12:o<13?o?o:"12":o-12,minutes:n(i.getMinutes()),seconds:n(i.getSeconds()),amPm:t(o<12?"AM":"PM")}):"")}}var i=/(\d{4})-?(\d{2})-?(\d{2})T(\d{2}):?(\d{2}):?(\d{2})(Z|[+-]\d{2}:?\d{2})/,a=/[a-z]{3,4} ([a-z]{3}) (\d{1,2}) (\d{1,2}):(\d{2}):(\d{2}) ([+-]\d{2}:?\d{2}) (\d{4})/i,s=/^\d+$/,o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],d={abbr:"%{number}%{symbol}",shortdate:"%{day} %{month}",longdate:"%{day} %{month} %{year}",full:"%{hours12}:%{minutes} %{amPm} - %{day} %{month} %{year}"},c=1e3,u=60*c,l=60*u,h=24*l,f='<abbr title="%{expanded}">%{abbr}</abbr>';r.parseDate=function(e){var t,n,r=e||"",d=r.toString();return!!(t=function(){var e;return s.test(d)?parseInt(d,10):(e=d.match(a))?Date.UTC(e[7],o.indexOf(e[1]),e[2],e[3],e[4],e[5]):(e=d.match(i),e?Date.UTC(e[1],e[2]-1,e[3],e[4],e[5],e[6]):void 0)}())&&(n=new Date(t),!isNaN(n.getTime())&&n)},e.exports=r},209:function(e,t,n){function r(e){e.selectors({followButton:".follow-button"}),e.define("handleFollowButtonClick",function(e,t){var n=a.intentForFollowURL(t.href),r=s.asBoolean(t.getAttribute("data-age-gate"));r||i.open(n,this.sandbox.sandboxEl,e)}),e.after("render",function(){this.on("click","followButton",function(e,t){this.handleFollowButtonClick(e,t)})})}var i=n(24),a=n(25),s=n(27);e.exports=r},210:function(e,t,n){function r(e){e.selectors({mediaCard:".MediaCard",mediaCardNsfwDismissalTarget:".MediaCard-dismissNsfw"}),e.define("dismissNsfwWarning",function(e,t){var n=i.closest(this.selectors.mediaCard,t,this.el);n&&a.remove(n,"is-nsfw")}),e.after("render",function(){this.on("click","mediaCardNsfwDismissalTarget",this.dismissNsfwWarning)})}var i=n(22),a=n(21);e.exports=r},211:function(e,t,n){function r(e){function t(e){var t=e.createElement("div");return t.className="MediaCard-mediaAsset",t}function n(e){return h.url(e,m)}e.params({lang:{required:!0,transform:u.matchLanguage,fallback:"en"},videoPlayerBorderRadius:{fallback:{}},videoPlayerBranding:{fallback:!0}}),e.selectors({mediaAsset:".MediaCard-mediaAsset",cardInterstitial:".js-cardPlayerInterstitial",wvpInterstitial:".js-playableMediaInterstitial",sourceIdInfo:".js-tweetIdInfo"}),e.define("videoPlayerOptions",function(){var e=(this.scribeData()||{}).widget_origin,t=this.scribeNamespace()||{};return{addBranding:this.params.videoPlayerBranding,borderRadius:this.params.videoPlayerBorderRadius,languageCode:this.params.lang,widgetOrigin:e,autoPlay:!0,scribeContext:{page:t.page,client:t.client}}}),e.define("replaceInterstitialWithMedia",function(e,t){return p.all([this.restoreLastMediaInterstitial(),l.write(function(){i=e,a=e.parentNode,e.parentNode.replaceChild(t,e)})])}),e.define("restoreLastMediaInterstitial",function(){var e;return i&&a?(e=a.firstElementChild,f.remove(e),l.write(function(){a.replaceChild(i,e)})):p.resolve()}),e.define("playWebVideoPlayerMediaAsset",function(e,t){var n,r=c.closest(this.selectors.sourceIdInfo,t,this.el),i=r.getAttribute("data-tweet-id"),a=f.insertForTweet;return i||(i=r.getAttribute("data-event-id"),a=f.insertForEvent),i?(e.preventDefault(),n=this.selectOne(r,this.selectors.wvpInterstitial),this.getConsent(r,n).then(function(){this.displayWebVideoPlayerMediaAsset(r,i,a)}.bind(this))):p.reject(new Error("No source id found for player"))}),e.define("displayWebVideoPlayerMediaAsset",function(e,n,r){var i=this.selectOne(e,this.selectors.mediaAsset),a=t(this.sandbox),s=this.sandbox.createElement("div"),o=this.videoPlayerOptions();return s.className="wvp-player-container",a.appendChild(s),this.replaceInterstitialWithMedia(i,a).then(function(){return r.call(this,a,n,o)})}),e.define("displayIframeMediaAsset",function(e,r){var i,a,d=c.closest(this.selectors.mediaAsset,r,this.el),u=c.closest(this.selectors.cardInterstitial,r,this.el),h=u.getAttribute("data-player-src"),f=u.getAttribute("data-player-width"),m=u.getAttribute("data-player-height"),g=u.getAttribute("data-player-title");return h?(e.preventDefault(),h=n(h),i=t(this.sandbox),a=o({src:h,allowfullscreen:"true",width:f,height:m,title:g||""}),a.className="FilledIframe",i.appendChild(a),this.replaceInterstitialWithMedia(d,i).then(function(){a.focus(),l.write(function(){s.add(i,b),s.add(a,b)})})):p.reject(new Error("No Player frame source"))}),e.after("render",function(){var e=this.selectOne(this.selectors.wvpInterstitial);e&&s.remove(e,"u-hidden"),this.on("click","cardInterstitial",this.displayIframeMediaAsset),this.on("click","wvpInterstitial",this.playWebVideoPlayerMediaAsset)})}var i,a,s=n(21),o=n(46),d=n(92),c=n(22),u=n(98),l=n(37),h=n(26),f=n(150),p=n(2),m={autoplay:"1"},b="js-forceRedraw";e.exports=d.couple(n(212),r)},212:function(e,t,n){function r(e){e.selectors({cookieConsentButton:".js-cookieConsentButton",interstitial:".js-interstitial"}),e.define("getConsent",function(e,t){var n=this.selectOne(e,this.selectors.interstitial);return n?l.shouldObtainCookieConsent().catch(function(){return u.resolve(!0)}).then(function(e){var r,i;return e?(r=new s,i=function(){this.handleCookieConsentClick(t,n),r.resolve()}.bind(this),d.write(function(){this.scribe({component:"cookie_consent",action:"show"}),this.showConsentInterstitial(n,t),this.attachConsentListener(n,i)},this),r.promise):u.resolve()}.bind(this)):u.resolve()}),e.define("attachConsentListener",function(e,t){var n=this.selectOne(e,this.selectors.cookieConsentButton);n&&n.addEventListener("click",t,{once:!0})}),e.define("showConsentInterstitial",function(e,t){i.remove(e,"u-hidden"),t&&i.add(t,"is-backgrounded")}),e.define("hideConsentInterstitial",function(e,t){i.add(e,"u-hidden"),t&&i.remove(t,"is-backgrounded")}),e.define("setCookieConsentCookie",function(){return a.request(o.cookieConsent()).catch(function(e){throw new Error("CORS request failed: "+e)})}),e.define("handleCookieConsentClick",function(e,t){return c.allSettled([d.write(this.hideConsentInterstitial.bind(this,t,e)),this.setCookieConsentCookie()])})}var i=n(21),a=n(213),s=n(1),o=n(78),d=n(37),c=n(34),u=n(2),l=n(75);e.exports=r},213:function(e,t,n){function r(e,t){var n,r;return t=h.aug({},p,t||{}),n=l.url(e,t.params),r=f.fetch,r?r(n,t).catch(function(){return d.reject(b.NETWORK_ERROR)}).then(function(e){if(t.isSuccess(e.status))return e.text().then(function(t){var n=e.headers.get("content-type");return t&&h.contains(n,m.JSON)?u.parse(t):t});throw new Error("Request failed with status: "+e.status)}):i(n,t)}function i(e,t){function n(){var e=a?r.contentType:r.getResponseHeader("content-type"),n=h.contains(e,m.JSON)?s(r.responseText):r.responseText;a||t.isSuccess(r.status)?i.resolve(n):a||0!==r.status?i.reject(n):i.reject(b.NETWORK_ERROR)}var r,i=new o,a=c.ie9(),u=a?f.XDomainRequest:f.XMLHttpRequest;return u?(r=new u,r.onreadystatechange=function(){4===r.readyState&&n()},r.onload=n,r.onerror=function(){i.reject(b.REQUEST_FAILED)},r.onabort=function(){i.reject(b.REQUEST_ABORTED)},r.ontimeout=function(){i.reject(b.REQUEST_TIMED_OUT)},r.open(t.method,e),"include"===t.credentials&&(r.withCredentials=!0),r.setRequestHeader&&h.forIn(t.headers,function(e){r.setRequestHeader(e,t.headers[e])}),r.send(),i.promise):d.reject(b.NO_XHR)}function a(e){return e>=200&&e<300}function s(e){return e?u.parse(e):e}var o=n(1),d=n(2),c=n(8),u=n(53),l=n(26),h=n(12),f=n(7),p={method:"GET",params:{},headers:{},credentials:"include",isSuccess:a},m={JSON:"application/json",TEXT:"text/plain"},b={NO_XHR:new Error("No suitable XHR implementation available."),REQUEST_FAILED:new Error("XHR request failed."),REQUEST_ABORTED:new Error("XHR request aborted."),REQUEST_TIMED_OUT:new Error("XHR request timed out."),NETWORK_ERROR:new Error("Network error.")};e.exports={request:r,mimeTypes:m,errors:b}},215:function(e,t,n){function r(e){var t,n="",r=Math.floor(e/h);for(t=r;t>0;t--)n+="w"+t*h+" ";return n}function i(e){e.selectors({prerenderedCard:".PrerenderedCard",periscopeVideo:".PlayerCard--video",rootCardEl:".TwitterCard .CardContent > *:first-child"}),e.define("scribeCardShown",function(e){var t=2;this.scribe({component:"card",action:"shown"},{items:[{card_name:e.getAttribute("data-card-name")}]},t)}),e.define("resizeSandboxDueToCardChange",function(){return this.sandbox.matchHeightToContent()}),e.define("markCardElAsLoaded",function(e){function t(){r&&n.resizeSandboxDueToCardChange()}var n=this,r=!1;return this.select(e,"img").forEach(function(e){e.addEventListener("load",t,!1)}),this.scribeCardShown(e),s.write(function(){a.add(e,m)}).then(function(){r=!0,n.resizeSandboxDueToCardChange()})}),e.define("updateCardWidthConstraints",function(){var e=this;return c.all(this.select("prerenderedCard").map(function(t){var n=e.selectOne(t,"rootCardEl");return s.defer(function(){var e,i=0;d.ios()?(a.remove(t,b),i=o(t.parentElement).width,t.style.maxWidth=i+"px"):i=o(t.parentElement).width,e=r(i),n.setAttribute(f,e),a.add(t,b)}).then(function(){return e.resizeSandboxDueToCardChange()})}))}),e.define("setCardTheme",function(e){var t=this.selectOne(e,"rootCardEl");this.params.theme&&t.setAttribute(p,this.params.theme)}),e.after("prepForInsertion",function(e){var t=this,n=this.select(e,"prerenderedCard").reduce(function(e,t){var n=t.getAttribute("data-css");return n&&(e[n]=e[n]||[],e[n].push(t)),e},{});u.forIn(n,function(e,n){t.sandbox.prependStyleSheet(e).then(function(){n.forEach(function(e){t.setCardTheme(e),t.markCardElAsLoaded(e)})})})}),e.after("show",function(){var e;return d.anyIE()&&(e=this.selectOne("periscopeVideo"),e&&(e.style.display="none")),this.updateCardWidthConstraints()}),e.after("resize",function(){return this.updateCardWidthConstraints()})}var a=n(21),s=n(37),o=n(70),d=n(8),c=n(2),u=n(12),l=n(92),h=50,f="data-card-breakpoints",p="data-theme",m="is-loaded",b="is-constrainedByMaxWidth";e.exports=l.couple(n(105),i)},220:function(e,t){function n(e){return r.test(e)}var r=/^#(?:[a-f\d]{3}){1,2}$/i;e.exports=n},222:function(e,t,n){function r(e){return d.parseInt(e,16)}function i(e){return c.isType("string",e)?(e=e.replace(u,""),e+=3===e.length?e:""):null}function a(e,t){var n,a,s,o;if(e=i(e),t=t||0,e)return n=t<0?0:255,t=t<0?-Math.max(t,-1):Math.min(t,1),a=r(e.substring(0,2)),s=r(e.substring(2,4)),o=r(e.substring(4,6)),"#"+(16777216+65536*(Math.round((n-a)*t)+a)+256*(Math.round((n-s)*t)+s)+(Math.round((n-o)*t)+o)).toString(16).slice(1)}function s(e,t){return a(e,-t)}function o(e,t){return a(e,t)}var d=n(7),c=n(12),u=/^#/;e.exports={darken:s,lighten:o}},223:function(e,t,n){function r(e){e.after("render",function(){var e,t=this.sandbox.sandboxEl,n=t.tagName;if(a(t,"td "+n))return e=i.closest("td",t),this.sandbox.styleSelf({maxWidth:e.clientWidth+"px"})})}var i=n(22),a=n(23);e.exports=r},227:function(e,t,n){var r=n(92);e.exports=r.build([n(228),n(155),n(235),n(156),n(108),n(168),n(236),n(103),n(206),n(238),n(145),n(146),n(140),n(144),n(209),n(215),n(211),n(210),n(239),n(154),n(152),n(147),n(148),n(158),n(223),n(240)],{pageForAudienceImpression:"tweet",productName:"tweetembed",breakpoints:[350],videoPlayerBranding:!1,videoPlayerBorderRadius:{bottomRight:0,bottomLeft:0}})},228:function(e,t,n){function r(e){var t={item_ids:[],item_details:{}};return t.item_ids.push(e),t.item_details[e]={item_type:x.TWEET},t}function i(e,t){var n={item_ids:[],item_details:{},associations:{}};return n.item_ids.push(t),n.item_details[t]={item_type:x.TWEET},n.associations[w.CONVERSATION_ORIGIN]={association_id:e,association_type:x.TWEET},n}function a(e){e.params({tweetId:{required:!0,validate:p},id:{validate:p},lang:{required:!0,transform:m.matchLanguage,fallback:"en"},width:{required:!0,fallback:"500px",validate:f,transform:f},theme:{fallback:[h(d.val,d,"widgets:theme"),"light"],validate:g},hideCard:{fallback:!1,transform:c.asBoolean},hideThread:{fallback:!1,transform:c.asBoolean},partner:{fallback:h(d.val,d,"partner")}}),e.selectors({ancestorTweet:".EmbeddedTweet-ancestor .Tweet",subjectTweet:".EmbeddedTweet-tweet .Tweet"}),e.around("scribeItems",function(e){return u.aug(e(),r(this.params.tweetId))}),e.around("scribeNamespace",function(e){return u.aug(e(),{page:"tweet"})}),e.around("widgetDataAttributes",function(e){return u.aug({"tweet-id":this.params.tweetId},e())}),e.define("scribeImpressionForTweets",function(){var e=this.selectOne("subjectTweet"),t=this.selectOne("ancestorTweet"),n=e&&e.getAttribute("data-tweet-id"),a=t&&t.getAttribute("data-tweet-id");n&&this.scribe({section:"subject",component:"tweet",action:"results"},r(n)),n&&a&&this.scribe({section:"conversation",component:"tweet",action:"results"},i(n,a))}),e.override("hydrate",function(){function e(e){i.html=e}function t(e){return i.scribe({section:"subject",component:"rawembedcode",action:"no_result"},r(i.params.tweetId)),s.reject(e)}var n,i=this,a=b.getTimezoneOffset();return n={lang:this.params.lang,tz:a,hideCard:this.params.hideCard,hideThread:this.params.hideThread},v(this.params.tweetId,n).then(e,t)}),e.override("render",function(){var e=this;return this.el=this.sandbox.htmlToElement(this.html),this.el?(this.el.id=this.id,this.el.lang=this.params.lang,this.scribeImpressionForTweets(),s.all([this.sandbox.appendStyleSheet(o.tweet(this.params.lang,this.params.theme)),this.sandbox.styleSelf({maxWidth:T,width:this.params.width,minWidth:C,marginTop:E,marginBottom:E})]).then(function(){return e.prepForInsertion(e.el),e.sandbox.injectWidgetEl(e.el)})):s.reject(new Error("unable to render"))}),e.override("show",function(){var e=this.sandbox;return this.sandbox.makeVisible().then(function(){return e.matchHeightToContent()})}),e.last("resize",function(){return this.sandbox.matchHeightToContent()})}var s=n(2),o=n(97),d=n(42),c=n(27),u=n(12),l=n(92),h=n(15),f=n(139),p=n(102),m=n(98),b=n(137),g=n(201),v=n(229),w=n(234),x=n(110),C="220px",T="100%",E="10px";e.exports=l.couple(n(105),n(121),a)},229:function(e,t,n){function r(e,t,n){var r="";return t&&(r+="c"),n&&(r+="t"),r?e+"-"+r:e}function i(e,t){return t=t||{},e=r(e,t.hideCard,t.hideThread),c.timeout(u.isBucketed(),h).catch(function(e){return d.devError(e),null}).then(function(e){var t=l(o.tweetBatch());return e&&o.disableCDN(),a(t)}).then(function(n){var r=new s(n);return r.fetch(e,t.lang)})}var a=n(230),s=n(231),o=n(78),d=n(10),c=n(34),u=n(75),l=n(233),h=400;e.exports=i},230:function(e,t,n){function r(e,t){var n=t&&"object"==typeof t?t.bucket:t;return e+":"+n}function i(e){var t;return o.getExperiments().then(function(n){return 0===Object.keys(n).length?e:(t=Object.keys(n).map(function(e){return r(e,n[e])}).join(","),s.url(e,{features:t}))}).catch(function(){return a.devError("Could not load experiment settings"),e})}var a=n(10),s=n(26),o=n(75);e.exports=i},231:function(e,t,n){function r(e){return e.input.lang||b}function i(e,t){var n={ids:[],lang:e,tz:f.getTimezoneOffset()};return n=t.reduce(function(e,t){return e.ids.push(t.input.id),e},n),n.ids=n.ids.sort().join(","),n}function a(e,t){e.forEach(function(e){var n=t[e.input.id];n?e.taskDoneDeferred.resolve(n):e.taskDoneDeferred.reject(new Error("not found"))})}function s(e){e.forEach(function(e){e.taskDoneDeferred.reject(new Error("request failed"))})}function o(e,t){var n=l(t,r);p.forIn(n,function(t,n){var r=i(t,n),o=m(a,null,n),d=m(s,null,n);u.fetch(e,r,c).then(o,d)})}function d(e){this.requestQueue=new h(m(o,null,e))}var c=n(232),u=n(135),l=n(44),h=n(40),f=n(137),p=n(12),m=n(15),b="en";d.prototype.fetch=function(e,t){return this.requestQueue.add({id:e,lang:t})},e.exports=d},232:function(e,t){function n(e){return{success:!0,resp:e}}e.exports=n},233:function(e,t,n){function r(e){var t={};return t[a]=!0,i.url(e,t)}var i=n(26),a="next_version";e.exports=r},234:function(e,t){e.exports={CONVERSATION_ORIGIN:4}},235:function(e,t,n){function r(e){e.selectors({abScribingTarget:".js-aBScribingTarget"}),e.define("_getTargetedExperiments",function(){var e=this.select(this.selectors.abScribingTarget);return Object.keys(e.reduce(function(e,t){return t.getAttribute("data-experiment-keys").split(",").forEach(function(t){e[t]=!0}),e},{}))}),e.define("_isExperimentedEmbed",function(){var e;return a.getExperimentKeys().then(function(t){return 0!==t.length&&(e=this._getTargetedExperiments(),t.some(function(t){return s.contains(e,t)}))}.bind(this))}),e.around("scribe",function(e,t,n,r){return this._isExperimentedEmbed().then(function(i){return i||(n.unbucketed=!0),e(t,n,r)}).catch(function(){return e(t,n,r)})})}var i=n(92),a=n(75),s=n(12);e.exports=i.couple(n(105),r)},236:function(e,t,n){function r(e){e.selectors({abScribingMarker:".js-aBScribingTarget"}),e.define("scribeABImpression",function(e,t){var n=e.getAttribute("data-experiment-keys");n&&n.split(",").forEach(function(e){d[e]||(d[e]=!0,o.getExperiment(e).then(function(n){n.bucket&&i(e,n.bucket,n.version,t)}).catch(function(){}))})}),e.after("show",function(){var e=this.selectors.abScribingMarker,t=this.select(e);t.forEach(function(e){s.inViewportOnce(e,this.sandbox.sandboxEl,function(){this.scribeABImpression(e,this.scribeItems())}.bind(this))},this)})}var i=n(237),a=n(92),s=n(169),o=n(75),d={};e.exports=a.couple(n(105),r)},237:function(e,t,n){function r(e,t,n,r){i.scribe(a.formatClientEventNamespace({client:"tfw",page:"ddg",section:e,action:"experiment"}),{experiment_key:e,bucket:t,version:n,data:r},!0)}var i=n(43),a=n(52);e.exports=r},238:function(e,t,n){function r(e){return[c+"{color:"+e+";}",u+"{color:"+s.lighten(e,.2)+";}"].join("")}function i(e){e.params({linkColor:{fallback:d(a.val,a,"widgets:link-color"),validate:o}}),e.after("render",function(){this.params.linkColor&&this.sandbox.appendCss(r(this.params.linkColor))})}var a=n(42),s=n(222),o=n(220),d=n(15),c="a, a:visited",u="a:hover, a:focus, a:active";e.exports=i},239:function(e,t,n){function r(e){e.params({align:{required:!1},width:{required:!1},floatedWidth:{fallback:"350px",validate:i},centeredWidth:{fallback:"70%",validate:i}}),e.before("render",function(){var e,t,n,r,i=this.params.align;switch(i&&i.toLowerCase()){case"center":e=this.params.width||this.params.centeredWidth,t="auto",n="auto";break;case"left":e=this.params.width||this.params.floatedWidth,n="10px",r="left";break;case"right":e=this.params.width||this.params.floatedWidth,t="10px",r="right";break;default:return}return this.sandbox.styleSelf({width:e,marginLeft:t,marginRight:n,cssFloat:r})})}var i=n(102);e.exports=r},240:function(e,t,n){function r(e){e.selectors({images:"img"}),e.define("_imagesLoaded",function(){return i.all(this.select(this.selectors.images).map(s))}),e.after("show",function(){this._imagesLoaded().then(function(){a.reportImagesLoadForAWidget()})})}var i=n(2),a=n(241),s=n(243);e.exports=r},243:function(e,t,n){var r=n(1),i=3e4;e.exports=function(e){var t=new r;return e.complete?t.resolve(e):(e.addEventListener("load",function(){t.resolve(e)}),setTimeout(function(){t.reject(e)},i)),t.promise}}});
"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[5808],{97778:(e,r,t)=>{t.r(r),t.d(r,{EPISODE_SPONSORS_SHELF_TESTID:()=>j,EpisodeSponsorsWrapper:()=>h,SEE_ALL_EPISODE_SPONSORS_TESTID:()=>g,default:()=>D});var n=t(24255),o=(t(15970),t(93019),t(84196),t(27586),t(56110),t(79075),t(26870),t(33208),t(86978),t(98618),t(40905),t(79410),t(21105),t(72753),t(59496));t(47408),t(3726),t(2840);var s=t(41583),i=t(4637);function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}var c=(0,o.lazy)((function(){return t.e(464).then(t.bind(t,50464))}));function u(e){var r=e.fetchedEpisodeSponsorsData,t=e.fireTrackingEvent,u=e.numberOfSponsorsToDisplay,p=e.firedViewedEvents,f=e.version,d=e.reason,l=e.uri,b=function(e){var r=e.fetchedEpisodeSponsorsData,t=e.numberOfSponsorsToDisplay;return(0,o.useMemo)((function(){return{displayedEpisodeSponsorsData:r.slice(0,t)}}),[r,t])}({fetchedEpisodeSponsorsData:r,numberOfSponsorsToDisplay:u}),O=b.displayedEpisodeSponsorsData,v=(0,s.X)({displayedEpisodeSponsorsData:O,uri:l,reason:d}),y=(0,o.useMemo)((function(){return O.map((function(e,r){return(0,i.jsx)(c,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({fireTrackingEvent:t,firedViewedEvents:p,version:f,onClick:function(){return v({ui_navigate:O.map((function(e,t){var n=e.clickthrough;return r===t?n:""})),navigate_to_external_uri:O.map((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var o=t[1];return r===o}))})}},e),"".concat(e.metadata.lineitem_id,"-").concat(r))}))}),[O,t,p,f,v]);return{displayedEpisodeSponsorsData:O,displayedSponsors:y}}var p=t(72069),f=t(47018);var d=t(50680);t(81285);function l(e){var r,t=e.firedViewedEvents,n=(0,o.useRef)();return{firedViewedEvents:n.current=null!==(r=null!=t?t:n.current)&&void 0!==r?r:new Set}}function b(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function O(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?b(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function v(e){var r=e.uri,t=e.getEpisodeSponsors,n=e.fireTrackingEvent,s=e.numberOfSponsorsToDisplay,i=e.version,a=e.reason,c=(0,p.b)().state,b=function(e){var r=e.uri,t=e.episodeBase62Id;return(0,o.useMemo)((function(){var e=(0,f.EC)(r),n=t||(null==e?void 0:e.id);return{uri:(0,f.YD)(n).toURI(),episodeBase62Id:n}}),[r,t])}(O(O({},null==c?void 0:c[p.H]),{},{uri:r})),v=(0,d.m)(O(O(O({},c),b),{},{getEpisodeSponsors:t,version:i})).fetchedEpisodeSponsorsData,y=l(O({},null==c?void 0:c[p.H])).firedViewedEvents,S=u(O({fetchedEpisodeSponsorsData:v,fireTrackingEvent:n,numberOfSponsorsToDisplay:s,firedViewedEvents:y,version:i,reason:a},b));return O(O(O({},b),{},{fetchedEpisodeSponsorsData:v},S),{},{firedViewedEvents:y,reason:a})}function y(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function S(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?y(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var E=(0,o.lazy)((function(){return t.e(2579).then(t.bind(t,12579))})),j="episode-sponsors-shelf",g="see-all-episode-sponsors";function h(e){var r,t={numberOfSponsorsToDisplay:void 0===(r=e.numberOfSponsorsToDisplay)?3:r}.numberOfSponsorsToDisplay,n=v(S(S({},e),{},{numberOfSponsorsToDisplay:t}));return n.episodeBase62Id&&n.displayedSponsors.length?(0,i.jsx)(o.Suspense,{fallback:!0,children:(0,i.jsx)(E,S(S({},e),{},{numberOfSponsorsToDisplay:t,state:n}))}):null}const D=h},50680:(e,r,t)=>{t.d(r,{F:()=>p,m:()=>f});var n=t(88769),o=t(14942),s=t(26533),i=t.n(s),a=(t(43316),t(73630),t(15970),t(93019),t(84196),t(27586),t(56110),t(59496)),c=t(17657),u=t(48192),p=420;function f(e){var r=e.episodeBase62Id,s=e.getEpisodeSponsors,f=e.fetchedEpisodeSponsorsData,d=void 0===f?[]:f,l=e.version,b=(0,a.useState)(d),O=(0,o.Z)(b,2),v=O[0],y=O[1],S=(0,a.useCallback)((0,n.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,r){e.next=3;break}throw new Error("episodeBase62Id is required to fetch episode sponsors");case 3:if(null==s){e.next=7;break}e.t0=s,e.next=10;break;case 7:return e.next=9,Promise.resolve().then(t.bind(t,73642));case 9:e.t0=e.sent.getEpisodeSponsors;case 10:return n=e.t0,e.t1=y,e.next=14,n(r,{version:l});case 14:e.t2=e.sent,(0,e.t1)(e.t2),e.next=21;break;case 18:e.prev=18,e.t3=e.catch(0),y([]);case 21:case"end":return e.stop()}}),e,null,[[0,18]])}))),[r,s,l]),E=(0,c.y1)(S,p);(0,a.useEffect)((function(){d.length||E()}),[E,d.length]);var j=(0,a.useCallback)((function(){return{effectCallback:E}}),[E]);return(0,u.H)(j),{fetchedEpisodeSponsorsData:v}}},41583:(e,r,t)=>{t.d(r,{X:()=>f});var n=t(24255),o=t(88769),s=t(26533),i=t.n(s),a=(t(15970),t(93019),t(84196),t(27586),t(56110),t(47408),t(79075),t(26870),t(33208),t(86978),t(98618),t(40905),t(79410),t(21105),t(72753),t(59496)),c=t(99644);function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function f(e){var r=e.uri,n=e.reason,s=e.displayedEpisodeSponsorsData,u=(0,c.s4)(),f=(0,a.useCallback)(function(){var e=(0,o.Z)(i().mark((function e(o){var a,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(1814).then(t.bind(t,21301));case 2:return a=e.sent,c=a.createPodcastAdCtaCardEvent,e.abrupt("return",u.send(c(p({uri:r,reason:n,lineitem_id:s.map((function(e){return e.metadata.lineitemId}))},o))));case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),[r,s,n,u]);return(0,a.useEffect)((function(){f()}),[f]),f}},48192:(e,r,t)=>{t.d(r,{H:()=>u});t(89004);var n=t(59496),o=t(83055),s=t(85388),i=t(75693),a=t(64384),c=t(72104);function u(e){var r=(0,o.W6)(s.oF),t=(0,a.Y)((function(e){var r,t,n=null!==(r=null==e?void 0:e.item)&&void 0!==r?r:void 0;return(0,c.k6)(n)&&n.isPodcastAd&&null!==(t=n.id)&&void 0!==t?t:void 0})),u=(0,i.D)(t);(0,n.useEffect)((function(){var n=e(),o=n.effectCallback,s=n.destructor;return t!==u&&Boolean(t)&&setTimeout(o,r),s}),[e,t,u,r])}}}]);
//# sourceMappingURL=5808.js.map
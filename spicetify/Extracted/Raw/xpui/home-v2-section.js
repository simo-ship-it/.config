"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[5070],{40208:(e,n,t)=>{t.r(n),t.d(n,{SKELETON_CARDS_COUNT:()=>A,default:()=>N});var a=t(84875),i=t.n(a),r=t(83055),o=t(22056),s=t(86417),c=t(27293),l=t(71379),d=t(99350),u=t(67505),g=t(23731),h=(t(47408),t(47807)),m=t(37875),f=t(4637),v=function(e){var n,t,a=e.section;return(0,f.jsx)(h.q,{pageId:a.uri,title:null!==(n=null===(t=a.data.title)||void 0===t?void 0:t.text)&&void 0!==n?n:"",showAll:!0,index:0,id:a.uri,children:a.sectionItems.items.map(m.x)})},x=t(67654),j=function(e){var n,t=e.section;switch(null===(n=t.data)||void 0===n?void 0:n.__typename){case"HomeGenericSectionData":return(0,f.jsx)(v,{section:(0,x.f)(t,t.data)});case"HomeShortsSectionData":case"HomeRecentlyPlayedSectionData":case"HomeFeedBaselineSectionData":case"HomeNativeAdsSectionData":case"HomeOnboardingSectionData":case null:case void 0:case"HomeFeatureActivationSectionData":return null;default:return(0,g._)(t.data),null}},S=t(46220),p=(t(15970),t(93019),t(56110),t(59496)),_=t(76027),y=t(23940),H=(0,p.memo)((function(e){var n=e.cardCount;return(0,f.jsx)(y.X,{isLoading:!0,showAll:!0,children:(0,S.Z)(new Array(n).keys()).map((function(e,n){return(0,f.jsx)(_.A,{isLoading:!0},n)}))})})),w=t(74977),D=t(85388),b=t(18237),A=10,C=function(e){var n=e.uri,t=(0,u.xf)({uri:n,timeZone:(0,w.L7)()},{cacheTime:w.us,staleTime:w.fS}),a=t.data,r=t.error;if(t.loading)return(0,f.jsx)("section",{"data-testid":"home-page",children:(0,f.jsx)("div",{className:b.Z.home,children:(0,f.jsx)("div",{className:i()(b.Z.content,"contentSpacing"),children:(0,f.jsx)(H,{cardCount:A})})})});if(null!==r)return(0,f.jsx)(c.h,{hasError:!0,errorMessage:o.ag.get("error.generic")});var s=null==a?void 0:a.homeSections;if("HomeSectionCollection"!==(null==s?void 0:s.__typename)||0===s.sections.length)return(0,f.jsx)(c.h,{hasError:!0,errorMessage:o.ag.get("error.generic")});var l=s.sections[0];return"HomeSection"!==l.__typename?(0,f.jsx)(c.h,{hasError:!0,errorMessage:o.ag.get("error.generic")}):(0,f.jsx)("section",{"data-testid":"home-section-page",children:(0,f.jsx)("div",{className:b.Z.home,children:(0,f.jsx)("div",{className:i()(b.Z.content,"contentSpacing"),children:(0,f.jsx)(j,{section:l})})})})};const N=function(e){var n=e.uri,t=(0,r.W6)(D.yg),a=(0,d.S)(t);return(0,f.jsxs)(l.q,{config:a,children:[(0,f.jsx)(s.$,{children:o.ag.get("page.generic-title")}),(0,f.jsx)(C,{uri:n})]})}}}]);
//# sourceMappingURL=home-v2-section.js.map
"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[7553],{4263:(e,t,n)=>{n.d(t,{u:()=>y});var a=n(24255),r=n(59496),i=n(84875),l=n.n(i),o=n(6042),s=n(58844),c=n(49990),u=n(93711);const d="FvfvGU3jvHRskUU9v9_8",f="Q9AlbZn2EGzy3MTWXa8X",g="mxmxS0y8LiwSs5nueKPT",m="GXxVAveNFStY3pBI_NO4",h="eHcXC2s97InYP7rMNT0H";var p=n(4637),y=(0,r.memo)((function(e){var t=e.children,n=e.message,r=e.title,i=e.linkTitle,y=e.linkTo,x=e.onClick,v=e.renderInline,j=void 0!==v&&v,b=(0,c.e)(),k=b.isXSOnly,w=b.isSMOnly,D=k||w;return(0,p.jsxs)("section",{className:l()(d,(0,a.Z)({},f,j)),children:[t,(0,p.jsx)(o.D,{as:"h1",variant:D?"cello":"alto",className:m,children:r}),(0,p.jsx)(o.D,{variant:D?"mesto":"ballad",className:h,children:n}),i&&(y||x)&&(0,p.jsx)(s.D,{colorSet:"invertedLight",className:g,href:y,onClick:x,component:u.Z,children:i})]})}))},85816:(e,t,n)=>{n.r(t),n.d(t,{default:()=>J});var a=n(24255),r=(n(15970),n(93019),n(84196),n(27586),n(56110),n(25750),n(33208),n(4391),n(3761),n(30169),n(79075),n(26870),n(86978),n(98618),n(40905),n(79410),n(21105),n(72753),n(59496)),i=n(77646),l=n(92053),o=n(34521),s=n(69277),c=n(47018),u=n(22056),d=n(17913),f=n(97174),g=n(86417),m=n(4263),h=n(27293),p=n(93824),y=n(79357),x=n(91682),v=n(51841),j=n(16628),b=n(77671),k=n(93924),w=n(50182),D=n(38391),O=n(39429),S=n(37833),P=n(54167),C=n(68765),F=n(13034),T=n(47571),E=n(69875),I=n(4086),L=n(68547),N=n(4637),A=r.memo((function(e){var t=e.tracklistDomRef,n=(0,F.fU)(E.createDesktopSearchBarEventFactory,{}),a=n.spec,i=n.logger,l=(0,r.useCallback)((function(){i.logInteraction(a.filterFieldFactory().keyStrokeFilter())}),[i,a]),o=(0,r.useCallback)((function(){i.logInteraction(a.filterFieldFactory().hitClearFilter())}),[i,a]),s=(0,r.useCallback)((function(){i.logInteraction(a.sortButtonFactory().hitSort())}),[i,a]);return(0,N.jsxs)("div",{className:y.Z.searchBoxContainer,children:[(0,N.jsx)(r.Suspense,{fallback:null,children:(0,N.jsx)(I.K,{placeholder:u.ag.get("playlist.search_in_playlist"),clearOnEscapeInElementRef:t,onFilter:l,onClear:o})}),(0,N.jsx)(L.l,{columns:j.P0,onSort:s})]})})),M=n(94522),R=n(20031),U=n(15310),_=n(54564),B=n(59689),Q=n(72102),G=n(80244),X=n(65659),z=n(24515),H=n(78217);function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var V=r.lazy((function(){return Promise.all([n.e(1814),n.e(6830),n.e(682)]).then(n.bind(n,16830))})),W=[v.QD.INDEX,v.QD.TITLE,v.QD.ALBUM,v.QD.ADDED_AT,v.QD.DURATION],Y="your_library",q=function(e){var t=e.data,n=e.canFilter,a=e.canSort,i=t.metadata,c=i.uri,k=i.name,S=i.totalLength,E=(0,r.useRef)(null),I=S>0,L=S>0,U=(0,D.Y5)("#5038a0"),B=(0,r.useContext)(x.fo).filter,Q=(0,r.useContext)(j.Gb),G=Q.sortState,X=Q.setSortState,z=(0,F.fU)(s.createDesktopLikedSongsEventFactory,{data:{uri:c}}),H=z.spec,Z=z.logger,K=r.useMemo((function(){return H.headerFactory()}),[H]),V=r.useMemo((function(){return H.tracklistFactory()}),[H]);(0,r.useEffect)((function(){null===G.column&&X({column:v.QD.ADDED_AT,order:v.kn.DESC})}),[G,X]);var q=(0,l.ur)(),$=(0,l.TH)(),J="POP"!==q?new URLSearchParams($.search).get("uri"):null,ee=(0,C.n)((0,O.I)(c,(0,T.w)(G),B),{featureIdentifier:Y,referrerIdentifier:"your_library"}),te=ee.isPlaying,ne=ee.togglePlay,ae=ee.usePlayContextItem,re=ee.isActive,ie=function(){var e=(0,R.aK)({isPlaying:te,isActive:re,spec:H.actionBarFactory().playButtonFactory(),logger:Z,uri:c});ne({loggingParams:e})},le=(0,r.useCallback)((function(e,t){var n=H.actionBarFactory().downloadButtonFactory();t===P.mc.ADD?Z.logInteraction(n.hitDownload({itemToDownload:c})):t===P.mc.REMOVE?Z.logInteraction(n.hitRemoveDownload({itemToRemoveFromDownloads:c})):t===P.mc.NO_PERMISSION&&Z.logInteraction(n.hitUiReveal())}),[Z,H,c]);return(0,N.jsxs)("section",{role:"presentation",className:y.Z.playlist,"data-testid":"playlist-page",children:[(0,N.jsx)(g.$,{children:u.ag.get("playlist.page-title",k)}),(0,N.jsx)(w.s,{metadata:t.metadata,isPlaying:te,togglePlay:ie,backgroundColor:U,specLikedSongs:K}),(0,N.jsx)(d.o,{backgroundColor:U,children:(0,N.jsxs)(d.F,{children:[L?(0,N.jsx)(p.$,{onClick:ie,isPlaying:te,size:"lg",uri:c,ariaPauseLabel:u.ag.get("playlist.a11y.pause",k),ariaPlayLabel:u.ag.get("playlist.a11y.play",k)}):null,t.metadata.totalLength>0&&(0,N.jsx)(_.v,{uri:c,renderEnabled:function(){return(0,N.jsx)(b.v,{uri:c})}}),(0,N.jsx)(f.o,{uri:c,canDownload:I,isFollowing:!0,onFollow:function(){},size:f.q.md,onClick:le}),n&&a&&(0,N.jsx)(F.Nh,{spec:H.actionBarFactory(),children:(0,N.jsx)(A,{tracklistDomRef:E})})]})}),(0,N.jsx)("div",{className:"contentSpacing",children:S>0?(0,N.jsx)(r.Suspense,{fallback:(0,N.jsx)(h.h,{hasError:!1,errorMessage:u.ag.get("error.request-collection-tracks-failure")}),children:(0,N.jsx)(F.Nh,{spec:V,children:(0,N.jsx)(M.p,{nrTracks:S,columns:W,collectionUri:c,scrollToUri:J,usePlayContextItem:ae,outerDomRef:E,spec:V,initialItems:t.contents.items})})}):(0,N.jsx)(m.u,{message:u.ag.get("collection.empty-page.songs-subtitle"),title:u.ag.get("collection.empty-page.songs-title"),linkTo:"/search",linkTitle:u.ag.get("collection.empty-page.songs-cta"),renderInline:!0,children:(0,N.jsx)(o.F,{"aria-hidden":"true"})})})]})},$=r.memo((function(e){var t=e.user,n=e.uri,a=(0,r.useContext)(x.fo).filter,l=(0,r.useContext)(j.Gb).sortState,o=function(e,t,n){var a=(0,r.useContext)(S.H),i=(0,B.useQueryClient)(),l=(0,Q.jP)((function(){return["useLikedSongs",e,n]}),[e,n]),o=(0,B.useQuery)(l(),(function(){return a.getTracks(n)}),{cacheTime:18e5,keepPreviousData:!0,refetchOnWindowFocus:!1}).data,s=(0,r.useCallback)((function(){i.invalidateQueries(l())}),[i,l]);(0,X.b)(G.EW.UPDATE,s);var c=(0,H.I2)(t.id);return c&&o?{metadata:{uri:e,name:c.name,images:c.images,totalLength:null==o?void 0:o.totalLength,unfilteredTotalLength:o.unfilteredTotalLength,owner:(0,z.V3)(t)},contents:o}:null}(n,t,{offset:0,limit:25,sort:(0,T.w)(l),filter:a}),s=(0,r.useContext)(S.H).getCapabilities(),c=(0,i.v9)(U.n5),d=(0,k.U)("spotify:user:".concat(c,":collection")).isEnhanced;if(o){var f=(0,N.jsx)(q,{data:o,canFilter:s.canFilterTracksAndEpisodes&&o.metadata.unfilteredTotalLength>0,canSort:s.canSortTracksAndEpisodes&&o.metadata.unfilteredTotalLength>0});return(0,N.jsx)(_.v,{uri:o.metadata.uri,renderEnabled:function(){return d?(0,N.jsx)(r.Suspense,{fallback:null,children:(0,N.jsx)(j.kz,{uri:o.metadata.uri,children:(0,N.jsx)(V,{metadata:K(K({},o.metadata),{},{collaborators:{count:1,items:[{isOwner:!0,user:o.metadata.owner,tracksAdded:o.metadata.totalLength}]}}),capabilities:s,featureIdentifier:Y})})}):f},renderDisabled:function(){return f}})}return(0,N.jsx)(h.h,{hasError:!1,errorMessage:u.ag.get("error.not_found.title.playlist"),loadOffline:s.canModifyOffline})}));const J=function(){var e=(0,i.v9)(U.Gg).user;if(null===e)return null;var t=(0,c.wG)(e.id).toURI();return(0,N.jsx)(j.kz,{uri:t,children:(0,N.jsx)(x.hz,{uri:t,children:(0,N.jsx)($,{uri:t,user:e})})})}},50182:(e,t,n)=>{n.d(t,{s:()=>a.s});var a=n(30229)},49990:(e,t,n)=>{n.d(t,{e:()=>g});var a=n(10680);const r="(min-width: 0px)",i="(min-width: 0px) and (max-width: 767px)",l="(min-width: 768px)",o="(min-width: 768px) and (max-width: 1023px)",s="(min-width: 1024px)",c="(min-width: 1024px) and (max-width: 1279px)",u="(min-width: 1280px)",d="(min-width: 1280px) and (max-width: 1919px)",f="(min-width: 1920px)";var g=function(){return{isXS:(0,a.a)(r),isXSOnly:(0,a.a)(i),isSM:(0,a.a)(l),isSMOnly:(0,a.a)(o),isMD:(0,a.a)(s),isMDOnly:(0,a.a)(c),isLG:(0,a.a)(u),isLGOnly:(0,a.a)(d),isXL:(0,a.a)(f)}}}}]);
//# sourceMappingURL=xpui-routes-collection-songs.js.map
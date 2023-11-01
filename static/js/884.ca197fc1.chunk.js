"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[884],{755:function(e,t,r){r.d(t,{D:function(){return n}});var n={position:"top-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}},884:function(e,t,r){r.r(t);var n=r(861),a=r(439),s=r(757),i=r.n(s),c=r(791),o=r(689),u=r(87),p=r(755),l=r(596),d=r(691),h=r(851),v=r(968),f=r(58),x=r(184),m=(0,c.lazy)((function(){return r.e(520).then(r.bind(r,520))})),_=(0,c.lazy)((function(){return r.e(636).then(r.bind(r,636))}));t.default=function(){var e,t,r=(0,c.useState)(null),s=(0,a.Z)(r,2),g=s[0],w=s[1],j=(0,c.useState)(!0),b=(0,a.Z)(j,2),Z=b[0],y=b[1],k=(0,c.useState)(null),B=(0,a.Z)(k,2),P=B[0],D=B[1],O=(0,o.UO)().movieId,I=(0,o.TH)(),M=(0,c.useRef)(null!==(e=null===(t=I.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/");return(0,c.useEffect)((function(){if(O){var e=function(){var e=(0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,h.Y5)(O);case 3:t=e.sent,w(t),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),D(e.t0.message),l.Am.error(e.t0.message,p.D);case 11:return e.prev=11,y(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,7,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}}),[O]),(0,x.jsxs)("div",{children:[null!==P&&(0,x.jsxs)("p",{children:["Oops, some error occurred! Please, try again later. Error: ",P]}),Z&&(0,x.jsx)(d.fe,{visible:!0,height:80,width:80,ariaLabel:"dna-loading",wrapperStyle:{},wrapperClassName:"dna-wrapper"}),(0,x.jsxs)("div",{children:[(0,x.jsxs)(u.rU,{to:M.current,className:f.Z.formWrap,children:[" ","\u2190 Back to movies"]}),null!==g&&(0,x.jsxs)("div",{children:[(0,x.jsxs)("div",{className:f.Z.MovieDetailsBox,children:[(0,x.jsx)("div",{className:f.Z.MovieDetailsImg,children:(0,x.jsx)("img",{src:g.poster_path?"https://image.tmdb.org/t/p/w200/".concat(g.poster_path):v,alt:g.title,"max-width":"400"})}),(0,x.jsxs)("div",{children:[(0,x.jsxs)("h2",{children:["Title: ",g.title," (",g.first_air_date?g.first_air_date:g.release_date,")"]}),(0,x.jsxs)("p",{children:["User score: ",g.vote_average," "]}),(0,x.jsxs)("h3",{children:["Overview: ",g.overview," "]}),(0,x.jsx)("p",{}),(0,x.jsx)("h3",{children:"Genres"}),(0,x.jsx)("p",{children:g.genres&&g.genres.length>0?g.genres.map((function(e){return e.name})).join(", "):""})]})]}),(0,x.jsxs)("div",{className:f.Z.addInfBox,children:[(0,x.jsx)("h2",{children:"Additional information"}),(0,x.jsxs)("div",{className:f.Z.buttonBox,children:[(0,x.jsx)(u.OL,{to:"reviews",children:"Reviews"}),(0,x.jsx)(u.OL,{to:"cast",children:"Cast"})]})]})]}),(0,x.jsx)(c.Suspense,{children:(0,x.jsxs)(o.Z5,{children:[(0,x.jsx)(o.AW,{path:"reviews",element:(0,x.jsx)(m,{})}),(0,x.jsx)(o.AW,{path:"cast",element:(0,x.jsx)(_,{})})]})})]})]})}},851:function(e,t,r){r.d(t,{Hx:function(){return f},JA:function(){return u},Rn:function(){return m},Y5:function(){return l},uV:function(){return h}});var n=r(861),a=r(757),s=r.n(a),i=r(243),c="37244e55abf3f6dfeaa909abea58e77f";i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o={api_key:c};function u(){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("trending/all/day",{params:o});case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function l(e){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("movie/".concat(t),{params:o});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function h(e){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("movie/".concat(t,"/credits"),{params:o});case 3:return r=e.sent,e.abrupt("return",r.data.cast);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function f(e){return x.apply(this,arguments)}function x(){return(x=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("movie/".concat(t,"/reviews"),{params:o});case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function m(e){return _.apply(this,arguments)}function _(){return _=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={api_key:c,query:t},e.prev=1,e.next=4,i.Z.get("search/movie?",{params:r});case 4:return n=e.sent,e.abrupt("return",n.data.results);case 8:throw e.prev=8,e.t0=e.catch(1),e.t0;case 11:case"end":return e.stop()}}),e,null,[[1,8]])}))),_.apply(this,arguments)}},58:function(e,t){t.Z={MovieDetailsBox:"Pages_MovieDetailsBox__Fbcl0",MovieDetailsImg:"Pages_MovieDetailsImg__kf-WO",addInfBox:"Pages_addInfBox__-BKtL",buttonBox:"Pages_buttonBox__2ISTv",formWrap:"Pages_formWrap__Wpc8Q",searchBtn:"Pages_searchBtn__dxFm1",searchBox:"Pages_searchBox__WDKV1",MovieReviewsBox:"Pages_MovieReviewsBox__AyV32",castList:"Pages_castList__QORHq"}},968:function(e,t,r){e.exports=r.p+"static/media/cinema.e32b6db9e1af618bc6fb.png"}}]);
//# sourceMappingURL=884.ca197fc1.chunk.js.map
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[228],{8228:function(t,e,o){"use strict";o.r(e),o.d(e,{default:function(){return u}});var n=o(7294),r=o(4925),l=o.n(r),i=o(2125),s=i.default.div.withConfig({displayName:"styles__RootCSS",componentId:"sc-cpq5a0-0"})([".nav--placeholder{width:100%;height:50px;}.nav--block{width:100%;display:flex;align-items:center;justify-content:center;background:",';height:50px;position:fixed;top:0;z-index:99;}.nav--title{font-family:"Lobster",sans-serif;color:',";}.menu{"," position:fixed;width:",";background:",";height:calc(100vh - 50px);top:50px;right:0;z-index:60;overflow:hidden;}.menu--item{padding:1rem;padding-right:1.6rem;font-size:1.1rem;display:block;}.menu--overlay{"," position:fixed;opacity:",";width:100%;height:100vh;background:rgba(12,13,16,0.50);z-index:50;}"],(function(t){return t.theme.background.surfaceOne}),(function(t){return t.theme.colors.primary}),(function(t){return t.theme.mixins.transition}),(function(t){return t.isOpen?"80%":"0"}),(function(t){return t.theme.background.surfaceOne}),(function(t){return t.theme.mixins.transition}),(function(t){return t.isOpen?"100%":"0"})),c=i.default.div.withConfig({displayName:"styles__NavIconCSS",componentId:"sc-cpq5a0-1"})(["width:27px;position:absolute;right:17px;&:after,&:before,> div{background-color:",";border-radius:10px;content:'';display:block;height:3px;margin:4px 0;transition:all .4s ease-in-out;}",""],(function(t){return t.theme.colors.primary}),(function(t){return t.isOpen?"\n        &:before {\n          transform: translateY(7px) rotate(137deg)\n        }\n\n        &:after {\n          transform: translateY(-7px) rotate(-137deg)\n        }\n\n        > div {\n          transform: scale(0)\n        }\n      ":""})),f=o(6096),a=o(5893),u=function(){var t=function(){var t=(0,n.useState)(!1),e=t[0],o=t[1];return{isOpen:e,toggle:function(){o(!e)},toggleOff:function(){e&&o(!1)}}}(),e=t.isOpen,o=t.toggle,r=t.toggleOff;return(0,a.jsxs)(s,{isOpen:e,children:[(0,a.jsxs)("div",{className:"nav--block",children:[(0,a.jsx)(c,{onClick:o,isOpen:e,children:(0,a.jsx)("div",{})}),(0,a.jsx)(l(),{href:"#about",offset:"50",children:(0,a.jsx)("h2",{className:"nav--title",onClick:r,children:"Ryuash"})})]}),(0,a.jsx)("div",{className:"menu",children:f.t.map((function(t){return(0,a.jsx)(l(),{href:t.to,offset:"50",className:"menu--item",onClick:r,children:(0,a.jsx)("p",{children:t.display})},t.to)}))}),(0,a.jsx)("div",{className:"menu--overlay",onClick:o}),(0,a.jsx)("div",{className:"nav--placeholder"})]})}},6096:function(t,e,o){"use strict";o.d(e,{t:function(){return n}});var n=[{display:"About",to:"#about"},{display:"Projects",to:"#projects"}]},4925:function(t,e,o){var n;"undefined"!==typeof self&&self,n=function(t){return function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,r=o(1),l=(n=r)&&n.__esModule?n:{default:n};e.default=l.default},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},l=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}(),i=o(2),s=(n=i)&&n.__esModule?n:{default:n},c=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var o=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return o.smoothScroll=o.smoothScroll.bind(o),o}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),l(e,[{key:"componentDidMount",value:function(){o(3).polyfill()}},{key:"smoothScroll",value:function(t){var e=this;t.preventDefault();var o=function(){return 0};"undefined"!==typeof this.props.offset&&(o=this.props.offset&&this.props.offset.constructor&&this.props.offset.apply?this.props.offset:function(){return parseInt(e.props.offset)});var n=t.currentTarget.getAttribute("href").slice(1),r=document.getElementById(n).getBoundingClientRect().top+window.pageYOffset;window.scroll({top:r-o(),behavior:"smooth"}),this.props.onClick&&this.props.onClick(t)}},{key:"render",value:function(){var t=this.props,e=(t.offset,function(t,e){var o={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(o[n]=t[n]);return o}(t,["offset"]));return s.default.createElement("a",r({},e,{onClick:this.smoothScroll}))}}]),e}(i.Component);e.default=c},function(e,o){e.exports=t},function(t,e,o){!function(){"use strict";t.exports={polyfill:function(){var t=window,e=document;if(!("scrollBehavior"in e.documentElement.style)||!0===t.__forceSmoothScrollPolyfill__){var o,n=t.HTMLElement||t.Element,r={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:n.prototype.scroll||s,scrollIntoView:n.prototype.scrollIntoView},l=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now,i=(o=t.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(o)?1:0);t.scroll=t.scrollTo=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?h.call(t,e.body,void 0!==arguments[0].left?~~arguments[0].left:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:t.scrollY||t.pageYOffset):r.scroll.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!==typeof arguments[0]?arguments[0]:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:t.scrollY||t.pageYOffset))},t.scrollBy=function(){void 0!==arguments[0]&&(c(arguments[0])?r.scrollBy.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!==typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):h.call(t,e.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset)))},n.prototype.scroll=n.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==c(arguments[0])){var t=arguments[0].left,e=arguments[0].top;h.call(this,this,"undefined"===typeof t?this.scrollLeft:~~t,"undefined"===typeof e?this.scrollTop:~~e)}else{if("number"===typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!==typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},n.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},n.prototype.scrollIntoView=function(){if(!0!==c(arguments[0])){var o=p(this),n=o.getBoundingClientRect(),l=this.getBoundingClientRect();o!==e.body?(h.call(this,o,o.scrollLeft+l.left-n.left,o.scrollTop+l.top-n.top),"fixed"!==t.getComputedStyle(o).position&&t.scrollBy({left:n.left,top:n.top,behavior:"smooth"})):t.scrollBy({left:l.left,top:l.top,behavior:"smooth"})}else r.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function s(t,e){this.scrollLeft=t,this.scrollTop=e}function c(t){if(null===t||"object"!==typeof t||void 0===t.behavior||"auto"===t.behavior||"instant"===t.behavior)return!0;if("object"===typeof t&&"smooth"===t.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+t.behavior+" is not a valid value for enumeration ScrollBehavior.")}function f(t,e){return"Y"===e?t.clientHeight+i<t.scrollHeight:"X"===e?t.clientWidth+i<t.scrollWidth:void 0}function a(e,o){var n=t.getComputedStyle(e,null)["overflow"+o];return"auto"===n||"scroll"===n}function u(t){var e=f(t,"Y")&&a(t,"Y"),o=f(t,"X")&&a(t,"X");return e||o}function p(t){var o;do{o=(t=t.parentNode)===e.body}while(!1===o&&!1===u(t));return o=null,t}function d(e){var o,n,r,i,s=(l()-e.startTime)/468;i=s=s>1?1:s,o=.5*(1-Math.cos(Math.PI*i)),n=e.startX+(e.x-e.startX)*o,r=e.startY+(e.y-e.startY)*o,e.method.call(e.scrollable,n,r),n===e.x&&r===e.y||t.requestAnimationFrame(d.bind(t,e))}function h(o,n,i){var c,f,a,u,p=l();o===e.body?(c=t,f=t.scrollX||t.pageXOffset,a=t.scrollY||t.pageYOffset,u=r.scroll):(c=o,f=o.scrollLeft,a=o.scrollTop,u=s),d({scrollable:c,method:u,startTime:p,startX:f,startY:a,x:n,y:i})}}}}()}])},t.exports=n(o(7294))}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(t,e,n){t.exports=n(42)},38:function(t,e,n){},40:function(t,e,n){},42:function(t,e,n){"use strict";n.r(e);var r=n(5),o=n.n(r),a=n(28),i=n.n(a),c=(n(38),n(11)),l=n(19),u=n(0),s=n(20),h=n(29),f=n(22),p=Object(h.a)({apiKey:"AIzaSyAplzOWq-I2o0t0EBAM7HR5fvzaSdiJkFo",authDomain:"cs35l-a7b47.firebaseapp.com",projectId:"cs35l-a7b47",storageBucket:"cs35l-a7b47.appspot.com",messagingSenderId:"626935676200",appId:"1:626935676200:web:d8727198eeac83a76be41d"}),m=Object(f.c)(p),v=Object(s.b)(p),d=new s.a;n(40);var g=function(){return o.a.createElement("div",null," Home ")},y=n(1);function b(){b=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(N){l=function(t,e,n){return t[e]=n}}function u(t,e,n,o){var a=e&&e.prototype instanceof f?e:f,i=Object.create(a.prototype),c=new S(o||[]);return r(i,"_invoke",{value:O(t,n,c)}),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(N){return{type:"throw",arg:N}}}t.wrap=u;var h={};function f(){}function p(){}function m(){}var v={};l(v,a,function(){return this});var d=Object.getPrototypeOf,g=d&&d(d(P([])));g&&g!==e&&n.call(g,a)&&(v=g);var y=m.prototype=f.prototype=Object.create(v);function w(t){["next","throw","return"].forEach(function(e){l(t,e,function(t){return this._invoke(e,t)})})}function E(t,e){var o;r(this,"_invoke",{value:function(r,a){function i(){return new e(function(o,i){!function r(o,a,i,c){var l=s(t[o],t,a);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then(function(t){r("next",t,i,c)},function(t){r("throw",t,i,c)}):e.resolve(h).then(function(t){u.value=t,i(u)},function(t){return r("throw",t,i,c)})}c(l.arg)}(r,a,o,i)})}return o=o?o.then(i,i):i()}})}function O(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return k()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=L(i,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=s(t,e,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}function L(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var r=s(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,h;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function P(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return p.prototype=m,r(y,"constructor",{value:m,configurable:!0}),r(m,"constructor",{value:p,configurable:!0}),p.displayName=l(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,c,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},w(E.prototype),l(E.prototype,i,function(){return this}),t.AsyncIterator=E,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new E(u(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},w(y),l(y,c,"Generator"),l(y,a,function(){return this}),l(y,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=P,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;x(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:P(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t}var w=function(t){var e=t.isAuth,n=Object(r.useState)(""),a=Object(c.a)(n,2),i=a[0],l=a[1],s=Object(r.useState)(""),h=Object(c.a)(s,2),p=h[0],d=h[1],g=Object(f.b)(m,"posts"),w=Object(u.l)(),E=function(){var t=Object(y.a)(b().mark(function t(){return b().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(f.a)(g,{title:i,postText:p,author:{name:v.currentUser.displayName,id:v.currentUser.uid}});case 2:w("/timeline");case 3:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();return Object(r.useEffect)(function(){e||w("/login")},[]),o.a.createElement("div",{className:"createPostPage"},o.a.createElement("div",{className:"cpContainer"},o.a.createElement("h1",null," Create a Post "),o.a.createElement("div",{className:"inputGp"},o.a.createElement("label",null," Title: "),o.a.createElement("input",{placeholder:"Title...",onChange:function(t){d(t.target.value)}})),o.a.createElement("div",{className:"inputGp"},o.a.createElement("label",null," Post: "),o.a.createElement("textarea",{placeholder:"Post...",onChange:function(t){l(t.target.value)}})),o.a.createElement("button",{onClick:E}," Submit Post ")," "))};var E=function(t){var e=t.setIsAuth,n=Object(u.l)();return o.a.createElement("div",{className:"loginPage"},o.a.createElement("p",null,"Sign in with Google to Continue"),o.a.createElement("button",{className:"login-with-google-btn",onClick:function(){Object(s.c)(v,d).then(function(t){localStorage.setItem("isAuth",!0),e(!0),n("/")})}},"Sign in with Google"))};var O=function(){return o.a.createElement("div",null," Timeline ")};var L=function(){var t=Object(r.useState)(!1),e=Object(c.a)(t,2),n=e[0],a=e[1];return o.a.createElement(l.a,null,o.a.createElement("nav",null,o.a.createElement(l.b,{to:"/"}," Home "),o.a.createElement(l.b,{to:"/timeline"}," Timeline "),n?o.a.createElement(o.a.Fragment,null,o.a.createElement(l.b,{to:"/createpost"}," Create Post "),o.a.createElement("button",{onClick:function(){Object(s.d)(v).then(function(){localStorage.clear(),a(!1),window.location.pathname="/login"})}}," Log Out ")):o.a.createElement(l.b,{to:"/login"}," Login ")),o.a.createElement(u.c,null,o.a.createElement(u.a,{path:"/",element:o.a.createElement(g,null)}),o.a.createElement(u.a,{path:"/createpost",element:o.a.createElement(w,{isAuth:n})}),o.a.createElement(u.a,{path:"/login",element:o.a.createElement(E,{setIsAuth:a})}),o.a.createElement(u.a,{path:"/timeline",element:o.a.createElement(O,null)})))},j=function(t){t&&t instanceof Function&&n.e(1).then(n.bind(null,43)).then(function(e){var n=e.getCLS,r=e.getFID,o=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),r(t),o(t),a(t),i(t)})};i.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(L,null))),j()}},[[30,3,2]]]);
//# sourceMappingURL=main.42454dc6.chunk.js.map
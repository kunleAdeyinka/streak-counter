function t(){return t=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t},t.apply(this,arguments)}const n="streak";function r(t){return t.toLocaleDateString("en-US")}function e(n,e){return t({},{currentCount:1,startDate:r(n),lastLoginDate:r(n)},e)}function o(t,r){t.setItem(n,JSON.stringify(r))}function a(t,a){const s=t.getItem(n);if(s)try{const n=JSON.parse(s),c=function(t,n){const r=t.getDate()-parseInt(n.split("/")[1]);return 0===r?"none":1===r?"increment":"reset"}(a,n.lastLoginDate),i="reset"===c;if("increment"===c){const s=e(a,{startDate:n.startDate,currentCount:n.currentCount+1,lastLoginDate:r(a)});return o(t,s),s}if(i){const n=e(a);return o(t,n),n}return n}catch(t){console.error("Failed to parse streak from localStorage")}const c=e(a);return o(t,c),c}export{a as streakCounter};
//# sourceMappingURL=index.modern.js.map

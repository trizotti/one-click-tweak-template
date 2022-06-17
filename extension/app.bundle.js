!function(t,e){for(var r in e)t[r]=e[r]}(window,function(t){var e={};function r(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=t,r.c=e,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";r.r(e);var o={};o[o.Fatal=0]="Fatal",o[o.Error=0]="Error",o[o.Warn=1]="Warn",o[o.Log=2]="Log",o[o.Info=3]="Info",o[o.Success=3]="Success",o[o.Debug=4]="Debug",o[o.Trace=5]="Trace",o[o.Silent=-1/0]="Silent",o[o.Verbose=1/0]="Verbose";var n={silent:{level:-1},fatal:{level:o.Fatal},error:{level:o.Error},warn:{level:o.Warn},log:{level:o.Log},info:{level:o.Info},success:{level:o.Success},debug:{level:o.Debug},trace:{level:o.Trace},verbose:{level:o.Trace},ready:{level:o.Info},start:{level:o.Info}};function i(t){return e=t,"[object Object]"===Object.prototype.toString.call(e)&&(!(!t.message&&!t.args)&&!t.stack);var e}function s(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||l(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=l(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var o=0,n=function(){};return{s:n,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,a=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return s=t.done,t},e:function(t){a=!0,i=t},f:function(){try{s||null==r.return||r.return()}finally{if(a)throw i}}}}function l(t,e){if(t){if("string"==typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(t,e):void 0}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,o=new Array(e);r<e;r++)o[r]=t[r];return o}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){p(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function y(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var d=!1,v=[],g=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(var r in y(this,t),this._reporters=e.reporters||[],this._types=e.types||n,this.level=void 0!==e.level?e.level:3,this._defaults=e.defaults||{},this._async=void 0!==e.async?e.async:void 0,this._stdout=e.stdout,this._stderr=e.stderr,this._mockFn=e.mockFn,this._throttle=e.throttle||1e3,this._throttleMin=e.throttleMin||5,this._types){var o=f(f({type:r},this._types[r]),this._defaults);this[r]=this._wrapLogFn(o),this[r].raw=this._wrapLogFn(o,!0)}this._mockFn&&this.mockTypes(),this._lastLogSerialized=void 0,this._lastLog=void 0,this._lastLogTime=void 0,this._lastLogCount=0,this._throttleTimeout=void 0}var e,r,o;return e=t,(r=[{key:"stdout",get:function(){return this._stdout||console._stdout}},{key:"stderr",get:function(){return this._stderr||console._stderr}},{key:"create",value:function(e){return new t(Object.assign({reporters:this._reporters,level:this.level,types:this._types,defaults:this._defaults,stdout:this._stdout,stderr:this._stderr,mockFn:this._mockFn},e))}},{key:"withDefaults",value:function(t){return this.create({defaults:Object.assign({},this._defaults,t)})}},{key:"withTag",value:function(t){return this.withDefaults({tag:this._defaults.tag?this._defaults.tag+":"+t:t})}},{key:"addReporter",value:function(t){return this._reporters.push(t),this}},{key:"removeReporter",value:function(t){if(t){var e=this._reporters.indexOf(t);if(e>=0)return this._reporters.splice(e,1)}else this._reporters.splice(0);return this}},{key:"setReporters",value:function(t){return this._reporters=Array.isArray(t)?t:[t],this}},{key:"wrapAll",value:function(){this.wrapConsole(),this.wrapStd()}},{key:"restoreAll",value:function(){this.restoreConsole(),this.restoreStd()}},{key:"wrapConsole",value:function(){for(var t in this._types)console["__"+t]||(console["__"+t]=console[t]),console[t]=this[t].raw}},{key:"restoreConsole",value:function(){for(var t in this._types)console["__"+t]&&(console[t]=console["__"+t],delete console["__"+t])}},{key:"wrapStd",value:function(){this._wrapStream(this.stdout,"log"),this._wrapStream(this.stderr,"log")}},{key:"_wrapStream",value:function(t,e){var r=this;t&&(t.__write||(t.__write=t.write),t.write=function(t){r[e].raw(String(t).trim())})}},{key:"restoreStd",value:function(){this._restoreStream(this.stdout),this._restoreStream(this.stderr)}},{key:"_restoreStream",value:function(t){t&&t.__write&&(t.write=t.__write,delete t.__write)}},{key:"pauseLogs",value:function(){d=!0}},{key:"resumeLogs",value:function(){d=!1;var t,e=a(v.splice(0));try{for(e.s();!(t=e.n()).done;){var r=t.value;r[0]._logFn(r[1],r[2])}}catch(t){e.e(t)}finally{e.f()}}},{key:"mockTypes",value:function(t){if(this._mockFn=t||this._mockFn,"function"==typeof this._mockFn)for(var e in this._types)this[e]=this._mockFn(e,this._types[e])||this[e],this[e].raw=this[e]}},{key:"_wrapLogFn",value:function(t,e){var r=this;return function(){for(var o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];if(!d)return r._logFn(t,n,e);v.push([r,t,n,e])}}},{key:"_logFn",value:function(t,e,r){var o=this;if(t.level>this.level)return!!this._async&&Promise.resolve(!1);var n=Object.assign({date:new Date,args:[]},t);!r&&1===e.length&&i(e[0])?Object.assign(n,e[0]):n.args=Array.from(e),n.message&&(n.args.unshift(n.message),delete n.message),n.additional&&(Array.isArray(n.additional)||(n.additional=n.additional.split("\n")),n.args.push("\n"+n.additional.join("\n")),delete n.additional),n.type="string"==typeof n.type?n.type.toLowerCase():"",n.tag="string"==typeof n.tag?n.tag.toLowerCase():"";var a=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=o._lastLogCount-o._throttleMin;if(o._lastLog&&e>0){var r=s(o._lastLog.args);e>1&&r.push("(repeated ".concat(e," times)")),o._log(f(f({},o._lastLog),{},{args:r})),o._lastLogCount=1}if(t){if(o._lastLog=n,o._async)return o._logAsync(n);o._log(n)}};clearTimeout(this._throttleTimeout);var l=this._lastLogTime?n.date-this._lastLogTime:0;if(this._lastLogTime=n.date,l<this._throttle)try{var u=JSON.stringify([n.type,n.tag,n.args]),c=this._lastLogSerialized===u;if(this._lastLogSerialized=u,c&&(this._lastLogCount++,this._lastLogCount>this._throttleMin))return void(this._throttleTimeout=setTimeout(a,this._throttle))}catch(t){}a(!0)}},{key:"_log",value:function(t){var e,r=a(this._reporters);try{for(r.s();!(e=r.n()).done;)e.value.log(t,{async:!1,stdout:this.stdout,stderr:this.stderr})}catch(t){r.e(t)}finally{r.f()}}},{key:"_logAsync",value:function(t){var e=this;return Promise.all(this._reporters.map((function(r){return r.log(t,{async:!0,stdout:e.stdout,stderr:e.stderr})})))}}])&&h(e.prototype,r),o&&h(e,o),t}();g.prototype.add=g.prototype.addReporter,g.prototype.remove=g.prototype.removeReporter,g.prototype.clear=g.prototype.removeReporter,g.prototype.withScope=g.prototype.withTag,g.prototype.mock=g.prototype.mockTypes,g.prototype.pause=g.prototype.pauseLogs,g.prototype.resume=g.prototype.resumeLogs;var _=g;function m(t){return function(t){if(Array.isArray(t))return b(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return b(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,o=new Array(e);r<e;r++)o[r]=t[r];return o}function w(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var k,S=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=Object.assign({},e),this.defaultColor="#7f8c8d",this.levelColorMap={0:"#c0392b",1:"#f39c12",3:"#00BCD4"},this.typeColorMap={success:"#2ecc71"}}var e,r,o;return e=t,(r=[{key:"log",value:function(t){var e=t.level<1?console.__error||console.error:1===t.level&&console.warn?console.__warn||console.warn:console.__log||console.log,r="log"!==t.type?t.type:"",o=t.tag?t.tag:"",n=this.typeColorMap[t.type]||this.levelColorMap[t.level]||this.defaultColor,i="\n      background: ".concat(n,";\n      border-radius: 0.5em;\n      color: white;\n      font-weight: bold;\n      padding: 2px 0.5em;\n    "),s="%c".concat([o,r].filter(Boolean).join(":"));"string"==typeof t.args[0]?e.apply(void 0,["".concat(s,"%c ").concat(t.args[0]),i,""].concat(m(t.args.slice(1)))):e.apply(void 0,[s,i].concat(m(t.args)))}}])&&w(e.prototype,r),o&&w(e,o),t}();("undefined"!=typeof window&&window.consola||((k=new _({reporters:[new S]})).Consola=_,k.LogLevel=o,k.BrowserReporter=S,k)).info("You can use modern syntax to import npm libraries for your tweak!"),alert("Hello World")}]));
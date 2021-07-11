//	Module:		main
//	Project:	sq-lib
//	Author:		soviet
//	E-mail:		soviet@s0viet.ru
//	Web:		https://s0viet.ru/

var dirname=require("path").dirname,join=require("path").join,normalize=require("path").normalize,existsSync=require("fs").existsSync,readFileSync=require("fs").readFileSync,shortcuts={};function findRootDir(r){var t=join(r,"package.json"),e=normalize(r+"/..");return existsSync(t)?r:findRootDir(e)}function getOptions(r){var t=join(r,".paths");if(!existsSync(t))return{};for(var e,n=readFileSync(t,{encoding:"utf8"}),o=/(\$[\w-]+)\s*=\s*(.+)/gm,i={};e=o.exec(n);){var a=e[1],u=e[2],s="/"===u?r:join(r,u);i[a]=s}return i}function setShortcuts(r){var t=findRootDir(r);return shortcuts[t]||(shortcuts[t]=getOptions(t)),shortcuts[t]}function callerPath(){var r=new Error,t=/at require \(internal\/module\.js:11:18\)\n.+\((.*):\d+:\d+\)/m;return r.stack.match(t)||(t=/at Object\.<anonymous> \((.+):\d+:\d+\)/m),r.stack.match(t)[1]}function moduleSearch(r){return function(t){var e=new RegExp(t.replace(/\\/g,"\\\\"));return!r.search(e)}}function getRoot(){var r=dirname(callerPath()),t=Object.keys(shortcuts).reverse(),e=moduleSearch(r);return t.find(e)}function rootPath(r){var t=getRoot(),e=join(t,r);return(existsSync(e)||existsSync(normalize(e+"/..")))&&e}function shortcutPath(r){var t=getRoot();if(!t)return!1;var e=r.match(/^\$[\w-]+/)[0],n=shortcuts[t][e];return r.replace(e,n)}function getPaths(r){return setShortcuts(r||callerPath())}var Module=require("module"),include=Module.prototype.require;Module.prototype.require=function(r){var t=r;return"."===r[0]?include.call(this,r):(("/"===r[0]||r.startsWith("src/")||r.startsWith("data/"))&&(t=rootPath(r)||r),"$"===r[0]&&(t=shortcutPath(r)||r),"sexy-require"===r?getPaths():include.call(this,t))},module.exports=getPaths(module.parent.filename);module.exports = require('./src/index.js')
(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(81),o=n.n(a),r=n(645),l=n.n(r)()(o());l.push([e.id,"body{\n    margin:0px;\n}\n\n/* header style */\n\n.header{\n    display: flex;\n    flex-direction: column;\n    background-color: #7DD3FC;\n    border-bottom: 1px solid black;\n\n}\n\n.btnPlace{\n    display: flex;\n    justify-content: space-around;\n    padding:20px\n}\n\n.formPlace{\n    display: Flex;\n    justify-content: space-around;\n    padding: 20px;\n}\n\n.newTaskForm{\n    flex-direction: column;\n    gap:10px;\n}\n\n\n.task {\n    display: flex;\n    gap:50px\n}\n\n/* content style */\n\n.content {\n    display: flex;\n    justify-content: space-around;\n    width: auto;\n    flex: auto;\n}\n.groups, .tasks {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n}\n\n\n/* groups */\n\n.groups{\n    border-right: 4px solid black;\n}\n\n.oneGroup{\n    display: flex;\n    justify-content: space-between;\n    height: 40px;\n    padding: 5px;\n    border-bottom: solid BLACK 1px;\n}\n.oneGroup:hover{\n    background-color: #FDE047;\n}\n\n.newGroup{\n    display: flex;\n    align-items: center;\n\n}\n\n/* tasks */\n\n.oneTag{\n    font-weight: 900;\n}\n\n.one{\n    display: flex;\n}\n",""]);const i=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var l={};if(a)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(l[d]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);a&&l[c[0]]||(void 0!==r&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=r),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),t.push(c))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var r={},l=[],i=0;i<e.length;i++){var d=e[i],s=a.base?d[0]+a.base:d[0],c=r[s]||0,u="".concat(s," ").concat(c);r[s]=c+1;var p=n(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=o(m,a);a.byIndex=i,t.splice(i,0,{identifier:u,updater:f,references:1})}l.push(u)}return l}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var r=a(e=e||[],o=o||{});return function(e){e=e||[];for(var l=0;l<r.length;l++){var i=n(r[l]);t[i].references--}for(var d=a(e,o),s=0;s<r.length;s++){var c=n(r[s]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}r=d}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,o&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={id:a,exports:{}};return e[a](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),a=n(795),o=n.n(a),r=n(569),l=n.n(r),i=n(565),d=n.n(i),s=n(216),c=n.n(s),u=n(589),p=n.n(u),m=n(426),f={};f.styleTagTransform=p(),f.setAttributes=d(),f.insert=l().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=c(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=document.querySelector(".content"),v=function(){const e=document.createElement("div");h.appendChild(e),e.classList.add("groups");const t=document.createElement("div");return h.appendChild(t),t.classList.add("tasks"),{groups:e,tasks:t}}(),y=document.querySelector(".header");let C=function(){const e=document.createElement("div");y.appendChild(e),e.classList.add("btnPlace");const t=document.createElement("div");return y.appendChild(t),t.classList.add("formPlace"),{btnPlace:e,formPlace:t}}(),b=function(){const e=document.createElement("button");C.btnPlace.appendChild(e),e.textContent="New Group",e.classList.add("newGroupBtn");const t=document.createElement("button");return C.btnPlace.appendChild(t),t.textContent="New Task",t.classList.add("newTaskBtn"),{newGroup:e,newTask:t}}();document.querySelector(".header");let x=[],g=[],E="",k=function(){let e=document.createElement("form");C.formPlace.appendChild(e);let t=document.createElement("input");t.setAttribute("type","text"),t.setAttribute("name","groupName"),t.setAttribute("placeholder","Group Name"),e.appendChild(t);let n=document.createElement("input");return n.setAttribute("type","submit"),n.setAttribute("value","Submit"),e.appendChild(n),{form:e,groupName:t,s:n}}();function A(){v.groups.textContent="",""!==k.form.elements.groupName.value&&x.push(k.form.elements.groupName.value);for(let e=0;e<x.length;e++){let t=document.createElement("div");v.groups.appendChild(t),t.classList.add("oneGroup");let n=document.createElement("div");t.appendChild(n),n.classList.add("newGroup"),n.textContent=x[e],t.addEventListener("click",(()=>{let e="";e=Array.from(document.querySelectorAll(".oneGroup")),console.log(e);for(let t=0;t<e.length;t++)e[t].style.backgroundColor="";for(let e=0;e<x.length;e++)x[e]==n.textContent&&(t.remove,E=n.textContent,S(),t.style.backgroundColor="#FEF08A")}));let a=document.createElement("button");t.appendChild(a),a.textContent="DELETE",a.classList.add("delateGroup"),a.addEventListener("click",(()=>{let t=x[e];x.splice(e,1),A();for(let e=0;e<g.length;e++)g[e]==t&&(g.splice(e,5),S());v.tasks.textContent="",P()}))}k.form.style.display="none",w=0,k.groupName.value=""}b.newGroup.addEventListener("click",(()=>{0==w?(k.form.style.display="block",w=1):1==w&&(k.form.style.display="none",w=0)}));let w=0;k.form.style.display="none",k.s.addEventListener("click",(()=>{event.preventDefault(),A(),S(),v.tasks.textContent="",P()}));let L=function(){let e=document.createElement("form");C.formPlace.appendChild(e),e.classList.add("newTaskForm");let t=document.createElement("input");t.setAttribute("type","text"),t.setAttribute("name","taskName"),t.setAttribute("placeholder","Task Name"),e.appendChild(t);let n=document.createElement("textarea");n.setAttribute("type","text"),n.setAttribute("name","taskNote"),n.setAttribute("placeholder","Task Note"),n.setAttribute("rows","20"),n.setAttribute("cols","30"),e.appendChild(n);let a=document.createElement("div");a.textContent="Deadline:",e.appendChild(a);let o=document.createElement("input");o.setAttribute("type","date"),o.setAttribute("name","deadline"),e.appendChild(o);let r=document.createElement("div");r.textContent="Priority:",e.appendChild(r);let l=document.createElement("select");l.setAttribute("name","priority");let i=document.createElement("option");i.setAttribute("value","low"),i.textContent="low",l.appendChild(i);let d=document.createElement("option");d.setAttribute("value","normal"),d.textContent="normal",l.appendChild(d);let s=document.createElement("option");s.setAttribute("value","high"),s.textContent="high",l.appendChild(s);let c=document.createElement("option");c.setAttribute("value","urgent"),c.textContent="urgent",l.appendChild(c),e.appendChild(l);let u=document.createElement("input");return u.setAttribute("type","submit"),u.setAttribute("value","Submit"),e.appendChild(u),{form:e,taskName:t,s:u,priority:l}}();b.newTask.addEventListener("click",(()=>{0==T?(L.form.style.display="flex",T=1):1==T&&(L.form.style.display="none",T=0)}));let T=0;L.form.style.display="none",L.s.addEventListener("click",(()=>{var e;event.preventDefault(),e=E,g.push(e),g.push(L.form.elements.taskName.value),g.push(L.form.elements.taskNote.value),g.push(L.form.elements.deadline.value),g.push(L.priority.options[L.priority.selectedIndex].value),L.form.style.display="none",T=0,L.taskName.value="",S()}));let N=0;function S(){v.tasks.textContent="";for(let e=0;e<g.length;e++)if(e%5==0&&g[e]==E){let t=document.createElement("div");v.tasks.appendChild(t),t.classList.add("oneTask");let n=document.createElement("div");t.appendChild(n),n.classList.add("one");let a=document.createElement("div");n.appendChild(a),a.textContent="Task:",a.classList.add("oneTag");let o=document.createElement("div");n.appendChild(o),o.textContent=g[e+1];let r=document.createElement("div");t.appendChild(r),r.classList.add("one");let l=document.createElement("div");r.appendChild(l),l.textContent="Description:",l.classList.add("oneTag");let i=document.createElement("div");r.appendChild(i),i.textContent=g[e+2];let d=document.createElement("div");t.appendChild(d),d.classList.add("one");let s=document.createElement("div");d.appendChild(s),s.textContent="Deadline:",s.classList.add("oneTag");let c=document.createElement("div");d.appendChild(c),c.textContent=g[e+3];let u=document.createElement("div");t.appendChild(u),u.classList.add("one");let p=document.createElement("div");u.appendChild(p),p.textContent="Priority:",p.classList.add("oneTag");let m=document.createElement("div");u.appendChild(m),m.textContent=g[e+4];let f=document.createElement("button");f.textContent="DELETE",f.classList.add("delateTask"),t.appendChild(f),f.addEventListener("click",(()=>{g.splice(e,5),S()}));let h=document.createElement("button");h.textContent="EDIT",h.classList.add("editTaskBtn"),t.appendChild(h);let y=function(){let n=document.createElement("form");t.appendChild(n),n.classList.add("editTaskForm");let a=document.createElement("input");a.setAttribute("type","text"),a.setAttribute("name","etaskName"),a.setAttribute("value",g[e+1]),n.appendChild(a);let o=document.createElement("textarea");o.defaultValue=g[e+2],o.setAttribute("type","text"),o.setAttribute("name","etaskNote"),o.setAttribute("rows","20"),o.setAttribute("cols","30"),n.appendChild(o);let r=document.createElement("input");r.defaultValue=g[e+3],r.setAttribute("type","date"),r.setAttribute("name","edeadline"),n.appendChild(r);let l=document.createElement("select");l.setAttribute("name","epriority");let i=document.createElement("option");i.setAttribute("value","low"),i.textContent="low",l.appendChild(i);let d=document.createElement("option");d.setAttribute("value","normal"),d.textContent="normal",l.appendChild(d);let s=document.createElement("option");s.setAttribute("value","high"),s.textContent="high",l.appendChild(s);let c=document.createElement("option");c.setAttribute("value","urgent"),c.textContent="urgent",l.appendChild(c),"low"==g[e+4]&&i.setAttribute("selected","selected"),"normal"==g[e+4]&&d.setAttribute("selected","selected"),"high"==g[e+4]&&s.setAttribute("selected","selected"),"urgent"==g[e+4]&&c.setAttribute("selected","selected"),n.appendChild(l);let u=document.createElement("input");return u.setAttribute("type","submit"),u.setAttribute("value","Submit"),n.appendChild(u),{eform:n,etaskName:a,es:u,epriority:l}}();y.es.addEventListener("click",(()=>{var t;event.preventDefault(),t=E,g.splice(e,1,t),g.splice(e+1,1,y.eform.elements.etaskName.value),g.splice(e+2,1,y.eform.elements.etaskNote.value),g.splice(e+3,1,y.eform.elements.edeadline.value),g.splice(e+4,1,y.epriority.options[y.epriority.selectedIndex].value),S(),N=0})),y.eform.style.display="none",h.addEventListener("click",(()=>{0==N?(y.eform.style.display="block",N=1):1==N&&(y.eform.style.display="none",N=0)}))}P()}function P(){window.localStorage.setItem("grp",JSON.stringify(x)),window.localStorage.setItem("tsk",JSON.stringify(g))}x=JSON.parse(window.localStorage.getItem("grp")),g=JSON.parse(window.localStorage.getItem("tsk")),A(),S()})()})();
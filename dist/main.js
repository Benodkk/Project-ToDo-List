(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(81),o=n.n(a),l=n(645),r=n.n(l)()(o());r.push([e.id,"body{\n    margin:0px;\n    font-family: Helvetica,Arial,sans-serif;\n}\n\n/* header style */\n\n.header{\n    display: flex;\n    flex-direction: column;\n    background-color: #7DD3FC;\n    box-shadow: rgba(0, 0, 0, 0.19) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 3px;\n\n}\n\n.btnPlace{\n    display: flex;\n    justify-content: space-around;\n    padding:20px\n}\n\n.newElBtn {\n  appearance: none;\n  background-color: #000000;\n  border: 2px solid #1A1A1A;\n  border-radius: 15px;\n  box-sizing: border-box;\n  color: #FFFFFF;\n  cursor: pointer;\n  display: inline-block;\n  font-family: Helvetica,Arial,sans-serif,;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: normal;\n  margin: 0;\n  min-height: 60px;\n  min-width: 0;\n  outline: none;\n  padding: 16px 24px;\n  text-align: center;\n  text-decoration: none;\n  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  width: 150px;\n  will-change: transform;\n}\n\n.newElBtn:disabled {\n  pointer-events: none;\n}\n\n.newElBtn:hover {\n  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;\n  transform: translateY(-2px);\n}\n\n.newElBtn:active {\n  box-shadow: none;\n  transform: translateY(0);\n}\n.formPlace{\n    display: Flex;\n    justify-content: space-around;\n    padding: 20px;\n}\n\n.newTaskForm{\n    flex-direction: column;\n    gap:10px;\n}\n\n\n.task {\n    display: flex;\n    gap:50px\n}\n\n/* content style */\n\n.content {\n    padding-top: 2px;\n    display: flex;\n    justify-content: space-around;\n    width: auto;\n    flex: auto;\n}\n.groups, .tasks {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n}\n\n\n/* groups */\n\n.groups{\n    border-right: 4px solid black;\n}\n\n.oneGroup{\n    display: flex;\n    justify-content: space-between;\n    height: 40px;\n    padding: 5px 10px;\n    border-bottom: solid BLACK 1px;\n}\n.oneGroup:hover{\n    background-color: #FDE047;\n}\n.submitBtn{\n    align-self: center;\n    width: max-content;\n}\n.delateGroup, .editTaskBtn, .delateTask, .submitBtn{\n    appearance: none;\n    background-color: #000000;\n    border: 2px solid #1A1A1A;\n    border-radius: 15px;\n    box-sizing: border-box;\n    color: #FFFFFF;\n    cursor: pointer;\n    display: inline-block;\n    font-family: Helvetica,Arial,sans-serif,;\n    font-size: 12px;\n    font-weight: 600;\n    line-height: normal;\n    margin: 2px;\n    outline: none;\n    padding: 6px 10px;\n    text-align: center;\n    text-decoration: none;\n    transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);\n    user-select: none;\n    -webkit-user-select: none;\n    touch-action: manipulation;\n    width: 80px;\n    will-change: transform;\n}\n.delateGroup:disabled, .editTaskBtn:disabled, .delateTask:disabled,.submitBtn:disabled {\n    pointer-events: none;\n}\n  \n.delateGroup:hover, .editTaskBtn:hover, .delateTask:hover, .submitBtn:hover{\n    box-shadow: rgba(0, 0, 0, 0.25) 0 4px 8px;\n    transform: translateY(-1px);\n}\n  \n.delateGroup:active, .editTaskBtn:active, .delateTask:active, .submitBtn:active {\n    box-shadow: none;\n    transform: translateY(0);\n}\n\n.newGroup{\n    display: flex;\n    align-items: center;\n}\n\n/* tasks */\n\n.oneTag{\n    font-weight: 900;\n}\n.one{\n    display: flex;\n    gap:2px;\n}\n\n.oneTask{\n    display: flex;\n    flex-direction: column;\n    gap:4px;\n    padding:4px;\n    border-bottom: solid BLACK 1px;\n}\n\n.taskButtons{\n    display: flex;\n    gap:10px\n}",""]);const i=r},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,o,l){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(a)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(r[s]=!0)}for(var d=0;d<e.length;d++){var c=[].concat(e[d]);a&&r[c[0]]||(void 0!==l&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=l),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),t.push(c))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var l={},r=[],i=0;i<e.length;i++){var s=e[i],d=a.base?s[0]+a.base:s[0],c=l[d]||0,p="".concat(d," ").concat(c);l[d]=c+1;var u=n(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=o(m,a);a.byIndex=i,t.splice(i,0,{identifier:p,updater:f,references:1})}r.push(p)}return r}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var l=a(e=e||[],o=o||{});return function(e){e=e||[];for(var r=0;r<l.length;r++){var i=n(l[r]);t[i].references--}for(var s=a(e,o),d=0;d<l.length;d++){var c=n(l[d]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}l=s}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,o&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var l=n.sourceMap;l&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(l))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var l=t[a]={id:a,exports:{}};return e[a](l,l.exports,n),l.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),a=n(795),o=n.n(a),l=n(569),r=n.n(l),i=n(565),s=n.n(i),d=n(216),c=n.n(d),p=n(589),u=n.n(p),m=n(426),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=r().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=c(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=document.querySelector(".content"),b=function(){const e=document.createElement("div");h.appendChild(e),e.classList.add("groups");const t=document.createElement("div");return h.appendChild(t),t.classList.add("tasks"),{groups:e,tasks:t}}(),v=document.querySelector(".header");let x=function(){const e=document.createElement("div");v.appendChild(e),e.classList.add("btnPlace");const t=document.createElement("div");return v.appendChild(t),t.classList.add("formPlace"),{btnPlace:e,formPlace:t}}(),g=function(){const e=document.createElement("button");x.btnPlace.appendChild(e),e.textContent="New Group",e.classList.add("newElBtn");const t=document.createElement("h1");x.btnPlace.appendChild(t),t.textContent="ToDo List",t.classList.add("title");const n=document.createElement("button");return x.btnPlace.appendChild(n),n.textContent="New Task",n.classList.add("newElBtn"),{newGroup:e,newTask:n}}();document.querySelector(".header");let y=[],C=[],E="",k=function(){let e=document.createElement("form");x.formPlace.appendChild(e);let t=document.createElement("input");t.setAttribute("type","text"),t.setAttribute("name","groupName"),t.setAttribute("placeholder","Group Name"),e.appendChild(t);let n=document.createElement("input");return n.setAttribute("type","submit"),n.setAttribute("value","SUBMIT"),n.classList.add("submitBtn"),e.appendChild(n),{form:e,groupName:t,s:n}}();g.newGroup.addEventListener("click",(()=>{0==L?(k.form.style.display="block",L=1):1==L&&(k.form.style.display="none",L=0)}));let A=0;function w(){b.groups.textContent="",""!==k.form.elements.groupName.value&&y.push(k.form.elements.groupName.value);for(let e=0;e<y.length;e++){let t=document.createElement("div");b.groups.appendChild(t),t.classList.add("oneGroup");let n=document.createElement("div");t.appendChild(n),n.classList.add("newGroup"),n.textContent=y[e],t.addEventListener("click",(()=>{let e="";e=Array.from(document.querySelectorAll(".oneGroup"));for(let t=0;t<e.length;t++)e[t].style.backgroundColor="";for(let e=0;e<y.length;e++)y[e]==n.textContent&&(t.remove,E=n.textContent,F(),t.style.backgroundColor="#FEF08A",A=1)}));let a=document.createElement("button");t.appendChild(a),a.textContent="DELETE",a.classList.add("delateGroup"),a.addEventListener("click",(()=>{A=0,console.log(A);let t=y[e];y.splice(e,1),w();for(let e=0;e<C.length;e++)C[e]==t&&(C.splice(e,5),F());b.tasks.textContent="",S()}))}k.form.style.display="none",L=0,k.groupName.value="",console.log(A)}let L=0;k.form.style.display="none",k.s.addEventListener("click",(()=>{A=0,event.preventDefault(),w(),F(),b.tasks.textContent="",S()}));let T=function(){let e=document.createElement("form");x.formPlace.appendChild(e),e.classList.add("newTaskForm");let t=document.createElement("input");t.setAttribute("type","text"),t.setAttribute("name","taskName"),t.setAttribute("placeholder","Task Name"),e.appendChild(t);let n=document.createElement("textarea");n.setAttribute("type","text"),n.setAttribute("name","taskNote"),n.setAttribute("placeholder","Task Note"),n.setAttribute("rows","20"),n.setAttribute("cols","30"),e.appendChild(n);let a=document.createElement("div");a.textContent="Deadline:",e.appendChild(a);let o=document.createElement("input");o.setAttribute("type","date"),o.setAttribute("name","deadline"),e.appendChild(o);let l=document.createElement("div");l.textContent="Priority:",e.appendChild(l);let r=document.createElement("select");r.setAttribute("name","priority");let i=document.createElement("option");i.setAttribute("value","low"),i.textContent="low",r.appendChild(i);let s=document.createElement("option");s.setAttribute("value","normal"),s.textContent="normal",r.appendChild(s);let d=document.createElement("option");d.setAttribute("value","high"),d.textContent="high",r.appendChild(d);let c=document.createElement("option");c.setAttribute("value","urgent"),c.textContent="urgent",r.appendChild(c),e.appendChild(r);let p=document.createElement("input");return p.setAttribute("type","submit"),p.setAttribute("value","SUBMIT"),p.classList.add("submitBtn"),e.appendChild(p),{form:e,taskName:t,s:p,priority:r}}();g.newTask.addEventListener("click",(()=>{console.log(A),0==A&&alert("Please, choose the group!"),1==A&&(0==N?(T.form.style.display="flex",N=1):1==N&&(T.form.style.display="none",N=0))}));let N=0;T.form.style.display="none",T.s.addEventListener("click",(()=>{var e;event.preventDefault(),e=E,C.push(e),C.push(T.form.elements.taskName.value),C.push(T.form.elements.taskNote.value),C.push(T.form.elements.deadline.value),C.push(T.priority.options[T.priority.selectedIndex].value),T.form.style.display="none",N=0,T.taskName.value="",F()}));let B=0;function F(){b.tasks.textContent="";for(let e=0;e<C.length;e++)if(e%5==0&&C[e]==E){let t=document.createElement("div");b.tasks.appendChild(t),t.classList.add("oneTask");let n=document.createElement("div");t.appendChild(n),n.classList.add("one");let a=document.createElement("div");n.appendChild(a),a.textContent="Task: ",a.classList.add("oneTag");let o=document.createElement("div");n.appendChild(o),o.textContent=C[e+1];let l=document.createElement("div");t.appendChild(l),l.classList.add("one");let r=document.createElement("div");l.appendChild(r),r.textContent="Description: ",r.classList.add("oneTag");let i=document.createElement("div");l.appendChild(i),i.textContent=C[e+2];let s=document.createElement("div");t.appendChild(s),s.classList.add("one");let d=document.createElement("div");s.appendChild(d),d.textContent="Deadline: ",d.classList.add("oneTag");let c=document.createElement("div");s.appendChild(c),c.textContent=C[e+3];let p=document.createElement("div");t.appendChild(p),p.classList.add("one");let u=document.createElement("div");p.appendChild(u),u.textContent="Priority: ",u.classList.add("oneTag");let m=document.createElement("div");p.appendChild(m),m.textContent=C[e+4];let f=document.createElement("div");f.classList.add("taskButtons"),t.appendChild(f);let h=document.createElement("button");h.textContent="DELETE",h.classList.add("delateTask"),f.appendChild(h),h.addEventListener("click",(()=>{C.splice(e,5),F()}));let v=document.createElement("button");v.textContent="EDIT",v.classList.add("editTaskBtn"),f.appendChild(v);let x=function(){let n=document.createElement("form");t.appendChild(n),n.classList.add("editTaskForm");let a=document.createElement("input");a.setAttribute("type","text"),a.setAttribute("name","etaskName"),a.setAttribute("value",C[e+1]),n.appendChild(a);let o=document.createElement("textarea");o.defaultValue=C[e+2],o.setAttribute("type","text"),o.setAttribute("name","etaskNote"),o.setAttribute("rows","20"),o.setAttribute("cols","30"),n.appendChild(o);let l=document.createElement("input");l.defaultValue=C[e+3],l.setAttribute("type","date"),l.setAttribute("name","edeadline"),n.appendChild(l);let r=document.createElement("select");r.setAttribute("name","epriority");let i=document.createElement("option");i.setAttribute("value","low"),i.textContent="low",r.appendChild(i);let s=document.createElement("option");s.setAttribute("value","normal"),s.textContent="normal",r.appendChild(s);let d=document.createElement("option");d.setAttribute("value","high"),d.textContent="high",r.appendChild(d);let c=document.createElement("option");c.setAttribute("value","urgent"),c.textContent="urgent",r.appendChild(c),"low"==C[e+4]&&i.setAttribute("selected","selected"),"normal"==C[e+4]&&s.setAttribute("selected","selected"),"high"==C[e+4]&&d.setAttribute("selected","selected"),"urgent"==C[e+4]&&c.setAttribute("selected","selected"),n.appendChild(r);let p=document.createElement("input");return p.setAttribute("type","submit"),p.setAttribute("value","SUBMIT"),p.classList.add("submitBtn"),n.appendChild(p),{eform:n,etaskName:a,es:p,epriority:r}}();x.es.addEventListener("click",(()=>{var t;event.preventDefault(),t=E,C.splice(e,1,t),C.splice(e+1,1,x.eform.elements.etaskName.value),C.splice(e+2,1,x.eform.elements.etaskNote.value),C.splice(e+3,1,x.eform.elements.edeadline.value),C.splice(e+4,1,x.epriority.options[x.epriority.selectedIndex].value),F(),B=0})),x.eform.style.display="none",v.addEventListener("click",(()=>{0==B?(x.eform.style.display="block",B=1):1==B&&(x.eform.style.display="none",B=0)}))}S()}function S(){window.localStorage.setItem("grp",JSON.stringify(y)),window.localStorage.setItem("tsk",JSON.stringify(C))}y=JSON.parse(window.localStorage.getItem("grp")),C=JSON.parse(window.localStorage.getItem("tsk")),w(),F()})()})();
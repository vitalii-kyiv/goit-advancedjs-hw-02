import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */const e=document.querySelector("button[data-start]"),t=document.querySelector("button[data-stop]"),n=document.querySelector("body"),a=1e3;let o=null;t.disabled=!0;e.addEventListener("click",r);t.addEventListener("click",d);function r(){o=setInterval(()=>{n.style.backgroundColor=l()},a),e.disabled=!0,t.disabled=!1}function d(){t.disabled=!0,e.disabled=!1,clearTimeout(o)}function l(){return`#${Math.floor(Math.random()*16777215).toString(16).padStart(6,"0")}`}
//# sourceMappingURL=commonHelpers.js.map

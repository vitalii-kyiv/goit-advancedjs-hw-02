import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i as c}from"./assets/vendor-651d7991.js";const m=document.querySelector(".form"),{delay:a,step:l,amount:p,submitButton:C}=m.elements;m.addEventListener("submit",f);function g(o,t){return new Promise((s,r)=>{const e=Math.random()>.3;setTimeout(()=>{e?s({position:o,delay:t}):r({position:o,delay:t})},t)})}function f(o){o.preventDefault();const t=Number(a.value),s=Number(l.value),r=Number(p.value);for(let e=1;e<=r;e++){const u=t+(e-1)*s;g(e,u).then(({position:n,delay:i})=>{c.success({closeOnEscape:!0,closeOnClick:!0,backgroundColor:"green",messageColor:"white",position:"topRight",messageSize:"24",message:`✅ Fulfilled promise ${n} in ${i}ms`})}).catch(({position:n,delay:i})=>{c.error({closeOnEscape:!0,closeOnClick:!0,backgroundColor:"tomato",messageColor:"white",position:"topRight",messageSize:"24",message:`❌ Rejected promise ${n} in ${i}ms`})})}m.reset()}
//# sourceMappingURL=commonHelpers3.js.map

import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as u}from"./assets/vendor-992cd48f.js";const n=document.querySelector("button[data-start]"),l=document.querySelector("#datetime-picker");let t=0,r={};n.disabled=!0;const d={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0].getTime()>new Date().getTime()?(n.disabled=!1,t=e[0].getTime()-new Date().getTime(),r=o(t),console.log(o(t))):window.alert("Please choose a date in the future")}};u(l,d);function o(e){const a=Math.floor(e/864e5),s=Math.floor(e%864e5/36e5),c=Math.floor(e%864e5%36e5/6e4),i=Math.floor(e%864e5%36e5%6e4/1e3);return{days:a,hours:s,minutes:c,seconds:i}}console.log(r);
//# sourceMappingURL=commonHelpers2.js.map

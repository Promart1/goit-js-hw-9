const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body");function o(){const t=r();n.style.background=t}function o(){const t=r();n.style.background=t}function r(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}t.addEventListener("click",(()=>{startId=setInterval((()=>{o(),t.disabled=!0,console.log(o)}),1e3)})),e.addEventListener("click",(()=>{clearInterval(startId),t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.2618db2b.js.map

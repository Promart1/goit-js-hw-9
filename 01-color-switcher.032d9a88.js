!function(){var t=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]"),e=document.querySelector("body");function o(){var t=a();e.style.background=t}function o(){var t=a();e.style.background=t}function a(){return"#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}t.addEventListener("click",(function(){startId=setInterval((function(){o(),t.disabled=!0,console.log(o)}),1e3)})),n.addEventListener("click",(function(){clearInterval(startId),t.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.032d9a88.js.map

import e from"animejs/lib/anime.es.js";function n(n,i){i=Object.assign({duration:400,easing:"linear",beginFunc:void 0,completeFunc:void 0},i),e.remove(n);let t=function(e,n){return document.defaultView.getComputedStyle(e).getPropertyValue("opacity")}(n);t=void 0===t?1:parseFloat(t),""==n.style.opacity&&(n.style.opacity=0),e({targets:n,opacity:t,duration:i.duration,easing:i.easing,begin:function(e){n.style.display="",void 0!==i.beginFunc&&i.beginFunc()},complete:function(e){n.style.opacity=null,void 0!==i.completeFunc&&i.completeFunc()}})}function i(n,i){i=Object.assign({duration:400,easing:"linear",beginFunc:void 0,completeFunc:void 0},i),e.remove(n),e({targets:n,opacity:0,duration:i.duration,easing:i.easing,begin:function(e){void 0!==i.beginFunc&&i.beginFunc()},complete:function(e){n.style.opacity=null,n.style.display="none",void 0!==i.completeFunc&&i.completeFunc()}})}export{n as fadeIn,i as fadeOut};
//# sourceMappingURL=index.modern.mjs.map

import anime from 'animejs/lib/anime.es.js';

export function fadeIn(elem, options) {
  options = Object.assign(defaultOptions(), options);
  anime.remove(elem);

  let opacity = computedStyle(elem, 'opacity');
  opacity = (opacity === undefined) ? 1 : parseFloat(opacity);
  if (elem.style.opacity == '') elem.style.opacity = 0;

  anime({
    targets: elem,
    opacity: opacity,
    duration: options.duration,
    easing: options.easing,
    begin: function(a) {
      elem.style.display = '';
      if (options.beginFunc !== undefined) options.beginFunc();
    },
    complete: function(a) {
      elem.style.opacity = null;
      if (options.completeFunc !== undefined) options.completeFunc();
    }
  });
}

export function fadeOut(elem, options) {
  options = Object.assign(defaultOptions(), options);
  anime.remove(elem);

  anime({
    targets: elem,
    opacity: 0,
    duration: options.duration,
    easing: options.easing,
    begin: function(a) {
      if (options.beginFunc !== undefined) options.beginFunc();
    },
    complete: function(a) {
      elem.style.opacity = null;
      elem.style.display = 'none';
      if (options.completeFunc !== undefined) options.completeFunc();
    }
  });
}

function defaultOptions() {
  return {
    duration: 400,
    easing: 'linear',
    beginFunc: undefined,
    completeFunc: undefined
  };
}

function computedStyle(elem, property) {
  return document.defaultView.getComputedStyle(elem).getPropertyValue(property);
}

import { animate, utils } from 'animejs';

export function fadeIn(elem, options) {
  options = Object.assign(defaultOptions(), options);
  utils.remove(elem);

  let opacity = computedStyle(elem, 'opacity');
  opacity = (opacity === undefined) ? 1 : parseFloat(opacity);
  if (elem.style.opacity == '') elem.style.opacity = 0;

  animate(elem, {
    opacity: opacity,
    duration: options.duration,
    ease: options.ease,
    onBegin: function(a) {
      elem.style.display = '';
      if (options.beginFunc !== undefined) options.beginFunc();
    },
    onComplete: function(a) {
      elem.style.opacity = null;
      if (options.completeFunc !== undefined) options.completeFunc();
    }
  });
}

export function fadeOut(elem, options) {
  options = Object.assign(defaultOptions(), options);
  utils.remove(elem);

  animate(elem, {
    opacity: 0,
    duration: options.duration,
    ease: options.ease,
    onBegin: function(a) {
      if (options.beginFunc !== undefined) options.beginFunc();
    },
    onComplete: function(a) {
      elem.style.opacity = null;
      elem.style.display = 'none';
      if (options.completeFunc !== undefined) options.completeFunc();
    }
  });
}

function defaultOptions() {
  return {
    duration: 400,
    ease: 'linear',
    beginFunc: undefined,
    completeFunc: undefined
  };
}

function computedStyle(elem, property) {
  return document.defaultView.getComputedStyle(elem).getPropertyValue(property);
}

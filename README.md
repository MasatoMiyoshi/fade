# fade

A javascript library for fade component.

## Dependencies

- animejs

## Installation

Install from npm:

    $ npm install @masatomiyoshi/fade --save

## Usage

Import function:

```javascript
import { fadeIn, fadeOut } from '@masatomiyoshi/fade'
```

Build html as follows:

```html
<div class="fade-in__link"><a href="#">Fade in</a></div>
<div class="fade-out__link"><a href="#">Fade out</a></div>
<div class="content">
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
</div>
```

Build events:

```javascript
document.querySelector('.fade-in__link').addEventListener('click', () => {
  fadeIn(document.querySelector('.content'));
});
document.querySelector('.fade-out__link').addEventListener('click', () => {
  fadeOut(document.querySelector('.content'));
});
```

## License

The library is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

import { fadeIn, fadeOut } from 'index';

describe('index', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="fade-in__link"><a href="#">Fade in</a></div>
      <div class="fade-out__link"><a href="#">Fade out</a></div>
      <div class="content">
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      </div>
    `;
  });

  it('fades in', () => {
    let link = document.querySelector('.fade-in__link');
    link.addEventListener('click', () => {
      fadeIn(document.querySelector('.content'));
    });
    link.dispatchEvent(new MouseEvent('click'));
    expect(document.querySelector('.content').style.opacity).not.toEqual('');
  });

  it('fades out', () => {
    let link = document.querySelector('.fade-out__link');
    link.addEventListener('click', () => {
      fadeOut(document.querySelector('.content'));
    });
    link.dispatchEvent(new MouseEvent('click'));
    expect(document.querySelector('.content').style.opacity).not.toEqual('');
  });
});

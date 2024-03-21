const bar = document.querySelector('#bar');
const close = document.querySelector('#close');
const link = document.querySelector('#links');

if (bar) {
  bar.addEventListener('click', () => {
    link.classList.add('active');
  })
}

if (close) {
  close.addEventListener('click', () => {
    link.classList.remove('active');
  })
}
const body = document.body;

const displayElement = (elem) => {
  let modal = document.getElementById(elem);
  modal.style.display = 'flex';
  const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  body.style.position = 'fixed';
  body.style.top = `-${scrollY}`;
}

const closeElement = (elem) => {
  let modal = document.getElementById(elem);
  modal.style.display = 'none';
  const scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
}

window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});
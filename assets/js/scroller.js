(function() {
  const scroller = document.querySelector('.scroller');
  const controlPrev = scroller.querySelector('.scroller-prev');
  const controlNext = scroller.querySelector('.scroller-next');

  const lPoster = document.querySelector('.l-poster');
  controlNext.addEventListener('click', e => {
    lPoster.scrollLeft += 250;
    if (controlPrev.classList.contains('disabled')) controlPrev.classList.remove('disabled');
  });
  controlPrev.addEventListener('click', e => {
    lPoster.scrollLeft -= 250;
  });
})()
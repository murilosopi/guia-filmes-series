(function() {
  const ratingList = document.querySelectorAll('#rating-list > *');
  ratingList.forEach(star => {
    star.addEventListener('click', () => {
      const ratingValue = star.getAttribute('data-rating');
      const inputrating = document.getElementById('rating');
      inputrating.value = ratingValue;

      unfillAllStars();
      fillStarsUntil(ratingValue);
    });
  });

  function unfillAllStars() {
    ratingList.forEach(star => {
      star.firstChild.className = "bi bi-star";
    })
  }

  function fillStarsUntil(max) {
    ratingList.forEach(star => {
      if(star.getAttribute('data-rating') <= max) {
        star.firstChild.className = "bi bi-star-fill";
      }
    })
  }
})()
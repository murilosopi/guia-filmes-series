(function() {
  const ratingList = document.querySelectorAll('#rating-list > *');
  ratingList.forEach(star => {
    star.addEventListener('click', () => {
      const rateValue = star.getAttribute('data-rate');
      const inputRate = document.getElementById('rate');
      inputRate.value = rateValue;

      unfillAllStars();
      fillStarsUntil(rateValue);
    });
  });

  function unfillAllStars() {
    ratingList.forEach(star => {
      star.firstChild.className = "bi bi-star";
    })
  }

  function fillStarsUntil(max) {
    ratingList.forEach(star => {
      if(star.getAttribute('data-rate') <= max) {
        star.firstChild.className = "bi bi-star-fill";
      }
    })
  }
})()
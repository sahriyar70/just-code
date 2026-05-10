

const lazyImages = document.querySelectorAll(".lazy");

const observer = new IntersectionObserver((entries, obs) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      const img = entry.target;

      
      img.src = img.dataset.src;
      img.classList.add("loaded")

      
      obs.unobserve(img);

    }

  });

}, {
  root: null,
  threshold: 0.1
});

lazyImages.forEach(img => {
  observer.observe(img);
});
document.addEventListener('DOMContentLoaded', () => {
  const prevBtn = document.querySelector('.carousel-control1.prev1');
  const nextBtn = document.querySelector('.carousel-control1.next1');
  const carouselInner = document.querySelector('.carousel-inner1');
  const dots = document.querySelectorAll('.carousel-dots1 .dot');
  let currentIndex = 0;
  const intervalTime = 3000; // Time in milliseconds

  const updateCarousel = () => {
    const width = carouselInner.clientWidth;
    carouselInner.style.transform = `translateX(-${currentIndex * width}px)`;
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  };

  const moveToNext = () => {
    currentIndex = (currentIndex + 1) % carouselInner.children.length;
    updateCarousel();
  };

  nextBtn.addEventListener('click', moveToNext);

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselInner.children.length) % carouselInner.children.length;
    updateCarousel();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      updateCarousel();
    });
  });

  const startAutoSlide = () => setInterval(moveToNext, intervalTime);

  window.addEventListener('resize', updateCarousel);

  const autoSlideInterval = startAutoSlide();
});
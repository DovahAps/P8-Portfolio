
// Carousel functionality
document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const items = Array.from(track?.children || []);
  const nextButton = document.querySelector('.carousel-btn.next');
  const prevButton = document.querySelector('.carousel-btn.prev');
  let currentIndex = 0;

  // Update carousel position
  function updateCarousel(index) {
    const itemWidth = items[0]?.getBoundingClientRect().width || 0;
    track.style.transform = `translateX(-${index * itemWidth}px)`;
  }

  // Ensure items are spaced properly
  function setCarouselItems() {
    if (!track || items.length === 0) {
      console.error('Carousel track or items not found.');
      return;
    }
    items.forEach((item, index) => {
      item.style.left = `${index * 100}%`;
    });
  }

  // Initialize carousel
  setCarouselItems();

  // Next button
  if (nextButton) {
    nextButton.addEventListener('click', () => {
      if (!items || items.length === 0) return;
      currentIndex = (currentIndex + 1) % items.length;
      updateCarousel(currentIndex);
    });
  } else {
    console.error('Next button not found.');
  }

  // Previous button
  if (prevButton) {
    prevButton.addEventListener('click', () => {
      if (!items || items.length === 0) return;
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      updateCarousel(currentIndex);
    });
  } else {
    console.error('Previous button not found.');
  }
});

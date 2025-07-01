<script>
  // Slideshow functionality
  let slideIndex = 0;
  showSlides();

  function showSlides() {
    const slides = document.querySelectorAll(".slide");
    slides.forEach(slide => slide.style.display = "none");
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    if (slides.length > 0) slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
  }

  // Toggle hidden galleries (if you use sections)
  function toggleGallery(id) {
    const sections = document.querySelectorAll('.hidden-gallery');
    sections.forEach(section => {
      if (section.id === id) {
        section.style.display = section.style.display === 'block' ? 'none' : 'block';
      } else {
        section.style.display = 'none';
      }
    });
  }

  // Gallery category filter (kitchen/bathroom/laundry)
  document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Set active button style
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const category = button.getAttribute('data-category');

        galleryItems.forEach(item => {
          if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  });
  
</script>


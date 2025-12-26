// Select all images inside gallery items
const galleryItems = document.querySelectorAll('.gallery-item img');

// Lightbox main container
const lightbox = document.querySelector('.lightbox');

// Image shown inside lightbox
const lightboxImg = document.querySelector('.lightbox img');

// Lightbox control buttons
const closeBtn = document.querySelector('.lightbox .close');
const nextBtn = document.querySelector('.lightbox .next');
const prevBtn = document.querySelector('.lightbox .prev');



// Keeps track of currently opened image index
let currentIndex = 0;

// Convert NodeList into Array for easy handling
let imagesArray = Array.from(galleryItems);


// LightBox Functions 

// Open lightbox and show clicked image
function openLightbox(index) {
  currentIndex = index;
  lightboxImg.src = imagesArray[currentIndex].src;
  lightbox.style.display = 'flex';
}

// Close lightbox
function closeLightbox() {
  lightbox.style.display = 'none';
}

// Show next image
function nextImage() {
  currentIndex = (currentIndex + 1) % imagesArray.length;
  lightboxImg.src = imagesArray[currentIndex].src;
}

// Show previous image
function prevImage() {
  currentIndex = (currentIndex - 1 + imagesArray.length) % imagesArray.length;
  lightboxImg.src = imagesArray[currentIndex].src;
}


// Event Listener fo Gallery Image 

// Open lightbox when any image is clicked
imagesArray.forEach((img, index) => {
  img.addEventListener('click', () => openLightbox(index));
});


// Event Listener fo LightBox Controls 

// Close button
closeBtn.addEventListener('click', closeLightbox);

// Next & Previous buttons
nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

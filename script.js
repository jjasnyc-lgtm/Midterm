// Auto-populate Other Designs Gallery
const gallery = document.getElementById('design-gallery');

// List of images in the images folder (update filenames as needed)
const designImages = [
  'green-plaza.jpg',
  'market-plaza.jpg',
  'safety-plaza.jpg'
];

designImages.forEach(imgName => {
  const img = document.createElement('img');
  img.src = `images/${imgName}`;
  img.alt = imgName;
  gallery.appendChild(img);
});

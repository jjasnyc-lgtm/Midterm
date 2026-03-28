// Get the container
const designGrid = document.getElementById('designGrid');

// List of all images you uploaded
// You can add more here, just by keeping the correct folder path
const images = [
  "images/img1.jpg",
  "images/img2.jpg",
  "images/img3.jpg",
  "images/img4.jpg",
  "images/img5.jpg",
  "images/img6.jpg"
];

// Automatically create image elements
images.forEach(src => {
  const img = document.createElement('img');
  img.src = src;
  img.alt = "Design image";
  img.classList.add('grid-image'); // optional CSS class
  designGrid.appendChild(img);
});

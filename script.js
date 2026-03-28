// Array of Before & After pairs
const beforeAfterPairs = [
  { prompt: "Green Plaza", before: "before-green.jpg", after: "after-green.jpg" },
  { prompt: "Market Plaza", before: "before-market.jpg", after: "after-market.jpg" },
  { prompt: "Safety Plaza", before: "before-safety.jpg", after: "after-safety.jpg" },
  // Add new prompts here with their filenames
];

// Populate Before & After sections dynamically
const beforeAfterContainer = document.getElementById("before-after");

beforeAfterPairs.forEach(pair => {
  const section = document.createElement("div");
  section.className = "before-after-section";

  section.innerHTML = `
    <h3>${pair.prompt}</h3>
    <div class="photos">
      <div class="before-photo">
        <img src="images/${pair.before}" alt="Before ${pair.prompt}">
        <p>Before</p>
      </div>
      <div class="after-photo">
        <img src="images/${pair.after}" alt="After ${pair.prompt}">
        <p>After</p>
      </div>
    </div>
  `;

  beforeAfterContainer.appendChild(section);
});

// Auto-populate other design images gallery
const gallery = document.getElementById('design-gallery');
const designImages = ["green-plaza.jpg","market-plaza.jpg","safety-plaza.jpg"]; // Add any extra images
designImages.forEach(imgName => {
  const img = document.createElement('img');
  img.src = `images/${imgName}`;
  img.alt = imgName;
  gallery.appendChild(img);
});

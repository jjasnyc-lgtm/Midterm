// Before & After image pairs
const beforeAfterPairs = [
  { prompt:"Green Plaza", before:"before-green.jpg", after:"after-green.jpg" },
  { prompt:"Market Plaza", before:"before-market.jpg", after:"after-market.jpg" },
  { prompt:"Safety Plaza", before:"before-safety.jpg", after:"after-safety.jpg" }
];

// Insert Before & After sections
const container = document.getElementById("before-after");
beforeAfterPairs.forEach(pair=>{
  const section = document.createElement("div");
  section.className="before-after-section";
  section.innerHTML=`
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
  container.appendChild(section);
});

// Populate gallery with your images
const gallery = document.getElementById("design-gallery");
const galleryImages = [
  "before-green.jpg","after-green.jpg",
  "before-market.jpg","after-market.jpg",
  "before-safety.jpg","after-safety.jpg"
];
galleryImages.forEach(img=>{
  const i = document.createElement("img");
  i.src=`images/${img}`;
  i.alt=img;
  gallery.appendChild(i);
});

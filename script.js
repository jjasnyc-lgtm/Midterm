// List your Before and After image pairs here
const beforeAfterPairs = [
  { prompt: "Green Plaza", before: "before-green.jpg", after: "after-green.jpg" },
  { prompt: "Market Plaza", before: "before-market.jpg", after: "after-market.jpg" },
  { prompt: "Safety Plaza", before: "before-safety.jpg", after: "after-safety.jpg" }
];

// Insert sections
const container = document.getElementById("before-after");
beforeAfterPairs.forEach(pair => {
  const s = document.createElement("div");
  s.className = "before-after-section";
  s.innerHTML = `
    <h3>${pair.prompt}</h3>
    <div class="photos">
      <div class="before-photo">
        <img src="images/${pair.before}" alt="Before ${pair.prompt}">
      </div>
      <div class="after-photo">
        <img src="images/${pair.after}" alt="After ${pair.prompt}">
      </div>
    </div>
  `;
  container.appendChild(s);
});

// Gallery
const gallery = document.getElementById("design-gallery");
const designs = ["green-plaza.jpg","market-plaza.jpg","safety-plaza.jpg"];
designs.forEach(img => {
  const i = document.createElement("img");
  i.src = `images/${img}`;
  i.alt = img;
  gallery.appendChild(i);
});

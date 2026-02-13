const words = ["Vision", "Sunglasses", "Blue Cut", "Aviators", "Wayfarers", "Kids Frames"];
let index = 0;

setInterval(() => {
  index = (index + 1) % words.length;
  document.getElementById("changing-text").textContent = words[index];
}, 2000);

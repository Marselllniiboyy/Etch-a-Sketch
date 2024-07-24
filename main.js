// lest gooo!!!
const container = document.querySelector("#container");
const gridSize = 16;

//grid colom
for (let i = 0; i < gridSize; i++) {
  for (let j = 0; j < gridSize; j++) {
    const page = document.createElement("div");
    page.classList.add("square");
    // Hover
    page.addEventListener("mouseover", function () {
      this.style.backgroundColor = "red";
    });
    // leave Hovere
    page.addEventListener("mouseleave", function () {
      this.style.backgroundColor = "red";
    });
    container.appendChild(page);
  }
}

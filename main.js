// lest gooo!!!
const container = document.querySelector("#container");
const btnSize = document.querySelector("#btnSize");
let gridSize = 16;

//grid colom
function createdGrid(size) {
  container.innerHTML = "";
  const squareSize = ` calc(100% / ${size})`;

  for (let i = 0; i < size; i++) {
    console.log(i);
    for (let j = 0; j < size; j++) {
      console.log(j);
      const page = document.createElement("div");
      page.classList.add("square");
      page.style.width = squareSize;
      page.style.height = squareSize;
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
}

// btn cngae colom
function changeGrid() {
  let inputGrid = Number(prompt("Enter number of squares.."));
  console.log(inputGrid);
  if (inputGrid > 100 || inputGrid < 0) {
    alert("Your input cant be more than 100 and less than 0");
    gridSize = 0;
  } else {
    gridSize = Number(inputGrid);
  }
  createdGrid(gridSize);
}

btnSize.addEventListener("click", function () {
  changeGrid();
});

createdGrid();

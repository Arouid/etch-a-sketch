// row and column put into an array. Saving for legacy
// ******************************************
// const rowarray = []; // holds 16 row divs
// for (i = 0; i < 16; i++) {
//   const row = document.createElement("div");
//   rowarray.push(row)};
// ******************************************
// const columnarray = []; // hold the 256 columns
// for (i = 0; i < 16 * 16; i++) {
//   const column = document.createElement("div");
//   columnarray.push(column)};

// the main event, hopefully modular!

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");

  // Function to create the 16x16 grid
  function createGrid(size) {
    container.innerHTML = ""; // Clear existing grid
    for (let k = 0; k < size; k++) {
      const row = document.createElement("div");
      row.className = "row";
      container.append(row);

      for (let i = 0; i < size; i++) {
        const column = document.createElement("div");
        column.className = "column";
        row.append(column);

        // Add hover effect
        column.addEventListener("mouseover", () => {
          column.style.backgroundColor = "#000";
        });
      }
    }
  }
  createGrid(16);

  // reset/change grid size
  const resetButton = document.querySelector("#resetBtn");
  resetButton.addEventListener("click", () => {
    const size = prompt("Choose a new gridsize", 16);
    if (size !== null && !isNaN(size) && size > 0) {
      createGrid(size);
    } else {
      alert("ERROR");
    }
  });
});

// refactored code and stuck it all in the top layer function

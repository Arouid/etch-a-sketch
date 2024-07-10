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
  const container = document.createElement("div");
  container.id = "flexGrid";
  container.className = "container";
  document.body.append(container);

  for (let k = 0; k < 16; k++) {
    const row = document.createElement("div");
    row.className = "row";
    container.append(row);

    for (let i = 0; i < 16; i++) {
      const column = document.createElement("div");
      column.className = "column";
      row.append(column);

      column.addEventListener("mouseover", () => {
        column.style.backgroundColor = "#000";
      });
    }
  }
});

// refactored code and stuck it all in the top layer function

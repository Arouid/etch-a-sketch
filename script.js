// grid wrapper

const container = document.createElement("div");
container.id = "flexGrid";
container.className = "container";
document.body.append(container);

// row code

const rowarray = []; // holds 16 row divs
for (i = 0; i < 16; i++) {
  const row = document.createElement("div");
  rowarray.push(row);
}
// column code

const columnarray = []; // hold the 256 columns
for (i = 0; i < 16 * 16; i++) {
  const column = document.createElement("div");
  columnarray.push(column);
}

// Build the 16x16 grid dynamically

for (let k = 0; k < 16; k++) {
  rows = rowarray.pop();
  container.append(rows);
  rows.className = "row";

  for (let i = 0; i < 16; i++) {
    column = columnarray.pop();
    rows.append(column);
    column.className = "column";
  }
}

const container = document.createElement("div");
container.id = "flexGrid";
container.className = "container";
document.body.append(container);

for (i = 0; i < 16; i++) {
  const rowDiv = document.createElement("div");
  rowDiv.className = "row";
  container.append(rowDiv);
}

// const buildrows = () => {
//   document.createElement("div");
//   //   document.container.append();
// };

// buildrows();

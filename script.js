const grid = document.querySelector(".grid");

for (let i = 2; i <= 100; i++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-item");
    cell.textContent = i;
    grid.appendChild(cell);
}

const button = document.getElementById("button");
let isDragging = false;

button.addEventListener("mousedown", (e) => {
    isDragging = true;
    button.style.zIndex = "1";
});

grid.addEventListener("mouseup", () => {
    isDragging = false;
    button.style.zIndex = "0";
});
grid.addEventListener("mousemove", (e) => {
    if (isDragging) {
        const column = Math.min(10, Math.max(1, Math.floor(e.clientX / (grid.offsetWidth / 10)) + 1));
        const row = Math.min(10, Math.max(1, Math.floor(e.clientY / (grid.offsetHeight / 10)) + 1));
        button.style.gridColumn = column;
        button.style.gridRow = row;
    }

    if (isResizing) {
        const width = Math.min(10, Math.max(1, Math.floor(e.clientX / (grid.offsetWidth / 10)) + 1));
        const height = Math.min(10, Math.max(1, Math.floor(e.clientY / (grid.offsetHeight / 10)) + 1));
        button.style.gridColumn = "auto / span " + width;
        button.style.gridRow = "auto / span " + height;
    }
});
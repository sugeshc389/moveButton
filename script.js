const grid = document.querySelector(".grid");
const button = document.getElementById("resizableButton");

for (let i = 1; i < 100; i++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-item");
    cell.textContent = i + 1;
    grid.appendChild(cell);
}

let isDragging = false;
let isResizing = false;
let startX, startY, initialX, initialY;
let startWidth, startHeight;

button.addEventListener("mousedown", (e) => {
    if (e.target === button) {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        initialX = button.getBoundingClientRect().left;
        initialY = button.getBoundingClientRect().top;
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
    }
});

function onMouseMove(e) {
    if (isDragging) {
        const deltaX = e.clientX - startX;
        const deltaY = e.clientY - startY;
        const newLeft = initialX + deltaX;
        const newTop = initialY + deltaY;
        button.style.left = newLeft + "px";
        button.style.top = newTop + "px";
    }
}

function onMouseUp() {
    isDragging = false;
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
}

button.addEventListener("mousedown", (e) => {
    if (e.target === button) {
        e.preventDefault();
        isResizing = true;
        startX = e.clientX;
        startY = e.clientY;
        startWidth = button.offsetWidth;
        startHeight = button.offsetHeight;
        document.addEventListener("mousemove", onMouseMoveResize);
        document.addEventListener("mouseup", onMouseUpResize);
    }
});

function onMouseMoveResize(e) {
    if (isResizing) {
        const deltaX = e.clientX - startX;
        const deltaY = e.clientY - startY;
        const newWidth = startWidth + deltaX;
        const newHeight = startHeight + deltaY;
        button.style.width = newWidth + "px";
        button.style.height = newHeight + "px";
    }
}

function onMouseUpResize() {
    isResizing = false;
    document.removeEventListener("mousemove", onMouseMoveResize);
    document.removeEventListener("mouseup", onMouseUpResize);
}

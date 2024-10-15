const container = document.querySelector("#container");

function createGrid(size) {
    for (let i = 1; i <= size; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        for (let j = 1; j <= size; j++) {
            let squareDiv = document.createElement("div");
            squareDiv.classList.add("square");
            row.appendChild(squareDiv);

            squareDiv.addEventListener("mouseenter", () => {
                squareDiv.style.backgroundColor = generateColour();
            });
        }
        container.appendChild(row);
    }
}

function randomBetween(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}

function generateColour() {
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    return `rgb(${r},${g},${b})`;
}

function selectSize() {
    let newSize = parseInt(prompt("Please enter a grid size between 1 and 100."));
    if (newSize >= 1 && newSize <= 100) {
        removeGrid();
        createGrid(newSize);
    }
}

function removeGrid() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

createGrid(16);
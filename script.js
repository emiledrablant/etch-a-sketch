function createGrid(size) {
    const container = document.querySelector("#container");
    for (let i = 1; i <= size; i++) {
        let squareDiv = document.createElement("div");
        squareDiv.classList.add("square");
        container.appendChild(squareDiv);
    }
}

createGrid(4);
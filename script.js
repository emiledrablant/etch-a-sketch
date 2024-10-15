function createGrid(size) {
    const container = document.querySelector("#container");
    for (let i = 1; i <= size; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        for (let j = 1; j <= size; j++) {
            let squareDiv = document.createElement("div");
            squareDiv.classList.add("square");
            row.appendChild(squareDiv);

            squareDiv.addEventListener("mouseenter", () => {
                squareDiv.style.backgroundColor = "red";
            });
        }
        container.appendChild(row);
    }
}

createGrid(48);
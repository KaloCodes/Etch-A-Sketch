const GRIDSIDELENGTH = 600;
const sketchArea = document.querySelector(".sketch-area");
const sketchBtn = document.querySelector("#sketch-btn");

sketchArea.style.width = sketchArea.style.height = `${GRIDSIDELENGTH}px`;

sketchBtn.addEventListener("click", () => {
    
    let minInputValue = 1;
    let maxInputValue = 100;
    let validInput = false;

    while(!validInput) {
        let squaresPerSide = window.prompt("Enter number of squares per side between 1 and 100");
        Number(squaresPerSide);

        if(!isNaN(squaresPerSide) && (minInputValue <= squaresPerSide) && (squaresPerSide <= maxInputValue)) {
            validInput = true;
            removeGridCells();
            createGridCells(squaresPerSide);
        }
        else {
            alert("Invalid Input");
        }
    }
   
    
})


function createGridCells(squaresPerSide) {
    const numOfSquares = squaresPerSide * squaresPerSide;
    const gridCellLength = `${(GRIDSIDELENGTH / squaresPerSide) - 2}px`;

    for(let i = 0; i < numOfSquares; i++) {
        const gridCell = document.createElement("div");
        gridCell.classList.add("cell");
        gridCell.style.width = gridCell.style.height = gridCellLength;

        gridCell.addEventListener("mouseover", () => {
            gridCell.style.backgroundColor = getRandomColor();
        })

        sketchArea.appendChild(gridCell);
    }
}

function removeGridCells() {
    while(sketchArea.firstChild) {
        sketchArea.removeChild(sketchArea.firstChild);
    }
}

function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    let opacity = (Math.random() * 1).toFixed(3);

    return `rgb(${red}, ${green}, ${blue})`;
}

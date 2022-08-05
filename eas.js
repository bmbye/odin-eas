const body = document.querySelector('body');
const container = document.createElement('div');
const parameters = document.createElement('div');
const button = document.createElement('button');
button.innerHTML = "Press to Change Number of Squares"
parameters.classList.add('parameters')
parameters.appendChild(button)

button.addEventListener('click', ()=>{
    const answer = prompt("How many squares would you like on each side of the grid?")
    const nodes = document.querySelectorAll('.square')
    nodes.forEach(node => {
        container.removeChild(node)
    })
    paintGrid(answer)
})
container.classList.add('container');

body.appendChild(parameters)
body.appendChild(container);

function changeColor(e) {
    const R = Math.floor(Math.random()*256);
    const G = Math.floor(Math.random()*256);
    const B = Math.floor(Math.random()*256)
    this.style.backgroundColor = `rgb(${R}, ${G}, ${B})`
}

function paintGrid(numSquares) {
    if (typeof numSquares !== "number") {
        numSquares = Number(numSquares)
    }

    const grid = document.querySelector('.container')
    grid.style.gridTemplateColumns = `repeat(${numSquares}, 1fr)`
    const total = Math.pow(numSquares, 2);

    for (let i = 0;i < total;i++) {
        const squareDiv = document.createElement('div');
        squareDiv.classList.add('square');
        squareDiv.setAttribute('id', i+1);
        squareDiv.addEventListener('mouseover', changeColor);
        container.appendChild(squareDiv);
    }
}

paintGrid(16);
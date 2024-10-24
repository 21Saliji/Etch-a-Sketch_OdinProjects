const grid = document.querySelector('.grid-container');

function createGrid(size) {
    grid.innerHTML = ''; // Clear any existing grid
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;


    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.addEventListener('mouseover', changeColorOnHover);
            grid.appendChild(cell);
        }
    }
}


const button = document.getElementById('myButton');

button.addEventListener('click', function() {
    let gridSize = parseInt(prompt('Enter the number of squares per side for the new grid (e.g., 16 for a 16x16 grid):'));

    if (!isNaN(gridSize) && gridSize > 0 && gridSize <= 100) {
        createGrid(gridSize);
    } else {
        alert('Please enter a valid number between 1 and 100.');
    }
});


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColorOnHover(event) {
    event.target.style.backgroundColor = getRandomColor();
}

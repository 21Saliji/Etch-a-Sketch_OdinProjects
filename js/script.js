const grid = document.querySelector('.grid-container');

// Use a nested for loop to create the grid cells
for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('mouseover', changeColorOnHover);
    grid.appendChild(cell);
  }
}

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

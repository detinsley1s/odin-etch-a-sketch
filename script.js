const board = document.querySelector('#board');
let gridsize = 16;

function createGrid() {
    while (board.hasChildNodes()) {
        board.removeChild(board.firstChild);
    }

    for (let i = 0; i < gridsize*gridsize; ++i) {
        let div = document.createElement('div');
        div.addEventListener('mouseover', (e) => {
            if (e.buttons == 1) {
                div.style.backgroundColor = 'black';
            }
        });
        board.appendChild(div);
    }
}

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => {
    createGrid();
});

const resizeGrid = document.querySelector('#changedims');
resizeGrid.addEventListener('click', () => {
    let newSize = 0;
    while (newSize < 16 || newSize > 100) {
        newSize = prompt('How many squares per side? (16-100)');
        if (newSize === null) {
            return;
        }
        if (newSize < 16 || newSize > 100) {
            alert('The size must be between 16 to 100!');
        }
    }
    gridsize = newSize;
    let root = document.querySelector(':root');
    root.style.setProperty('--griddims', gridsize);
    createGrid();
});

createGrid();
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

createGrid();
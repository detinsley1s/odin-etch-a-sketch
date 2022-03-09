const board = document.querySelector('#board');

function createGrid(size) {
    while (board.hasChildNodes()) {
        board.removeChild(board.firstChild);
    }

    for (let i = 0; i < size*size; ++i) {
        let div = document.createElement('div');
        div.addEventListener('mouseover', (e) => {
            if (e.buttons == 1) {
                div.style.backgroundColor = 'black';
            }
        });
        board.appendChild(div);
    }
}

createGrid(16);
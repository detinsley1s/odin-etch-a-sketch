const board = document.querySelector('#board');
for (let i = 0; i < 16*16; ++i) {
    let div = document.createElement('div');
    board.appendChild(div);
}

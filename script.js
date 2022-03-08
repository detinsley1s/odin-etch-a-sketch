const board = document.querySelector('#board');
for (let i = 0; i < 16*16; ++i) {
    let div = document.createElement('div');
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'black';
    });
    board.appendChild(div);
}
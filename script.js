let squares = [];
let activeSign = 'O';
let activeColor = 'crimson';
let count = 0;

function addSign() {
    this.textContent = activeSign;
    this.style.color = activeColor;
    count++;
    if (activeSign == 'O') {
        activeSign = 'X';
        activeColor = 'blue';
    } else {
        activeSign = 'O';
        activeColor = 'crimson';
    }
}

const gameOver = () => {
    alert('Koniec');
    location.reload();
}

const check = () => {
    if (squares[1].textContent == squares[2].textContent && squares[1].textContent == squares[3].textContent) gameOver();
    if (squares[4].textContent == squares[5].textContent && squares[4].textContent == squares[6].textContent) gameOver();
    if (squares[7].textContent == squares[8].textContent && squares[7].textContent == squares[9].textContent) gameOver();

    if (squares[1].textContent == squares[4].textContent && squares[1].textContent == squares[7].textContent) gameOver();
    if (squares[2].textContent == squares[5].textContent && squares[2].textContent == squares[8].textContent) gameOver();
    if (squares[3].textContent == squares[6].textContent && squares[3].textContent == squares[9].textContent) gameOver();

    if (squares[1].textContent == squares[5].textContent && squares[1].textContent == squares[9].textContent) gameOver();
    if (squares[3].textContent == squares[5].textContent && squares[3].textContent == squares[7].textContent) gameOver();
    if (count == 9) gameOver();
}

for (let i = 1; i <= 9; i++) {
    squares[i] = document.getElementById(`s${i}`);
    squares[i].addEventListener('click', addSign);
    squares[i].addEventListener('click', check);
}




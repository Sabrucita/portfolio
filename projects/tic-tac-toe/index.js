const squares = document.querySelectorAll('.square')
const x = 'X';
const o = 'O';
let gameStatus = 'P1'


squares.forEach((square) => {
  square.addEventListener('click', () => {
    square.innerText = gameStatus == 'P1' ? x : o;
    gameStatus = gameStatus === 'P1' ? 'P2' : 'P1';
    checkWinnerExistence()
  })
});

function checkWinnerExistence() {
  const board = Array.from(squares).map(square => square.textContent)
  console.log(board)

  //revisar horizontales
  for (let i = 0; i <=9; i+=3) {
    if(board[i] &&
    board[i] == board[i+1] &&
    board[i] == board[i+2]){
      return winner([i,i+1,i+2])
    }
  }
  //revisar verticales
  for (let i = 0; i <=3; i++) {
    if(board[i] &&
    board[i] == board[i+3] &&
    board[i] == board[i+6]){
      return winner([i,i+3,i+6])
    }
  }
  //revisar oblicuas
  if(board[0] &&
  board[0] === board[4] &&
  board[0] === board[8]){
    return winner([0,4,8])
  }
  if(board[2] &&
  board[2] === board[4] &&
  board[2] === board[6]){
    return winner([0,4,6])
  }
}

function winner(winningPosition) {
  console.log('ganador', winningPosition)
}
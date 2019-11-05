//Sarah Tejchma
//Tic Tac Toe Gameboard Deconstruction

//create new vue for the game
var app = new Vue({
  el: "#app",
  data: {
    //set gameOver to false to start, this will be true when a player wins the game
    gameOver: false,
    //set the first player to always start as O
    playerTurn: "O",
    //winner starts at 0 until the game is over then a winner is declared
    winner: 0,
    //create an array with empty string until the player makes a move then it will be replaced with X or O
    grid: [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]]
  },
  methods: {
    //function to select where to put your O or X
    selectCell: function(row, col) {
      //create grid
      var tempGrid = this.grid.slice(0);

      //modify grid
      tempGrid[row][col] = this.playerTurn;

      //replace grid
      this.grid = tempGrid;

      //swap player turns
      this.playerTurn = this.playerTurn == "O" ? "X" : "O";

      //check for win
      this.checkWin();
    },
    checkWin: function(row, col) {
      //loop through all columns to check
      //if win found set over to true
      for (var row = 0; row < this.grid.length; row++) {
        for (var col = 0; col < this.grid[row].length; col++) {
          if (row - 2 >= 0) {
            if (
              //check for win through row
              this.grid[row - 2][col] == this.grid[row - 1][col] &&
              this.grid[row - 1][col] == this.grid[row][col] &&
              this.grid[row][col] == this.grid[row - 2][col] &&
              (this.grid[row][col] == "O" || this.grid[row][col] == "X")
            ) {
              //if a win is found, game over and return whether player O and X won
              this.gameOver = true;
              this.winner = this.playerTurn;
              break;
            }
          }
          if (col - 2 >= 0) {
            if (
              //check for win through col
              this.grid[row][col - 1] == this.grid[row][col - 2] &&
              this.grid[row][col - 1] == this.grid[row][col] &&
              this.grid[row][col] == this.grid[row][col - 2] &&
              (this.grid[row][col] == "O" || this.grid[row][col] == "X")
            ) {
              //if a win is found, game over and return whether player O and X won
              this.gameOver = true;
              this.winner = this.playerTurn;
              break;
            }
          }
          if (row - 2 >= 0 && col - 2 >= 0) {
            if (
              //check for diagonal win
              this.grid[row - 2][col - 2] == this.grid[row - 1][col - 1] &&
              this.grid[row - 1][col - 1] == this.grid[row][col] &&
              this.grid[row][col] == this.grid[row - 2][col - 2] &&
              (this.grid[row][col] == "O" || this.grid[row][col] == "X")
            ) {
              //if a win is found, game over and return whether player O and X won
              this.gameOver = true;
              this.winner = this.playerTurn;
              break;
            }
          }
          if (row - 2 >= 0 && col + 2 <= this.grid[row].length) {
            if (
              //check other diagonal win
              this.grid[row - 2][col + 2] == this.grid[row - 1][col + 1] &&
              this.grid[row - 1][col + 1] == this.grid[row][col] &&
              this.grid[row][col] == this.grid[row - 2][col + 2] &&
              (this.grid[row][col] == "O" || this.grid[row][col] == "X")
            ) {
              //if a win is found, game over and return whether player O and X won
              this.gameOver = true;
              this.winner = this.playerTurn;
              break;
            }
          }
        }
      }
    }
  }
});

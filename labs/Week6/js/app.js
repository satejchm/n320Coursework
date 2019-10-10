var app = new Vue({
  el: "#app",
  data: {
    gameOver: false,
    playerTurn: 1,
    grid: [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
    ]
  },
  methods: {
    selectCell: function(row, col) {
      //get the row to place the puck at
      var moveRow = this.lowestMove(col);

      if (moveRow >= 0) {
        //copy grid to a temporary var
        var tempGrid = this.grid.slice(0);

        //modify the cloned version
        tempGrid[moveRow][col] = this.playerTurn;

        //replace
        this.grid = tempGrid;

        //swap player turn
        this.playerTurn = this.playerTurn == 1 ? 2 : 1;

        //check for win
        this.checkWin(row, col);
      }
    },

    checkWin: function(row, col) {
      //loop through columns to check
      for (var row = 5; row >= 0; row++) {
        if (
          //find 4 in a row/column(including current row cell that is why I used 3)
          this.grid[row - 3][col - 3] ||
          (this.grid[row + 3][col + 3] &&
            //check which player to accumulate for the win
            (this.grid[row][col] == 1) | (this.grid[row][col] == 2))
        ) {
          //if win found, set over to true
          this.gameOver = true;

          //display if play 1 or player 2 won
          this.winner = this.playerTurn;
        }
      }
    },

    lowestMove: function(col) {
      //start at the bottom of a col, loop upwards
      for (var row = 5; row >= 0; row--) {
        //check to see if current row is free
        if (this.grid[row][col] == 0) {
          //if it is free, return the row index
          return row;
        }
      }
    }
  }
});

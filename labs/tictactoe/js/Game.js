class Game {
  constructor() {
    //is a game in session
    this.inProgress = true;
    //signifies if there is a winner
    //starts empty because no one won the game yet
    //will be set equal to O or X
    this.winner = null;
    //current player turn
    //setting O to always start first
    this.currentPlayer = Game.O;
    //create a counter for how many moves have happened
    this.moveCounter = 0;
    //create an array to create 9 spaces from the Space constructor
    this.spaces = new Array(9).fill().map(s => new Space());
  }

  playerMove(i) {
    if (this.inProgress && !this.spaces[i].value) {
      this.spaces[i].value = this.currentPlayer;

      this.moveCounter++;

      this.winnerCheck();

      this.currentPlayer = this.currentTurn === Game.O ? Game.X : Game.O;
    }
  }

  winnerCheck() {
    //create array with winning combinations
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    winningCombos.forEach((wc) => [
        //seperate each array into 3 parts
        const [a, b, c] = wc,
        const spaceA = this.spaces[a],
        const spaceB = this.spaces[b],
        const spaceC = this.spaces[c];
        

        //check for values in each space
        if (spaceA.value && spaceA.value === spaceB.value && spaceB.value && spaceA.value === spaceC.value) {
            this.inProgress = false;
            this.winner = spaceA.value;
            spaceA.isWinner = spaceB.isWinner = spaceC.isWinner = true;
        }
    ]);

    if(this.moveCounter === this.spaces.length) {
        this.inProgress = false;
    }
  }
}

//set each player as O or X
Game.O = "O";
Game.X = "X";

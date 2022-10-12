//board game
class ConnectFour {

    //class properties
    playerOneColor = "#c7364e";     //orange color
    playerTwoColor = "#f5e640";     //yellow color
    board = document.getElementsByClassName("gridBoard");   //connect4 board
    gridCirc = document.querySelectorAll("gridCircle");

    constructor() {
        //for loop for the whole grid
        for(var i = 0; i < 42; i++) {
            //start at bottom row


            //tokens can only be stacked, not placed randomly 


            //mouse event for clicking grid circle to change color
            this.gridCirc.addEventListener("click", (event) => {
                event.target.style.backgroundColor = this.playerOneColor;
            })
            //if statement to alternate color between each click


            //if statement to check if playerOne or playerTwo color connects vertically
                //else horizontal 
                    //else diagonaly

            //if they connect4 game ends
        }
    }
}

class Player {
    constructor(color) {
        this.color=color;
    }
}

class Player2 extends Player {
    constructor() {
        super(color, "#f5e640");
    }
}
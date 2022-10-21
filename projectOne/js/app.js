
//board game
class ConnectFour {

    //class properties
    playerOneColor = "#d1241b";     //red color
    playerTwoColor = "#f5e640";     //yellow color
    board = document.getElementById("gridBoard");   //connect4 board

    constructor() {
        for( var x=0; x < 680; x+= 7){
            for( var y=0; y < 600; y+= 6 ){
                let gridCirc = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                gridCirc.classList.add("gridCircle");
                gridCirc.setAttributeNS(null,'x',x );
                gridCirc.setAttributeNS(null,'y',y );
                gridCirc.setAttributeNS(null,'r', 50);
                this.board.appendChild(gridCirc);
            }
        }
       /*
        //make grid circles
        for(var i = 0; i < 42; i++) {
            //create circle
            let gridCirc = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            //circle class
            gridCirc.classList.add("gridCircle");
            //places circles on x & y axis,
            gridCirc.setAttribute("cx", Math.random()* 700);
            gridCirc.setAttribute("cy", Math.random()* 600);

            //add white circle to the screen
            this.board.appendChild(gridCirc);
        }
        */
    }
}
let game = new ConnectFour;


//class that contains the logic for the game
class Game {

    //class properties
    foundCircles = 0;
    totalCircles = 0;
    searchColor = "#99FF00";
    normalColor = "#7700AA";
    //gameZone property is a reference to svg in html
    gamezone = document.getElementById("gameZone");
    foundBar = new FoundBar();

    constructor() {
        //make the circles, loops to make 25
        for(var i = 0; i < 25; i++) {
            //create circle
            let newCirc = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            //circle class
            newCirc.classList.add("gameCirc");
            //places circles randomly on x & y axis, instead of all in one place
            newCirc.setAttribute("cx", Math.random()* 400);
            newCirc.setAttribute("cy", Math.random()* 400);

            //randomly choose what reveal color the circle is 30% of the time
            if(Math.random() < .3) {
                //set to the 'looking for' color
                newCirc.dataset.hiddenColor = this.searchColor;
                this.totalCircles ++;
            } else {    // 70% of the time normal color will be displayed
                newCirc.dataset.hiddenColor = this.normalColor;
            }

            //mouse events
            //on mouse over, show the hidden color in the data-hidden color attribute
            newCirc.addEventListener("mouseover", (event) => {
                event.target.style.fill = event.target.dataset.hiddenColor;
            })
            //when mouse moves the circle will go back to black
            newCirc.addEventListener("mouseout", (event) => {
                event.target.style.fill = "#000";
            })
            //listens for when circle is clicked
            newCirc.addEventListener("click", (event) => {
                //if the user clicked the circle with the hidden color they're searching for
                if(event.target.dataset.hiddenColor == this.searchColor) {
                    //when they match, that circle will be removed
                    event.target.remove();

                    //store how many have been clicked on
                    this.foundCircles++;

                    //update the found UI
                    this.foundBar.setPercent(this.foundCircles / this.totalCircles);
                }
            })
        //add the circle to the screen
        //'.this. referes to class the property is in
        this.gamezone.appendChild(newCirc);
        }
    }
}

class FoundBar {
    element = document.getElementById("foundBar");
    maxSize = 130;
    percent = 0;

    setPercent(percent) {
        this.percent = percent;
        this.element.setAttribute("width", this.percent * this.maxSize);
    }
}

let f = new FoundBar();

let g = new Game();
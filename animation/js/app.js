let title = document.getElementById("title");
let blueRect = document.getElementById("blueRect");
let boxRow1 = document.getElementById("boxRow1");
let boxRow2 = document.getElementById("boxRow2");
let box = document.getElementsByClassName("box");

//go from nothing to everything on screen
TweenLite.from(title, {duration: 2, x: -300, alpha: 0});        //title moves right
TweenLite.from(blueRect, {duration: 2, y: -200, alpha: 0});     //blueRect moves down
TweenLite.from(boxRow1, {duration: 2, x: -300, alpha: 0});      //boxRows moves right
TweenLite.from(boxRow2, {duration: 2, x: -300, alpha: 0});


//loop through box class array 
for(var i = 0; i < box.length; i++) {
    //when mouse hovers over the purple box will be highlighted yellow
    box[i].addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "#f5f36c";
    });
    //exit animation for when gallery box is clicked
    box[i].addEventListener("click", (event) => {
        TweenLite.to(event.target, {duration: 1, x: -300, alpha: 0});
    });
}





/*
1) A build-in for all the elements (go from nothing on the screen, to everything visible)

2) A mouse over / highlight for each of the gallery elements below

3) A exit animation for when one gallery element is clicked
*/
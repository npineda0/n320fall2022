/*
textarea:
    onfocus: when the cursor is inside input box
    onblur: when the cursor leaves the input box
------
@keyframes: create an animation keyframe
-------
<div class="status">
        <textarea
            id="txtStatInput" 
            onfocus="textFocus()"   
            onblur="textLeave()">
        </textarea>
        <button>submit</button>
    </div>
------    


let txtStatInput = document.getElementById("txtStatInput");

//this function is invoked when the cursor is inside txt box
function textFocus() {
    //resetAnimation(txtStatInput);
    txtStatInput.classList.remove("deselected");
    txtStatInput.classList.add("selected");
}                             

function textLeave() {
    txtStatInput.classList.remove("selected");
    txtStatInput.classList.add("deselected")
}
*/

/*
let exampleDiv = document.getElementById("txtCool");

TweenMax.to(exampleDiv, {duration:2, x: 100, y:100});
*/

//tween
let navItems = document.getElementsByClassName("navitem");

for(let i = 0; i < navItems.length; i++ ) {
    TweenLite.from(navItems[i], {duration: .6, x: -100, alpha: 0, delay: i*.2}
    );
}
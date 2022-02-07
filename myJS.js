/*
* Excercise 1
*
*/

var square = document.getElementById("color-block");
square. onclick = changeColor;
var state=1;
/*
* Then write a function that changes the text and the color inside the div
*
*/

function changeColor(){
    //Write a condition determine what color it should be changed to
    if(state!==1){
        //change the background color using JS
        square.style.background="#F08080";
        //Change the text of the color using the span id color-name

        document.getElementById("color-name").textContent = "#F08080";


    }
    else{
        //change the background color using JS
        square.style.background = "#999999";
        //Change the text of the color using the span id color-name

        document.getElementById("color-name").textContent = "#999999";


    }
    state=1-state;
}


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/
var changebutton=document.getElementById("convertbtn");
changebutton.addEventListener('click',convertTemp);

/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(){
    //Calculate the temperature here
    var Fahrenheit=document.getElementById("f-input").value;
    //Send the calculated temperature to HTML
    var Celsius=(Fahrenheit-32)*5/9;
    var celcontent=document.getElementById("c-output");
    celcontent.innerHTML=Celsius;

}



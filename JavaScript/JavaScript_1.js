//Submission 11

//assignment 56
//swtich statement 
//conditional statement: performs differrnt actions based on the conditions present to it 
 function Food_Function() {
    var Food_Output;
    var Foods = document.getElementById("Food_Input").value
    var Food_String = " is a Delicious Food!"
    switch(Foods) {
        case "Chips": //a case, are the various conditions that are evaluated 
        Food_Output = "Chips" + Food_String;
        break;
        case "Steak":
        Food_Output = "Steak" + Food_String;
        break;
        case "Chicken":
        Food_Output = "Chicken" + Food_String;
        break;
        case "Curry":
        Food_Output = "Curry" + Food_String;
        break;
        case "Chilli":
        Food_Output = "Chilli" + Food_String;
        break;
        case "Purple":
        Food_Output = "Purple" + Food_String;
        break;
        default:
            Food_Output = "Please enter a Food exactly as written on the above list"; //if no case match prents this
}
document.getElementById("Output").innerHTML=Food_Output;
}

//assignment 57
//document.getElementByClassName() method
function Change_Function() { //create function
    var A = document.getElementByClassName("Click"); //Gets all elements with the class 'click' instead of ID
    A[0].innerHTML = "Text changed!"; //index 0 to target the first element with class
}
//The text won't change....

function Change_Function() {
    var a = document.getElementsByClassName("Click");
    a[0].style.backgroundColor = "Blue"; //found a way to change the colour, 
  }

//challenge 16
//canvas 

var c = document.getElementById("canvasCircle");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();

function imgCanvas() {
var c = document.getElementById("canvasImage");
var ctx = c.getContext("2d");
var img = document.getElementById("Wolf");
ctx.drawImage(img,10,10);
}


//challenge 17
//canvas Gradient
var c = document.getElementById("canvasGradient");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "blue");
grd.addColorStop(1, "purple");

ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);

//main problem seems browser does not support the HTML5 canvas tag for Drawings?
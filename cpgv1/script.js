var colornumber=6;



var colors = generateRandomColors(colornumber);

var sq = document.querySelectorAll(".square");
var pickedColor = colorpicker(colors);
var h1rgb = document.querySelector("#span1");
h1rgb.textContent =  pickedColor;
var clickedColor;
var msgdisplay = document.getElementById("msg");
var h1 = document.querySelector("h1");
var btn1 = document.getElementById("newclr");
var easy = document.getElementById("easybtn");
var hard = document.getElementById("hardbtn");




easy.addEventListener("click",function(){
    btnf(3);
    this.classList.add("selected");
    hard.classList.remove("selected");
    
    
});

hard.addEventListener("click",function(){
    btnf(6);
    this.classList.add("selected");
    easy.classList.remove("selected");
    
});

function btnf(erq){
    colornumber = erq;
    msgdisplay.textContent = "";
    colors = generateRandomColors(colornumber);
    //picks the color to choose
    pickedColor = colorpicker(colors);
    //makes the background of h1 normal again
    h1.style.background = "steelblue";
    //changes the RGB text of h1
    h1rgb.textContent =  pickedColor;
    //Assigns the new color to the squares
    for(var i=0;i<sq.length;i++){
        if(colors[i]){
        sq[i].style.display = "block";
        sq[i].style.backgroundColor = colors[i];
        }
        else{
            sq[i].style.display = "none";
        }
    } 
}


for(var i=0;i<sq.length;i++){
    //add initial colors to squares
    sq[i].style.backgroundColor = colors[i];
    //add click listener to squares

    sq[i].addEventListener("click",function(){
        //grab colors of the clicked square
         clickedColor = this.style.backgroundColor;
         //compare to picked color
         if(clickedColor===pickedColor){
             //function to change all the squares to pickedColor
             changecolors();
         }
         else{
             this.style.backgroundColor = "#232323";
             msgdisplay.textContent = "Try Again";
         }
    });


}

//function to change all the squares to pickedColor
function changecolors(){
    msgdisplay.textContent = "Correct!";
    for(var u=0;u<sq.length;u++){
        sq[u].style.backgroundColor = pickedColor;
    }
    h1.style.backgroundColor = pickedColor;
    btn1.textContent = "Play Again?";

}

//function to change random color
function colorpicker(clrw){
    //picks a random number from the array
    // Math.random() picks a number 0.00<x<1.00
    // Math.floor() cancels all digits after decimal point
    //canumb is the index of the array we choosed.
    //here colors.length is 6 as math.random always stays smaller then 1 so multiplying it will remain under 6. and for flooring the number will be 5
    var canumb = Math.floor(Math.random()*clrw.length);
    return clrw[canumb];
}




// To generate the colors required for array
function generateRandomColors(n){
    //make an array
    //add random n-times random colors to array
    //return n random colors or the array

    var rclr = [];

    for(var i =0;i<n;i++){
        //get random color and push into array
       rclr[i] =  randomcolorpicker();
    }


    return rclr;

}


// function to create random color and send it in rgb format to array 
// this function is called from generateRandomColor(n) function
function randomcolorpicker(){

     //pick a "red" from 0 to 255
     var red = Math.floor(Math.random()*256);
     //same goes for blue and green
     var green = Math.floor(Math.random()*256);
     var blue = Math.floor(Math.random()*256);
     //makes a string that contains random rgb code
     var colorss = "rgb("+red+", "+green+", "+blue+")";
    
     return colorss;
    
}

//Setting up the new color button


btn1.addEventListener("click",function(){
    //generates colors for the array
    colors = generateRandomColors(colornumber);
    //picks the color to choose
    pickedColor = colorpicker(colors);
    //makes the background of h1 normal again
    h1.style.background = "steelblue";
    //changes the RGB text of h1
    h1rgb.textContent =  pickedColor;
    msgdisplay.textContent = "";
    //Assigns the new color to the squares
    for(var i=0;i<sq.length;i++){
        sq[i].style.backgroundColor = colors[i];
    }  
    //Sets the button text to new color
    this.textContent = "New Colors";
}); 
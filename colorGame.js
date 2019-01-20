var h1 = document.getElementsByTagName("h1")[0];
var squares = document.getElementsByClassName("square");
var colorToDisplay = document.querySelector("#colorToDisplay");


var newColors = document.querySelector("#newColors");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

var red, green, blue;
var randomNumber = []; 
var rgbColorCode;
var colors = [];
var pickedColor;
var pickedNumber;


defaultState();

 /*
    -------------------------------------------------------------------------------------
    Default state at the start
    -------------------------------------------------------------------------------------
    */
   function defaultState(){
    generateColors();
    generateColorsArray();
    addColorsToSquares();
    pickRandomColor();
   }
/*-------------------------------------------------------------------------------------*/




    /*
    -------------------------------------------------------------------------------------
    EventListeners for New Colors
    -------------------------------------------------------------------------------------
    */
    newColors.addEventListener("click", function(){
        location.reload();
        generateColors();
        generateColorsArray();
        addColorsToSquares();
        pickRandomColor();         
    });

    /*-------------------------------------------------------------------------------------*/


    /*
    -------------------------------------------------------------------------------------
    EventListeners for Easy button
    -------------------------------------------------------------------------------------
    */
   easy.addEventListener("click", function(){
    squares.length = 3;
    for(i = 3; i < squares.length; i++){
        squares[i].style.display = "none";
    }     
    });

    /*-------------------------------------------------------------------------------------*/


    /*
    -------------------------------------------------------------------------------------
    EventListeners for Hard button
    -------------------------------------------------------------------------------------
    */
   hard.addEventListener("click", function(){
    for(i = 0; i < squares.length; i++){
        squares[i].style.display = "block";
    }     
    });

    /*-------------------------------------------------------------------------------------*/

     /*
    -------------------------------------------------------------------------------------
    Generating RGB string
    -------------------------------------------------------------------------------------
    */

    function generateColors(){
        for(var i = 0; i < 3; i++){
         randomNumber[i] = Math.floor((Math.random()*255) + 1);
		 //console.log("Random Number[" + i + "]: " +  randomNumber[i])
        }

    var red = randomNumber[0];
    var green = randomNumber[1];
    var blue = randomNumber[2];
    //console.log("red: " + red + "     green: " + green + "      blue: " + blue);
    rgbColorCode = "rgb(" + red + ", " + green + ", " + blue + ")";
    //console.log("RGB color code as string : " + rgbColorCode);
    }
    /*-------------------------------------------------------------------------------------*/



    /*
    -------------------------------------------------------------------------------------
    Generating six rgb string and adding to colors array
    -------------------------------------------------------------------------------------
    */
    function generateColorsArray(){
        for(var i = 0; i<squares.length; i++){
            generateColors();
            colors[i] = rgbColorCode;
            //console.log("Color " + i + " in colors array: " + colors[i]);
            }
    }

    /*-------------------------------------------------------------------------------------*/



    
    /*
    -------------------------------------------------------------------------------------
    Fill codes to colors array
    -------------------------------------------------------------------------------------
    */
    function addColorsToSquares(){
        //color for all squares
            for(var i = 0; i<squares.length; i++){
                //add initial colors
                squares[i].style.backgroundColor = colors[i];
    
                //Add click listeners
                squares[i].addEventListener("click", function(){
                    if(this.style.backgroundColor !== pickedColor){
                        this.style.backgroundColor = "transparent";
                    }
                    else{
                        for(var i = 0; i < 6; i++){
                            squares[i].style.backgroundColor = pickedColor;  
                            //colorToDisplay.style.backgroundColor = pickedColor; 
                            h1.style.background = pickedColor; 
                        }
                    }
                });
            }  
    
    }
    /*-------------------------------------------------------------------------------------*/

      
    
     /*
    -------------------------------------------------------------------------------------
    Pick a random color for header and logic
    -------------------------------------------------------------------------------------
    */

   function pickRandomColor(){
    pickedNumber = Math.floor((Math.random()*colors.length)+ 1);
    //console.log(pickedNumber);
    pickedColor = colors[pickedNumber-1];
    colorToDisplay.innerHTML = pickedColor;
    }
    /*-------------------------------------------------------------------------------------*/

    


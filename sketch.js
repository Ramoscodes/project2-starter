//the beginning of our query to Giphy API
var endpoint = "https://api.giphy.com/v1/gifs/search?";

/***TO DO: enter your unique api key**/
var apiKey = "&api_key=IoC8UgKSzFtQrLWLqNT3jH2dfDP2ggdc&q=";

/***TO DO: create empty variables for your buttons***/

var input, addiction, socialMedia, clearCanvas, search, gifImg;

/***TO DO: create empty variables to track whether buttons
    have been pressed or not***/
var trackSocial, trackAddiction;

//empty variable for the image to be displayed
//Feel free to rename
var gifContainer;
//empty variable for our canvas
var canvas;

/*This function runs at the start of your program*/
function setup() {
  /*TO DO: create the canvas and attach it to the dedicated
          div element in your HTML-  */
          createCanvas(windowWidth, windowHeight);
          background(90,90);

  //hint: https://github.com/processing/p5.js/wiki/Positioning-your-canvas

  /*TO DO: assign the input and buttons from your HTML
          to the variables you created*/
           search = select ("#search");
           input =  select('#submit');
           addiction = select('#buttonOne');
           socialMedia = select('#buttonTwo');
           clearCanvas = select('#clearButton');
 
  /**TO DO: Add detection for each button */

  input.mousePressed(gifAsk);
  addiction.mousePressed(functionAddiction);
  socialMedia.mousePressed(functionSocialMedia);
  clearCanvas.mousePressed(functionClear);
 
}
/**TODO: Write separate functions that are called when user
 *        clicks each button. These functions should create 
 *        the URL pointing to the Giphy API.
 */
//this function is similar to the one we wrote in our tutorial
function gifAsk(){

  var url = endpoint + apiKey + search.value(); 
  loadJSON(url, getGiphy);
  
  //var url =
  //loadJSON(url, getGiphy);
}

/*add as many functions as necessary*/

function functionSocialMedia()

{ trackSocial = true;
  var url = endpoint + apiKey + "Social Media"; 
  loadJSON(url, getGiphy);
}

function functionAddiction()
 {
  trackAddiction = true;
  var url = endpoint + apiKey + "phone addiction"; 
  loadJSON(url, getGiphy);
  
} 

function functionClear() {
  clear();
}


//The behavior of the canvas will take place in this draw() function
//function draw(){


   /**TODO: Use if() statements to specify each action that is taken
     *       on the canvas, based on which button is pressed.
     *        HINT: use boolean variables to keep track of which button
     *        is pressed.
    */
    function draw() {

      if (trackSocial == true){
        background(230);

        noStroke();
        rectMode(CENTER);
      
        let r1 = map(mouseX, 0, width, 0, height);
        let r2 = height - r1;
      
        fill(237, 34, 93, r1);
        rect(width / 2 + r1 / 2, height / 2, r1, r1);
      
        fill(237, 34, 93, r2);
        rect(width / 2 - r2 / 2, height / 2, r2, r2);

    } 
    if (trackAddiction == true) {
    variableEllipse(mouseX, mouseY, pmouseX, pmouseY);}
  }
      // Call the variableEllipse() method and send it the
      // parameters for the current mouse position
      // and the previous mouse position
      
    
    
    // The simple method variableEllipse() was created specifically
    // for this program. It calculates the speed of the mouse
    // and draws a small ellipse if the mouse is moving slowly
    // and draws a large ellipse if the mouse is moving quickly
    
    function variableEllipse(x, y, px, py) {
      let speed = abs(x - px) + abs(y - py);
      stroke(speed);
      ellipse(x, y, speed, speed);
    }

  

/*This function finds and displays a random gif from
   the JSON file found in the GIPHY query*/
function getGiphy(gif) {

  //selects a random element from the data[] array
  var randy = random(gif.data);
  //saves the location of the gif
  var foundGif = randy.images.original.url;

  //if an image element already exists, remove the image
  //BEFORE adding one to the page.
  if(gifImg != null)
  {
    gifImg.remove();
  }
  //p5js short-hand for creating and displaying an image element
  gifImg = createImg(foundGif);
  
  //this embeds the image in the div with idea 'gif-area'
  gifImg.parent("gif-area");


}

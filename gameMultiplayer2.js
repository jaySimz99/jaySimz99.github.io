//Both the scripts for player 1 and 2 are mostly identical save for the names of a few variables

var canvas = document.getElementById("the_canvas");
var context = canvas.getContext("2d");
var canvas_results = document.getElementById("the_canvas_results");
var context2 = canvas_results.getContext("2d");
var canvas_stars = document.getElementById("the_canvas_stars");
var context3 = canvas_stars.getContext("2d");

var canvas_stop = document.getElementById("canvas_stop");
var context4 = canvas_stop.getContext("2d");

var canvas_rival = document.getElementById("the_canvas_rival");
var contextR = canvas_rival.getContext("2d");
var canvas_results_rival = document.getElementById("the_canvas_results_rival");
var contextR2 = canvas_results_rival.getContext("2d");
var the_canvas_stars_rival = document.getElementById("the_canvas_stars_rival");
var contextR3 = the_canvas_stars_rival.getContext("2d");

document.getElementById("playerName").innerHTML = localStorage.getItem("playerName");
document.getElementById('winLoseDraw').style.display = 'none';

if (localStorage.getItem("playerName") == ""){
    localStorage.setItem("backUpName", localStorage.getItem("backUpName"));
    document.getElementById("playerName").innerHTML = localStorage.getItem("backUpName");
}

if (localStorage.getItem("playerName") != ""){
    localStorage.setItem("backUpName", localStorage.getItem("playerName"));
}



const CANVAS_WDT = canvas.width = 480;
const CANVAS_HGT = canvas.height = 400;//These are the hieght and width of the canvas
const SPRITE_WDT = 700;
let framex = 0;
let speed = 0;
const SLOW_FRAME = 6;
var player2pick;
var player1Pick;
var playerClicked = false;
var cardisPicked2 = false;
var rounds = 1;
var playScore = 0;
var rivalScore = 0;
var drawScore = 0;
var victory = "";

var answer = localStorage.getItem('checkboxPurple');
    
    

const rock = new Image();//my images 
if (answer == "yes") {
    rock.src = "greenRock.png";     
}else
{
    rock.src = "rock.png";  
}//Rock card color changes depending on the style chosen

const paper = new Image();
if (answer == "yes") {
    paper.src = "purplePaper.png";
    }
    else{
        paper.src = "paper.png";
    }//paper card color changes depending on the style chosen

    

const scissors = new Image();
scissors.src = "scissors.png";

const rock2 = new Image();
if (answer == "yes") {
    rock2.src = "greenRock.png";     
}else
{
    rock2.src = "rock.png";  
}

const paper2 = new Image();
if (answer == "yes") {
paper2.src = "purplePaper.png";
}
else{
    paper2.src = "paper.png";
}

const scissors2 = new Image();
scissors2.src = "scissors.png";

const load = new Image();
load.src = "load.png";

const star = new Image();
star.src = "star.png";

const starF = new Image();
starF.src = "starfilled.png";

const cardback = new Image();
cardback.src = "cardback.png";


context.shadowOffsetX = 5;//setting the shadows on the canvas 
context.shadowOffsetY = 3;
context.shadowColor = "rgba(80, 32, 131,0.3)";


//Event listener to detect when the mouse has been clicked


canvas_stars.addEventListener('mousedown', clicked);


function clicked(event) {
    let rect = canvas_stars.getBoundingClientRect();//Get the boundaries of the canvas 

    var x = event.clientX - rect.left;//Get the measurement from the left of canvas
    var y = event.clientY - rect.top;//Get the measurement from the top of canvas

    if ( screen.width < 400 ) {

    if (x < 107 && x > 17 && y > 92 && y < 196 && cardisPicked2 == false) { //coordinates of the cards on the canvas 
        player2pick = "rock";//picked vairable changes 
        cardisPicked2 = true;//Detects of a card has been picked 
        document.getElementById('canvas_stop').style.display = 'inline';
    }


    if (x < 202 && x > 112 && y > 92 && y < 196 && cardisPicked2 == false) {
        player2pick = "paper";
        cardisPicked2 = true;
        document.getElementById('canvas_stop').style.display = 'inline';
    }

    if (x < 297 && x > 207 && y > 92 && y < 196 && cardisPicked2 == false) {
        player2pick = "scissors";
        cardisPicked2 = true;
        document.getElementById('canvas_stop').style.display = 'inline';
    }

}

else {

         
    if (x < 160 && x > 32 && y > 110 && y < 292 && cardisPicked2 == false) { //coordinates of the cards on the canvas 
        player2pick = "rock";//picked vairable changes 
        cardisPicked2 = true;//Detects of a card has been picked 
        document.getElementById('canvas_stop').style.display = 'inline';
    }


    if (x < 300 && x > 172 && y > 110 && y < 292 && cardisPicked2 == false) {
        player2pick = "paper";
        cardisPicked2 = true;
        document.getElementById('canvas_stop').style.display = 'inline';
    }

    if (x < 440 && x > 312 && y > 110 && y < 292 && cardisPicked2 == false) {
        player2pick = "scissors";
        cardisPicked2 = true;
        document.getElementById('canvas_stop').style.display = 'inline';
    }
}
//Store the player 2 pick in local storage
localStorage.setItem("player2pick", player2pick);

}


window.addEventListener('storage', () => {//detect local storage changes 
    console.log("player 1: " + (window.localStorage.getItem('player1pick')));
  });



function animate() {
    context.clearRect(0, 0, CANVAS_WDT, CANVAS_HGT);
    context.drawImage(rock, framex * SPRITE_WDT, 0, 700, 700, 0, 100, 200, 200);//draws the images 
    context.drawImage(paper, framex * SPRITE_WDT, 0, 700, 700, 140, 100, 200, 200);
    context.drawImage(scissors, framex * SPRITE_WDT, 0, 700, 700, 280, 100, 200, 200);
    contextR.drawImage(load, framex * SPRITE_WDT, 0, 700, 700, 55, 100, 200, 200);

    if (player2pick == "rock"){
        context4.drawImage(cardback, 0, 0, 700, 700, 140, 100, 200, 200);//Draws the back of the cards for the unselected cards
        context4.drawImage(cardback, 0, 0, 700, 700, 280, 100, 200, 200);
        console.log("Opponent Pick: " + player1Pick);
    }

    if (player2pick == "paper"){
        context4.drawImage(cardback, 0, 0, 700, 700, 0, 100, 200, 200);
        context4.drawImage(cardback, 0, 0, 700, 700, 280, 100, 200, 200);
        console.log("Opponent Pick: " + player1Pick);
    }

    if (player2pick == "scissors"){
        context4.drawImage(cardback, 0, 0, 700, 700, 0, 100, 200, 200);
        context4.drawImage(cardback, 0, 0, 700, 700, 140, 100, 200, 200);
        console.log("Opponent Pick: " + player1Pick);
    }

    //Player points
    context.drawImage(star, 0, 0, 700, 700, 40, 50, 200, 200);
    context.drawImage(star, 0, 0, 700, 700, 90, 50, 200, 200);
    context.drawImage(star, 0, 0, 700, 700, 140, 50, 200, 200);

    if (localStorage.getItem("rounds") == "five"){
    context.drawImage(star, 0, 0, 700, 700, 40, 10, 200, 200);
    context.drawImage(star, 0, 0, 700, 700, 90, 10, 200, 200);

    }
    //Enemy points
    contextR.drawImage(star, 0, 0, 700, 700, 75, 50, 200, 200);
    contextR.drawImage(star, 0, 0, 700, 700, 125, 50, 200, 200);
    contextR.drawImage(star, 0, 0, 700, 700, 175, 50, 200, 200);
   
    if (localStorage.getItem("rounds") == "five"){
    contextR.drawImage(star, 0, 0, 700, 700, 125, 10, 200, 200);
    contextR.drawImage(star, 0, 0, 700, 700, 175, 10, 200, 200);

    }



    if (speed % SLOW_FRAME == 0) {//anaimation loop that continues to update
        if (framex < 10) framex++;
        else framex = 0;
    }
    speed++;

    if (playScore == 1) {
        context3.drawImage(starF, 0, 0, 700, 700, 40, 50, 200, 200);//The stars are drawn to reflect the points gained by the players
    }


    if (playScore == 2) {
        context3.drawImage(starF, 0, 0, 700, 700, 90, 50, 200, 200);
    }

    if (playScore == 3) {
        context3.drawImage(starF, 0, 0, 700, 700, 140, 50, 200, 200);
    }

      if (playScore == 4) {
        context3.drawImage(starF, 0, 0, 700, 700, 40, 10, 200, 200);
    }

    if (playScore == 5) {
        context3.drawImage(starF, 0, 0, 700, 700, 90, 10, 200, 200);
    }




    if (rivalScore == 1) {
        contextR3.drawImage(starF, 0, 0, 700, 700, 75, 50, 200, 200);
    }


    if (rivalScore == 2) {
        contextR3.drawImage(starF, 0, 0, 700, 700, 125, 50, 200, 200);
    }


    if (rivalScore == 3) {
        contextR3.drawImage(starF, 0, 0, 700, 700, 175, 50, 200, 200);
    }

     if (rivalScore == 4) {
        contextR3.drawImage(starF, 0, 0, 700, 700, 175, 10, 200, 200);
    }


    if (rivalScore == 5) {
        contextR3.drawImage(starF, 0, 0, 700, 700, 125, 10, 200, 200);
    }


}



function whencardisPicked2() {

    if (localStorage.getItem("player1pick") != ""){
    player1Pick = localStorage.getItem("player1pick");
    }

    if (player1Pick == "rock" && cardisPicked2 == true)//shows the card that the computer has picked depending on computer variable 
    { contextR2.drawImage(rock2, framex * SPRITE_WDT, 0, 700, 700, 55, 100, 200, 200); }

    if (player1Pick == "paper" && cardisPicked2 == true) 
    { contextR2.drawImage(paper2, framex * SPRITE_WDT, 0, 700, 700, 55, 100, 200, 200); }

    if (player1Pick == "scissors" && cardisPicked2 == true) 
    { contextR2.drawImage(scissors2, framex * SPRITE_WDT, 0, 700, 700, 55, 100, 200, 200); }

    if (player2pick === "rock" &&  player1Pick  === "scissors" ||
        player2pick === "scissors" &&  player1Pick  === "paper" ||
        player2pick === "paper" &&  player1Pick   === "rock")//Winning conditions 
    {
        victory = "Yes";
    }

    if (player2pick === "scissors" &&  player1Pick   === "rock" ||
        player2pick === "paper" &&  player1Pick   === "scissors" ||
        player2pick === "rock" &&  player1Pick   === "paper")//losing conditions 
    {
        victory = "No";
    }

    if (player2pick === "scissors" &&  player1Pick   === "scissors" ||
        player2pick === "paper" &&  player1Pick  === "paper" ||
        player2pick === "rock" &&  player1Pick  === "rock")//draw conditions 
    {
        //Draws the result on the screen 
        victory = "Draw";
    }


}

function victorious() {


    if (victory == "Yes"&& cardisPicked2 == true ) {
        document.getElementById('winLoseDraw').style.display = 'inline'//Message appears after both players make a selection
        document.getElementById("winLoseDraw").innerHTML = "You Win!";//The message if the player win's
        cardisPicked2 = false;//card is no longer picked
        document.getElementById('nextRound').style.display = 'inline'//button to go to the next round
        document.getElementById('canvas_stop').style.display = 'inline'//A canvas to stop the player from continously pressing the cards
        playScore += 1;
    }

    if (victory == "No" && cardisPicked2 == true) {
        document.getElementById('winLoseDraw').style.display = 'inline'
        document.getElementById("winLoseDraw").innerHTML = "You Lose!";
        cardisPicked2 = false;
        document.getElementById('nextRound').style.display = 'inline';
        document.getElementById('canvas_stop').style.display = 'inline';
        rivalScore += 1;
    }

    if (victory == "Draw" && cardisPicked2 == true) {
        document.getElementById('winLoseDraw').style.display = 'inline'
        document.getElementById("winLoseDraw").innerHTML = "You Draw!";
        cardisPicked2 = false;
        document.getElementById('nextRound').style.display = 'inline';
        document.getElementById('canvas_stop').style.display = 'inline';
    }



    if (rivalScore == 3 && localStorage.getItem("rounds") == "three") {//This function (and the others below) are to call the "game over" screen once all the rounds are completed
        document.getElementById("form").style.width = "100%";
        document.getElementById("winMessage").innerHTML = "You Lose!";
        localStorage.setItem("gameOver", "yes");
        
    localStorage.setItem("player1Pick", "");
    localStorage.setItem("player1Pick", "");
    }

    if (playScore == 3 && localStorage.getItem("rounds") == "three") {
        document.getElementById("form").style.width = "100%";
        document.getElementById("winMessage").innerHTML = "You Win!";
        localStorage.setItem("gameOver", "yes");
    }

   
    if (rivalScore == 5 && localStorage.getItem("rounds") == "five") {
        document.getElementById("form").style.width = "100%";
        document.getElementById("winMessage").innerHTML = "You Lose!";
        localStorage.setItem("gameOver", "yes");
    }

    if (playScore == 5 && localStorage.getItem("rounds") == "five") {
        document.getElementById("form").style.width = "100%";
        document.getElementById("winMessage").innerHTML = "You Win!"; 
        localStorage.setItem("gameOver", "yes");

}

    document.getElementById("score").innerHTML = playScore + ":" + rivalScore;

    if(localStorage.getItem("gameOver") == "yes"){
        document.getElementById("form").style.width = "100%"; 
        localStorage.setItem("gameOver", "no");
    }


}



document.getElementById('nextRound').style.display = 'none';
document.getElementById('canvas_stop').style.display = 'none';

function nextRound() {
    cardIsPicked2 = "";

    rounds++;//The round number increases to indicate next round
    victory = "";//victory is reset as well as all other vairables for the player picks in the script and local storage
    player2pick = "";
    player1Pick = "";
    localStorage.setItem("player1pick", player2pick);
    document.getElementById('nextRound').style.display = 'none';//The button dissapears
    document.getElementById('canvas_stop').style.display = 'none';//canvas disappears
    document.getElementById('winLoseDraw').style.display = 'none';//message disappears
        context4.clearRect(0, 0, CANVAS_WDT, CANVAS_HGT);//canvases with the cards and stars are cleared
        context2.clearRect(0, 0, CANVAS_WDT, CANVAS_HGT);
        contextR2.clearRect(0, 0, CANVAS_WDT, CANVAS_HGT);

    console.log(localStorage);

    document.getElementById("round").innerHTML = "Round " + rounds;
    document.getElementById("winMessage").innerHTML = "You Win!";
}


function gameloop() {
    animate();
    whencardisPicked2();
    victorious();
    window.requestAnimationFrame(gameloop);
}


window.requestAnimationFrame(gameloop);

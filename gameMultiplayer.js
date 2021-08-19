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
const CANVAS_HGT = canvas.height = 400;
const SPRITE_WDT = 700;
let framex = 0;
let speed = 0;
const SLOW_FRAME = 6;
var playerPick;
var playerClicked = false;
var computerPick;
var cardIsPicked = false;
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
}

const paper = new Image();
if (answer == "yes") {
    paper.src = "purplePaper.png";
    }
    else{
        paper.src = "paper.png";
    }
    

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

    if (x < 107 && x > 17 && y > 92 && y < 196 && cardIsPicked == false) { //coordinates of the cards on the canvas 
        playerPick = "rock";//picked vairable changes 
        cardIsPicked = true;//Detects of a card has been picked 
    }


    if (x < 202 && x > 112 && y > 92 && y < 196 && cardIsPicked == false) {
        playerPick = "paper";
        cardIsPicked = true;
    }

    if (x < 297 && x > 207 && y > 92 && y < 196 && cardIsPicked == false) {
        playerPick = "scissors";
        cardIsPicked = true;
    }

}

else {

         
    if (x < 160 && x > 32 && y > 110 && y < 292 && cardIsPicked == false) { //coordinates of the cards on the canvas 
        playerPick = "rock";//picked vairable changes 
        cardIsPicked = true;//Detects of a card has been picked 
    }


    if (x < 300 && x > 172 && y > 110 && y < 292 && cardIsPicked == false) {
        playerPick = "paper";
        cardIsPicked = true;
    }

    if (x < 440 && x > 312 && y > 110 && y < 292 && cardIsPicked == false) {
        playerPick = "scissors";
        cardIsPicked = true;
    }
}

localStorage.setItem("player1pick", playerPick);

}


window.addEventListener('storage', () => {
    // When local storage changes, dump the list to
    // the console.
    console.log((window.localStorage.getItem("Player 2:" + 'player2pick')));
  });



function animate() {
    context.clearRect(0, 0, CANVAS_WDT, CANVAS_HGT);
    context.drawImage(rock, framex * SPRITE_WDT, 0, 700, 700, 0, 100, 200, 200);//draws the images 
    context.drawImage(paper, framex * SPRITE_WDT, 0, 700, 700, 140, 100, 200, 200);
    context.drawImage(scissors, framex * SPRITE_WDT, 0, 700, 700, 280, 100, 200, 200);
    contextR.drawImage(load, framex * SPRITE_WDT, 0, 700, 700, 55, 100, 200, 200);

    if (playerPick == "rock"){
        context4.drawImage(cardback, 0, 0, 700, 700, 140, 100, 200, 200);
        context4.drawImage(cardback, 0, 0, 700, 700, 280, 100, 200, 200);
                document.getElementById('canvas_stop').style.display = 'inline';
    }

    if (playerPick == "paper"){
        context4.drawImage(cardback, 0, 0, 700, 700, 0, 100, 200, 200);
        context4.drawImage(cardback, 0, 0, 700, 700, 280, 100, 200, 200);
                document.getElementById('canvas_stop').style.display = 'inline';
    }

    if (playerPick == "scissors"){
        context4.drawImage(cardback, 0, 0, 700, 700, 0, 100, 200, 200);
        context4.drawImage(cardback, 0, 0, 700, 700, 140, 100, 200, 200);
            document.getElementById('canvas_stop').style.display = 'inline';
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
        context3.drawImage(starF, 0, 0, 700, 700, 40, 50, 200, 200);
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

function whenCardisPicked() {
    if (localStorage.getItem("player2pick") == "rock" && cardIsPicked == true)//shows the card that the computer has picked depending on computer variable 
    { contextR2.drawImage(rock2, framex * SPRITE_WDT, 0, 700, 700, 55, 100, 200, 200); }

    if (localStorage.getItem("player2pick") == "paper" && cardIsPicked == true) { contextR2.drawImage(paper2, framex * SPRITE_WDT, 0, 700, 700, 55, 100, 200, 200); }

    if (localStorage.getItem("player2pick") == "scissors" && cardIsPicked == true) { contextR2.drawImage(scissors2, framex * SPRITE_WDT, 0, 700, 700, 55, 100, 200, 200); }
    

    if (playerPick === "rock" && localStorage.getItem("player2pick") === "scissors" ||
        playerPick === "scissors" && localStorage.getItem("player2pick") === "paper" ||
        playerPick === "paper" && localStorage.getItem("player2pick")  === "rock")//Winning conditions 
    {
        victory = "Yes";
    }

    if (playerPick === "scissors" && localStorage.getItem("player2pick")  === "rock" ||
        playerPick === "paper" && localStorage.getItem("player2pick")  === "scissors" ||
        playerPick === "rock" && localStorage.getItem("player2pick")  === "paper")//losing conditions 
    {
        victory = "No";
    }

    if (playerPick === "scissors" && localStorage.getItem("player2pick")  === "scissors" ||
        playerPick === "paper" && localStorage.getItem("player2pick")  === "paper" ||
        playerPick === "rock" && localStorage.getItem("player2pick")  === "rock")//draw conditions 
    {
        //Draws the result on the screen 
        victory = "Draw";
    }

}

function victorious() {


    if (victory == "Yes") {
        document.getElementById('winLoseDraw').style.display = 'inline'
        document.getElementById("winLoseDraw").innerHTML = "You Win!";
        cardIsPicked = false;
        document.getElementById('nextRound').style.display = 'inline'
        document.getElementById('canvas_stop').style.display = 'inline'
    }

    if (victory == "No") {
        document.getElementById('winLoseDraw').style.display = 'inline'
        document.getElementById("winLoseDraw").innerHTML = "You Lose!";
        cardIsPicked = false;
        document.getElementById('nextRound').style.display = 'inline'
        document.getElementById('canvas_stop').style.display = 'inline'
    }

    if (victory == "Draw") {
        document.getElementById('winLoseDraw').style.display = 'inline'
        document.getElementById("winLoseDraw").innerHTML = "You Draw!";
        cardIsPicked = false;
        document.getElementById('nextRound').style.display = 'inline'
        document.getElementById('canvas_stop').style.display = 'inline'
    }

}


    if (rivalScore == 3 && localStorage.getItem("rounds") == "three") {
        document.getElementById("form").style.width = "100%";
        document.getElementById("winMessage").innerHTML = "You Lose!";
    }

    if (playScore == 3 && localStorage.getItem("rounds") == "three") {
        document.getElementById("form").style.width = "100%";
        document.getElementById("winMessage").innerHTML = "You Win!";
    }

   
    if (rivalScore == 5 && localStorage.getItem("rounds") == "five") {
        document.getElementById("form").style.width = "100%";
        document.getElementById("winMessage").innerHTML = "You Lose!";
    }

    if (playScore == 5 && localStorage.getItem("rounds") == "five") {
        document.getElementById("form").style.width = "100%";
        document.getElementById("winMessage").innerHTML = "You Win!";
    






    document.getElementById("score").innerHTML = playScore + ":" + rivalScore;

}


document.getElementById('nextRound').style.display = 'none';
document.getElementById('canvas_stop').style.display = 'none';


function nextRound() {

    rounds++;


    
    if (victory == "Yes") {
        playScore += 1;
    }

    if (victory == "No") {
        rivalScore += 1;
    }

    if (victory == "draw") {
        drawScore += 1;
    }

    victory = "";

    localStorage.setItem("player1pick", "");
    localStorage.setItem("player2pick", "");
    document.getElementById('nextRound').style.display = 'none';
    document.getElementById('canvas_stop').style.display = 'none';
    document.getElementById('winLoseDraw').style.display = 'none';
        context4.clearRect(0, 0, CANVAS_WDT, CANVAS_HGT);
        context2.clearRect(0, 0, CANVAS_WDT, CANVAS_HGT);
        contextR2.clearRect(0, 0, CANVAS_WDT, CANVAS_HGT);

    console.log(localStorage);

    document.getElementById("round").innerHTML = "Round " + rounds;
    document.getElementById("winMessage").innerHTML = "You Win!";
}

//Ideas:
//Move loading card to a location off the canvas, make all the texts variables so you can replace them with ""

//This is the code I'll use to reload the page later
//location.reload();
//return false;
//The end of the code after I figure out how to develop a gameloop


function gameloop() {
    animate();
    whenCardisPicked();
    victorious();
    window.requestAnimationFrame(gameloop);
}


window.requestAnimationFrame(gameloop);
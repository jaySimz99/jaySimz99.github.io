function switchStyle(sheet) {
    document.getElementById('switchStyle').setAttribute('href', sheet);

}

if(localStorage.getItem("playerName") == ""){
var playerName = document.getElementById('name').value;
localStorage.setItem('playerName', playerName);
}

//Function to change the display of the game
function display() {
    var playerName = document.getElementById('name').value;
    localStorage.setItem('playerName', playerName);
    if (document.getElementById('purpleOpt').checked) {//checks if the purple option is checked and switches style if it is
        switchStyle('perfectPurple.css');
        localStorage.setItem("checkboxPurple", "yes");
        document.getElementById('purpleOpt').checked;   
    }
    if (document.getElementById('pinkOpt').checked) {//checks if the pink option is checked and switches style if it is
        switchStyle('plushyPink.css');
        localStorage.setItem("checkboxPurple", "no");
        document.getElementById('pinkOpt').checked;
    }

    localStorage.setItem('backUpName', localStorage.getItem("backUpName"));//a backupName if the user doesn't add a name when they save settings

    document.getElementById("form").style.width = "0%";//form is invisible


if (document.getElementById("rounds").value == "three") {
    localStorage.setItem('rounds', "three");
}
else{
    localStorage.setItem('rounds', "five");
}

}

function openNav() {
    document.getElementById("form").style.width = "100%";//opens form 
}

function closeNav() {
    document.getElementById("form").style.width = "0%";//closes form
}

var answer = localStorage.getItem('checkboxPurple');
    
    if (answer == "yes") {
        switchStyle('perfectPurple.css');
    }else
    {
        switchStyle('plushyPink.css'); //remembers the color option
    }


if ('serviceWorker' in navigator) {
    console.log('service worker works');
    window.addEventListener('load', () => {
      navigator.serviceWorker
      .register('/serviceWorker.js')
      .then(reg => console.log('service worker registered'))
      .catch(err => console.log('Error: ${err}')) 
    })//setting up the service worker
}

function openInNewTab(url, url2) {//opens 2 new tabs for multiplayer if a name is present 
    if (localStorage.getItem("playerName") == ""){
        alert("No name detected! Press settings and add a name.");
    }
    else{
          window.open(url, '_blank').focus();
        window.open(url2, '_blank').focus();
    }

    localStorage.removeItem("player1pick");
    localStorage.removeItem("player2pick");
    
   }

   function openInNewTab2(url) {//opens a tab for single player if a name is present
    if (localStorage.getItem("playerName") == ""){
        alert("No name detected! Press settings and add a name.");
    }
    else{
          window.open(url, '_blank').focus();
    }
    
   }

   window.addEventListener("load", function(){//removes both players picks when the multiplayer game is loaded
    localStorage.removeItem("player1pick");
    localStorage.removeItem("player2pick");
});


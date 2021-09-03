function switchStyle(sheet) {
    document.getElementById('switchStyle').setAttribute('href', sheet);

}

function display() {

    var playerName = document.getElementById('name').value;
    localStorage.setItem('playerName', playerName);
    if (document.getElementById('purpleOpt').checked) {
        switchStyle('perfectPurple.css');
        localStorage.setItem("checkboxPurple", "yes");
        document.getElementById('purpleOpt').checked;   
    }
    if (document.getElementById('pinkOpt').checked) {
        switchStyle('plushyPink.css');
        localStorage.setItem("checkboxPurple", "no");
        document.getElementById('pinkOpt').checked;
    }

    localStorage.setItem('backUpName', localStorage.getItem("backUpName"));

    document.getElementById("form").style.width = "0%";


if (document.getElementById("rounds").value == "three") {
    localStorage.setItem('rounds', "three");
}
else{
    localStorage.setItem('rounds', "five");
}


    console.log(localStorage);
}

function openNav() {
    document.getElementById("form").style.width = "100%";
}

function closeNav() {
    document.getElementById("form").style.width = "0%";
}

var answer = localStorage.getItem('checkboxPurple');
    
    if (answer == "yes") {
        switchStyle('perfectPurple.css');
    }else
    {
        switchStyle('plushyPink.css'); 
    }


if ('serviceWorker' in navigator) {
    console.log('service worker works');
    window.addEventListener('load', () => {
      navigator.serviceWorker
      .register('/serviceWorker.js')
      .then(reg => console.log('service worker registered'))
      .catch(err => console.log('Error: ${err}')) 
    })
}

function openInNewTab(url, url2) {
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

   function openInNewTab2(url) {
    if (localStorage.getItem("playerName") == ""){
        alert("No name detected! Press settings and add a name.");
    }
    else{
          window.open(url, '_blank').focus();
    }
    
   }

   window.addEventListener("load", function(){
    localStorage.removeItem("player1pick");
    localStorage.removeItem("player2pick");
});

function switchStyle(sheet) {
    document.getElementById('switchStyle').setAttribute('href', sheet);

}

function display() {


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

    window.localStorage.removeItem("player1name"); 

    var playerName = document.getElementById('name').value;
    localStorage.setItem('playerName', playerName);

    document.getElementById("form").style.width = "0%";

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
function switchStyle(sheet) {
    document.getElementById('switchStyle').setAttribute('href', sheet);
}

function display() {

    var changeStyleCanvas = document.getElementsByName('changeStyle');

    if (document.getElementById('purpleOpt').checked) {
        switchStyle('perfectPurple.css');
    }
    if (document.getElementById('pinkOpt').checked) {
        switchStyle('plushyPink.css');
    }

    var playerName = document.forms["settingsForm"]["name"].value;;
    alert("Hello " + playerName + "!");

    localStorage.setItem('player1name', 'name');

    document.getElementById("form").style.width = "0%";

}

function GetGamerTag(key, elementID) {
    var value = document.getElementById(elementID).value;
    localStorage.setItem(key, value);
    getItem(key);
}

function getItem(key){
	var localStorageValue = localStorage.getItem(key);
	document.getElementById("playerName").innerHTML = localStorageValue;
}


function openNav() {
    document.getElementById("form").style.width = "100%";
}

function closeNav() {
    document.getElementById("form").style.width = "0%";
}

var viewport_meta = document.getElementById('viewport-meta');

var viewports = {
		default: viewport_meta.getAttribute('content'),
		small: 'width=360'
	};

var viewport_set = function() {
		if ( screen.width < 400 )
			viewport_meta.setAttribute( 'content', viewports.small );
		else
			viewport_meta.setAttribute( 'content', viewports.default );
	}
viewport_set();

window.onresize = function() { 
	viewport_set(); 
}


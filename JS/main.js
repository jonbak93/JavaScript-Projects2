/*function twoVar() {
    var poké1 = document.getElementById('Charizard').innerHTML = 'pokeball.png';


}

twoVar();

function clickMe() {
    var poké2 = document.getElementById('Charizard').innerHTML = 'charizard.png';
}

clickMe(); */


/*function changeImage() {

    if (document.getElementById("Pokeball").src == "pokeball.png") {
        document.getElementById("Charizard").src = "charizard.png";
    }
}*/

function hide1() {
    document.getElementById("Charizard").style.visibility = "hidden";
    document.getElementById("colorChange").style.color = "Black";
}

function hide2() {
    document.getElementById("Pikachu").style.visibility = "hidden";
    document.getElementById("colorChange").style.color = "Black";
}

function hide3() {
    document.getElementById("Squirtle").style.visibility = "hidden";
    document.getElementById("colorChange").style.color = "Black";
}

function Pokemon2() {
    document.getElementById("Charizard").style.visibility = "visible";
    document.getElementById("colorChange").style.color = "Orange";
}

function Pokemon3() {
    document.getElementById("Pikachu").style.visibility = "visible";
    document.getElementById("colorChange").style.color = "Yellow";
}

function Pokemon4() {
    document.getElementById("Squirtle").style.visibility = "visible";
    document.getElementById("colorChange").style.color = "Blue";
}

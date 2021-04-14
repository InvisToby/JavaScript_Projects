//assignment 60
function displayType (character) {
    var characterType = character.getAttribute("data-character-type");
    alert(characterType + " is from the " + character.innerHTML + " Universe");
}

function displayAlien (character) {
    var characterAlien = character.getAttribute("data-character_alien");
    alert(character.innerHTML + " is a " + characterAlien + ".");
}
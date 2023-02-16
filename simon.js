var gamePattern = []
var buttonColors = [red, green, yellow, blue];


function nextSequence() {

    randomNumber = Math.floor(Math.random() * 4);
    var randomChoosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChoosenColor);
    console.log(gamePattern);
}


for (var i = 0; i <= 6; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var thisButton = this.innerHTML;
        makeSound(thisButton);

    })
};

document.addEventListener("keydown", function (event) {
    makeSound(event.key);
})


function makeSound(key) {

    switch (key) {

        case 'w':
            var crash = new Audio('C://Users//KIIT//Desktop//Drum Kit Starting Files//sounds//crash.mp3');
            crash.play();
            break;
        case 'a':
            var kick = new Audio('C://Users//KIIT//Desktop//Drum Kit Starting Files//sounds//kick-bass.mp3');
            kick.play();
            break;

        case 's':
            var snare = new Audio('C://Users//KIIT//Desktop//Drum Kit Starting Files//sounds//snare.mp3');
            snare.play();
            break;

        case 'd':
            var tom1 = new Audio('C://Users//KIIT//Desktop//Drum Kit Starting Files//sounds//tom-1.mp3');
            tom1.play();
            break;

        case 'j':
            var tom2 = new Audio('C://Users//KIIT//Desktop//Drum Kit Starting Files//sounds//tom-2.mp3');
            tom2.play();
            break;

        case 'k':
            var tom3 = new Audio('C://Users//KIIT//Desktop//Drum Kit Starting Files//sounds//tom-3.mp3');
            tom3.play();
            break;
        case 'l':
            var tom4 = new Audio('C://Users//KIIT//Desktop//Drum Kit Starting Files//sounds//tom-4.mp3');
            tom4.play();
            break;
    }



}

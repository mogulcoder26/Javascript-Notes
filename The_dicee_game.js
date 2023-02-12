var randomNumberdice1 =Math.ceil((Math.random()*6));
var randomNumberdice2 =Math.ceil((Math.random()*6));

randomImageGendice1 ="C:/Users/KIIT/Desktop/images/dice"+randomNumberdice1+".png"
randomImageGendice2 ="C:/Users/KIIT/Desktop/images/dice"+randomNumberdice2+".png"


document.querySelector(".img1").setAttribute("src",randomImageGendice1);
document.querySelector(".img2").setAttribute("src",randomImageGendice2);

if(randomNumberdice1>randomNumberdice2){
    document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else if(randomNumberdice1<randomNumberdice2){
    document.querySelector("h1").innerHTML="Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}

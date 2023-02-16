# JavaScript Notes:

inspect -->sources -->index.js for js related code.

```alerts``` = used to create a dialog box in order to pass on a piece of text / info .

typeof(data_type) is used to find data type of the data_type in js.

# Data type

- Strings
- numbers
- bool

```prompt``` = used to take input form user.

```var``` = a type of container which is used to store data.

# String:

- String.length
- String.slice()
- String.substr()
- String.replace()
- String.replaceAll()
- String.toUpperCase()
- String.toLowerCase()
- String.concat()
- String.trim()
- String.trimStart()
- String.trimEnd()
- String.padStart()
- String.padEnd()
- String.charAt()
- String.charCodeAt()
- String.split()


# JavaScript Search Methods:
- String.search()
- String.indexOf()
- String.lastIndexOf()
- String.search()
- String.match()
- String.matchAll()
- String.includes()
- String.startsWith()
- String.endsWith()

# String Methods

toString()     --> Returns a number as a string
toExponential()--> Returns a number written in exponential notation
toFixed()	   --> Returns a number written with a number of decimals
toPrecision()  --> Returns a number written with a specified length
ValueOf()	   --> Returns a number as a number

# Sorting Methods:

- sort():
```
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();

//alphabetically sorts the array.

```
- reverse():

```
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();

```

By default, the sort() function sorts values as strings.
This works well for strings ("Apple" comes before "Banana").However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".Because of this, the sort() method will produce incorrect result when sorting numbers.You can fix this by providing a compare function:

Example
```
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
```

# Concatenation:

It is the way of joining strings with other strings/data types.

The ```console. log()``` method outputs a message to the web console. The message may be a single string (with optional substitution values), or it may be any one or more JavaScript objects.

```Math.floor()```is a function which is equivalent to [] operator.
```Math.random()``` is a function which generates a random number form 0.0 t 0.999999.
```math.ceil()``` is a fucntion which ceils up or is equivalent to {}.

```string.length()``` is a function that logs the strings length .
```string.slice(0,x)``` is a function that logs out strings sliced version from 0th index to x-1th index.
```string.toUpper()``` is a function that upper-cases the strings from lower case to uppercase.
```string.toLower()```vice versa.

js follows associativity and precedence order.


# Functions in js:

function myFunc(){


    return x;
}


## Passing arguments and parameters in a function:

```
function lifeInWeeks(age) {
    
/************Don't change the code above************/    


var years=90-age;
var days =years*365
var weeks=years*52;
var months=years*12;
console.log("You have " + days + "  days, " + weeks+ " weeks, and "+ months +" months left.");

    
    
    
    
    
/*************Don't change the code below**********/
}
```

//calling a function: 
lifeInWeeks(56);

output:
```You have 12410 days, 1768 weeks, and 408 months left.```

```
eg:2 

//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

function bmiCalculator(weight,height){
    return Math.floor(weight/(height*height));
}

/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/
```
# Using if-else statement in js

-Note:Equality operator in js is written like === and not ==.

```
function isLeap(year) {
    
/**************Don't change the code above****************/    
    
    //Write your code here. 
    if(year%4===0 && year%100===0){
        return 'Not Leap year.';
    }else if(year%4===0 && year%100===0 && year%400===0){
        return 'Leap year.';
    }else if(year%4===0){
        return 'Leap year.';
    }
    else{
        return 'Not leap year.'
    }


    

/**************Don't change the code below****************/    

}
```


# Arrays in JS:

- Note: cant declare an array like ```var myarr[];```.Instead, ```var myarr=[];``` is correct.

```
var myNum =[1,2,3,4,5,6,8];
myNum[2];//returns 3...

if(nyNum.includes(8)){
    console.log('YES');
}
else{
    console.log('NO');
}

```

```array_name.includes(x)``` determines whether x is present inside the array ```array_name```.Returns bool value / 0-1.

# FizzBuzz:

```
//fizzbuzz

for(var i=1;i<=100;i++){
    if(i%3===0 &&i%5===0){
        console.log("FizzBuzz");
    }
    else if(i%5===0){
    console.log("Buzz");
    }
    else if(i%3===0){ 
    console.log("Fizz");
    }
    else{
        console.log(i);
    }
    console.log('//n');
}

```


```arr.push(x)``` is a function that can be used to push or append a number or any data type inside the last position of the array arr.
```arr.pop()``` is a function that pops or removes the defined position of data type off from that array arr.

# Document Object Modelling(DOM):

3 ways of incorporating js in our site.
- Inline JS [Not very modular and not a best practice]
- Internal JS....mehh
- External JS: Yup!
Note: it is important to place external js link in the bottom most part of the body unlike we place the link to css file in the head of our html file as the fonts and color need to load up fast before the content of the website but if we place the link above the target attributes,the browser will responf late and this will offer buffer in our site .



# Targeting Elements:

- ```document.getElementsByTag('h1')``` fetches an array of all h1 attributes.
in order to style it , you use:

```document.getElementsByTag('h1').[0].style.color="red";```

- ```document.getElementsByClasses(.thisisaclass)``` fetches an array of all the atributes possesing .thisisaclass class.
- ```getElementbyId(#gay)``` fetches A ELEMENT which has id #gay.Note ID is unique.
- ```document.querySelector('h1').style.color = "Blue";```
- ```document.firstChild.lastChild.style.color ="red";``` changes the color of the body to red.This can be inferred from html5 tree document.


another variant of ```querySelector()``` is ```querySelectorAll()```.
As query selector provides only a single attribute and in case of clash between attributes having the same property but are placed in a different order , then the first element is always targeted but using the querySelectorAll() func,we target all those attributes.

Note:that querySelector is a beneficial tag than getElement... methods as they're much more broader in sense as compared to querySelector which is specific and to the point .

## Inorder to keep code modular and separate,it is important to keep separate files for css,html,js.

```
.classList.add("Invisible");
.classList.remove("Invisible");
.classList.toggle("Invisible");
```
help in operating the modification in css through js.

# Event Listener in JS:

The addEventListener() method attaches an event handler to an element without overwriting existing event handlers.you can add many event handlers to one element.

# Syntax:

## element.addEventListener(event, function, useCapture);
- The first parameter is the type of the event (like "click" or "mousedown" or any other HTML DOM Event.)

- The second parameter is the function we want to call when the event occurs.

- The third parameter is a boolean value specifying whether to use event bubbling or event capturing. This parameter is optional.


## Types of HTML events:

- When a user clicks the mouse
- When a web page has loaded
- When an image has been loaded
- When the mouse moves over an element
- When an input field is changed
- When an HTML form is submitted
- When a user strokes a key

eg:
```
document.querySelector("btn").addEventListener("click",handleClick);

function handleClick(){
    alert("button was clicked!");
}

```

NOTE:NEVER USE THE FUNCTION INSIDE THE addEventListener func with () as it triggers the function directly.


Note:anonymous functions are simialr to normal functions,the difference is just that they dont have any name and are directly used inside the event listener.


# Higher Order Functions:

Functions that return another function are called Higher Order Functions:

```
function sum(num1,num2){
    return num1+num2;
}

function multiply(num1,num2){
    return num1*num2;
}

function calculator_hof(num1,num2,operator){
    return operator(num1,num2);
}

```
### How to play sounds in HTML Using JS:
```
var audio = new Audio('audio_file.mp3');
audio.play();

//Tap into the audio hardware
//Check the file at File location exists
//check the filelocation is a sound file
//Play the file at FileLocation

```

# Javascript Objects:

## Type-1:

//Creating an object:
var Bellboy1 ={
    name:"timmy";
    age:19;
    color:"black";

//accesing:
Bellboy1.name;
Bellboy1.color;

}

## Type-2 aka Constructor Function :

```
function BellBoy(name,age,color){
    this.name=naam,
    this.age=umar,
    this.color=color,
}

'this' is kind of similar to 'self' keyword in python,i guess...

//Creating a new object with the help of construction function:
var bellBoy1 = new BellBoy("Timmy",19,"black");

```

# Switch Case in JS:

```
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```

# Method:

function BellBoy(name,age,color){
    this.name=naam,
    this.age=umar,
    this.color=color,
    this.picking=function(){
        alert("May i pick your bag");
    }
}


document.addEventListener("keydown",function(event){
    jsfunction(event.key){
            //code.
    }
}

# Date generator:

```
var d = new Date();
document.getElementById("demo").innerHTML = d;
```

# Math functions:

- Math.round(x)	Returns x rounded to its nearest integer
- Math.ceil(x)	Returns x rounded up to its nearest integer
- Math.floor(x)	Returns x rounded down to its nearest integer
- Math.trunc(x)	Returns the integer part of x (new in ES6)
- Math.sign(x)  Returns the sign of x as true / false.
- abs(x)	Returns the absolute value of x
- acos(x)	Returns the arccosine of x, in radians
- acosh(x)	Returns the hyperbolic arccosine of x
- asin(x)	Returns the arcsine of x, in radians
- asinh(x)	Returns the hyperbolic arcsine of x
- atan(x)	Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
- atan2(y, x)	Returns the arctangent of the quotient of its arguments
- atanh(x)	Returns the hyperbolic arctangent of x
- cbrt(x)	Returns the cubic root of x
- ceil(x)	Returns x, rounded upwards to the nearest integer
- cos(x)	Returns the cosine of x (x is in radians)
- cosh(x)	Returns the hyperbolic cosine of x
- exp(x)	Returns the value of Ex
- floor(x)	Returns x, rounded downwards to the nearest integer
- log(x)	Returns the natural logarithm (base E) of x
- max(x, y, z, ..., n)	Returns the number with the highest value
- min(x, y, z, ..., n)	Returns the number with the lowest value
- pow(x, y)	Returns the value of x to the power of y
- random()	Returns a random number between 0 and 1
- round(x)	Rounds x to the nearest integer
- sign(x)	Returns if x is negative, null or positive (-1, 0, 1)
- sin(x)	Returns the sine of x (x is in radians)
- sinh(x)	Returns the hyperbolic sine of x
- sqrt(x)	Returns the square root of x
- tan(x)	Returns the tangent of an angle
- tanh(x)	Returns the hyperbolic tangent of a number
- trunc(x)	Returns the integer part of a number (x)
- Math.random() Returns a random value between 0 and 0.999


# For In loop in  Java script:

The JavaScript for in statement loops through the properties of an Object:

Example
```
const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {
  text += person[x];
}
```

## Example Explained:
The for in loop iterates over a person object
Each iteration returns a key (x)
The key is used to access the value of the key
The value of the key is person[x]

# Bitwise Operators:
```
&	AND	Sets each bit to 1 if both bits are 1
|	OR	Sets each bit to 1 if one of two bits is 1
^	XOR	Sets each bit to 1 if only one of two bits is 1
~	NOT	Inverts all the bits
<<	Zero fill left shift	Shifts left by pushing zeros in from the right and let the leftmost bits fall off
>>	Signed right shift	Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off
```


# Javascript Objects:
```In JavaScript, objects are king. If you understand objects, you understand JavaScript.```


In JavaScript, almost "everything" is an object.

Booleans can be objects (if defined with the new keyword)
Numbers can be objects (if defined with the new keyword)
Strings can be objects (if defined with the new keyword)
Dates are always objects
Maths are always objects
Regular expressions are always objects
Arrays are always objects
Functions are always objects
Objects are always objects
All JavaScript values, except primitives, are objects.



JavaScript variables can also contain many values.Objects are variables too. But objects can contain many values.
Object values are written as name : value pairs (name and value separated by a colon).

```
Example
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
```
It is a common practice to declare objects with the const keyword.



## Object Methods:
Methods are actions that can be performed on objects.Object properties can be both primitive values, other objects, and functions.
An object method is an object property containing a function definition.

## Object Properties:
Properties are the values associated with a JavaScript object.A JavaScript object is a collection of unordered properties.

Properties can usually be changed, added, and deleted, but some are read only.

The syntax for accessing the property of an object is:
```ObjectName.property      // person.age```

## Nested Objects
Values in an object can be another object:

Example
myObj = {
  name:"John",
  age:30,
  cars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  }
}
You can access nested objects using the dot notation or the bracket notation:

```
Example
myObj.cars.car2;
```

const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

## What is ```this```?
In JavaScript, the ```this``` keyword refers to an object.
Which object depends on how this is being invoked (used or called).

The ```this``` keyword refers to different objects depending on how it is used:

- In an object method, this refers to the object.
- Alone, this refers to the global object.
- In a function, this refers to the global object.
- In a function, in strict mode, this is undefined.
- In an event, this refers to the element that received the event.
- Methods like call(), apply(), and bind() can refer this to any object.

# Note -1:
this is not a variable. It is a keyword. You cannot change the value of this.
# Note -2:
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

If you access the fullName property, without (), it will return the function definition:

# Fun Fact:
The ```integrity``` and ```crossorigin``` attributes are used for Subresource Integrity (SRI) checking. This allows browsers to ensure that resources hosted on third-party servers have not been tampered with. Use of SRI is recommended as a best-practice, whenever libraries are loaded from a third-party source. 


# JQuery(a js library which helps in writing js code.):

CDN: 
```
 <script>src="https://code.jquery.com/jquery-3.6.3.js"
  integrity="sha256-nQLuAZGRRcILA+6dMBOvcRh5Pe310sBpanc6+QBmyVM="
  crossorigin="anonymous"></script>
```


the ```$``` symbol is used to send a query all over the document to find the attribute which is getting targeted.Also keep in mind that it is similar to ```querySelector/querySelectorAll``` attribute which is used to select one /many attributes at the same time.BUT with JQuery/($),it selects ALL of the tags.

```
$("h1").css("color","green");
console.log($("h1").css("color"));
```

- $().addClass() adds class
- $().removeClass()  removes class
- $().toggleClass() toggles between classes
- $().text()  Changes texts inside the tag

# Adding event listeners using JQuery:
```
- $().click(function(){
    $("h1").css("color","grey");
})
```

```
$("h1").before("<button>New</button>);
$("h1").after("<button>New</button>);
$("h1").append("<button>New</button>);
$("h1").prepend("<button>New</button>);
```
 
 # Animations:

 $("h1).hide();
 $("h1").show();
 $('h1').slideUp();
 $("h1").slideDown();
 $("h1").slideToggle();


# Web API's:













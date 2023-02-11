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

# Concatenation 

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
    console.log('\n');
}

```


```arr.push(x)``` is a function that can be used to push or append a number or any data type inside the last position of the array arr.
```arr.pop()``` is a function that pops or removes the defined position of data type off from that array arr.








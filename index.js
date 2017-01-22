/* Variables and Data Types */
/*Console.log each variable and test your code in the terminal using the Node REPL*/

/*i.e.*/

var pet = "sebastian the pug";
console.log(pet); 

/**
* #1
* Variables with a String value
*
* Declare variables named `firstName`, `lastName`, `birthPlace`, `favoriteFood`, `bestMovie`, `favLoveSong`, `cuteAnimal`, `favColor`, `favSneaker`, `coffeeShop`.
* Assign values to these variables with your own data.
*
* Each value should be a String. 
**/
var firstName = "Sami";
var lastName = "Lobley";
console.log(firstName);
console.log(lastName); 
var birthPlace = "Tokyo";
var favoriteFood = "Sushi";
var bestMovie = "PulpFiction";
var favLoveSong = "LoveStory";
var cuteAnimal = "Dog";
var favColor = "Blue";
var favSneaker = "KitKat";
var coffeeShop = "Starbucks";
console.log(birthPlace);
console.log(favoriteFood);
console.log(bestMovie);
console.log(favLoveSong);
console.log(cuteAnimal);
console.log(favColor);
console.log(favSneaker);
console.log(coffeeShop);


/**
* #2
* Variables with a Number value
*
* Declare variables named `favoriteNumber`, `currentYear`, `thatOnePrinceSong`, 'tokyoOlympics`, `mariahCareyAge`, `currentTemp`, `studentsInClass`, `numOfJapanPrefectures`, `currentIphoneModel` and `shoeSize`.     
*
* Each value should be a Number
**/
var favoriteNumber = 2;
var currentYear = 2017;
var thatOnePrinceSong = 1999;
var tokyoOlympics = 2020;
var mariahCareyAge = 46;
var currentTemp = 22;
var studentsInClass= 9;
var numOfJapanPrefectures = 47;
var currentIphoneModel = 7;
var shoeSize = 6;

console.log(favoriteNumber);
console.log(currentYear);
console.log(thatOnePrinceSong);
console.log(tokyoOlympics);
console.log(mariahCareyAge);
console.log(currentTemp);
console.log(studentsInClass);
console.log(currentTemp);
console.log(studentsInClass);
console.log(numOfJapanPrefectures);
console.log(currentIphoneModel);
console.log(shoeSize);


/**
* #3
* Variables with a Boolean value
*
* Declare variables named `likesMcDonalds`, `watchedMrRobot`, `ranMarathon`, `wrestledABear`, `lovesDonuts`, `readHarryPotter`, `sleptInClass`, `drinksCoffee`, `shopsAtWholeFoods` and `ownsRedShoes`.     
*
* Each value should be a Boolean
**/
var likesMcDonalds = true;
var watchedMrRobot = false;
var ranMarathon = true;
var wrestledABear = false;
var lovesDonuts = true;
var readHarryPotter = true;
var sleptInClass = false;
var drinksCoffee = true;
var shopsAtWholeFoods = true;
var ownsRedShoes =  false;
console.log(likesMcDonalds);
console.log(watchedMrRobot);
console.log(ranMarathon);
console.log(wrestledABear);
console.log(lovesDonuts);
console.log(readHarryPotter);
console.log(sleptInClass);
console.log(drinksCoffee);
console.log(shopsAtWholeFoods);
console.log(ownsRedShoes);

/**
* #4
* Variables with a Null value
*
* Declare variables named `completedPrepClass`, `traveledToMars` and `scoredTDinNFL`.
*
* Each value should be Null 
**/
var completedPrepClass = null;
var traveledToMars = null;
var scoredTDinNFL = null;
console.log(completedPrepClass);
console.log(traveledToMars);
console.log(scoredTDinNFL);


/*
#5. 
* What is the difference between null and undefined? Type your answer in two or three commented-out sentences.
*/
/*Null is a special object because type of null returns 'object'. Null is a primitive value that represents the null, empty, or non-existent reference. On the other hand, undefined means the variable doesn't exist or hasn't been declared or set.*/

/**
* #6
* Variables with an Array value
* 
* Declare a variable named 'plateLunch` and assign it an array containing 5 of your favorite lunch items.
* Declare a variavle named `fruitBasket` and assign it an array containing 5 fruits of your choosing.
* Declare a variable named `westCoast` and assign it an array containing states found on the west coast of the US.
* Declare a variable named `lotteryResult and assign it an array containing 5 random numbers.
* Declare a variable named `duets` and assign it an array containing 3 nested arrays, each containing the names of 2 singers or bands.
* Declare a variable named `mixPlate` and assign it an array containing different data types of your choosing.
**/
var plateLunch = ["Chicken", "Rice", "MacSalad", "Salad", "Spam", "Salmon"];
var fruitBasket = ["Apple","Banana","Pear","orange","Strawberry"];
var westCoast = ["California","Oregon","Washington","Alaska","Hawaii"];
var lotteryResult = [322, 566, 345, 222, 777];
var duets = [["Beyonce", "JayZ"], ["Sean Paul", "CleanBandit"], ["Drake", "Rihanna"]];
var mixPlate = ["Sushi","FriedChicken","MacSalad"];
console.log(plateLunch);
console.log(fruitBasket);
console.log(westCoast);
console.log(lotteryResult);
console.log(duets);
console.log(mixPlate);

/*7
* Accessing Values in Arrays

var partyList = ["carrot cake", "rocky road ice cream", "mochiko chicken", "orange tang", "lemon bars"];

What is the length of this array? Please print the length (a number) to the console.
What is the index position of carrot cake? Please print this item to the console.
What is the index position of lemon bars? Please print this item to the console.
*/
var partyList = ["carrot cake", "rocky road ice cream", "mochiko chicken", "orange tang". "lemon bars"];
console.log(partyList.length); // 5
console.log(partyList[0]);
console.log(partyList[4]);

/*
* #8 
* Concatenation 
* Concatenate the variables `firstName` and `lastName` and store this to a new variable called `fullName`.

* Declare a new variable, `whereFrom`, and assign it the value of a string using the variables `fullName` and `birthPlace`:
 xx xx is from xx.
 e.g.
 Usain Bolt is from Jamaica.
 
*Declare a new variable, `mariahStory`. Assign it the value of concatenating the variables `mariahCareyAge`, `favSneaker`, `favLoveSong` and `coffeeShop` to create the following sentence:
At the age of xx, Mariah Carey, wearing her fancy xx, sang xx at the xx.
*/
var firstName = "Sami";
var lastName = "Lobley";
var fullName = (firstName + " " + lastName);
console.log(fullName);

var whereFrom = fullName + " " + birthPlace;
var birthPlace = "Tokyo";
console.log(whereFrom);

/*var mariahStory = "At the age of" + " " + mariahCareyAge + ", Mariah Carey, wearing her fancy" + " " + favoriteSneaker + ", sang" + favoriteSong + "at the" + coffeeShop;
console.log(mariahStory);*/

/*
* #9 Arithmetic
* Variables with the outcome of an arithmetic operation.
* Declare two variables, `num1` and `num2` and assign each of these variables a number of your choosing.
* Next perform the following arithmetic operations:

* Add the two variables and store it to new variable named `sum`.
* Subtract the two variables and store it to a new variable named `difference`.
* Mulitply the two variables and store it to a new variable named `product`.
* Divide the two variables and store it to a new variable named `quotient`.
* What is the remainder when you divide num1 by num2? Print your answer to the console.
 */

var num1 = 27;
var num2 = 2;

var sum = num1 + num2;
console.log(sum);

var difference = num1 - num2;
console.log(difference);


/*
* #10
* Comparisons & Logic
* Variables with the outcome of a comparison operation:
*
* Declare a variable named `isStrictlyEqual` and compare two strings "Tacocat" and "tacocat" using the strict equality.
* Declare another variable named `isLooselyEqual` and compare the two strings "Tacocat" and "tacocat" using equality.
* Print both variables to the console. If the answers are different, why? If not, why not? Write you answer two or three commented-out sentences.

* Declare a variable named `sameNum` and compare a string "5" and a number 5 using strict equality.
* Declare another variable named `sameNumba` and compare a string "5" and a number 5 using equality.
* Print both variables to the console. If the answers are different, why? If not, why not? Write you answer two or three commented-out sentences.
*/

var isEqual = "Tacocat" === "tacocat";
console.log(isEqual);
var isEqual = "Tacocat" == "tacocat";
console.log("taco", isEqual);

var equal = "5" === 5;
console.log(equal);



* Use the logical and && and or || and compare the following:
* 3>2 3<1 (use or)
* 3>2 6>3 (use and)
* 7>2 8<5 (use and)
* Declare variables and print the results to the console. What are the differences between the three and why?


/*

* #11
* Assignments
* Variables with the outcome of an assignment operation:
*
* Declare a variable named `myBox` and assign it with a number of your choosing.
* This variable will be used to store multiple types of values as we assign them to show how variables in JavaScript are not bound to a single data type
* and can change values.

* Write 5 different assignment statements and `console.log()` the value of the variable after each
* assignment statement to show the current value. REMEMBER: an assignment is DIFFERENT from a declaration.
*
var myBox = 42;
console.log(myBox);

myBox = 3;
console.log(myBox);

myBox = undefined;
console.log(myBox);



/**
* Final Boss 
* Additional exercises designed to further challenge you and give you a jump start on the next topic that'll be covered.
* Function - A block of code designed to perform a particular task. It allows you to reuse code.
*
* Declare a function named `bakePie` which has a single parameter 'ingredient'.
* When the function is invoked, it should return a string, "Today's special ingredient pie." Where ingredient will be the value that you pass into the function.
* For example, if the value is `blueberry`, it should return "Today's special blueberry pie."
* Declare a variable 'pieResult' and assign it to the function call.
* Console.log the variable to see the result.


* Declare a Function named `jump` which has a single parameter, `height`.
* This function should return a string, "You jumped height feet high!" Where height will be the value that you pass into the function.
* For example, if the value is 9, it should return "You jumped 9 feet high!"
*
* Declare a variable 'jumpResult' and assign it to the function call.
* Console.log the variable to see the result.


* Declare a Function named `cook` which a takes three parameters, `ingredient1`, `ingredient2`, `recipeName`.
* This function should return a String along the lines of, "Tomatoes and Cheese make a Pizza!"
* if invoked in this way -> cook("Tomatoes", "Cheese", "Pizza");
**/


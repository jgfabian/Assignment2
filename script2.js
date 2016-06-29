//Assignment2 Part 1

//STEP 1

// var person = prompt("Please enter your name");
// alert(person.length);

// STEP 2
// var person = prompt("Please enter your name");
// var number = prompt("Please enter a number to show the letter of your name")
// alert(person.charAt(number));

// STEP 3
// var firstName = prompt("Please enter your First Name.");
// var lastName = prompt("Please enter your Last Name.");
// var combinedName = "Your name is: " + firstName;
// alert(combinedName.concat(lastName));

// Step 4
// var dogText = "The quick brown fox jumps over the lazy dog";
// alert(dogText.indexOf("fox"));  // 16

// Step 5
// var dogText = "The quick brown fox jumps over the lazy dog";
// alert(dogText.lastIndexOf("fox"));  // 16

// Step 6
// var dogText = "The quick brown fox jumps over the lazy dog";
// var person = prompt("Please enter your full name");
// alert(dogText.replace("the lazy dog", person));  // 16

// Step 7
// var dogText = "The quick brown fox jumps over the lazy dog";
// var word = prompt("Please enter a word");
// alert(dogText.search(word)); 

// Step 8
// var old_string = "The quick brown fox jumps over the lazy dog";
// var new_string = old_string.slice(31, 43);
// alert(new_string.toUpperCase());

// Step 9
// var uCasedogText = "    THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG     ";
// var trimDog = (uCasedogText.trim());
// alert(trimDog.toLowerCase());

// Step 10
// var dogText = "the quick brown fox jumps over the lazy dog";
// alert(titleCase(dogText)); 
// function titleCase(string) { return string.charAt(0).toUpperCase() + string.slice(1); } 


//Assignment2 Part 1 Math

// Step 1
// var number = prompt("Please enter a number");
// alert(Math.abs(number));

// Step 2
// var number = prompt("Please enter a decimal");
// console.log(Math.ceil(number));

// Step 3
// var number = prompt("Please enter a decimal");
// console.log(Math.floor(number));

// Step 4

// var number = prompt("Please enter 5 numbers (comma delimited) like 1,2,4,5,6");
// var largest = (Math.max(number));
// var smallest = (Math.min(number));
// console.log(smallest);
// console.log(largest);
//    DOES NOT WORK

// Step 5
// var number = prompt("Please enter a number");
// console.log(Math.sqrt(number));

// Part 2 Date
// Step 6
// var d = new Date();
// console.log(d.toDateString());


// Step 7
// var d = new Date();
// console.log(d); 
// DOES NOT WORK UNLESS USE FUNCTIONS


// Step 8
/* var d = new Date();
var x = (d.getMonth());

var x = x += 1;     

 if (x == 1) {console.log("Jan");
           }
 else if(x == 2) {console.log("Feb");
                }
 else if(x == 3) {console.log("Mar");
                }
 else if( x== 4) {console.log("Apr");
                }
 else if(x == 5) {console.log("May");
                }
 else if(x == 6) {console.log("Jun");
                }
 else if(x == 6) {console.log("Jul");
                }
 else if(x == 6) {console.log("Aug");
                }
 else if(x == 6) {console.log("Sep");
                }
 else if(x == 6) {console.log("Oct");
                }
 else if(x == 6) {console.log("Nov");
                }
 
 else  {console.log("Dec");
                }
*/

/* Step 9
  var d = new Date();
 var x = (d.getDay());
            
 if (x == 6) {console.log("Weekend");
           }
  else if(x == 7) {console.log("Weekend");
                }

  else  {console.log("Not a Weekend - get back to work !!!");
                }
*/
   
// Step 10
/*
var d = new Date();
var x = (d.getDay()) - 1;
            
if (x == 1) {console.log("Monday");
           }
else if(x == 2) {console.log("Tuesday");
                }
else if(x == 3) {console.log("Wednesday");
                }
else if(x == 4) {console.log("Thursday");
                }
else if(x == 5) {console.log("Friday");
                }
else if(x == 6) {console.log("Saturday");
                }
else  {console.log("Sunday");
                }
*/
// Step 11
/*
var d = new Date();
var x = (d.getDay());
if (x == 1) {var day = "Monday";
           }
else if(x == 2) {var day = "Tuesday";
                }
else if(x == 3) {var day = "Wednesday";
                }
else if(x == 4) {var day = "Thursday";
                }
else if(x == 5) {var day = "Friday";
                }
else if(x == 6) {var day = "Saturday";
                }
else  {var day = "Sunday";
                       }
console.log(day.charAt(0));
*/

//Part 3
// Step 12
/*
var num1 = prompt("Please enter first number");
var num2 = prompt("Please enter second number");
if (num1 > num2) {var larger = num1;
                 } 
else {var larger = num2;
     }
console.log(larger);
*/


// Step13
/*
var students = ["Ursula", "Paul", "Henry", "Tabitha", "Lucy"];
var marks = [80, 77, 88, 95, 68];
var grades = [];

var i;
for (i = 0; i < marks.length; i++) {
    if (marks[i] < 60) {var g = "F";
                    }
   
       else if(marks[i] < 70) {var g = "D";
                }
     
        else if(marks[i] < 80) {var g = "C";
                }
       
    else if(marks[i] < 90) {var g = "B";
                }
    
       else {var g = "A";
     }
    grades.push(g);
}


console.log(students[0], grades[0]);
console.log(students[1], grades[1]);
console.log(students[2], grades[2]);
console.log(students[3], grades[3]);
console.log(students[4], grades[4]);

// AFTER MANY HRS - VERY PLEASED IT WORKS!!!

*/

// Step 14
/*
var result;
var i;
for (i = 1; i < 16; i++) {
    if (i % 2 == 0) {var result = "even";
                        }
    else {var result = "odd";
           }
    
    console.log("The number " + i + " is " + result);
    }
    
*/

// Step 15
/*
var result;
var i;
for (i = 1; i < 101; i++) {
    if ((i % 3 == 0) & (i % 5 == 0)) {var result = "FizzBuzz";
                        }
    else if (i % 3 == 0) {var result = "Fizz";
                        }
    else if (i % 5 == 0) {var result = "Buzz";
                        }
    else {var result = i;
           }
    
    console.log(result);
    }
*/

// Part 4 Step 15

// Step 15
/*

function startGame() {
    var txt;
    
    var r = confirm("Press the button to play the game");
    if (r === true) {
        txt = "Awesome our hero is waiting! </br > </br > You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingardera.  You are disoriented, lost hungry and extremely thirsty. </br > You see a spec of light in the distance ahead of you, something shimmering to your right, and the soundof running water to your left. Your back is against the wall..";
    } else {
        txt = "Too bad, we are going to play anyway because our hero desperately needs your help! </br > </br>You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingardera. </br > You are disoriented, lost hungry and extremely thirsty.  You see a spec of light in the distance ahead of you, something shimmering to your right, and the soundof running water to your left. Your back is against the wall..";
    }
   
    document.getElementById("setting").innerHTML = txt;
}
   

*/
//Part 5


/*

var choice = prompt("Do you choose HEADS or TAILS?").toUpperCase();
var coinFlip = Math.random() * 2;  // <1 = HEADS
if (choice === "HEADS") {  // choice heads
    if (coinFlip < 1) {  // result heads
        var result = alert("The flip was heads and you chose heads.\n You Win!");
    }
    else {  // choice does not change - still heads, but coinflip > 1 which is tails
        var result = alert("The flip was tails and you chose heads.\n You Lose!");
    }
}
else { // choice must now be tails
    if (coinFlip < 1) {  // result of flip = heads
        var result = alert("The flip was heads but you chose tails.\nYou Lose!");
    }
    else { // result of flip is now tails, and you chose tails
        var result = alert("The flip was tails and you chose tails. \nYou Win!");
    }
}
*/
//  THINK ABOUT USING A NAMED FUNCTION

//Part 6
/*
var coinFlip = .5;

function myFunction() {
    var text = "";
    var i = 0;
       while (i < 10) {
     var coinFlip = Math.random() *2;
           Math.abs(coinFlip);
           if (coinFlip < 1) {
       text += "<br>Heads ";
             }
     else {
         text += "<br>Tails";
        
    }
       i++;
         document.getElementById("demo").innerHTML = text;
    }
 
}
    
*/

//Part 7


/*
//Part 8

// loop within a loop
var loop1;
var loop2;
var asterisk;

for (loop1 = 1; loop1 <= 8; loop1++)
{
   for (loop2 = 1; loop2 < loop1; loop2++)
   
     {
    asterisk = asterisk + ("*");        
      }
 console.log(asterisk);
    asterisk = ""; 
}

*/
/*
//Part 8

// loop to determine if even or odd
var i;

for (var i = 0; i < 16; i++) 
        {
    if (i % 2 === 0) {          // remainder operator divided by 2 is always 0
        console.log(i + " is an even number");
        } else {
        console.log(i + " is an odd number");
    }
        }

*/
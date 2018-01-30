//JavaScript Homework
//#1 function that accepts 2 ints and displays the larger
function largerNum() {
    'use strict';
    var num1, num2;
    num1 = window.prompt("Input first integer");
    num2 = window.prompt("Input second integer");
    if (parseInt(num1, 5) > parseInt(num2, 5)) {
        console.log("The larger of " + num1 + " and " + num2 + " is " + num1 + ".");
    }
    else if (parseInt(num2, 10) > parseInt(num1, 10)) {
        console.log("The larger of " + num1 + " and " + num2 + " is " + num2 + ".");
    }
    else {
        console.log("The values " + num1 + " and " + num2 + " are equal.");
    }
}
//#2 Function that accepts three numbers and sorts them into ascending order
function sortThreeNums(num1, num2, num3) {
    'use strict';
    if (num1 < num2 && num1 < num3) {
        if (num2 < num3) {
            alert(num1 + ", " + num2 + ", " + num3);
        }
        else {
            alert(num1 + ", " + num3 + ", " + num2);
        }
    }
    else if (num2 < num1 && num2 < num3) {
        if (num1 < num3) {
            alert(num2 + ", " + num1 + ", " + num3);
        }
        else {
            alert(num2 + ", " + num3 + ", " + num1);
        }
    }
    else if (num3 < num1 && num3 < num2) {
        if (num1 < num2) {
            alert(num3 + ", " + num1 + ", " + num2);
        }
        else {
            alert(num3 + ", " + num2 + ", " + num1);
        }
    }
}
//#3 Function to find largest number of five numbers
function largestOfFive(num1, num2, num3, num4, num5) {
    'use strict';
    if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
        alert("The largest is: " + num1);
    }
    else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
        alert("The largest is: " + num2);
    }
    else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) {
        alert("The largest is: " + num3);
    }
    else if (num4 > num1 && num4 > num3 && num4 > num2 && num4 > num5) {
        alert("The largest is: " + num4);
    }
    else {
        alert("The largest is: " + num5);
    }
}
//#4 For loop checking if number is odd or even from 0 to 15
function oddEvenLoop() {
    'use strict';
    var i;
    for (i = 0; i < 16; i += 1) {
        if (i === 0) {
            console.log("the number " + i + " is even");
        }
        else if (i % 2 === 0) {
            console.log("the number " + i + " is even");
        }
        else {
            console.log("the number " + i + " is odd");
        }
    }
}
//#5 fizzbuzz for numbers 1 to 100
function fizzBuzz() {
    'use strict';
    var i;
    for (i = 0; i <= 100; i += 1) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            console.log(i + "\t" + "FizzBuzz");
        }
        else if (i % 3 === 0) {
            console.log(i + "\t" + "Fizz");
        }
        else if (i % 5 === 0) {
            console.log(i + "\t" + "Buzz");
        }
        else {
            console.log(i);
        }
    }
}
//#6 numbers between 1 to 100o divisble by 3
function divByThree() {
    'use strict';
    var count = 0;
    var i;
    for (i = 1; i <= 1000; i++) {
        if (i % 3 === 0) {
            count++;
        }
    }
    console.log("There are " + count + " number divisble by 3 up to 1000");
}
//#7 Number Pyramid
function createNumPyramid(height) {
    var num = 0;
    var count = 0;
    var row = "";
    for (var j = 1; j <= height; j++) {
        row += ' '.repeat(height - count);
        num += (Math.pow(10, count));
        count++;
        row += num * num;
        console.log(row);
        row = "";
    }
}
//#8 Number Diamond
function createDiamond(height) {
    var num = 0;
    var row = "";
    for (var i = 0; i <= height; i++) {
        num += (Math.pow(10, i))
        row += ' '.repeat(height - i) + (num * num);
        console.log(row);
        row = "";
    }
    row = "";
    var count = 1;
    for (var j = height; j > 0; j--) {
        num = parseInt("1".repeat(j));
        row += ' '.repeat(count) + (num * num);
        count++;
        console.log(row);
        row = "";
    }
}
alert("Test Message");
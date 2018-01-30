//JavaScript Homework
//#1 function that accepts 2 ints and displays the larger
var window;
function largerNum() {
    'use strict';
    var num1, num2;
    num1 = window.prompt("Input first integer");
    num2 = window.prompt("Input second integer");
    if (parseInt(num1, 5) > parseInt(num2, 5)) {
        window.console.log("The larger of " + num1 + " and " + num2 + " is " + num1 + ".");
    } else if (parseInt(num2, 10) > parseInt(num1, 10)) {
        window.console.log("The larger of " + num1 + " and " + num2 + " is " + num2 + ".");
    } else {
        window.console.log("The values " + num1 + " and " + num2 + " are equal.");
    }
}
//#2 Function that accepts three numbers and sorts them into ascending order
function sortThreeNums(num1, num2, num3) {
    'use strict';
    if (num1 < num2 && num1 < num3) {
        if (num2 < num3) {
            window.alert(num1 + ", " + num2 + ", " + num3);
        } else {
            window.alert(num1 + ", " + num3 + ", " + num2);
        }
    } else if (num2 < num1 && num2 < num3) {
        if (num1 < num3) {
            window.alert(num2 + ", " + num1 + ", " + num3);
        } else {
            window.alert(num2 + ", " + num3 + ", " + num1);
        }
    } else if (num3 < num1 && num3 < num2) {
        if (num1 < num2) {
            window.alert(num3 + ", " + num1 + ", " + num2);
        } else {
            window.alert(num3 + ", " + num2 + ", " + num1);
        }
    }
}
//#3 Function to find largest number of five numbers
function largestOfFive(num1, num2, num3, num4, num5) {
    'use strict';
    if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
        window.alert("The largest is: " + num1);
    } else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
        window.alert("The largest is: " + num2);
    } else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) {
        window.alert("The largest is: " + num3);
    } else if (num4 > num1 && num4 > num3 && num4 > num2 && num4 > num5) {
        window.alert("The largest is: " + num4);
    } else {
        window.alert("The largest is: " + num5);
    }
}
//#4 For loop checking if number is odd or even from 0 to 15
function oddEvenLoop() {
    'use strict';
    var i;
    for (i = 0; i < 16; i += 1) {
        if (i === 0) {
            window.console.log("the number " + i + " is even");
        } else if (i % 2 === 0) {
            window.console.log("the number " + i + " is even");
        } else {
            window.console.log("the number " + i + " is odd");
        }
    }
}
//#5 fizzbuzz for numbers 1 to 100
function fizzBuzz() {
    'use strict';
    var i;
    for (i = 0; i <= 100; i += 1) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            window.console.log(i + "\t" + "FizzBuzz");
        } else if (i % 3 === 0) {
            window.console.log(i + "\t" + "Fizz");
        } else if (i % 5 === 0) {
            window.console.log(i + "\t" + "Buzz");
        } else {
            window.console.log(i);
        }
    }
}
//#6 numbers between 1 to 1000 divisble by 3
function divByThree() {
    'use strict';
    var count = 0, i;
    for (i = 1; i <= 1000; i += 1) {
        if (i % 3 === 0) {
            count += 1;
        }
    }
    window.console.log("There are " + count + " number divisble by 3 up to 1000");
}
//#7 Number Pyramid
function createNumPyramid(height) {
    'use strict';
    var num = 0, count = 0, row = "", j;
    for (j = 1; j <= height; j += 1) {
        row += ' '.repeat(height - count);
        num += (Math.pow(10, count));
        count += 1;
        row += num * num;
        window.console.log(row);
        row = "";
    }
}
//#8 Number Diamond
function createDiamond(height) {
    'use strict';
    var num = 0, row = "", i, count = 1, j;
    for (i = 0; i <= height; i += 1) {
        num += (Math.pow(10, i));
        row += ' '.repeat(height - i) + (num * num);
        window.console.log(row);
        row = "";
    }
    row = "";
    for (j = height; j > 0; j -= 1) {
        num = parseInt("1".repeat(j));
        row += ' '.repeat(count) + (num * num);
        count += 1;
        window.console.log(row);
        row = "";
    }
}
window.alert("Test Message");

/*
//bubble sort without an array
function sortNumber(n1,n2,n3){
    var sorted, parkinglot;
    sorted=false;
    while(!sorted){
        sorted=true;
        if(n1>n2){
            parkinglot=n1;
            n1=n2;
            n2=parkinglot;
            sorted=false;
        }
        if(n2>n3){
            parkinglot=n2;
            n2=n3;
            n3=parkinglot;
            sorted=false;
        }
    }
}


//bubble sort with array

function sortNumber(arr){
    var sorted, parkinglot;
    sorted=false;
    while(!sorted){
        sorted=true;
        for(var i = 0; i < arr.length-1, i++){
            if (arr[i] > arr[i+1]){
                parkinglot = arr[i];
                arr[i] = arr[i+1];
                arr[i+1]=parkinglot;
                sorted=false;
            }
        }
    }
}

*/


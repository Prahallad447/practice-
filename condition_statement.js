// 1. Basic Loops:
// Question: Write a for loop that prints the numbers from 10 to 1 in descending order.
// Hint: Use a loop counter that starts at 10 and decrements by 1 until it reaches 1
// for(var i=10;i>=1;i--){
//     console.log(i);     // ans.  10 9 8 7 6 5 4 3 2 1 
// }


// 2.While Loop:
// Question: Write a while loop that prints the first 5 even numbers starting from 0.
// Hint: Use a loop counter initialized to 0 and increment it by 2 in each iteration.
// var i=0;
// var c=0;
// while(c<5){
//     console.log(i);
//     i+=2;
//     c++;           // ans. 0 2 4 6 8
// }               


// 3. Do-While Loop:
// Question: Write a do-while loop that prints the numbers from 1 to 5.
// Hint: Ensure the condition is checked after the loop body has executed.
// var i=1;
// do{
//     console.log(i);
//     i++;
// }               // ans.  1 2 3 4 5
// while(i<=5)


// 4.Break Statement:
// Question: Write a for loop that prints numbers from 0 to 10, but stops the loop when the number 7 is reached.
// Hint: Use an if statement to check if the loop counter equals 7 and then use break
// for(var i=0;i<=10;i++){
//     if(i==7){
//         break;        //ans. 0 1 2 3 4 5 6 
//     }
//     console.log(i);
// }


// 5.Continue Statement:
// Question: Write a for loop that prints numbers from 0 to 10, but skips the number 5.
// Hint: Use an if statement to check if the loop counter equals 5 and then use continue
// for(var i=0;i<=10;i++){
//     if(i==5){
//         continue;        // ans. 0 1 2 3 4 6 7 8 9 10
//     }
//     console.log(i);
// }


// 6.If-Else Statement:
// Question: Write an if-else statement that checks if a given number x is positive, negative, or zero, and prints an appropriate message.
// Hint: Use nested if statements to handle all three conditions
// var n=-5;
// if(n==0){
//        console.log("this number is zero"); 
//     }
//     else if(0<n){
//         console.log("THis is a positive number");
//     }
//     else{
//         console.log( " This is a negetive number");  // ans.This is a negetive number 
//     }


// 7. Switch Statement:
// Question: Write a switch statement that takes a variable day (with values from 0 to 6) and prints the corresponding day of the week (e.g., 0 for Sunday, 1 for Monday, etc.).
// Hint: Each case should correspond to a day of the week.
// var day=3;
// switch(day){
//     case 0: console.log("Sunday");
//     break;
//     case 1: console.log("Monday");
//     break;
//     case 2: console.log("Tuesday");
//     break;
//     case 3: console.log("Wednesday");   // ans. Wednesday
//     break;
//     case 4: console.log("Thrusday");
//     break;
//     case 5: console.log("Friday");
//     break;
//     case 6: console.log("Saturday");
//     break;
// }


// 8.Ternary Operator:
// Question: Use the ternary operator to check if a given number y is even or odd and print "Even" or "Odd" accordingly.
// Hint: Use the modulus operator % to determine if the number is even or odd.
// var y=6;
// result=(y%2==0?"Even":"Odd")   // ans. Even
// console.log(result);


// 9.Combining Loops and Conditions:
// Question: Write a for loop that prints numbers from 1 to 20. For multiples of 3, print "Fizz" instead of the number, for multiples of 5, print "Buzz", and for multiples of both 3 and 5, print "FizzBuzz".
// Hint: Use if, else if, and else statements to check the conditions inside the loop
// for(var i=1;i<=20;i++){
//     if(i%3==0 && i%5==0){
//         console.log("FizzBuzz");
//     }
//     else if(i%5==0){
//         console.log("Buzz");
//     }
//     else if(i%3==0){
//         console.log("Fizz");
//     }
//     else{
//         console.log(i);
//     }
// }


// 10. Complex Condition:
// Question: Write an if-else statement that takes a variable temperature and prints "Cold" if the temperature is below 15, "Warm" if it’s between 15 and 25, and "Hot" if it’s above 25.
// Hint: Use compound conditions with logical operators && to check for the range between 15 and 25
// var temperature=18;
// if(15>temperature){
//     console.log("cold");
// }
// if(15<=temperature && temperature<=29){
//     console.log("Warm");                   // ans. Warm
// }
// else{
//     console.log("Hot");
// }

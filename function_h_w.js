// Question 1: Default Parameters
// function greet(name="Guest"){
//     console.log("Hello " + name)
// }
// greet()
// greet("Programmer")


// Question 2:Function Overoading
// function caculateArea(radious){
//     return 3.14*radious*radious
// }
// function calculateArea(length,width){
//     return length*width
// }
// console.log("Area of circle =",calculateArea(3))        -----> NaN
// console.log("Area of rectangle=",caculateArea(2,3))     ----->12.56


//Question 3: Anynomous function
// let multiply=function(p,r){
//     console.log(p*r)
// }
// multiply(4,5)


// Question 4: Arrow function
// const isodd = (num) =>{
//     if(num%2==0){
//         return True
//     }
//     else{
//         return false
//     }

// }
// console.log("result=",isodd(5))   -----> false


// Question 5:Higher order Function
// const add=(a,b)=>{
//     return (a+b)
// }
// const subtract=(a,b)=>{
//     return (a-b)
// }
// console.log("addition=",add(5,7))         ---->addition=12
// console.log("subtraction=",subtract(9,2))   ---->subtraction =7

// const applyOperation = function(a,b,func){
//     return func(a,b)
// }

// console.log(applyOperation(4,5,add))      ---->9
// console.log(applyOperation(5,2,subtract))  --->3


// Question 6:Immediately Invoked Function Expression (IIFE)
// (function(){
//     console.log("This is an IIFE")
// })()

// 7. Use `setTimeout` to log "Hello after 2 seconds" to the console after a delay of 2 seconds.
// const Hello = () => console.log("Hello")
// setTimeout(Hello,2000)

// 8. Use `setInterval` to log "Repeating every second" to the console every second.
// const Repeating_every_second = () => console.log("Repeating_every_second")
//  setInterval(Repeating_every_second,1000)



// Question 9: Function Hoisting
// 9. Write a function `hoistedFunction` that logs "This function is hoisted" to the console. Call this function before its declaration to demonstrate hoisting.

// hoistedFunction(45)
// function hoistedFunction(r){
//     console.log(r)
// }


// Question 10: Arrow Function and Hoisting

// notHoisted()
// const notHoisted = () => {
//     console.log("Welcome Programmer")    //Cannot access 'hoistedFunction' before initialization
// }
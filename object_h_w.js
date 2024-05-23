// 1. Function and Rest Parameter
// function print(a, b, ...others) {
//     console.log(a, b, others);      ---->10 30 [ 60, 40, 80, 888, 99 ]
// }
// print(10, 30, 60, 40, 80, 888, 99);



// 2. Object Creation and Access
// let student={
//     name:"Prahallad",
//     age:19,
//     grade:'A'
// }
// console.log(student.name);      ---> Prahallad
// console.log(student['name']);   ---> Prahallad



// 3. Updating Object Values
// let book = {
//     title: "JavaScript Basics",
//     author: "John Doe",
//     year: 2022
// };
// book.title="Advanced JavaScript"
// console.log(book.title);            ---->Advanced JavaScript
// book['title']="Advanced JavaScript"
// console.log(book['title']);         ----->Advanced JavaScript



// 4. Deleting Object Properties
// let employee = {
//     name: "Alice",
//     position: "Developer",
//     salary: 50000
// };
// console.log(employee);     ----> { name: 'Alice', position: 'Developer', salary: 50000 }
// delete employee.position
// console.log(employee);     ---->{ name: 'Alice', salary: 50000 }



// 5. Methods in Objects
// let car ={
//     brand:"BMW",
//     model:"x5",
//     year:2004,
//     getcarage:function(){
//         return 2024-this.year

//     }
// }
// console.log(car.getcarage())    ----> 20



// 6. Using this Keyword 
// .(Explain what the this keyword refers to in the following code)
// let user = {
//     name: "Bob",
//     birthYear: 1990,
//     getAge: function() {
//         return 2024 - this.birthYear;
//     }
// };
// console.log(user.getAge());



// 7. Nested Objects
// let house={
//     address:"nilkanthapur",
//     size:900,
//     owner:{
//         name:"praha",
//         age:19
//     }
// }
// console.log(house.owner.name);   ---> praha



// 8. Object Method Binding(Explain how the call, apply, and bind methods work with examples from the provided code)
// --->1st object
//  let hotel = {
//     bookings:[],
//     book:function(name,menu,sit){
//         this.bookings.push({
//             name,menu,sit
//         })
//     }
// };
// hotel.book("subha","veg",2)
// hotel.book("subhadip","non-veg",10)
// console.log("Bookings",hotel.bookings);
// ----> 2nd object
// let resturent ={
//     bookings:[]
// }
// hotel.book.call(resturent,"sam","veg",41)
// console.log("Bookings:",resturent.bookings);  // ---> Bookings: [ { name: 'sam', menu: 'veg', sit: 41 } ]

// hotel.book.apply(resturent,["rama","non-veg",2])
// console.log("Bookings:",resturent.bookings);  // --> Bookings: [ { name: 'rama', menu: 'non-veg', sit: 2 } ]

// bind methode
// function person(){
//     console.log(this.name);   ---> subha
// }
// let obj={
//     name:"subha"
// }
// let user=person.bind(obj)    
// user()



// 9. For...in Loop
// let person = {
//     name: "Sani",
//     age: 20,
//     city: "Dhaka"
// }
// for(Key in person){
//     console.log(key,person[key]);
// }
// let person={
//     name:"sani",
//     age:20,
//     city:"dhaka"
// }
// for(key in person)
// {
//         console.log(key,person[key]);
// }



// 10 .Object Methods (Object.keys, Object.values, Object.entries)
// Explain the difference between Object.keys, Object.values, and Object.entries methods with examples
// let person={
//     name:"sani",
//     age:20,
//     city:"dhaka"
// }
// console.log(Object.keys(person));   //----> [ 'name', 'age', 'city' ]
// console.log(Object.values(person));  // --->[ 'sani', 20, 'dhaka' ]
// console.log(Object.entries(person)); //---> [ [ 'name', 'sani' ], [ 'age', 20 ], [ 'city', 'dhaka' ] ]



// 11. Object Freeze and Object Seal

// let obj = {
//     id: 1
// };
// Object.freeze(obj);
// obj.id = 2;
// console.log(obj.id);     // ---> 1 because after freeze value do not change


// let obj = {
//     id: 1
// };
// Object.seal(obj);
// obj.id = 2;
// delete obj.id;
// console.log(obj.id); //  ----> output=2 because seal can change the value but not delete the value
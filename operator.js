// 1. arithmatic operator
// 2. assignment operator
// 3. comparison operator
// 4. string operator
// 5. logical operator
// 6. bitwise operator
// 7. type operator

let a=5
let b=4

// 1. arithmatic operator

// (a) addition 
// console.log(a+b)     ---->9

// (b) subtraction 
// console.log(a-b)     ----> 1

//(c) multiplication
// console.log(a*b)     ----> 20

//(d) divition
// console.log(a/b)     ---> 1.25

//(e) Exponentiation
// console.log(a**b)    ---->625

// (f) modulus
// console.log(a%b)     ---->  1

// (g) increament
// a++
// console.log(a)       ----> 6

// (h) decreament
// a--
// console.log(a)       ---->  4



// 2. assignment operator

// console.log(a +=5)    ---->   10

// console.log(a-=3)     ----> 2

// console.log(a*=3)     ----> 15

// console.log(a/=2)     ---->2.5

// console.log(a%=3)     ----> 2

// console.log(a**=3)    ----> 125



// 3.comparison operator

// a. ==(equal to)
// console.log(a==b)   ---->false

// b. ===(equal value and type)
// let p="50"
// let r=50
// console.log(a===b)   ---->false

// c. !=(not equal)
// console.log(a!=b)   ----> true

// d. !==(not equal to value and type)
// let p="50"
// let r=50
// console.log(a!==b)   ----> true

// >(grater than)
// console.log(a>b)   ----> true

// <(less than)
// console.log(a<b)   ---->false

// >=(grater than or equal to)
// console.log(a>=b)   ---->true

// <=(less than or equal to)
// console.log(a<=b)    --->false


// 4. string operator

// a. string comparison
// console.log('a'<'d')   ----> true

// b. string addition(concatination)
// let str3="pra"
// let str4="hallad"
// console.log(str3+str4)   ---->prahallad

// 5. logical operation

// a. &&(logical and)
// console.log(a<b && a>b)   ----> false

// b. ||(logical or)
// console.log(a<b || a>b)   ----> true

// c. !(logical not) 
// console.log(!(a>b))   ---->false


// 6. bitwise operator

// a. binary Number 
// 10  ----> 1 0 1 0

// b. &(bitwise and)
// console.log(a&b)   ----> 4      0 1 0 1  ->5
//                                 0 1 0 0  ->4
//                                 0 1 0 0  ------>4(ans.)

// c. |(bitwise or)
// console.log(a|b)   ----> 5      0 1 0 1  ->5
//                                 0 1 0 0  ->4
//                                 0 1 0 1  ------> 5(ans.)   

// d. ~(bitwise not)
// console.log(~b)      -----> -5

// e. ^(x-or)
// console.log(a^b)   ----> 1      0 1 0 1  ->5
//                                 0 1 0 0  ->4
//                                 0 0 0 1  ------> 1(ans.)   

// f. >>(right shift)
// console.log(b>>1)   --->  2     0 1 0 0  ->4
//                                 0 0 1 0  ------> 2(ans.)   

// g. <<(left shift)
// console.log(b<<1)   --->  8     0 1 0 0  ->4
//                                 1 0 0 0  ------> 8(ans.)  



// 7. Type operator

// a.
// console.log(typeof 10)     ----> number 

// console.log(typeof "20")   ----> string 

// console.log(typeof false)  ---->boolean 

// b. Instance of
// class sam{}
// let tom=new sam()
// console.log(tom instanceof sam)     -----> true


// console.log([] == ![]);
// console.log(typeof(null))
// console.log(typeof(undefined))

// function fn(){
//     return;
//     {name: 'aayush'}
// }
// console.log(fn())

// const arr = [10, 12, 18 , 6 , 4] // 1,2

// function arr1(){
//     console.log(`sum of 2 numbers is : ${arr[1] + 
//         arr[2]
//     }`)
// }
// return arr1()
// function findIndex(){

//     for (let i = 0; i < array.length; i++) {
//         if(arr[i] === arr[i+1] === 30)
//     return 
    
//     }
// }

// console.log(findIndex())

// const myArr = [0, 1, 2, 3, 4, 5]

// const myn1 = myArr.slice(1, 3)

// console.log(myn1);

// const myn2 = myArr.splice(1, 3)
// console.log(myn2);

// console.log(typeof(NaN))
// function greet(city, country) {
//     console.log(this.name + " from " + city + ", " + country);
// }

// const user = { name: "Aayush" };

// greet.call(user, "Mumbai", "India");

// greet.apply(user, ["Mumbai", "India"]);

// const newFunc = greet.bind(user, "Mumbai", "India");

// newFunc();

// message = "good global"
// function hello1(){
//     let message = "good morning"
//     {
//        let  message = "good afternoon"
//        console.log("hello1" + message)
//     }
//     console.log(message)
// }

// hello1()

// let count = 0 

// const add = (function() {
//     if(count === 0){
//         count+=1;

//     }
//     return function(){
//         count +=1;
//         console.log(count);   // lexing scoping and clousure
//     }
// }());

// add();
// add();
// add();



// console.log(1==="1");




// let person = {
//     name :"aayush"
// }

// let ubaid = person

// ubaid.name = "Ubaid"

// console.log(person)


// if(true){
//     console.log(person)
//     {
//   let person = "aayush"
//     console.log(person)
//     }
  
// }

// Array of 3 numbers
// const numbers = [10, 20, 30];

// // Calculate sum
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }

// // Calculate average
// let average = sum / numbers.length;

// // Print result
// console.log("Sum:", sum);
// console.log("Average:", average);


// let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
//  val1 = undefined ?? 15
//  val1 = null ?? 10 ?? 20


// console.log(val1);


// if([] == true){
//    console.log("aayush is apsent")
// }else{
//     console.log("aayush is present")
// }

// let obj = {
//     a: {
//         b: undefined
//     }
// }

// console.log(obj.a?. b?. c?. d?? "aayush");


// var abc = 20;
// if(function f(){

// })
//     {
    
// }
// abc = abc+ typeof f;
// console.log(abc);


// function sum(a) {
//   return function(b) {
//     if (b !== undefined) {
//       return sum(a + b);
//     }                                          // infinite currying
//     return a;
//   };
// }

// console.log(sum(1)(2)(3)(4)()); 

// console.log(2>1);
// console.log(2!=1);

// console.log( "2" > 1);

// console.log( "02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined>= 0);


// ===

// console.log("2" === 2);
// console.log("2" === "2");
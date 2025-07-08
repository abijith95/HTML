// num1 = prompt("Enter first number: ")
// num2 =prompt("Enter second number: ")
// sum = parseInt(num1) + parseInt(num2)
// alert("The sum is " + sum)

// what ever may be the user input javacript will consider it as string.

// +,-,*,/ are operators
// % is called as modulus operator

// Number of datatypes in javascript  
// 1. Number
// 2. String
// 3. Boolean

// foodAmount = Number(prompt("Enter the amount of food: "))

// tippercent = Number(prompt("Enter the tip percent: "))

// tipAmount = tippercent / 100 

// totalAmount = foodAmount * tipAmount

// alert("Total Amount is " + totalAmount)

// num = 3

// console.log(num ** 3)

// Roundup the number
// num = 3.14
// console.log(Math.round(num))
// console.log(Math.floor(num))
// console.log(Math.ceil(num))

// console.log(Math.random() * 40)

// num = 10

// // Same content || same datatype
// if(num === '10'){
//   console.log('Success')
// }
// else{
//   console.log('Failure')
// }

// Welcome(10,20)

// function Welcome(a,b){
//   console.log(`${a} is the value of a and ${b} is the value of b`)
//     // String Interpolation

// }

// Welcome(23,43)

// num = sum(10,20)
// console.log(num)


// function sum(a, b){
//   return a + b
// }
// function calculate(tippercent) {
//   return tippercent / 100
// }



// const calculate = (tippercent) => {
//   return tippercent / 100
// }

// // function totAmount(tipAmount, foodAmount) {
// //   return tipAmount * foodAmount
// // }

// const totAmount = (tipAmount, foodAmount) => tipAmount * foodAmount


// foodAmount = Number(prompt("Enter the amount of food: "))

// tippercent = Number(prompt("Enter the tip percent: "))

// tipAmount = calculate(tippercent)

// totalAmount = totAmount(tipAmount, foodAmount)

// console.log(Math.round(totalAmount))

// const Names = ["John", "Jane", "Jack", "Jill"]
// // console.log(Names[2])
// Names.push("Jake")
// Names.push("Abi")
// Names.pop()
// Names.pop()
// console.log(Names)
// slice
// console.log(Names.slice(1,3))
// indexOf
// console.log(Names.indexOf("Jack"))
// console.log(Names.length)

// Objects
// const Human = {
//     name: "Abi", // key : value
//     age: 22,
//     phonenumber: 1234567890
// }

// // console.log(Human.name)
// console.log(Human.age)
// console.log(Human['name'])

// Human.dateOfBirth = "16/7/2003"

// console.log(Human)

 // 0-9

// Normal for loop
// for(let i=0; i<rollno.length;i++){
//     console.log(rollno[i])
// }


// const
// let
// var(depreciated)


// For each loop
// for(number of rollno){
//     console.log(number);
// }


// const rollno = [1,2,3,4,5]

// const ans = (rollno) => {
//     let result = []

//     for(number of rollno){
//         result.push(number * 2)
//     }

//     return result
    
// }

// SUM of an array

// 1 + 2 + 3 + 4 + 5 = 15

// const sum = (rollno) => {
//     let sum = 0
//     for(number of rollno){
//         sum = sum + number
//     }

//     return sum
// }

// console.log(sum(rollno))

// sum = 15 
// 1 => sum = 0 + 1 = 1
// 2 => sum = 1 + 2 = 3
// 3 => sum = 3 + 3 = 6
// 4 => sum = 6 + 4 = 10
// 5 => sum = 10 + 5 = 15
// finished

// const word = "blahblahb"

// const letterfreq = (word) => {
//     let frequency = {}
//     for(letter of word){
//         if(letter in frequency){
//             frequency[letter] =  frequency[letter] + 1
//         }
//         else{
//             frequency[letter] = 1
//         }
//     }

//     return frequency
// }

// const ans = letterfreq(word)
// console.log(ans)


// const ans = letterfreq(word)
// console.log(ans)



// Older way
// arr.map(function(number){
//     console.log(number)
// })

// // New way
// const result = arr.map((number) => number * 3)

// console.log(result)


// const ans = (arr) => {
//   for(const number of arr){
//       if(number > 4){
//         console.log(number)
//       }
//   }
// }

// array format
// const ans = (arr) => arr.filter((number)=> number > 4)
// console.log(ans(arr))

// REDUCE function

// const sum = (rollno) => {
//     let sum = 0
//     for(number of rollno){
//         sum = sum + number
//     }

//     return sum
// }

// const arr = [1,2,3,4,5]

// const result = arr.reduce((sum,number)=> sum * number)

// console.log(result)

// let heading = document.getElementById('heading')
// console.log("Before change :" +heading.innerText) // Hello, world!
// heading.innerText = 'Hello, Iam Abijith'
// console.log("After change :"+heading.innerText) // Hello, Iam Abijith

// heading.innerHTML = '<p>Hello, Iam Abijith</p>'
// heading.innerHTML = '<p>Hello, World</p>'
// const sum = (a,b) => {
//     let total = (a+b);
//     console.log(typeof (total));
//     console.log("sum :" + total);

// }
// sum(4,6);

// function sum1(a,b) {
//     let total = a+b;
//     console.log("sum1 :" + a+b);
// }
// sum1(2,5);

// const sum2 = function(a,b) {
//     let c = a+b;
//     console.log(typeof(c));
//     console.log("sum3 :" , c)
//     console.log("sum3 :" + c);
// }

// sum2(4,6);

// //function return value

// const sum3 = (a, b) => {
//     return total = a+b;
// }
// // console.log(sum3(4,6))
// console.log(sum3);
// const value = sum3(4,6);
// console.log(value);
console.log("*****************************************************")

// const biodata = () => {              
//     let myName = "satendra";
//     console.log(myName);

//     if (true) {
//         let myLastName = "kumar";
//         console.log("inner :" + myLastName);
//         console.log("inner :" + myName);
//     } 
//     console.log("innerOuter" + myLastName)
// }

// biodata();

// 2 template literals( template strings)

// for( let num =1; num<=10; num++) {
//     let tableOf = 12;
//     console.log(`${tableOf} * ${num} = ${tableOf*num} `)
// }

// const sum = (a,b) => {
//     return `the sum of and b is ${a+b}`
// }
// console.log(`the sum of the a and b  ${sum(10,80)}`)
// // console.log(sum(34,76));
// console.log(sum(10,40));

// const numbers = ["a","b","c","d","e"];

// for(index =0; index<numbers.length; index++){
//     console.log(`${index}  ${numbers[index]}`);
// }

// for(const index in numbers) {
//     console.log(index);
//     console.log(numbers[index]);
// }

// for(const element of numbers) {
//      console.log(element);
// }
// numbers.forEach(function(element, index, array) {
//     console.log(element + " index : " +index + "  " + array);
// } )
// var sum = 0;
// numbers.forEach((number ,index) => {
   
//     sum += index;
//     console.log(sum);
// })
// console.log(sum);
// const char = ["f","f","c","d","e"];

// console.log(char.indexOf("b"));
// const indexOfF = char.indexOf("f");
// console.log(indexOfF);

// const indexArr = char.map(ele => { return (char.indexOf(ele))
// })
// console.log(indexArr);

// const numbers = [1,7,6,4,5,6,7,8,9];

// const newArr = numbers.findIndex(number => {
//     return number>5
// })
// console.log(newArr);
// console.log(numbers.indexOf(7,1))
// console.log(numbers.indexOf(7 , 4));
// console.log(numbers.indexOf(7,8))

// lastIndexOf()
// const numbers = [1,7,6,4,5,6,7,8,9];

// console.log(numbers.lastIndexOf(7));
// console.log(numbers.lastIndexOf(7,7));

// const numbers = [2,4,5,7,8,9,2,3,5,6];

// if(numbers.includes(7)) {
//     console.log(`number found`)
// } else {
//     console.log(`number is not found`);
// }

// const isBoolean = numbers.includes(7);
// console.log(isBoolean);

// const isBoolean1 = numbers.includes(7 ,4);
// console.log(isBoolean1);

// const price = [200, 300,350, 400,500,600];

// const findElem = price.find((currValue , index , arr) => {
//     return currValue < 400;
// })

// const findElem = price.find(currValue => currValue < 400)
// const findElem = price.find((currValue , index) => index > 5)
// console.log(findElem);

// const findElem1 = price.findIndex(currValue => currValue < 400)
// console.log(findElem1);

// const findElem1 = price.findIndex(currValue => currValue > 1400)
// console.log(findElem1);

// const prices = [200, 300,350, 400,500,600];

//price < 400

// const newPriceTag = prices.filter((price , index) => {
//     // return price < 500;
//     return index > 4;
// })
// console.log(newPriceTag);

// const months = ["jan" , "feb" , "dec" , "march" , "nov" , "april" , "April" , "april" ,"Xyz" ,"Feb" ,"Abc"];

// console.log(months.sort());

// const numbers = [1,30, 4, 21, 100000 , 99];

// console.log(numbers.sort());
 
// const animals = ['goat' , 'pig' ,'lion'];

// const count = animals.push("cow");
// console.log(animals);
// console.log(count);
// const count2 = animals.push('tiger' ,'lion' , 'dog');
//  console.log(count2);

//  const count = animals.unshift("cow");
// console.log(animals);
// console.log(count);
// const count2 = animals.unshift('tiger' ,'lion' , 'dog');
// console.log(animals);
//  console.log(count2);

// const numbers = [1,2,3,5];
// const length = numbers.unshift(4,6);
// console.log(length);
// console.log(numbers);

//pop()
const fruits = ['apple', 'banana', 'pineApple', 'mango'];
// console.log(fruits);
// console.log(fruits.pop());
// console.log(fruits);
// console.log(fruits.pop());
// console.log(fruits);
// console.log(fruits.pop());
// console.log(fruits);

// console.log(fruits.shift());
// console.log(fruits);
// console.log(fruits.shift());
// console.log(fruits);

// const months = ['jan','march','april','june','july'];

// const newMonth = months.splice(5,0,"Dec");
// const newMonth = months.splice(months.length,0,"dec");
// // console.log(months);
// console.log(newMonth); // []

// const indexOfMonth = months.indexOf('march');
// if(indexOfMonth != -1) {
//     const upDateMonth = months.splice(indexOfMonth,1,'March');
//     console.log(months);
// }  
//     else {
//         console.log('No such data found');
//     }

// const months = ['jan','march','april','june','july'];

// const newMonth = months.splice(4,0,"dec");
// console.log("months" , months);
// console.log("newMonth",newMonth); //returns [] bcz not any element is deleted
// months.splice(3, 0 , 'satendtaAdd');
// console.log(months);
// const newData = months.splice(2,1,'newData');
// console.log(months);
// console.log(newData);    // return deleted element in a array


// const numbers = [100,150,600,90,35,650,56,87,900];

// const IndexOfNumber = numbers.indexOf(650);

// if(IndexOfNumber != -1) {
//     const deletedNumber = numbers.splice(IndexOfNumber,2,6500);
//     console.log(deletedNumber);
// } else {
//     console.log('number is not found');
// }
// console.log(numbers);

// const deletedNumbers = numbers.splice(numbers.indexOf(90),Infinity);
// console.log("deletedNubers" ,deletedNumbers);
// console.log("numbers" , numbers);

const array1 = [1,4,9,16,25];

// num > 9

// let newArr =  array1.map((value , index, arr) => {
//     // return value > 9;
// })
// console.log(array1);
// console.log(newArr);

// let newArr = array1.map((value, index, arr) => {
//     return `index no = ${index} and the value is ${value} belong to ${arr}`
// })

// console.log(newArr);
// que 1.
// const arr= [2,3,4,,6,8];


// const nums = arr.map(number => {
//     return number*2;
// }).filter(number => {
//     return number >10
// })

// console.log(nums);

// const nums = arr.map(number => {
//     return number*2;
// })

// const filteredArr = nums.filter(number => number>10)
// console.log(filteredArr);
// // console.log(nums);

// const arr = [25,36,49,64,81];

// const sqrootArr = arr.map(number => 
    // Math.sqrt(number)
// )

// console.log(sqrootArr);

///reduce()

// const arr = [5,6,2]; 

// const sum = arr.reduce((accumulator, currValue, index , arr) => {
//     return accumulator+= currValue;
// })
// console.log(sum);

const arr= [2,3,4,,6,8];

const sum =  arr.map(numberMap =>  numberMap*2
).filter(numberFilter =>  numberFilter >10
).reduce((sum,number) =>  sum +=number
);

console.log("sum :" ,sum);

const mul =  arr.map(number => number*10).filter(number => number > 50).reduce((multiplication,number) => multiplication *= number);
console.log("mul :",mul);
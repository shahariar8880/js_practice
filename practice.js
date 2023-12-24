// let emon = ["age", "class", "school"];

// // for(let i = 0; i < emon.length; i++ ) {
// //     console.log(emon [i])
// // // }

// let emon = ["age", "class", "school"];

// for(shahariar of emon) {
//     console.log(shahariar)
// }

// let emon = ["age", "class", "school"];

// emon.forEach(BioFun)

// function BioFun(z){
//     console.log(z)

// }

// const Shahariar =["age", "education", "birthDate", "address"];
// Shaharir.toString()
// console.log(shahariar)
// // const sl = (Shahariar.length);
// // for(i = 0; i < sl; i++){
// //     console.log(i)
// // }

// const shahariar =["age", "education", "birthDate", "address"];
//  shahariar.toString()
//  console.log(shahariar)


// console.log("finished");


// ***class 31 are below***

//***************ludu kelar amra kivave 1 teke 6 sonka rendomly print korte pari?????????
// function getRandomIntiger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(getRandomIntiger(10, 20))

// *************ki vave amra amader srenikokker sokol nam Alphabetically sajate pari???????
// const friend = ["emon", "rakib", "shahariar",  "jia", "arman"]

// console.log(friend.sort())

// **************ki vave amra amader srenikokker sokoler roll number serially sajate pari??????
// const friendNumber = [5,6,8,6,8,74,5,87,4,5,54,5,5,8,4,6,6,2,4,5];
// console.log(friendNumber.sort(function(a, b){
//     return(b  - a)
// }))

//**************kono sal leap year kina ta ber korte pari ki vave???????????????????????????
// function isLeapYear(year){
//     if((year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0))){
//         console.log(`${year} is a leap year`);
//     } else {
//         console.log(`${year} is not leap year`);
//     }
// }

// isLeapYear(2028);

//************kono sentence a kotogolo vowel ace ta nirnoi kora jai ki vave?????????????
// const vowels = ["a", "i", "o", "u", "e", "A", "I", "O", "U", "E"];

// function countVowels(sentence){
//     let count = 0;
//     const letters = Array.from(sentence);

//     letters.forEach(function(value){
//         if(vowels.includes(value)){
//             count++;
//         }
//     });

//     return count;

// }

// console.log(countVowels("I love Bangladesh"));

// //**********kon array teke duplicate number golake ki vave ber kore ante pari????????????
// const numbers = ["1","4","5","5","6","7","6","8","9","10","4"];

// const duplicates = numbers.filter(function(value, index, array){
//     return array.indexOf(value) !== index
// });

// console.log(duplicates);

//  //**********kon array teke Unique number golake ki vave ber kore ante pari????????????
//  const numbers = ["1","4","5","5","6","7","6","8","9","10","4"];

//  const duplicates = numbers.filter(function(value, index, array){
//     return array.indexOf(value) === index
//  });

//  console.log(duplicates);


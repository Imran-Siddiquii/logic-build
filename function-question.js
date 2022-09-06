// medium

// Given an array and an item, your function should return the index at which the item is present.
// Example:
// Input: indexOf([1,6,3,5,8,9], 3) ––> Output: 2

// function indexOf(a,b) {
//     for (let i = 0; i < a.length; i++) {
//         if(a[i]==b){
//             return i
//         }
//     }
// }
// console.log(indexOf([1,6,3,5,8,9], 3))
            


// Given an array and two numbers, your function should replace all entries of first number in an array with the second number.
// Example:
// Input: replace([1,5,3,5,6,8], 5, 10) ––> Output: [1,10,3,10,6,8]


// function replace([...item],item1,item2) {
//     for (let i = 0; i < item.length; i++) {
    
//         if(item[i]==item1){
//             item[i]=item2
//         }
//     }
//     return item;
// }
// console.log(replace([1,5,3,5,6,8], 5, 10))

// Given two arrays, your function should return single merged array.
// Example:
// Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]

// function margeArray([...item1],[...item2]) {
//     var marge=item1
//     for (let i = 0; i < item2.length; i++) {
//         marge.push(item2[i])
//     }
//      return marge;   
// }
// console.log(margeArray([5,2,3,7],[9,5,2,31,7]))

// Given a string and an index, your function should return the character present at that index in the string.
// Example:
// Input: charAt("neoGcamp", 4) ––> Output: c

// function chatAt([...a],b) {
//     for (let i = 0; i < a.length; i++) {
//         if(i==b){
//             return a[i]
//         }
//     }
// }
// console.log(chatAt("neoGcamp",4))

// Given two dates, your function should return which one comes before the other.
// Example:
// Input: minDate('02/05/2021', '24/01/2021') ––> Output: 24/01/2021

function minDate(a,b) {
 var dateA=a.slice(0,2)
 var dateB=b.slice(0,2)
 var monthA=a.slice(3,5)
 var monthB=b.slice(3,5)
 var yearA=a.slice(6)
 var yearB=b.slice(6)
 
 if (dateA>dateB) {
     console.log("Date A" +dateA)
    }else{
        console.log("Date B" +dateB)
    }
    if (monthA>monthB) {
        console.log("month A" +monthA)
       }else{
           console.log("month B" +monthB)
       }
       if (yearA>yearB) {
        console.log("year A" +yearA)
       }else{
           console.log("year B" +yearB)
       }
       return b
}
console.log(minDate('22/05/2022', '21/09/2021'))


// Given a sentence, return a sentence with first letter of all words as capital.
//  Example:
// Input: toSentenceCase('we are neoGrammers') ––> Output: We Are NeoGrammers
// const firstSmall='we are neoGrammers';
// const makeArray=firstSmall.split('');
// for (var i = 0; i < makeArray.length; i++) {
//       makeArray[i]= makeArray[i].charAt(0).toUpperCase() + makeArray[i].slice(1);
// }
// const jon=makeArray.join('');
// console.log(jon);

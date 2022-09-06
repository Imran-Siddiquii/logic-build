// star pattern
// var str=''
// for (let i = 0; i < 6; i++) {
//     for (let j = 0; j < 6-i; j++) {
//         str +='*'
//     }
//     str += '\n';   
//     }
//     console.log(str);

// //start pattern
//     var str=''
// for (let i = 0; i < 6; i++) {
//     for (let j = 0; j < i; j++) {
//         str +='*'
//     }
//     str += '\n';   
//     }
//     console.log(str);

//     for (let i = 1; i < 100; i++) {
//         if(i%3===0 && i%5===0 ){
//             console.log("fizz")
//         }else if(i%5==0){
//             console.log("buzz")
//         }else if(i%3===0){
//             console.log("fizbuzz")
//         }else{
//             console.log(i)
//         }
        
//     }

    //question 3 in advance
    // var number=6;
    // for (let i = 1; i < 13; i++) {
    //     for (let j = 1; j < 11; j++) {
    //         console.log(`number of user ${number} + ${j} =${number*j}` );
    //     }
    //     number++;
    // }

    //fibonacci series
//     var num1=0;
//    var  num2=1
//     var fibo;
//     console.log(num1);
//     console.log(num2);

//     for (i = 0; i < 10; i++) {
//         fibo=num1 +num2
//          num1=num2
//          num2=fibo
//          console.log(fibo);
//         }
        
        // factorial
    //    var fact1=1
    //     var facto=5
    //     for (let i = 1; i <= facto; i++) {  
    //      fact1 *= i
    //     }
    //     console.log(fact1)        

//     var weekday=["monday",'tuesday','wednesday','thursday','friday']
//     var userInput="tuesday"
//    function week(userInput) {
    
//        for (let i = 0; i < weekday.length; i++) {
//            if(userInput==weekday[i]){
//             console.log(weekday[i] + "is weekday")
//            }
//         }
//     } 
//     week(userInput)

//     for(let i =1; i<= 100; i++) {
//         if(i % 3 == 0 && i % 5 == 0)console.log("FizzBuzz ");
//         else if( i % 5 == 0) console.log("Buzz");
//         else if (i % 3 == 0) console.log("Fizz");
//         else console.log(i);
//    }    


// question one 
 function power(a,b) {
      var newpower=Math.pow(a,b)
      return newpower;
 }
//  console.log( power(5,3))

 //question 2
function haxz(number) {
 var squar=Math.sqrt(3);
 haxagoan= (3 * squar) * number* number;
 var asquare= haxagoan/2 ;
 return asquare;
}
// console.log(haxz(10));

// return how many number in a string 
 var str="My name is imran you are most good person";
 function countNumber(str) {
    
    var num1=str.split(" ");
    return num1.length
}
        
//  console.log(countNumber(str));

// find min with rest perameter
//  function minNumber(...number) {
//      let min=number[0]
//      for (let i = 0; i < number.length; i++) {
//         if(number[i] < min){
//             min=number[i]
//         }
//     }
//     return min
//  }
//  console.log(minNumber(10,12,625,7))

//find max with rest perameter

// function max(...num) {
//     let max=0;
//     for (let i = 0; i < num.length; i++) {
//          if(num[i]>max){
//             max=num[i]
//          }
//         }
//         return max;
// }
// console.log(max(60,45,121,30,78))

// Given three angles of a triange, your function should return if it is a scalene, isosceles, equilateral triangle or not a triangle at all. Example:
// Input: typeOfTriangle(30, 60, 90) ––> Output: Scalene Triangle
// all side 60 equilateral
// side should be different  sum 180
//isosceles only two side are equal and  sum 180

// function triangle(a,b,c) {
//     if(a===b && b===c && c===a){
//        if(a+b+c==180){
//            console.log("this is equilateral triangle")
//         }
//     }else if((a==b || b==c) || (a==c || b==c)){
//          if(a+b+c==180){
//             console.log('this is isosceles')
//          }
//         }
//         else if(a+b+c==180){
//           console.log("this is a Scalena")
//         }
//       else{
//         console.log("this is not a triangle")
//       }
// }
// triangle(30,60,90)
 
 // medium

// Given an array, your function should return the length of the array.
// Example:
// Input: arrayLength([1,5,3,7,8]) ––> Output: 5

// var items=[5,78,62,45,"Rohan",{name:"sunil",age:"5"},"delhi"]
// console.log(items.length)

// Given an array and an item, your function should return the index at which the item is present.
// Example:
// Input: indexOf([1,6,3,5,8,9], 3) ––> Output: 2

var item=[5,0,32,47,78,14];

// var indexof =item.findIndex(ele=>
//     ele==47
// );

var indexof =item.indexOf(47);
console.log(indexof);


// function findItem(item) {
//     for (let i = 0; i < item.length; i++) {
                 
//     }
// }
// findItem(item)

// Given an array and two numbers, your function should replace all entries of first number in an array with the second number.
// Example: Input: replace([1,5,3,5,6,8], 5, 10) ––> Output: [1,10,3,10,6,8]

 var number=[1,5,3,5,6,8];
 
 function replsace(number) {
    var newArray=[]
    for (let i = 0; i < number.length; i++) {
        var rep=number[i].toString();
        var sap=rep.replaceAll(5,10);
       parseInt(newArray.push(sap))

    }
    return newArray
        }

        var rahul = "red"
       console.log(rahul.split('').reverse().join(''))



        function palindrome(a) {
            var revers =a.split('').reverse().join('');
            if(a===revers){
                console.log("this is palindrome")
            }else{
                console.log ("this is not palinddrom")
            }
        }
            
  palindrome("lal")
// console.log( replace(number))
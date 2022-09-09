// 3. Write a program to calculate the kinetic energy of a body with mass 'm' and volume 'v'.
    // Formula :  0.5 * m * v * v

//     function calculateK(m,v) {
//         var cal=0.5 * m * v * v;
//         return cal;
//     }
//    console.log( calculateK(10,2))

// Given the Cost Price(CP) and Selling Price(SP) of a product. Write a Program to Calculate the Profit or Loss.
//    function profitAndLoss(cp,sp) {
//     var total = cp + sp;
//     if(sp>cp){
//       var  profit=sp - cp
//         // console.log("profit" + profit) 
//     }else{
//        var loss=cp-sp
//         // console.log("loss price "+  loss)
//     }
//     return {profit,loss}
//    }
// console.log(profitAndLoss(800,450));;

// Write a program to calculate sum of N natural digits, as input by the users?

// Enter a positive integer: 100
// Sum = 5050


// function sumOfN(number) {

//     var  sum=0;
//     for (var i = 1; i <= number; i++) {
//         sum =sum + i;
//     }
//     return sum; 
// }
// console.log(sumOfN(65))
      

// Write a Program to Print N Odd Number in Descending Order.

// Input : 4
// Output : 7
// 5
// 3
// 1

//given number is prime or not 

//  var num=15;
// var isprime=true;

//   if(num>2){
//       for(i=2; i<5;i++){
//           if(num%i==0){
//               isprime=false
//           }

//         }
//   } else
//    console.log("number sholud be great then zero")   

//     if(isprime){
//     console.log("number is prime")
//   }else console.log("number is not prime")


  
function primenumber(num2) {
    var Isprime=true;
    debugger;
     for(i=2;i<num2;i++){
        if(num2%i==0){
            Isprime=false;
        }
     }
     if(Isprime){
        console.log("number is prime");
     }else console.log("number is not prime")
  }
  primenumber(67);
  primenumber(20);
  primenumber(101);
  primenumber(71);

  for(i=0;i<2;i++){
    console.log("imran")
  }
    
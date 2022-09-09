// Find sum of an array and display the output . Example [10,4,5,2,5,6,9].
//  Find average of an array and display the output.
//Find maximum and minimum of an array
 var arr=  [10,4,5,2,5,6,9]
 function sumofArray(arr) {
    sum =0;
    avarage=0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        avarage=(sum/arr.length).toFixed(2);
    }
     return {sum,avarage}   
 }
 console.log(sumofArray(arr));

 //Find maximum and minimum of an array
const MaxAndMin =(arr)=>{
      max=0;
      min=arr[0];
      for (let i = 0; i < arr.length; i++) {
         if(arr[i]>max){
             max = arr[i];
            }
        }
        for (let i = 0; i < arr.length; i++) {
            if(arr[i] < min){
                min = arr[i];
               }
           }
        return{max,min}
}

 console.log(MaxAndMin(arr))


//  Find Median and Mode of an array.
// Median : (N+1/2)th term.
// Mode : Most repeating term

// const reverse=arr.sort((x,y)=>{
//     console.log(x +"fist")
//     console.log(y + "second")
//     return x-y
// })
// median = (reverse[3] + 1/2)
// console.log(median);

    
const array = [2, 3, 5, 8, 9, 17, 27, 27, 27,  33, 42, 45, 47, 49];
 
//  const mediumMode = (arr) => {
//     console.log(parseInt((15 +1)/2))
//    let medium = arr[parseInt((14 + 1) / 2)];
//     let bestElem = arr[0] ;
//    let bestStreak = 1;
//    let currElem = arr[0];
//    let currStreak = 1;
//   for (let i = 1; i < arr.length; i++) {
//     if(arr[i-1] != arr[i] ){
//       if(currStreak >  bestStreak){
//         bestStreak = currStreak;
//         bestElem = currElem; 
//       } 
      
//         currStreak = 0;
//         currElem = arr[i];
      
//     }
//     currStreak++;
//   }
//    const mode = currStreak > bestStreak ? currElem : bestElem;
//    return medium
    // return {medium, mode};
// }
  
//   console.log(mediumMode(array));  // {medium: 27, mode: 27}

 //   Find number of constants and vowels in a string.
 
 
 var string="ieoiuieouioiueoh khurama ancle"
  
   function findNumber(string) {
     var vowels='aeiou';
     var constant=string.length;
     sum=0;
     for (let i = 0; i < vowels.length; i++) {
        for (let j = 0; j < string.length; j++) {
              if(vowels[i]==string[j]){
             sum=sum + vowels[i].length
            }
        }
    }
    constant=constant - sum;
    return {"vowels":sum , "constant" : constant} 
}
console.log(findNumber(string));


// write how many time a character comes in a string 
var character="I am will a good person";

// function checkCharacter(character) {
//     var char=0;
//     for (let i = 0; i < character.length; i++) {
//         for (let j = 1; j < character.length; j++) {
            
//             if(character[i]==character[j]){
//                 character[i]=character[i].length;
//                 console.log(character[i]);
//         }
//     }
        
//     }
    
// }

// console.log(checkCharacter(character));

// Shift an array by X to right. - Example [1,2,3,4,5] after shifting to right [5,1,2,3,4]
  
var arrayNumber=[1,2,3,4,8,6,48,54,74,21];
function arrays(array,n) {
 for (let i = 0; i < n; i++) {
    num1=array[array.length-1]
    array.pop();
    array.unshift(num1)
}   
return array;
}
console.log( arrays(arrayNumber,5))        


        
    





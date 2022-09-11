// Write a function that takes an object (a) and a string (b) as argument
// Return true if the object has a property with key 'b'
// Return false otherwise
// Tipp: test case 3 is a bit tricky because the value of property 'z' is undefined
// But the property itself exists



function myFunction (obj,b){
 var obj2=console.log(b in obj)
    return obj2
}
myFunction({a:1,b:2,c:3},'b')



//Expected
//true
myFunction({x:'a',y:'b',z:'c'},'a')
//Expected
//false
myFunction({x:'a',y:'b',z:undefined},'z')


// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'
function array(a, n){
    for(var i =0; i<a.length;i++){
        if(a[i]==n){
            return a[i];
        }      
    }
    return "not found"
}


console.log(array([1,2,3,4,5],3))
// Expected
// 3
console.log(array([10,9,8,7,6],5))
// Expected
// 6
console.log(array([7,2,1,6,3],1))



function he(a,b){
 return (a/b) *100
}
console.log(he(50,100));

// function  rever a array
function reverse(arr) {
    sum = []
   for (let i = arr.length-1; i >=0; i--) {
    sum.push(arr[i]);
}
    
return sum
}

console.log(reverse([2,5,4,8]));
// reverse a array 

//find avarage
function avarage(arr)
{
    var average=0;
    var sum =0
    for(var i = 0; i < arr.length; i++)
    {
sum += arr[i]; 
console.log(sum);
average = sum / arr.length;
}

return average;
}
console.log(avarage([10,100,40]))



// sorted array 
let arr = [4, 32, 2, 5, 8];

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
console.log("Sorted array=>", arr);
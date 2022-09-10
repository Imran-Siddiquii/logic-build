// Given an array of objects of student's marks;

// Print the name and total marks of each student.
// Print the name of student whose total marks is highest.
// Print the name of student whose total marks is lowest.
// Print the average marks of the class in computer subject.
// Print the grades of all students:
// Grade A if total marks is higher than or equal to 75%,
// Grade B if higher than or equal to 60%,
// Grade C if higher than or equal to 35%,
// Grade D if lower than 35%.
// Print the total number of students passed and their names. Pass when total marks is greater than 35%.

const studentDetails = [
	{
		roll: "1",
		name: "Rohan Singh",
		maths: 145,
		science: 90,
		english: 75,
		computer: 85
	},
	{
		roll: "2",
		name: "Ritvik Patel",
		maths: 27,
		science: 30,
		english: 35,
		computer: 30
	},
	{
		roll: "3",
		name: "Neha Maurya",
		maths: 75,
		science: 69,
		english: 40,
		computer: 75
	},
	{
		roll: "4",
		name: "Mohit Verma",
		maths: 21,
		science: 31,
		english: 45,
		computer: 40
	},
	{
		roll: "5",
		name: "Karan Trivedi",
		maths: 70,
		science: 80,
		english: 35,
		computer: 60
	}
];

// Print the name and total marks of each student.
 var studentTotalMark=[];   
  var passList=[];
    
 function getGrade(total,studentName) {
    grade=(total/400) * 100;

   if(grade >=75 ){
    passList.push(studentName);  // pushing student name who passed in exam in a new array
    return "A";
   }
   else if(grade >= 60){
    passList.push(studentName);
    return "B"
}    else if(grade >= 35){
    passList.push(studentName);
    return "C"
}else
    return "D"

 }
 //push total in a empty array
  function student(studentData) {
      
      for(i=0;i<studentData.length; i++){
          total=studentData[i].maths + studentData[i].science + studentData[i].english + studentData[i].computer;
          studentTotalMark.push(total);
          var grade=getGrade(total,studentData[i].name);
          console.log("Name" +": " +  studentData[i].name + ": total Marks " + total);
          console.log("Grade " + grade);
        }
    }
    
// highest marks
    function highestMarks(marks){
       var score=marks[0];
       var username=studentDetails[0].name;
       for( i=1; i < marks.length; i++){
        if(marks[i] > score){
            score=marks[i]
            username=studentDetails[i].name;
        }
    }
    console.log( "topper name" + username + " topper marks" + score )
    }
//lowest marks
    function lowestMarks(marks) {
        var lowestScore=marks[0];
        var fail = studentDetails[0].name;
        for( i = 0 ; i < marks.length; i++){
            if(marks[i] < lowestScore){
                lowestScore=marks[i]
                fail=studentDetails[i].name;
            }
        }
        console.log( "lowest marks" + fail )
    }
  //find the avarage of computer student
    sum=0;
    avarage=0;
     function computerAvarege(avarage) {
        for (let i = 0; i < avarage.length; i++) {
            sum =sum + avarage[i].computer;
        }

         avarage=sum/avarage.length;
         console.log("computer avarage number" +avarage)   
     }
     // pass student
   function passStudent(studentPassList){
     console.log("pass student number is " + studentPassList.length)
     for (let i = 0; i < studentPassList.length; i++) {
        console.log("student name who passed "+ studentPassList[i]);
    }
        
   } 
     

    // student(studentDetails);     
    // lowestMarks(studentTotalMark);       
    // highestMarks(studentTotalMark);     
    // computerAvarege(studentDetails);
    // passStudent(passList)
          
   
   
    // Salary calculation using OOPS concept.

    // Create a Class using ES6 in JavaScript named Employee and assign necessary
    // data members and methods such as name, id, basic salary, HRA, Allowances; define getSalary method which will return the net salary.
    // Create two Instances of Employee with all necessary details.
    // Call the getSalary method of each instance and return the net salary based on your computation.
           


//    class Employees{
//     constructor(name,id,basic,hra,allowance){
//         this.name=name;
//         this.id=id;
//         this.basic=basic
//         this.hra=hra;
//         this.allowance=allowance
//     }
//    get getSalary() {
//         return this.basic + this.hra+ this.allowance
//     }
//    } 
  
//    const Employee=new Employees("imran",2,300,45,60)

//    console.log(Employee.getSalary);



// Bank Account (Object Oriented Programming in JavaScript)
// Create a class and define data members such as name, bank account number,
// account balance, account type, ifsc and name it as BankAccount.
// Create three Instances(three customers) of BankAccount with all necessary details.
// Print the name of customers and their account balances.
// Calculate the average account balance from all the instances.

class bankmember{
    constructor(name,accountNumber,balance,accountType,ifsc,bankAccount){
        this.name=name, 
        this.accountNumber=accountNumber,
        this.balance=balance;
        this.accountType=accountType
        this.ifsc=ifsc,
        this.bankAccount=bankAccount;
    }
}

const member1=new bankmember('sunil',1224,1422,"saving","hdfc0012","PNB");
const member2=new bankmember('rahul',1450,9887,"saving","hdfc0012","hdfc");
const member3=new bankmember('rihan',2455,3665,"saving","1445ht","BJ");

console.log(member1.name + "salary" + member1.balance);
//avarage
const avarag = ((member1.balance + member2.balance +member3.balance)/3).toFixed(2);

console.log(avarag);

// Given an array of objects of items in cart, print:

// the total No. of items
// the total cart value
// the total discounted value(sum of dicounted values on each item) based on the given discount
// total tax amount (18% tax, calculated on total cart value)

const cartItems = [
	{
		id: "101",
		name: "Oreo",
		count: 2,
		price: 30.0,
		discount: 0.18
	},
	{
		id: "102",
		name: "Red Bull",
		count: 1,
		price: 99.0,
		discount: 0.15
	},
	{
		id: "103",
		name: "Dairy Milk Silk",
		count: 3,
		price: 175.0,
		discount: 0.05
	},
	{
		id: "104",
		name: "Pulse Candy Pack",
		count: 1,
		price: 135.0,
		discount: 0.2
	}
];

//total number of item
var totalItem=0

const totalNumberOfItem=(cartItems)=>{
    for(i=0;i<cartItems.length;i++){
        totalItem = totalItem + cartItems[i].count
    totalCartValue= totalCartValue + cartItems[i].count * cartItems[i].price;
}
console.log("total item number in cart " + totalItem);
}
totalNumberOfItem(cartItems)


var totalCartValue=0;

function totalItemValue(cartItems) {
    for(i=0; i<cartItems.length;i++){
    totalCartValue=totalCartValue + cartItems[i].count * cartItems[i].price;
    }
    // console.log(totalCartValue);
    return totalCartValue;
}
totalItemValue(cartItems)



// // the total discounted value(sum of dicounted values on each item) based on the given discount
  var discountvalue=0
function totaldiscount(cartItems) {
    for (let i = 0; i < cartItems.length; i++) {
        discountvalue=discountvalue + (cartItems[i].count  * cartItems[i].discount)
    }
    console.log(discountvalue);
    return discountvalue;
}
        


totaldiscount(cartItems);

// total tax amount (18% tax, calculated on total cart value)

var totaltaxAmout=0
var valueOfcart =0;
function textAmount(totalvalue,discount) {
    actualvalue=totalvalue-discount;
    
    console.log("this" + actualvalue);
  
   totaltaxAmount=(actualvalue * 18)/100;
   console.log(totaltaxAmount);
valueOfcart= actualvalue + totaltaxAmount
    console.log(valueOfcart);
}



textAmount(totalItemValue(cartItems),totaldiscount(cartItems))






















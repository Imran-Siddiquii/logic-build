//targeting input
const initialPrice = document.querySelector('.initial-price');
const quantity = document.querySelector('.quantity');
const currentPrice= document.querySelector('.current-price');
const calculateAmount = document.querySelector("#calculate");
const output = document.querySelector(".output");

//display output at first
output.style.display='none';
//processing
function calculateProfit(buying,selling) {
  var profitPrice =selling-buying;
  return profitPrice;
}
function profitPercentage(profit,buyingPrice) {
    var percentage=(profit/buyingPrice)*100;
    var toDigitOnlyProfit=percentage.toFixed(2) + "%"
    return toDigitOnlyProfit;
}
 
function calculateLoss(buyingPrice,sellingPrice) {
    var loss=buyingPrice-sellingPrice;
    return loss;
}
function calculateLossPercentage(loss,buyingPrice) {
    var percentageloss=(loss/buyingPrice)*100;
    var toDigitOnlyLoss=percentageloss.toFixed(2) + "%"
    return toDigitOnlyLoss;
}

//processing
function calculate() {
    output.style.display='inline-block';
    const initialPriceValue=Number(initialPrice.value);
    const quantityValue=Number(quantity.value);
    const currentPriceValue=Number(currentPrice.value);
    
    //calculate buying price and selling price
    var buyingPrice=initialPriceValue * quantityValue;
    var sellingPrice=currentPriceValue * quantityValue;
//calculate profit and profit in percentage
   
    var profit=calculateProfit(buyingPrice,sellingPrice)
    var profitPriceInPercentage=profitPercentage(profit,buyingPrice)
  
    //testing
    // console.log(profitPriceInPercentage);
    // console.log(profit)   
    //calculate loss and loss in percentage
  
    var loss=calculateLoss(buyingPrice,sellingPrice)
  // console.log(loss); testing
     var lossInPercentage=calculateLossPercentage(loss,buyingPrice)
    // console.log(lossInPercentage);
    //error handling 
    

    if((initialPrice.value && quantity.value && currentPrice.value)===''){
        output.innerText= `Please fill all the values`
    }else if(quantity.value <= 0){
        output.innerText= `Quantity must be positive and greater zero`
    }
   //output
    else{
        if(profit>=loss){
            output.innerText= `The profit amount is ${profit} and profit percentage is ${profitPriceInPercentage}`
            output.style.background="blue"
        
        }else{
            output.innerText= `The loss amount is ${profit} and loss percentage is ${profitPriceInPercentage}`
            output.style.background="red"
        }
    }
}
//click handle
calculateAmount.addEventListener("click", calculate);
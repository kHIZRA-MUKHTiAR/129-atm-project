#!/usr/bin/env node

import inquirer from "inquirer"

let myBalance = 100000;  // DOLLAR

let myPin = 3210;

console.log("*** welcome to MY ATM *** ");


let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "Enter your pin:",
            type: "number",
        }
    ]
);

console.log(pinAnswer.pin);

if (pinAnswer.pin === myPin) {
   console.log("Correct pin code!");

  let operationAns = await inquirer.prompt(
    [
        {
            name : "operation",
            message : "please select option:",
            type: "list",
            choices : ["withdraw", "check Balance","fast cash"]
        }
    ]
   );


   if (operationAns.operation === "check Balance") {
    console.log(`your current Balance is: ${myBalance}`);
   }else if (operationAns.operation === "withdraw"){
    
    let amountAns = await inquirer.prompt(
        [
            {
                name: "amount",
                message: "Enter your amount:",
                type : "number",
            }    
        ]
    );
  
   if (amountAns.amount > myBalance) {
    console.log(`your balance insufficient`);
    
}else {
    myBalance -=  amountAns.amount; 
    console.log(`your Remaining Balance is: ${myBalance}`);
}
} else if (operationAns.operation === "fast cash"){
let fastCashAns = await inquirer.prompt(
    [
        {
            name: "fastCash",
            message: "please select an option",
            type: "list",
            choices:["2000","6000","8000","10000","15000","20000","25000","30000","35000","40000","45000","50000"]
        }
    ]
);

let fastCashAmount = parseInt(fastCashAns.fastCash)

if (fastCashAmount > myBalance) {
    console.log(`your Balance is insufficient`);    
} else {  
    myBalance -= fastCashAmount;
    console.log(`your Remaining balance is: ${myBalance}`);    
      }
   }
} else {
    console.log("Incorrect pin code");
    
}


#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000; // Dollar
let myPin = 1234;

let pinAnswer = await inquirer.prompt([
  { name: "pin", message: "Enter your pin", type: "number" },
]);
if (pinAnswer.pin === myPin) {
  console.log("you Enter correct pin code !!!");

  let oprationAnswer = await inquirer.prompt([
    {
      name: "opration",
      message: "Please select the opration",
      type: "list",
      choices: ["Withdraw", "Check Balance", "Fast cash"],
    },
  ]);
  if (oprationAnswer.opration === "Withdraw") {
    let amountAnswer = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter amount",
        type: "number",
      },
    ]);
    myBalance -= amountAnswer.amount;
    console.log("Your remaining balance is:" + myBalance);
        
    

     } else (oprationAnswer.opration === "check Balance"); {
      console.log("your balance is: " + myBalance);
    
  }
  if (oprationAnswer.opration === "Fast cash") {
    let amountAnswer = await inquirer.prompt([
    {
      name: "amount",
      message: "select the option",
      type: "list",
      choices: ["1000", "2000", "5000", "7000"],
    },
  ]);
  myBalance -= amountAnswer.amount;
  console.log("Your remaining balance is:" + myBalance);
}
 
  
} else {
  console.log("Incorrecr pin code !!!");
}
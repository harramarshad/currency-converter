import inquirer from "inquirer";
let conversation = {
    "PKR": {
        "USD": 0.0044345898004434589880044345898,
        "GBP": 0.0037,
        "PKR": 1
    },
    "GBP": {
        "USD": 1.21,
        "PKR": 271.79,
        "GBP": 1,
    },
    "USD": {
        "PKR": 225.50,
        "GBP": 0.93,
        "USD": 1
    },
};
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your  currency:"
    },
    {
        type: "number",
        name: " to",
        choices: ["PKR", " USD", "GBP"],
        message: "Select your convertion currency",
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your convertion amount"
    },
]);
const { from, to, amount } = answer;
if (from && to && amount) {
    let result = conversation[from][to] * amount;
    console.log(`Your convertion from ${from} to ${to} is ${result} `);
}
else {
    console.log("Invalid Input");
}
;

import inquirer from "inquirer"
import chalk from "chalk"

let rates :any = {
    pkr :          278.31,
    indian_rupee : 83.36,
    japanese_yen:  160.88,
    usd :          1,
    chinese_yuan : 7.27,
    
}

let {amount ,source_currency, target_currency} = await inquirer.prompt([{
    name : "amount" ,
    type : "number",
    message : "Enter amount to convert",
},
{
    name : "source_currency",
    type : "list",
    choices : ["pkr","indian_rupee" , "japanese_yen", "usd" , "chinese_yuan"]
},
{
    name : "target_currency",
    type : "list",
    choices : ["pkr","indian_rupee" , "japanese_yen", "usd" , "chinese_yuan"]
}
])



let ans = amount / rates[source_currency] * rates[target_currency] //amount in usd * target currency


console.log(`${chalk.red(amount)} ${source_currency} in ${target_currency} is ${chalk.green(Math.round(ans))} ${target_currency}`)



let expenses = [];

function addExpense() {

const category = document.getElementById("category").value;

const amount = Number(document.getElementById("amount").value);

if(category==="" || amount<=0){

alert("Enter Valid Expense");

return;
}
 
const expense={

category:category,

amount:amount

};

expenses.push(expense);

// Display Table

displayExpenses();

document.getElementById("category").value="";

document.getElementById("amount").value="";

}

function displayExpenses(){

let table=document.getElementById("expenseTable");

table.innerHTML="";

expenses.forEach(function(item){

table.innerHTML+=`

<tr>

<td>${item.category}</td>

<td>₹${item.amount}</td>

</tr>

`;

});

}

// Calculate Everything

function calculate(){

const income=Number(document.getElementById("income").value);

if(income<=0){

alert("Enter Income");

return;
}

let totalExpense=0;

// Loop

for(let i=0;i<expenses.length;i++){

totalExpense+=expenses[i].amount;

}

const balance=income-totalExpense;

const saving=((balance/income)*100).toFixed(2);

const expensePercent=((totalExpense/income)*100).toFixed(2);

// Highest Expense

let highest=expenses[0];

for(let i=1;i<expenses.length;i++){

if(expenses[i].amount>highest.amount){

highest=expenses[i];

}

}

// Update Cards

document.getElementById("incomeCard").innerHTML="₹"+income;

document.getElementById("expenseCard").innerHTML="₹"+totalExpense;

document.getElementById("balanceCard").innerHTML="₹"+balance;

document.getElementById("savingPercent").innerHTML=saving+"%";

document.getElementById("expensePercent").innerHTML=expensePercent+"%";

document.getElementById("highestExpense").innerHTML=

highest.category+" (₹"+highest.amount+")";

}
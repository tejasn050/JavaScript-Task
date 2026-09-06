{console.log("1 to 10 Numbers :");
}for(let i=1; i<=10; i++){
    console.log(i);   
}


{console.log("1 to 10  Reverse Numbers :");
}for(let i=10; i>=1; i--){
    console.log(i);
}


{console.log("Even Numbers :");
}
for(let i=1; i<=20; i++){
    if(i%2 ===0){
        console.log(i);
        
    }
}



{console.log("Odd Numbers :");
}
for(let i=1; i<=20; i++){
    if(i%2 !==0){
        console.log(i);
        
    }
}

{console.log("Multipliaction Table :");
}
let num = 8;
for(let i=1; i<=10; i++){
    console.log(num + "x" + i + "=" + (num * i));
    
}


{console.log("Countdown Numbers :");
}
let n = 10;
while(n >= 1){
    console.log(n);
    n-- ;
}

{console.log("Sum of Numbers : ");
}

let n1 = 1;
let t1 = 0;

while(n1 <= 10){
    t1 = t1 + n1 ;
    n1++ ;
}
console.log(t1);


{console.log("Do While : ");
}
//Task-9

let doUnderstandingNumber = 10;

do {
    console.log(doUnderstandingNumber);
    doUnderstandingNumber++;
} while (doUnderstandingNumber <= 5);

// Output: 10
// The do...while loop executes at least once before checking the condition.
// The condition is false, but the code inside do is executed once.


//Task-10

let javascriptName = "javascript";

for (let character of javascriptName) {
    console.log(character);
}



//Task-11

let fruitsList = ["apple", "orange", "banana", "mango", "grapes"];

for (let fruit of fruitsList) {
    console.log(fruit);
}



//Task-12

let studentNames = ["Darshan", "Nisarga", "Rakshitha", "Chaii", "Arun"];

for (let student of studentNames) {
    console.log("Student:", student);
}



//Task-13

let employeeObject = {
    name: "Darshan",
    age: 24,
    role: "Developer",
    city: "Bangalore",
};

for (let key in employeeObject) {
    console.log(key, employeeObject[key]);
}



//Task-14

let productObject = {
    productName: "Laptop",
    price: 50000,
    brand: "Dell",
    category: "Electronics",
    stock: 10
};

for (let key in productObject) {
    console.log(key, productObject[key]);
}



//Task-15

function welcomeMessage() {
    console.log("Welcome to JavaScript");
}

welcomeMessage();
welcomeMessage();
welcomeMessage();



//Task-16

function greetUser(userName) {
    console.log("Hello " + userName);
}

greetUser("Tejas Nagaraj");
greetUser("Nisarga");
greetUser("Rakshitha");



//Task-17

function studentDetails(studentName, studentAge, department) {
    console.log("Name:", studentName);
    console.log("Age:", studentAge);
    console.log("Department:", department);
}

studentDetails("Tejas Nagaraj", 23, "Information Science");
studentDetails("Nisarga", 22, "Computer Technology");
studentDetails("Rakshitha", 24, "Electronics");



//Task-18

function addNumbers(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

let additionResult = addNumbers(10, 20);

console.log(additionResult);



//Task-19

function getSalary(salaryAmount) {
    return salaryAmount;
}

let employeeSalary = getSalary(50000);

console.log(employeeSalary);



//Task-20

function calculateBonus(employeeSalaryAmount, bonusAmount) {
    return employeeSalaryAmount + bonusAmount;
}

let totalSalary = calculateBonus(50000, 5000);

console.log("Total Salary:", totalSalary);



//Task-21

function employeeInformation(employeeName, employeeRole = "Developer") {
    console.log("Name:", employeeName);
    console.log("Role:", employeeRole);
}

employeeInformation("Darshan", "Designer");
employeeInformation("Nisarga", "Designer");
employeeInformation("Rakshitha", "Designer");



//Task-22

function squareNumber(number) {
    return number * number;
}

console.log(squareNumber(2));
console.log(squareNumber(4));
console.log(squareNumber(5));
console.log(squareNumber(7));
console.log(squareNumber(10));



//Task-23

let calculateNumbers = function(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
};

console.log(calculateNumbers(10, 20));



//Task-24

let multiplyNumbers = (firstNumber, secondNumber) => {
    return firstNumber * secondNumber;
};

console.log(multiplyNumbers(10, 5));



//Task-25

function testScope() {

    if (true) {

        var scopeA = 10;
        let scopeB = 20;
        const scopeC = 30;

        console.log(scopeA);
        console.log(scopeB);
        console.log(scopeC);
    }

    console.log(scopeA);

    // console.log(scopeB);
    // console.log(scopeC);
}

testScope();

// var can be accessed outside the block because var is function scoped.
// let and const are block scoped.
// Therefore scopeB and scopeC cannot be accessed outside the if block.



//Task-26

console.log(hoistingA);

var hoistingA = 10;

// var declaration is hoisted, but the value is assigned later.



//Task-27

// console.log(hoistingB);
// let hoistingB = 20;

// Output: ReferenceError
// let is hoisted but cannot be accessed before declaration.



//Task-28

// console.log(hoistingC);
// const hoistingC = 30;

// Output: ReferenceError
// const cannot be accessed before declaration.



//Task-29

(function() {
    console.log("Welcome to JavaScript");
})();

(function(product, discount) {
    console.log(product + " has " + discount + "% discount");
})("Laptop", 20);



//Task-30

function callbackWelcome() {
    console.log("Welcome");
}

function executeCallback(callbackFunction) {
    callbackFunction();
}

executeCallback(callbackWelcome);

// callbackWelcome is the callback function.
// executeCallback is the higher-order function.



//Task-31

function* cashbackGenerator() {
    yield "10% cashback";
    yield "20% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}

let cashbackValues = cashbackGenerator();

for (let cashback of cashbackValues) {
    console.log(cashback);
}



//Task-32

let employees = [
    {
        name: "Darshan",
        age: 24,
        department: "IT",
        role: "Developer",
        salary: 40000
    },
    {
        name: "Nisarga",
        age: 22,
        department: "IT",
        role: "Developer",
        salary: 35000
    },
    {
        name: "Rakshitha",
        age: 24,
        department: "Finance",
        role: "Accountant",
        salary: 45000
    }
];



//Task-32.1

for (let employee of employees) {
    console.log(employee);
}



//Task-32.2

for (let employee of employees) {
    for (let key in employee) {
        console.log(key, employee[key]);
    }
}



//Task-32.3

function displayEmployee(employeeName, employeeAge, employeeDepartment, employeeRole, employeeSalary) {
    console.log("Name:", employeeName);
    console.log("Age:", employeeAge);
    console.log("Department:", employeeDepartment);
    console.log("Role:", employeeRole);
    console.log("Salary:", employeeSalary);
}



//Task-32.4

for (let employee of employees) {
    displayEmployee(
        employee.name,
        employee.age,
        employee.department,
        employee.role,
        employee.salary
    );
}



//Task-32.5

function getEmployeeSalary(employee) {
    return employee.salary;
}

let firstEmployeeSalary = getEmployeeSalary(employees[0]);

console.log("Employee Salary:", firstEmployeeSalary);



//Task-32.6

for (let employee of employees) {

    if (employee.salary >= 40000) {
        console.log(employee.name + " has salary of 40000 or above");
    } else {
        console.log(employee.name + " has salary below 40000");
    }
}



//Task-32.7

let calculateAnnualSalary = (monthlySalary) => {
    return monthlySalary * 12;
};

console.log(calculateAnnualSalary(40000));



//Task-32.8

function* employeeBenefits() {
    yield "Medical Insurance";
    yield "Transport";
    yield "Food Allowance";
    yield "Bonus";
}

let benefits = employeeBenefits();

for (let benefit of benefits) {
    console.log(benefit);
}
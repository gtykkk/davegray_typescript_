"use strict";
// Index Signatures
// index에는 boolean 사용불가
// interface TransactionObj {
//     readonly [index: string]: number
// }
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);
let prop = 'Pizza';
console.log(todaysTransactions[prop]);
const todaysnet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysnet(todaysTransactions));
// todaysTransactions.Pizza = 40
console.log(todaysTransactions['Kim']);
const student = {
    name: 'Doug',
    GPA: 3.5,
    classes: [100, 200]
};
for (const key in student) {
    // 아래처럼 Assortion 가능
    console.log(`${key}: ${student[key]}`);
    // console.log(`${key}: ${student[key]}`)
}
Object.keys(student).map(key => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'GPA');
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
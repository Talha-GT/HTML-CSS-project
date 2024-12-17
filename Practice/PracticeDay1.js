//2
let num = prompt("Enter a number:");
num = Number(num);
if (num % 2 === 0) {
    console.log("The number", num, "is Even.");
} else {
    console.log("The number", num, "is Odd.");
}
//3
let numbers = [];
for (let i = 1; i <= 20; i++) {
  numbers.push(i); 
}
numbers.sort(() => Math.random() - 0.5); 
console.log("Shuffled numbers:", numbers);

//4.
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

let year = prompt("Enter a year:"); 
if (isLeapYear(year)) {
  console.log("It's a leap year.");
} else {
  console.log("It's not a leap year.");
}

//5
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("Number is:", i);
  }
}

//6
let friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
let longestName =""; 

for (let i = 0; i < friends.length; i++) {
  if (friends[i].length > longestName.length) {
    longestName = friends[i]; 
  }
}

console.log("The longest name is:", longestName);

//7
function findUniqueNumbers(arr) {
  let frequency = {};
    for (let i = 0; i < arr.length; i++) {
    if (frequency[arr[i]] === undefined) {
      frequency[arr[i]] = 1; 
    } else {
      frequency[arr[i]]++;
    }
  }

  console.log("Numbers with frequency 1:");
  for (let num in frequency) {
    if (frequency[num] === 1) {
      console.log(Number(num));
    }
  }
}

var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
findUniqueNumbers(numbers);

//8
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let maxNumber = numbers[0]; 
let minNumber = numbers[0]; 

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > maxNumber) {
    maxNumber = numbers[i]; 
  }
  if (numbers[i] < minNumber) {
    minNumber = numbers[i];
  }
}
console.log("Largest number:", maxNumber);
console.log("Smallest number:", minNumber);
//9
function monthlySavings(payments, livingCost) {
  if (!Array.isArray(payments) || typeof livingCost !== "number") {
    return "invalid input";
  }
  for (let i = 0; i < payments.length; i++) {
    if (typeof payments[i] !== "number") {
      return "invalid input"; 
    }
  }
  let totalIncome = 0;
  for (let i = 0; i < payments.length; i++) {
    if (payments[i] < 3000) {
      totalIncome += payments[i];
    } else {
      totalIncome += payments[i] * 0.8;
    }
  }
  let savings = totalIncome - livingCost;
  if (savings < 0) {
    return "earn more"; 
  } else
  {
    return savings; 
  }
}

console.log(monthlySavings([1000, 2000, 3000], 5400)); 
console.log(monthlySavings([1000, 2000, 2500], 5000)); 
console.log(monthlySavings([900, 2700,3400], 10000));       
console.log(monthlySavings([100, "900", 2700], 3400));


let n=10;
for(let i=1;i<=n;i++){
  console.log(i*n);
}


let t=50
for(let i=1;i<=t;i++){
  console.log(i*i)
}


let s=50
for(let i=1;i<=s;i++){
  console.log(i*0.5)
}


let sum = 0;
let evenNumbers = [];

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        evenNumbers.push(i);
        sum += i;
    }
}

console.log("Even numbers from 1 to 50:");
console.log(evenNumbers.join(", "));
console.log("Sum of even numbers:", sum);





let q = 0;
let oddNumbers = [];

for (let i = 1; i <= 50; i++) {
    if (i % 2 != 0) {
        oddNumbers.push(i);
        q += i;
    }
}

console.log("Odd numbers from 1 to 50:");
console.log(oddNumbers.join(", "));
console.log("Sum of odd numbers:", q);






let z = 7;
let isPrime = true;

for (let i = 7; i < z; i++) {
    if (z % i === 0) {
        isPrime = false;
    }
}

if (isPrime === true) {
    console.log("7 is a prime number");
} else {
    console.log("7 is not a prime number");
}





let e = 7;
isPrime = [];

for (let i = 1; i <= e; i++) {
    if (e% i != 0) {
        isPrime.push(i);
     
    }
}
console.log(isPrime);
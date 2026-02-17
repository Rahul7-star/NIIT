const prompt = require("prompt-sync")();
let name="yash"
console.log(name);
let a;
let b;
a=10;
b=10;
console.log("a = ",a,"b = ",b)
console.log("a + b =  ",a + b);
console.log("a - b =  ",a - b);
console.log("a * b =  ",a * b);
console.log("a / b =  ",a / b);
console.log("a % b =  ",a % b);
console.log("a ** b = ",a ** b);
a++;
console.log("a =",a);
b--;
console.log("b =",b);
let age=20;
if(age>=18){
    console.log("you are eligible")
}else{
    console.log("you are not eligible")
}

let marks=prompt("enter your marks: ");
if(marks<=0 && marks<=40){
    console.log("you are pass")
}else if(marks>=70){
    console.log("first class")
}else{
    console.log("you ae fail")
}
let x=prompt("enter a number: ");
if(x%2==0){
    console.log("even")
}else{
    console.log("odd")
}
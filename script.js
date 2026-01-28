let randnum = Math.random();

console.log(randnum);
let num1= prompt("Enter first number");
let ope= prompt("Enter operation");
let num2= prompt("Enter second number");

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**"
}

if(randnum < 0.1){
    ope = obj[ope];
    alert(`The result is: ${eval(`${num1} ${ope} ${num2}`)}`);
}else{
    alert(`The result is: ${eval(`${num1} ${ope} ${num2}`)}`);
}
// Creating a faulty calculator
/*
let a= Math.random();

if(a<0.1){

    function Sum(a,b){
        return a-b;
    }

    function Sub(a,b){
        return a/b;
    }

    function Mul(a,b){
        return a+b;
    }

    function Div(a,b){
        return a**b;
    }

    function Expo(a,b){
        return a*b;
    }

}else{

    function Sum(a,b){
        return a+b;
    }

    function Sub(a,b){
        return a-b;
    }

    function Mul(a,b){
        return a*b;
    }

    function Div(a,b){
        return a/b;
    }

    function Expo(a,b){
        return a**b;
    }

}

console.log("Sum=", Sum(9,3));
console.log("Sub=", Sub(9,3));
console.log("Mul=", Mul(9,3));
console.log("Div=", Div(9,3));
console.log("Expo=", Expo(9,3));

*/

function Sum(a,b){
        return a+b;
    }

function Sub(a,b){
    return a-b;
}

function Mul(a,b){
    return a*b;
}

function Div(a,b){
    return a/b;
}

function Expo(a,b){
    return a**b;
}

let a= 4;
let b= 2;

let randNum = Math.random();

if(randNum<0.1){
    
    console.log("Addition is: ", Sub(a,b));
    console.log("Subtract is: ", Div(a,b));
    console.log("Multiplication is: ", Sum(a,b));
    console.log("Division is: ", Expo(a,b));
    console.log("Exponentiation is: ", Mul(a,b));

}else{

    console.log("Addition is: ", Sum(a,b));
    console.log("Subtract is: ", Sub(a,b));
    console.log("Multiplication is: ", Mul(a,b));
    console.log("Division is: ", Div(a,b));
    console.log("Exponentiation is: ", Expo(a,b));

}
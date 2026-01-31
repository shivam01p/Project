// The one i made

let objectives = {
    1: "Crazy",
    2: "Amazing",
    3: "Fire"
};

let shopName = {
    1: "Engine",
    2: "Foods",
    3: "Garments"
};

let another_word = {
    1: "Bros",
    2: "Limited",
    3: "Hub"
};

let num1 = Math.floor(Math.random() * 3);
let num2 = Math.floor(Math.random() * 3);
let num3 = Math.floor(Math.random() * 3);

function B_name_generator() {
    let B_name = "";

    let name1 = Object.values(objectives);
    
    let name2 = Object.values(shopName);
    
    let name3 = Object.values(another_word);
    
    console.log(B_name.concat(name1[num1], name2[num2], name3[num3]))
}

B_name_generator();

// Easiest One

function Generator(x,y,z){
    let num = Math.floor(Math.random()*3)
    if(num == 0)
    return x
    else if(num == 1)
    return y
    else
    return z
};

console.log("Generated Name is "+Generator("Crazy","Amazing","Fire")+" "+Generator("Engine","Food","Garment")+" "+Generator("Bros","Limited","Hub"));
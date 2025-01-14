// Quiz 1
const x = 15;
const y = 20;

let max;

max = x > y ? x : y;
console.log(max);


// Quiz 2
const a = true;
let b = typeof a;
//console.log(b);

switch(b){
    case "number":{
        console.log("숫자")
    } 
    case "string":{
        console.log("문자열")
    }
    case "boolean":{
        console.log("불리언")
    }
}


// Quiz 3
let temperature =10;

if(temperature < 0) {
    console.log("매우 추움")
}else if(temperature >= 0 && temperature <= 10){
    console.log("추움.")
}else if(temperature >= 10 && temperature <= 20){
    console.log("적당")
}else if(temperature >= 20){
    console.log("더움")
}
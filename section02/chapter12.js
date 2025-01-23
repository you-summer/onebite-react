// function task(){
//     setTimeout(() => {
//         console.log("안녕하세요");
//     }, 3000);    
// }

// task();


// function add(a,b,callback){
//     setTimeout(function(){
//         const sum = a + b;  ///3
//         callback(sum)
//     },3000)
// }

// add(1,2,function(value){
//     console.log(value);
// });


// 음식을 주문하는 상황
function orderFood(callback){
    setTimeout(() => {
        const food = "떡볶이";
        callback(food);
    }, 3000);
}

function cooldownFood(food,callback){
    setTimeout(() => {
        const cooldownedFood = `식은 ${food}`;
        callback(cooldownedFood);
    }, 2000);

}

function freezeFood(food, callback){
    setTimeout(() => {
        const freezedFood = `냉동된 ${food}`;
        callback(freezedFood)
    }, 1500);
}

orderFood((food)=>{
    console.log(food);
    cooldownFood(food, function(cooldownedFood){
        console.log(cooldownedFood);
        freezeFood(cooldownedFood,function(freezedFood){
            console.log(freezedFood);
        })
    })
})
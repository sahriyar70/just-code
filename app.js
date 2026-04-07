function fun1(){
    for(let i = 1 ; i<=10; i++){
    console.log(`5 x ${i} = ${5*i} `)
}
}

function fun2(){
    let sum = 0 
for (let i = 0; i < 101; i++) {
     sum = sum + i

   
}

 console.log(sum)
}


function fun3 (){
    for ( let i = 1 ; i<50 ; i++ ){
    if (i%3===0 
    ) {
        console.log(i)
    }
    
}
}
    
function add (v1 , v2){
    console.log(v1+v2)
}



function bmi ( height, weight ){
     return weight / (height*height)
}

// console.log(Number(bmi(1.7,53).toFixed(2)))

function diccountcalculetor (discount){
    return function (price){
        return price - price * (discount/100)
    }
}

let price1 = diccountcalculetor(30)

let price2 = diccountcalculetor(50)

let price3 = diccountcalculetor ( 40)

// console.log(price1(12222))
// console.log(price2(44444),price3(55555))

function counter (){
    let count = 0
    return function (){
        count++

        return count
    }
}

let c = counter ()

// let user = Number(prompt(" just inter valu "))

// for(let i = 0 ; i<user ; i++){
//     // console.log(c())
// }

let obj = {
    name : 'sahriyar ',
    age : 30 ,
    address : "djfdaf"
}

for (let keyvalue in obj ){
    console.log(keyvalue, obj[keyvalue])
}

 
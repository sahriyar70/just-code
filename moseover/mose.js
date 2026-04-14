let abcd = document.querySelector("#dive")

abcd.addEventListener("mouseover",function(){
    abcd.style.backgroundColor = "green"
}) 

abcd.addEventListener("mouseout",function(){
    abcd.style.backgroundColor = "red"
})

window.document.addEventListener("keyup", function(e){
    // console.log("Key up:", e.key)
})


// let count = 6

// let interverl = setInterval(function(){

//     if(count >= 1 ){
//         console.log(count--)
//     } else clearInterval(interverl)


// },1000)
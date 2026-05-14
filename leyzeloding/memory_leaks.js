//Bad Example (Memory Leak)

function startLeak() {

  setInterval(() => {

    const div = document.createElement("div");

    div.innerText = "Memory Leak 😵";

    document.body.appendChild(div);

  }, 1000);

}

startLeak();

//Proper Fix 

const interval = setInterval(() => {

  console.log("Running...");

}, 1000);

setTimeout(() => {

  clearInterval(interval);

  console.log("Stopped");

}, 5000);

//call stack 

function one() {
  console.log("Function One");
  two();
}

function two() {
  console.log("Function Two");
  three();
}

function three() {
  console.log("Function Three");
}

one();  

//JavaScript end 
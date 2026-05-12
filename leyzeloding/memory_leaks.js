//Bad Example (Memory Leak)

function startLeak() {

  setInterval(() => {

    const div = document.createElement("div");

    div.innerText = "Memory Leak 😵";

    document.body.appendChild(div);

  }, 1000);

}

startLeak();


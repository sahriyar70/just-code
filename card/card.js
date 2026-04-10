
let input = document.querySelectorAll("input")

let form = document.querySelector("form")

form.addEventListener("submit",function(data){
    data.preventDefault()

    let card = document.createElement("div")
    card.classList.add("card")

    let profile = document.createElement("div")
    profile.classList.add("profile")

    let img = document.createElement("img")
    img.setAttribute("src", input[0].value)

    let name = document.createElement("h2")
    name.textContent = input[1].value

    let job = document.createElement("h3")
    job.textContent = input[2].value

    let info = document.createElement("p")
    info.textContent = input[3].value

    profile.appendChild(img)

    card.appendChild(profile)

    card.appendChild(name)

    card.appendChild(job)
    card.appendChild(info)

    document.body.appendChild(card)

    input.forEach(function(inp){
        if(inp.type !=='submit'){
            inp.value = ''
        }
    })


})
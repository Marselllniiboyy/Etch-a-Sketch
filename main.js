// lest gooo!!!
const container = document.querySelector("#container")

// testting
let prom = prompt("isi")
for (let i =1; i <= prom; i++){
    const page = document.createElement("div");
    page.className = "squere"
    const node = document.createTextNode(`Hello World ${i}`)
    page.appendChild(node)
    container.appendChild(page)
}






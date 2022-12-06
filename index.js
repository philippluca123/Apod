
let enviar = document.querySelector("#enviar")
const botao = document.getElementById("digteData")
const card = document.querySelector(".tudo")
const dataInput = document.getElementById("input")
async function sendApiRequest() {
    let API_KEY = "5bfYQqvBMmJAF1TWtuNKrtudwPqLcY2yalh3wNzX"
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${dataInput.value}`);
    console.log(response)
    let data = await response.json()
    console.log(data)
    useApiData(data)


}

function useApiData(data) {
    document.querySelector("#data").innerHTML += data.date
    document.querySelector("#titulo").innerHTML += data.title
    document.querySelector("#explicacao").innerHTML += data.explanation
    document.querySelector("#img").innerHTML += `<img class="img" src="${data.url}">`

}

enviar.addEventListener("click", () => {
    sendApiRequest()
    enviar.style.display = "none"
    dataInput.style.display = "none"
    card.style.display = "block"
    divInput.style.display = "none"

})

document.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        const btn = document.querySelector("#enviar");
        btn.click();
    }
})


card.addEventListener("click", () => {
    window.location= "index.html"
})
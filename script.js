async function buscar() {
    let filme = document.getElementById("busca").value
    let response = await fetch("https://api.tvmaze.com/search/shows?q=" + filme)
    let dados = await response.json()

    console.log(dados)
    let div = document.getElementById("resultados")
    div.innerHTML = ""

    dados.forEach(item =>{
        let card = document.createElement("div")
        card.className = "card"

        let btn = document.createElement("button")
        btn.textContent = "Favoritar"
        btn.onclick = function() {
            favoritos.push(item.show.name)
            salvar()
            mostrarFavoritos()

        }

        card.innerHTML = item.show.name
        div.appendChild(card)
        card.appendChild(btn)


    });
}

let favoritos = JSON.parse(localStorage.getItem("favoritos")) || []

function salvar(){
    localStorage.setItem("favoritos",JSON.stringify(favoritos))
}


function mostrarFavoritos () {
    let ul = document.getElementById("favoritos")
    ul.innerHTML = ""

    favoritos.forEach(item =>{
        let li = document.createElement("li")
        li.textContent = item
        ul.appendChild(li)
    })
}
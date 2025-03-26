const uri = "http://localhost:5000";
var produtos = [];
fetch('./assets/dados.json')
    .then(resp => resp.json())
    .then(resp => { produtos = resp; })
    .then(() => mostrarCards())

function mostrarCards() {
    const main = document.querySelector('main');
    produtos.forEach(p => {
        main.innerHTML += `
        <div class="card" >
            <h3>${p.produto}</h3>
            <img src="${p.imagem}" alt="${p.produto}">
            <p>Preço: ${p.preco}</p>
            <button>Detalhes</button>
        </div>`;
    })
    
}
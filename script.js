// Dados dos produtos
const produtos = [
    {
        id: 1,
        nome: "Pulseira Gota Cristal Prata 925",
        imagem: "images/pulseira-gota.jpg.png",
        descricao: "Pulseira delicada em prata 925 com cristal lapidado em gota e zircônias"
    },
    {
        id: 2,
        nome: "Anel Estrela Topázio Azul",
        imagem: "images/anel-estrela.jpg.png.png",
        descricao: "Anel delicado em prata 925 com topázio azul em forma de estrela e zircônias"
    },
    {
        id: 3,
        nome: "Colar Cristal Verde Prata 925",
        imagem: "images/colar-verde.jpg.png.jpg",
        descricao: "Colar delicado em prata 925 com cristal verde quadrado"
    },
    {
        id: 4,
        nome: "Brincos Navete Prata 925",
        imagem: "images/brincos-navete.jpg.png.jpg",
        descricao: "Par de brincos delicados em prata 925 com cristal e zircônias"
    },
    {
        id: 5,
        nome: "Piercing Lua Pérolas Prata 925",
        imagem: "images/piercing-lua.jpg.png.png",
        descricao: "Piercing em formato de lua em prata 925 com delicadas pérolas"
    },
    {
        id: 6,
        nome: "Brincos Esmeralda Prata 925",
        imagem: "images/brincos-esmeralda.jpg.png.png",
        descricao: "Par de brincos em prata 925 com cristais esmeralda retangulares"
    },
    {
        id: 7,
        nome: "Pulseira Riviera Ródio Branco",
        imagem: "images/pulseira-riviera.jpg.png.png",
        descricao: "Pulseira elástica em ródio branco com zircônias cravejadas, perfeita para qualquer ocasião"
    }
];

// Função para exibir produtos
function exibirProdutos() {
    const produtosGrid = document.querySelector('.produtos-grid');
    produtosGrid.innerHTML = '';

    produtos.forEach(produto => {
        const produtoCard = document.createElement('div');
        produtoCard.className = 'produto-card';
        produtoCard.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>${produto.descricao}</p>
        `;
        produtosGrid.appendChild(produtoCard);
    });
}

// Função para inicializar o site
function inicializarSite() {
    exibirProdutos();
}

// Inicializar o site quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', inicializarSite); 
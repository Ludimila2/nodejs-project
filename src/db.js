const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const produtos = {}

// se o produto já estiver setado, vai substituir pela versão mais nova, se não; vai adicionar um novo
function salvarProduto(produto) {
    if (!produtos.id) produto.id = sequence.id 
    produtos[produto.id] = produto
    return produto
}

// retornando um produto pelo id
function getProduto(id) {
    return produtos[id] || {} 
}

// excluindo produtos
function excluirProduto(id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

// retornando todos os produtos
function getProdutos() {
    return Object.values(produtos)
}

// retornando as funções para fora do arquivo de modules
module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto }
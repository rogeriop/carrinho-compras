
let valorCarrinho;
limpar();

function adicionar() {
    let produtoSelecionado = document.getElementById('produto').value;
    let descricaoPreco = produtoSelecionado.split('-');
    let quantidade = document.getElementById('quantidade').value;
    let descricao = descricaoPreco[0];
    let preco = descricaoPreco[1].replace("R$", "");
    let valor = quantidade * preco;
    valorCarrinho = valorCarrinho + valor;

    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos" id="lista-produtos">
        <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${descricao} <span class="texto-azul">R$${valor}</span>
        </section>
      </section>`

    let carrinhoTotal = document.getElementById('valor-total');
    carrinhoTotal.textContent = `R$ ${valorCarrinho} `;
    document.getElementById('quantidade').value = 0;
    
}

function limpar() {
    valorCarrinho = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
    
}
document.getElementById('produtoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const preco = parseFloat(document.getElementById('preco').value);
    const quantidade = parseInt(document.getElementById('quantidade').value);

    // Validações em JavaScript
    if (nome === "") {
        alert("O nome do produto não pode estar vazio.");
        return;
    }

    if (isNaN(preco) || preco <= 0) {
        alert("O preço deve ser maior que zero.");
        return;
    }

    if (isNaN(quantidade) || quantidade < 0) {
        alert("A quantidade em estoque não pode ser negativa.");
        return;
    }

    // Adiciona os dados na tabela de forma dinâmica
    const tabela = document.getElementById('tabelaProdutos').getElementsByTagName('tbody')[0];
    const novaLinha = tabela.insertRow();

    novaLinha.insertCell(0).textContent = nome;
    novaLinha.insertCell(1).textContent = "R$ " + preco.toFixed(2);
    novaLinha.insertCell(2).textContent = quantidade;

    // Limpa o formulário após o cadastro
    document.getElementById('produtoForm').reset();
    alert("Produto cadastrado com sucesso!");
});
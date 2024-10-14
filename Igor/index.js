// Seleciona o botão e outros elementos
var botao = document.getElementById('mudarCorBotao');
var paragrafo1 = document.getElementById('paragrafo1');
var paragrafo2 = document.getElementById('paragrafo2');
var itensLista = document.getElementsByClassName('item');
var conteiner = document.getElementById('conteiner');
var todosParagrafos = document.getElementsByTagName('p');
var primeiroItemLista = document.querySelector('ul li'); // Seleciona o primeiro <li> dentro de <ul>
var todosItensLista = document.querySelectorAll('ul li'); // Seleciona todos os <li> dentro de <ul>
var button = document.getElementById('button')
// Adiciona um evento de clique ao botão
botao.addEventListener('click', function() {
    // 1. Mudar a cor de fundo da página
    document.body.style.backgroundColor = 'lightblue';

    // 2. Modificar o texto do primeiro parágrafo
    paragrafo1.textContent = 'O texto deste parágrafo foi alterado!';

    // 3. Alterar o estilo do segundo parágrafo
    botao.style.borderRadius = '20px'
    paragrafo2.style.color = 'red'; // Mudando a cor do texto
    paragrafo2.style.fontSize = '20px'; // Aumentando o tamanho da fonte

    // 4. Adicionar uma nova classe CSS ao segundo parágrafo
    paragrafo2.classList.add('destacado');

    // 5. Manipular todos os elementos de uma classe ('item') - Exemplo: mudar a cor de cada item da lista
    for (var i = 0; i < itensLista.length; i++) {
        itensLista[i].style.color = 'purple';
    }

    // 6. Manipular todos os elementos de uma tag ('p') - Exemplo: aplicar uma classe a todos os parágrafos
    for (var i = 0; i < todosParagrafos.length; i++) {
        todosParagrafos[i].classList.add('destaque-automatico');
    }

    // 7. Selecionar o primeiro item da lista e alterar seu texto
    primeiroItemLista.textContent = 'Primeiro item alterado';

    // 8. Manipular todos os itens da lista usando querySelectorAll
    todosItensLista.forEach(function(item) {
        item.style.fontWeight = 'bold';
    });

    // 9. Criar um novo elemento (um novo parágrafo) e adicioná-lo ao div conteiner
    var novoParagrafo = document.createElement('p');
    novoParagrafo.textContent = 'Este é um parágrafo novo criado dinamicamente.';
    conteiner.appendChild(novoParagrafo);

    // 10. Navegação pelo DOM - Selecionar o próximo elemento irmão do primeiro parágrafo e alterar seu texto
    var proximoIrmao = paragrafo1.nextElementSibling;
    if (proximoIrmao) {
        proximoIrmao.textContent = 'Este é o próximo irmão do primeiro parágrafo.';
    }

    // 11. Remover uma classe de um elemento após 3 segundos
    setTimeout(function() {
        paragrafo2.classList.remove('destacado');
    }, 3000);

    button.addEventListener('click', function(){
        alert('Botao foi clicado');
    });
});

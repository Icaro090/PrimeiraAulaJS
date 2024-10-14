var botao = document.getElementById('botao');
var link = document.getElementById('link');
botao.addEventListener('click', function(){
    
    link.addEventListener('click', function(){
        botao.style.color = 'white';
    alert('Danger, Button has been activated, close the warning immediately.');
});
});

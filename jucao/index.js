var botao = document.getElementById('btn');
const salver = document.getElementById('send')
botao.addEventListener("click", function(){
    alert('Be careful, The button has been pressed, lazybones found.');
});

salver.addEventListener('click', function(e){

    e.preventDefault();

    const name = document.getElementById('textoss');
    const value = name.value;
    document.getElementById('texto-frente').innerHTML = value;
});

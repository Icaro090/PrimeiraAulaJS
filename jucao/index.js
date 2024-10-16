var botao = document.getElementById('btn');
const salver = document.getElementById('send');

botao.addEventListener("click", function(){
    alert('We are facing a significant increase in the spread of a new virus that could compromise the security of your devices and personal data. This virus mainly spreads through suspicious emails, malicious links and downloads from untrustworthy sources.');
});

salver.addEventListener('click', function(e){

    e.preventDefault();

    const name = document.getElementById('textoss');
    const value = name.value;
    document.getElementById('texto-frente').innerHTML = value;
});

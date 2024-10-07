
// Parametros de funcao
function soma(a, b){
    return a / b;
}

const resultado = soma(3, 5);
console.log(resultado);
console.log("");

// Escopo de funcao 
function minhaFuncao(){
    var x = 10;
    console.log(x)

}
minhaFuncao();
console.log("");

//Funcoes Anonimas
const dobrar = function(numero){
    return numero * 2;
};
console.log(dobrar(6));
console.log("");

//Arrow Functions 
const quadrado = (numero) => {
    return numero * numero;
};
console.log(quadrado(8));
console.log("");

// Criando Objetos em JavaScript
//1
const pessoa = {
    nome: "Alice",
    idade: 32,
    cidade: "Cuiabrasa"
};
console.log("");
//2
const pessoinha = {
    nome: "Alice",
    idade: 32,
    cidade: "Cuiabrasa"
};
console.log(pessoinha.nome);
console.log(pessoa["idade"]);
console.log(pessoa[cidade]);
console.log("");
//3
const pessoinhas = {
    nome: "Alice",
    idade: 32,
    cidade: "Cuiabrasa"
};
delete pessoinhas.nome;
console.log(pessoinhas.nome);
console.log("");

//Metodos 
const calculadora ={
    somar: function(a, b){
        return a + b;
    },
    subtrair: function(a, b){
        return a - b;
    },
    dividir: function(a, b){
        return a / b;
    },
    multiplicar: function(a, b){
        return a * b;
    }
};
console.log(calculadora.somar(5, 3));
console.log(calculadora.subtrair(5, 3));
console.log(calculadora.dividir(150, 5));
console.log(calculadora.multiplicar(5, 3));
console.log("");

//Objetos Aninhados
const empresa = {
    nome: "Minha Empresa",
    endereco:{
        rua: "Rua da empresa",
        cidade: "Cidade da empresa"
    }
};
console.log(empresa);
console.log(empresa.nome);
console.log(empresa.endereco);
console.log(empresa.endereco.rua);
console.log(empresa.endereco.cidade);
console.log("");

//JSON
const person = {
    nome: "Alice",
    idade: 30
};

const jsonPerson = JSON.stringify(person);
console.log(jsonPerson);
console.log("");
const objetoPerson = JSON.parse(jsonPerson);
console.log(objetoPerson.nome);
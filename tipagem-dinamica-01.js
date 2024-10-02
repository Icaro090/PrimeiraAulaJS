var valor = 99;
var valor = "cento e trinta"
console.log(valor);

let x = " A reposta e " + 42;
let y = 42 + " e a resposta";

console.log(x);
console.log(y);
console.log("");
// conversao de texto para numero//

let stringParaNumero = "100";
console.log(stringParaNumero);
console.log(" V");
console.log(typeof(stringParaNumero));
console.log("");
// conversao de String para Number//
let numero = parseInt(stringParaNumero);
console.log(numero);
console.log(" V");
console.log(typeof(numero));

// conversao para Float//

let stringParaDecimal = "12.60";
console.log(stringParaDecimal);
console.log(" V");
console.log(typeof(stringParaDecimal));
console.log("");
// conversao de String para Number//
let decimal = parseFloat(stringParaDecimal);
console.log(decimal);
console.log(" V");
console.log(typeof(decimal));
console.log("");

//conversao de numero em forma de string//

 let concatenacao = "1.1" + "1.1";
 let converterParaNumero = +"1.1";
 console.log(concatenacao);
 console.log(" V");
 console.log(typeof(concatenacao));
 console.log("");
 console.log(converterParaNumero);
 console.log(" V");
 console.log(typeof(converterParaNumero));
 console.log("");

 // Soma de Duas variaveis no console log//

 let nome = "Icaro";
 let idade = "17";
 let resultado = nome + " tem " + idade + " anos de idade";
 console.log(resultado);
 console.log("");
 let primeiro_numero = 54;
 let segundo_numero = 44;
 let final_resultado = primeiro_numero + segundo_numero;
 console.log(final_resultado);
 
 // Soma de duas variaveis com ${}//

 let nome_kid = "Izaias";
 let idade_kid = 11;

 let saudacao = `Prazer, me chamo ${nome_kid} e tenho ${idade_kid} anos.`;
 console.log(saudacao);

 //pratica com produtos com com ${}//

 let preco = 15.55;
 let desconto = 0.5;

 let precoFinal = `O preco do produto com desconto e ${preco * (1 - desconto)} reais`;
 console.log(precoFinal);
 console.log("");

 //texto multi linhas com linhas quebradas//

 let TextoMultiLinhas = `
 O rato Roeu a Roupa do Rei de Roma.
 A Barata diz que tem 7 Sais de Filo e Metira da Barata ela tem e uma so.
 Quem fere com ferro, com ferro sera Ferido.
 O dia vira noite e a noite vira madrugada.
 `;
 console.log(TextoMultiLinhas);
var parola = prompt("Inserire una parola");
parola = parola.toLowerCase();

var parolaInversa = invertiParola(parola);

if(parola == parolaInversa){
    console.log('la parola è palindroma');
} else {
    console.log('la parola non è palindroma');
}
  
function invertiParola(str){
  var strInversa = str.split('').reverse().join('');  
  return strInversa;
}

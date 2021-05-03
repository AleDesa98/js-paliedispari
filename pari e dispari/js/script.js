function numeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function pariDispari(numero) {
    var risultato = "";
    if (numero % 2 == 0) {
        risultato = "pari";
    } else {
        risultato = "dispari";
    }
    return risultato
}

var sceltaUtente = prompt("Scrivere pari o dispari");
console.log("scelta utente = " + sceltaUtente);

do {
    var numeroUtente = parseInt(prompt("Scegliere un numero da 1 a 5"))
} while (numeroUtente < 1 || numeroUtente > 5);
console.log("numero utente = " + numeroUtente);

var numeroComputer = parseInt(numeroRandom(1, 5));
console.log("numero computer = " + numeroComputer);

var somma = numeroUtente + numeroComputer;
console.log("somma = " + somma);

var risultato = pariDispari(somma);

if (risultato == sceltaUtente) {
    console.log("Hai vinto!");
} else {
    console.log("Hai perso!");
}


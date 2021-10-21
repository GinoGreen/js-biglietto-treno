/* Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). */

//Dichiarazione variabili
const kiloMeters = 24;
const age = 19;
const pricePerKm = 0.21;
let priceTotal = pricePerKm * kiloMeters;
let toSubtract = 0;
const discount20 = 20;
const discount40 = 40;

//Inizio esercizio
if (age < 18) {
   toSubtract = (priceTotal / 100) * discount20;
} else if (age >= 65) {
   toSubtract = (priceTotal / 100) * discount40;
}

document.getElementById('price-total').innerHTML = priceTotal - toSubtract;

console.log('kilometri', kiloMeters);
console.log('etá', age);
console.log('Sconto da sottrarre al prezzo totale', toSubtract);
console.log('Prezzo totale', priceTotal);
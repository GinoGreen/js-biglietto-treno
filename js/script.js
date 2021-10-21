/* Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). */

//Dichiarazione variabili
const kiloMeters = parseFloat(prompt('Inserisci i kilometri da percorrere'));
const age = parseInt(prompt('Inserisci la tua etá'));
const codeDiscount = prompt('Inserisci il codice sconto, se ne hai uno');
let codeDiscountAccepted = 0
const pricePerKm = 0.21;
let priceTotal = pricePerKm * kiloMeters;
let toSubtract = 0;
const discount20 = 20;
const discount40 = 40;
let ageMinMaj = 'maggiorenne under 65';
let discountUsed = 0;
let stringCodeDiscount = '';

//Inizio esercizio
if (age < 18) {
   ageMinMaj = 'minorenne';
   discountUsed = discount20;
} else if (age >= 65) {
   ageMinMaj = 'maggiorenne over 65';
   discountUsed = discount40;
}

if (codeDiscount === 'SCONTO20') {
   if (age < 18) {
      codeDiscountAccepted = 2;
      stringCodeDiscount = 'é valido ed é stato aggiunto, il tuo sconto é raddoppiato'
   } else if (age <= 20) {
      codeDiscountAccepted = 1;
      stringCodeDiscount = 'é valido ed é stato aggiunto'
   } else {
      stringCodeDiscount = 'non é applicabile perché hai piú di 20 anni'
   }
} else {
   stringCodeDiscount = 'non é valido'
}

if (codeDiscountAccepted !== 0) {
   toSubtract = ((priceTotal / 100) * discount20) * codeDiscountAccepted;

} else {
   toSubtract = ((priceTotal / 100) * discount20);
}

//PRINT HTML
document.getElementById('majority').innerHTML = ageMinMaj;

document.getElementById('number-discount-percentage').innerHTML = discountUsed;

document.getElementById('double-discount').innerHTML = 
`
   Il tuo codice sconto del 20% ${stringCodeDiscount}
`;

const priceFinal = (priceTotal - toSubtract).toFixed(2);

document.getElementById('price-total').innerHTML = priceFinal;

//console log
console.log('kilometri', kiloMeters);
console.log('etá', age);
console.log('Prezzo totale', priceTotal);
console.log('Sconto da sottrarre al prezzo totale', toSubtract);
console.log('Prezzo finale', priceFinal);







// let priceTotal = pricePerKm * kiloMeters;

// if (age < 18) {
//    //aggiorno pricetotal con lo sconto
// } else if (age >= 65) {
//    //aggiorno pricetotal con lo sconto
// }

// if (codeDiscount === 'SCONTO20') {
      
// } else {

// }
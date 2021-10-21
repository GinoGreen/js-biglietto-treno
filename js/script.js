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
const pricePerKm = 0.21;
let priceTotal = pricePerKm * kiloMeters;
let toSubtract = 0;
const discount20 = 20;
const discount40 = 40;
let ageMinMaj = 'maggiorenne under 65';
let discountUsed = 0;

//Inizio esercizio


if (age < 18) {
   ageMinMaj = 'minorenne';
   discountUsed = discount20;

   if (codeDiscount === 'SCONTO20') {
      toSubtract = ((priceTotal / 100) * discount20) * 2 ;
      document.getElementById('double-discount').innerHTML = 
      `
         Il tuo codice sconto é stato applicato correttamente, hai ricevuto un doppio sconto del 20 %
      `;
   } else {
      toSubtract = (priceTotal / 100) * discount20;
      document.getElementById('double-discount').innerHTML = 
      `
         Hai inserito un codice sconto non valido
      `;
   }

} else if (age <= 20) {
   
   if (codeDiscount === 'SCONTO20') {
      toSubtract = ((priceTotal / 100) * discount20) ;
      document.getElementById('double-discount').innerHTML = 
      `
         Il tuo codice sconto é stato applicato correttamente, hai ricevuto uno sconto del 20 %
      `;
   } else {
      document.getElementById('double-discount').innerHTML = 
      `
         Hai inserito un codice sconto non valido
      `;
   }

} else if (age > 20) {
   
   if (codeDiscount === 'SCONTO20') {
      document.getElementById('double-discount').innerHTML = 
      `
         Il codice sconto da te inserito non é applicabile per la tua fascia di etá
      `;
   } else {
      document.getElementById('double-discount').innerHTML = 
      `
         Hai inserito un codice sconto non valido
      `;
   }
} else if (age >= 65) {
   ageMinMaj = 'maggiorenne over 65';
   toSubtract = Math.round((priceTotal / 100) * discount40);
   discountUsed = discount40;
}

//PRINT HTML
document.getElementById('majority').innerHTML = ageMinMaj;

document.getElementById('number-discount-percentage').innerHTML = discountUsed;

const priceFinal = (priceTotal - toSubtract).toFixed(2);

document.getElementById('price-total').innerHTML = priceFinal;

//console log
console.log('kilometri', kiloMeters);
console.log('etá', age);
console.log('Prezzo totale', priceTotal);
console.log('Sconto da sottrarre al prezzo totale', toSubtract);
console.log('Prezzo finale', priceFinal);
/* Sanck 1 Crea una funzione che somma due numeri.

 Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
function somma(a, b) {
    return a + b;
}

Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
const somma = function (a, b) {
    return a + b;
}

const somma = (a, b) => a + b;

console.log(somma(2, 3));
*/

/* Snack 2 Crea una arrow function che calcola il quadrato di un numero.

Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.

const quadrato = (num) => num * num;
console.log(quadrato(3));

*/

/* Snack 3 Crea una funzione eseguiOperazione

Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.

*/
const somma = (a, b) => a + b;
const sottrazione = (a, b) => a - b;
const moltiplicazione = (a, b) => a * b;

function eseguiOperazione(a, b, operazione) {
    return operazione(a, b);
}

console.log(eseguiOperazione(2, 3, somma));
console.log(eseguiOperazione(2, 3, sottrazione));
console.log(eseguiOperazione(2, 3, moltiplicazione));





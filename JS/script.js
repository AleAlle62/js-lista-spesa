/*

Descrizione:
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
Quindi rivediamo l’esercizio visto insieme, ma questa volta con il ciclo while al posto del ciclo for. Facciamo attenzione a non dimenticare tutte le differenze implementative che il ciclo while ci impone, in particolare alla variabile di indice.

*/

let outList = document.querySelector('.list')
const inputList = ['pasta', 'acqua', 'verdura', 'frutta']

let i = 0

while (i < inputList.length) {
    console.log(inputList[i])
    outList.innerHTML += `<div class="list">${inputList[i]}</div>`
    i++
}
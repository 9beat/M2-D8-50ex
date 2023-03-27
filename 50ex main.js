// -----------------------------------------------------
//--------------ESERCIZI JAVASCRIPT---------------------
// -----------------------------------------------------
// N.B. Tranne dove specifico di aver effettuato una ricerca in rete per sincerarmi di aver risolto al meglio gli esercizi richiesti e riporto l'alternativa così come trovata, tutte le risposte sono frutto del mio ragionamento.-------------------------------------------
// Inoltre ho commentato gli esercizi in modo da poterli decommentare selezionando i vari blocchi da <---INIZIO a <---FINE compresi 

// // // de-commentare blocco 1 (ex 21) <-----INIZIO blocco 1
// // Ex. 21 Date le variabili x = "John" e y = "Doe", mostra in console "John <> Doe":
// let x = "John <"
// let y = "> Doe"
// console.log(x + y) 
// // // <---------------------------------------FINE blocco 1



// // // de-commentare blocco 2 (exs 22/23) <---INIZIO blocco 2
// // Ex. 22 Crea un oggetto con le seguenti proprietà: name, surname, email:
// let persona = {
//     name: "Matteo",
//     surname: "Forni",
//     email: "mymail@mail.com",
// }
// // Ex. 23 Cancella la proprietà email dall'oggetto appena creato:
// delete persona.email 
// console.log(persona)
// // // <----------------------------------------FINE blocco 2



// // // de-commentare blocco 3 (ex 24) <------INIZIO blocco 3
// // Ex. 24 Crea un array contenente 10 stringhe:
// let array10str = ["strOne","strTwo","strThree","strFour","strFive","strSix","strSeven","strEight","strNine","strTen"]
// // Ex. 25 Mostra in console ogni stringa del precedente array
// for (const i of array10str) {
//     console.log(i)
// }
// // // <----------------------------------------FINE blocco 3



// // // de-commentare blocco 4 (exs 26/27) <---INIZIO blocco 4
// // Ex. 26 Crea un array contenente 100 numeri random:
// let n100Random = []
// for (let i = 0; i < 100; i++) {
//     let nRandom = Math.floor(Math.random() * 100)
//     n100Random.push(nRandom)
// }
// console.log(n100Random)
// // Ex. 27 Scrivi una funzione per trovare il valore massimo e il valore minimo dall'array appena creato:
// let nMax = n100Random[0]
// let nMin = n100Random[0]
// function vMinMax(n100Random) {
//     for (let i = 1; i <= n100Random.length; i++) {
//         if (n100Random[i] > nMax) {
//             nMax = n100Random[i]
//         }
//         if (n100Random[i] < nMin ) {
//             nMin = n100Random[i]
//         }
//     }
//     return {nMax: nMax, nMin: nMin}
// }
// let result = vMinMax(n100Random)
// console.log("max: " + result.nMax)
// console.log("min: " + result.nMin)
// // // <------------------------------------FINE blocco 4



// // // de-commentare blocco 5 (ex 28) <---INIZIO blocco 5/1
// // Ex. 28 Crea un array di array, nel quale ogni array "figlio" ha 10 numeri random:
// let n10Random = []
// for (let i = 0; i < 10; i++) {
//     let nRandom = Math.floor(Math.random() * 100)
//     n10Random.push(nRandom)
// }

// let arrayPadre = []
// for (let i = 0; i < 5; i++) {
//     arrayPadre.push(n10Random)
// }

// console.log(arrayPadre)
// // // <------------------------------------FINE blocco 5/1

// // IN ALTERNATIVA (codice trovato dopo ricerca rete)<---INIZIO 5/2
// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// function createRandomArray(length) {
//     const array = []
//     for (let i = 0; i < length; i++) {
//         array.push(getRandomNumber(1, 100));
//     }
//     return array;
// }
// const parentArray = []
// const numberOfChildArrays = 5
// const childArrayLength = 10
// for (let i = 0; i < numberOfChildArrays; i++) {
//     parentArray.push(createRandomArray(childArrayLength))
// }
// console.log(parentArray)
// // // <--------------------------------FINE 5/2



// // // de-commentare blocco 6 (ex 29) <------INIZIO blocco 6
// // Ex. 29 Crea una funzione che riceve 2 array come parametri e ritorni quello con più elementi:
// const arr1 = [1, 2, 3, 4]
// const arr2 = [5, 6, 7]

// function arrayMaxElem(array1, array2) {
//     if (arr1.length > arr2.length) {
//         return arr1
//     } else if (arr2.length > arr1.length) {
//         return arr2
//     } else {
//         return "Gli array sono lunghi uguali"
//     }
// }

// console.log(arrayMaxElem(arr1, arr2))
// // // <---------------------------------FINE blocco 6



// // // de-commentare blocco 7 (ex 30) <------INIZIO blocco 7
// // Ex. 30 Crea una funzione che riceve 2 array numerici come parametri
// // e ritorna quello con la somma totale degli elementi maggiore:
// let arr1 = [1,2,3,4]
// let arr2 = [5,6,7,8]

// function sumElemArray(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i]
//     }
//     return sum
// }

// function arrayMaxSum(arr1, arr2) {
//     let sumArr1 = sumElemArray(arr1)
//     let sumArr2 = sumElemArray(arr2)
//     if (sumArr1 > sumArr2) {
//         return arr1;
//     } else {
//         return arr2;
//     }
// }

// let array1 = [1, 2, 3, 4, 5];
// let array2 = [6, 7, 8];

// console.log(arrayMaxSum(arr1, arr2))
// // // <-------------------------------FINE blocco 7


// --------------------------------------------
//--------------ESERCIZI SUL DOM---------------
// --------------------------------------------


// // Ex. 31 Seleziona l'elemento con id "container" nella pagina <------INIZIO 31
// let id = document.querySelector('.container')
// console.log(id)
// // // <----------------------------------FINE 31



// // Ex. 32 Seleziona tutti gli elementi di tipo <td> nella pagina <---INIZIO 32/33
// let td = document.querySelectorAll('td')
// // Ex. 33 Usa un ciclo per stampare in console il testo contenuto in ogni elemento <td>
// for (let i = 0; i < td.length; i++) {
//     console.log(td[i].textContent);
// }
// // // <----------------------------------FINE 32/33



// // Ex. 34 Scrivi una funzione per cambiare il titolo (tag <title>) della pagina <------INIZIO 34
// let title = document.querySelector('title')
// title.innerText = "ex.34"
// // // <----------------------------------FINE 34



// // Ex. 35 Scrivi una funzione per aggiungere una nuova riga alla tabella nella pagina <------INIZIO 35
// function addRow() {
//     let table = document.querySelector('table')
//     let newRow = table.insertRow(-1)
//     let cell1 = newRow.insertCell(0)
//     let cell2 = newRow.insertCell(1)
//     let cell3 = newRow.insertCell(2)
//     let cell4 = newRow.insertCell(3)
//     cell1.innerHTML = "35-E1."
//     cell2.innerHTML = "35-E2."
//     cell3.innerHTML = "35-E3."
//     cell4.innerHTML = "35-E4."
// }

// window.onload = function () {
//     addRow()
// }
// // // <-----------------------------------FINE 35



// // Ex. 36 Scrivi una funzione per aggiungere la classe "test" ad ogni riga nella tabella <------INIZIO 36
// function addClass() {
//     let tr = document.querySelectorAll('table tr')
//     for (let i = 0; i < tr.length; i++) {
//         tr[i].classList.add('test')
//     }
// }
// // per mostrare più facilmente il risultato ho dato un "color: aqua;"" alla classe nel css
// window.onload = function() {
//     addClass()
// }
// // // <------------------------------------FINE 36



// // // Ex. 37 Scrivi una funzione per aggiungere uno sfondo rosso a ogni link presente nella pagina <------INIZIO 37 
// function colorLink() {
//     let link = document.querySelectorAll('a')
//     for (let i = 0; i < link.length; i++) {
//         link[i].style = "background-color: red;"
//     }
// }
// window.onload = function () {
//     colorLink()
// }
// // // <------------------------------------FINE 37



// // Ex. 38 Mostra in console "Page loaded" quando la pagina ha finito di caricarsi <-----------INIZIO 38
// window.onload = function() {
//     console.log("PAGE LOADED")
// }
// // // <------------------------------------FINE 38



// // Ex. 39 Scrivi una funzione per aggiungere nuovi elementi alla lista non ordinata nella pagina <------INIZIO 39
// function addlElemList() {
//     let newLista = document.createElement('li')
//     newLista.innerText = "esercizio39"
//     let unorderedList = document.querySelector('ul');
//     unorderedList.appendChild(newLista)
// }
// window.onload = function() {
//     addlElemList()
// }
// // // <--------------------------------------FINE 39



// // // Ex. 40 Scrivi una funzione... <--------------INIZIO 40/1
// // -- a seconda di come si intenda la richiesta (NDR)--
// // per svuotare un elemento di una lista
// function removeList() {
//     let listaOrdinata = document.getElementById('lista')
//     for (let i = 0; i < listaOrdinata.children.length; i++) {
//         listaOrdinata.children[0].innerText = ""
// // // oppure per svuotare tutti gli elementi della lista:
//         // listaOrdinata.children[i].innerText = ""
//     }
// }

// window.onload = function() {
//     removeList()
// }
// // // <--------------------------------------FINE 40/1


// // OPPURE elimina tutta la lista compresi i punti<---INIZIO 40/2
// function svuotaLista() {
//     let unorderedList = document.getElementById('lista')
//     while (unorderedList.firstChild) {
//         unorderedList.removeChild(unorderedList.firstChild);
//     }
// }

// window.onload = function() {
//     svuotaLista()
// }
// // // <--------------------------------------FINE 40/2



// --------------------------------
// --------ESERCIZI EXTRA----------
// --------------------------------

// // // Ex.41 Aggiungi un event listener in modo che compaia un alert quando il cursore passa sopra un link; l'alert deve mostrare la sua proprietà href
// // //<-------INIZIO 41/1 
//  // (non mostra href nell'alert se passa sopra img)
// function showAlert(e) {
//     alert(e.target.href)
// }
// let links = document.querySelectorAll('a')
// for (let link of links) {
//     link.addEventListener('mouseover', showAlert)
// }
// // //<----------------------------FINE 41/1


// // //<-------INIZIO 41/2
// //(funziona anche su img - ho dovuto fare una ricerca in rete)
// let links = document.querySelectorAll('a')
// for (let i = 0; i < links.length; i++) {
//     links[i].addEventListener("mouseover", () => { alert(links[i].href) })
//     console.log(links[i].href)
// }
// // //<----------------------------FINE 41/2



// // // 42 Crea un bottone che una volta cliccato nasconda le immagini <---INIZIO 42/43
// function addImgBtn() {
//     let button = document.createElement('button')
//     button.innerText = 'mostra/nascondi immagini'
//     button.addEventListener('click', function () {
//         let images = document.querySelectorAll('img')
//         for (let i = 0; i < images.length; i++) {
//             images[i].classList.toggle('dsp-none')
//         }
//     })
//     let btnContainer = document.getElementById("btn-container")
//     btnContainer.appendChild(button)
//     btnContainer.appendChild(button)
// }
// // // // 43 Crea un bottone che una volta cliccato nasconda o mostri la tabella
// function toggleTable() {
//     let table = document.getElementById("table")
//     table.classList.toggle("dsp-none")
// }

// function addTableBtn() {
//     let btnContainer = document.getElementById("btn-container")
//     let button = document.createElement("button")
//     button.innerHTML = "mostra/nascondi tabella"
//     button.onclick = toggleTable
//     btnContainer.appendChild(button)
// }

// window.onload = function() {
//     addImgBtn()
//     addTableBtn()
// }
// // //<----------------------------------FINE 42/43



// // // 44 Crea una funzione per calcolare la somma di ogni numero contenuto in tutte le celle della tabella (se il contenuto è un numero)<---INIZIO 44
// // (cercato in rete)

// function sommaNumeriTabella() {
//     let table = document.getElementById('table')
//     let somma = 0
//     for (let i = 0; i < table.rows.length; i++) {
//         for (let index = 0; index < table.rows[i].cells.length; index++) {
//             const contenutoCella = table.rows[i].cells[index].innerText;
//             if (!isNaN(contenutoCella) && contenutoCella.trim() !== '') {
//                 somma += parseFloat(contenutoCella);
//             }
//         }
//     }
//     return somma
// }
// // //<------------------------------------FINE 44



// // // 45 Cancella l'ultima lettera dall'header della pagina ogni volta che l'utente ci clicca sopra
// function removeLastCharacter() {
//     const titleElement = document.querySelector('h1');
//     const titleText = titleElement.textContent;
//     const newText = titleText.slice(0, -1);
//     titleElement.textContent = newText;
// }
// // //<-------------------------------------FINE 45



// // // 46 Aggiungi un event listener in modo che cliccando un <td> nella pagina, questo cambi colore di sfondo
// Function to change the background color of a clicked <td>
// function bgColor(e) {
//     let element = e.target
//     element.classList.toggle('bg-color')
// }

// let td = document.querySelectorAll('td')
// for (let cell of td) {
//     cell.addEventListener('click', bgColor)
// }
// // //<-------------------------------------FINE 46


// // // 47 Aggiungi un bottone che elimini un <td> a caso dalla tabella <---INIZIO 47
// function randomTdBtn() {
//     let btnContainer2 = document.getElementById("btn-container2")
//     let button = document.createElement("button")
//     button.textContent = "elimina TD casuale"
//     button.addEventListener("click", function() {
//         let table = document.querySelector("table")
//         let tr = table.querySelectorAll("tr");
//         let trRandomIndex = Math.floor(Math.random() * tr.length);
//         let trRandom = tr[trRandomIndex]
//         let td = trRandom.querySelectorAll("td")
//         let tdRandomIndex = Math.floor(Math.random() * td.length);
//         let tdRandom = td[tdRandomIndex]
//         tdRandom.remove()
//     })
//     btnContainer2.appendChild(button)
// }

// window.onload = function() {
//     randomTdBtn()
// }
// // //<-------------------------------------FINE 47



// // // 48 Aggiungi automaticamente un bordo rosa quando il cursore passa sopra a una cella <---INIZIO 48
// (cercato inn rete)
// document.addEventListener("DOMContentLoaded", function () {
//     var td = document.querySelectorAll("td")
//     function toggleBorder() {
//         this.classList.toggle("pink-border")
//     }
//     for (var i = 0; i < td.length; i++) {
//         td[i].addEventListener("mouseenter", toggleBorder)
//         td[i].addEventListener("mouseleave", toggleBorder)
//     }
// })
// // //<-------------------------------------FINE 48


// // <-----------------------------------INIZIO 49/50
// // // 49 Scrivi una funzione per creare una tabella con 4 righe e 3 colonne e aggiungerla alla FINE della pagina
// // (mi sono aiutato con una ricerca in rete)
// let table2 = document.createElement('table')

// function addTable2() {
//     table2.id = 'table2'
//     for (let i = 0; i < 4; i++) {
//         let tr = document.createElement('tr')
//         for (let index = 0; index < 3; index++) {
//             let col = document.createElement('td')
//             col.innerHTML = 'fila' + (i + 1) + 'colonna' + (index + 1)
//             tr.appendChild(col)
//         }
//         table2.appendChild(tr)
//     }
//     document.body.appendChild(table2)
// }

// window.onload = function() {
//     addTable2()
// }
// // // <---------------------FINE 49



// // // 50 Scrivi una funzione per rimuovere l'ultima tabella presente nella pagina
// // -----------------NON FUNZIONA---------------------------
// function removeTable2() {
//     let table2 = document.getElementById("table2")
//     if (table2.length > 0) {
//         table2[table2.length - 1].remove()
//          console.log('tabella rimossa')
//     } else {
//        console.log("Nessuna tabella trovata")
//     }
// }

// window.onload = function() {
//     removeTable2()
// }
// // // <---------------------FINE 50



// // // <---------------------THE END
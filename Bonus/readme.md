problema: L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


1- creo su html un div a cui assegno un id da usare successivamente per inserire la griglia nel dom
2- Creo un bottone su html a cui assegno un id.
3- Inizio a creare delle classi css per dare uno stile visivo agli elementi che andrò a creare su js
3- Su file js recuper il bottone con una variabile a cui assegno .addEventListner in modo che la creazione della griglia avvenga al click del button
4- Creo una funzione per la creazione degli elementi quadrati per la creazione della griglia.
    4.1 -  creo una variabile ed utilizzo createElement
    4.2- alla stessa variabile aggiungo una classe per lo stile da css
    NB ricordarsi di usare il return o la funzione non restituirà niente
5- Utilizzo un ciclo for  ( i = 0; i < 100; i++) dentro cui richiamo la funzione per la crezione del quadrato associandola ad una variabile.
    5.1- aggiungo un inner text così da stampare i numeri delle caselle nel dom
    5.2- aggiungo .appen a fine ciclo così da stampare i quadrati sulla griglia
6- Per l''interazione al click del mouse sul quadrato:
    6.1- all'interno del ciclo for utilizzo eventListener sulla stessa variabile con cui ho richiamato la funzione per la creazione dei quadrati.
    6.1- utilizzo il this così da richiamare la posizione dove avvine l'azione
    6.2- aggiungo una classe così da far cambiare il colore al quadratino al click del muose
    6.3 - utilizzo un console.log per stampar in cosole il numero della casella cliccata
NB ad ogni step utilizzare i console.log per assicurarsi che tutto proceda correttamente e individuare gli errori.
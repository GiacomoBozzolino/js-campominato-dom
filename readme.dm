Problema:Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.


1- Creo una funzione per generare numeri casuali da 1 al numero di celle della griglia
2- Inserisco la funzione in un ciclo della durata di i<16 così da generare 16 numeri casuali.
3- Creo un array vuote per le bombe dove adrò a inserire i numeri generati randomicamente
    -devo inserire un controllo
    3.1- ?SE il numero non è inserito nell'array(utilizzare includes()) allora lo Inserisco
    3.2- :ALTRIMENTI PROSEGUO
4- Modifico la funzione già presente per la reazione al click dell'utente sulla cella
     -Aggiungo una condizione
     4.1 ?SE il numero è presente nell'array bomba allora gli assegno una classe che lo colorerà di rosso
     4.2 :ALTRIMENTI  la cella si colorerà di azzurro
5- Alla funzione precedente aggiungo dei messaggi da stampare nel DOM a seconda dell'azione. (posso usare append o innerHTML)
    5.1 ?SE il numero è presente nell'array della bomba allora stamperò un messaggio di sconfitta
    5.2 :ALTRIMENTI un messaggio che andrà a comunicare il numero di celle cliccate prima di trovare una bomba

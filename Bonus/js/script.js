
// funzione per la creazione dei quadrati
function squareElement (){
    let square = document.createElement('div')
    square.classList.add('square')
    return square
}
// funzione creazione numero randomica
function randomNumber (min,max) {
    return Math.floor(Math.random() * (max - min +1) ) + min;
};

// funzione estrazioni 16 numeri da inserire nell'array_bombs
function arrayBombs (array_bombs, max){
//  devo aggiungere il controllo perchè non ci siano numeri randomici nell'array
    let controllo = false 
    let number
    while (controllo === false) {
        number = randomNumber(1, max)
        // setto la condizione per uscire dal ciclo while ( se il numero non è contenuto nell'array esco dal ciclo e genero un numero)
        if (!array_bombs.includes(number))
        controllo = true
    } 
      
    return number;
};


// funzione che crea la nuova partita
function createNewGame(safe){
     let  griglia = document.getElementById('griglia');
    // svuoto la griglia
    griglia.innerHTML='';
    let message= document.getElementById('message');
    message.innerHTML='';
    let array_bombs = []
    console.log (array_bombs)

     for (let i=0; i<16; i++){
        let bombNumber = arrayBombs (array_bombs, 100);
        array_bombs.push(bombNumber);
        
        }
    console.log (array_bombs,safe)


    let level = document.getElementById('level').value;
    console.log(level);
    let cellsNumber;
    switch(level){
        case '1':
            cellsNumber =100;
            break;
       case '2':
            cellsNumber =81;
            break;
        case '3':
            cellsNumber =49;
            break;
    }
    createCells(cellsNumber,array_bombs, safe);



}


// funzione di creazione della gliglia completa
function createCells(cells, array_bombs, safe){
    
        for ( i = 0; i < cells; i++ ){
            let square = squareElement ();
            let cellsPerRow = Math.sqrt(cells);
            square.style.width = `calc(100% /${cellsPerRow})`;
            square.style.height = square.style.width;
            square.innerText= i+ 1
            console.log(square)

            // aggiungo l'evento al click su quadrato
            // aggiungo l'evento al click su quadrato
        square.addEventListener('click', function (){
        
            if (!array_bombs.includes(parseInt(this.innerText))){
                this.classList.add('clicked');
                safe++
                console.log(safe)
                document.getElementById('message').innerText= `Il tuo punteggio è di: ${safe}`
                
            } else {
                this.classList.add('bomb');
                document.getElementById('message').innerText= 'BOOM! Hai perso!'
    
            }
            console.log(`Hai cliccato sulla casella numero: ${this.innerText}`)
        })
            griglia.append(square)
            
        }    
}


let play = document.getElementById('play')
console.log(play)
let safe=0
// collego la creazione della griglia al pulsante
play.addEventListener("click", function(){
safe
 
 createNewGame(safe)


});



// funzione per la creazione dei quadrati
function squareElement (){
    let square = document.createElement('div');
    square.classList.add('square');
    return square;
};

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

// funzione che aggiunge il cambio colore al click
function clickedSquare(cella, array_bombs){
    cella.addEventListener('click', function (){
        if (array_bombs.includes(parseInt(this.innerText))){
            this.classList.add('bomb');
            
        } else {
            this.classList.add('clicked');
            
        }


        console.log(`Hai cliccato sulla casella numero: ${this.innerText}`)
    })
}

// funzione che crea la nuova partita
function createNewGame(){
    let  griglia = document.getElementById('griglia');
    // svuoto la griglia
    griglia.innerHTML='';
    let array_bombs = []
    console.log (array_bombs)

    for (let i=0; i<16; i++){
        let bombNumber = arrayBombs (array_bombs, 100);
        array_bombs.push(bombNumber);
        
    }
    console.log (array_bombs)
    createCells(array_bombs)
}

// funzione di creazione della gliglia completa
function createCells(array_bombs){
    
    for ( i = 0; i < 100; i++ ){
        let square = squareElement ();
        let cellsPerRow = Math.sqrt(100);
        square.style.width = `calc(100% /${cellsPerRow})`;
        square.style.height = square.style.width;
        square.innerText= i+ 1
        // console.log(square)

        // aggiungo l'evento al click su quadrato
        clickedSquare(square, array_bombs)
        griglia.append(square)
        
    }    
}


let play = document.getElementById('play')

// collego la creazione della griglia al pulsante
play.addEventListener("click", function(){

 
 createNewGame()


});

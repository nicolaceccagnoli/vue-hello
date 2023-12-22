/*

    1) Stampare a schermo un messaggio all'interno di un h1, utilizzando i data. OK

    BONUS
    --  Aggiungere alla pagina un'immagine, presa anch'essa da un data.

*/
// Dichiaro la funzione "Create App"
const { createApp } = Vue;

// Costruisco la funzione "Create App"
createApp({
    data() {
        return {
            message: 'Bellissimo Vue spero di riuscire a stampre questo messaggio in pagina'
        }
    }
}).mount('h1');

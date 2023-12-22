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
            message: 'Ecco a voi un mio selfie:'
        }
    }
}).mount('h1');

// Costruisco la funzione "Print Img"
createApp ({
    data() {
        return{
            img: 'https://myredcarpet.eu/wp-content/uploads/2022/08/bullet-train.jpg'
        }
    }
}).mount('#image')

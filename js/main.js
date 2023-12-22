/*

    1) Stampare a schermo un messaggio all'interno di un h1, utilizzando i data. OK

    BONUS
    --  Aggiungere alla pagina un'immagine, presa anch'essa da un data.          OK

*/

// Dichiaro la funzione "Create App"
const { createApp } = Vue;

// Costruisco la funzione per stampare un messaggio nell'h1
createApp({
    data() {
        return {
            message: 'Ecco a voi un mio selfie:'
        }
    }
}).mount('h1');

// Costruisco la funzione per stampare l'immagine in pagina
createApp ({
    data() {
        return{
            img: 'https://myredcarpet.eu/wp-content/uploads/2022/08/bullet-train.jpg'

        }
    },
    methods: {
        getDivClasses() {
            return 'd-flex justify-content-center p-5';
        },
        getTextProperty() {
            return 'text-center mt-3';
        }
    }
}).mount('#image')

// Costruisco la funzione per stampare un messaggio nel footer

createApp({
    data() {
        return {
            saluto: 'Buon Natale da Vue',
            class: 'saluto'
        }
    }
}).mount('footer')

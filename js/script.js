const {createApp} = Vue;

createApp({
    data(){
        return{
            messaggio: 'primo messaggio con Vue'
        }
    }
}).mount('#app');
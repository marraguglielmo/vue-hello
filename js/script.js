const {createApp} = Vue;

createApp({
    data(){
        return{
            messaggio: 'primo messaggio con Vue',
            img: 'img/avatar_7.jpg'
        }
    }
}).mount('#app');
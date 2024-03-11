const {createApp} = Vue;

createApp({
    data(){
        return{
            messaggio: 'primo messaggio con Vue',
            img: 'img/avatar_7.jpg',
            clock: '',
            isEven: false,
            isFive: false,
            nome: 'Guglielmo',
            nomeTemp: ''
        }
    },

    methods:{
        setClock(){
            const d = new Date();
            const h = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
            const m = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
            const s = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();
            this.clock = `${h}:${m}:${s}`;

            
            if(s % 5 === 0){
                this.isFive = true;
                this.isEven = false;
            }else if(s % 2 === 0){
                this.isFive = false;
                this.isEven = true;
            }else{
                this.isEven = false;
                this.isFive = false;
            }
        },
        startClock(){
            setInterval(this.setClock, 1000);
        },
        nuovoNome(){
            this.nomeTemp === '' || !isNaN(this.nomeTemp) ? alert('Per favore inserisci un nome') : this.nome = this.nomeTemp;
        }
    },

    mounted(){
        this.setClock();
        this.startClock();
    }
}).mount('#app');
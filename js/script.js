const {createApp} = Vue;

createApp({
    data(){
        return{
            messaggio: 'primo messaggio con Vue',
            img: 'img/avatar_7.jpg',
            clock: '',
            isEven: false
        }
    },

    methods:{
        setClock(){
            const d = new Date();
            const h = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
            const m = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
            const s = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();
            this.clock = `${h}:${m}:${s}`;
            
            if(s % 2 === 0){
                this.isEven = true;
            }else{
                this.isEven = false;
            }
        },
        startClock(){
            setInterval(this.setClock, 1000);
        },
        
    },

    mounted(){
        this.setClock();
        this.startClock();
    }
}).mount('#app');
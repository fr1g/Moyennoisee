<template>
    <div>
        <p class="mt-3">You need to check the input info more than twice!</p>
        <form>
            <h3>By (record UID)</h3>
            <input id="Log-uid" v-model="uid" type="number" :class="this.usually + ' w-2/3'">            
            <h3>For (record SID)</h3>
            <input id="Log-sid" v-model="sid" type="number" :class="this.usually + ' w-2/3'">

        </form>
        <br>
        <span  v-on:click="HandleSubmit()">
            <btn :cont="'SUBMIT'"/>
        </span>
    </div>
    </template>
    <style scoped>
        h3{
            margin-top: .8rem;
            margin-bottom: .5rem;
            font-size: larger;
            font-weight: bold;
        }
    </style>
    <script>
    import btn from '@/components/FormalButton'
    import request from '@/api/logCP'
    
    export default{
        name: 'NewLogInsert',
        components: {btn},
        inject: ["ShutModal"],
        data: function(){
            return{
                usually: 'm-1 bg-zinc-400 bg-opacity-30 hover:bg-opacity-50 focus:bg-opacity-90 text-zinc-100 px-1.5 mx-2 text-lg p-1 transition-all border border-zinc-600 rounded-lg shadow hover:shadow-md',
                uid: 0,
                sid: 0,
            }
        },

        computed: {},
        methods: {
            Shut: function(){this.ShutModal()},
            HandleSubmit: function(){
                // ... 
                if(this.uid <= 0) return PushToast('Error UID', 'err');
                if(this.sid <= 0) return PushToast('Error SID', 'err');
                request.InsertLog(this.uid, this.sid, sessionStorage.getItem('token'))
                .then(response => {
                    let res = JSON.parse(response);
                    if(res.code != 200) PushToast('ERR unknown? ' + res.content, 'err')
                });
                
                PushToast('Reloading to get new data update...');
                setTimeout(() => {
                    this.Shut();
                    window.location.reload();
                }, 300);
            },
        }
    }
    
    </script>
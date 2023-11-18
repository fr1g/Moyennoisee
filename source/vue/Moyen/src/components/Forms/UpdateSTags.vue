<template>
    <div>
        <p>{{ preUser | SplitCaps }}</p>
        <form>
            <h3>Service ID</h3>
            <input required id="STAGID" type="number" :class="this.usually + ' w-2/3'" >
            <h3>Tags</h3>
            <input required id="STAG" type="text" :class="this.usually + ' w-2/3'" >
        </form>
        <br>
        <span v-on:click="HandleSubmit()">
            <btn :cont="'SUBMIT'" />
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
    import request from '@/api/userControllerPoint'
    
    export default {
        name: 'UpdateSTags',
        inject: ["ShutModal"],
        components: {btn},
        data: function(){
            return{
                usually: 'm-1 bg-zinc-400 bg-opacity-30 hover:bg-opacity-50 focus:bg-opacity-90 text-zinc-100 px-1.5 mx-2 text-lg p-1 transition-all border border-zinc-600 rounded-lg shadow hover:shadow-md',
                sid: '',
                newtag: '',

            }
        },
        methods: {
            Shut: function(){this.ShutModal();},
            HandleSubmit: function(){
                console.log(request);
                request.UpdateSTags(this.sid, this.newtag, sessionStorage.getItem('token'))
                .then(result => {
                    console.log(result);
                }).catch(err => {console.error(err)});

                this.Shut();
            },
        },
        
    }
    
    </script>
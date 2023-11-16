<template>
    <div>
        <form>
            <h3>Search Customer</h3>
            <!-- <div class="grid grid-cols-4"> -->
            <div class="g4">
                <input id="AFUID" type="number" v-model="Search" :class="this.usually + ' mx-auto w-2/3 l'" placeholder="UID Number"> 
                <span id="AFQUERY" v-on:click="HandleSearch()" class="bloc hidden k col-span-1 mx-2 translate-y-1">
                    <btn :cont="'QUERY'"/>
                </span> 
            </div>
            <div class="min-h-3">

            </div>          
            <h3>Cash Received</h3>
            <input id="AFAMOUNT" type="number" :class="this.usually + ' w-2/3'">

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
    import request from '@/api/userControllerPoint'
    
    export default{
        name: 'AddFund',
        components: {btn},
        inject: ["ShutModal"],
        data: function(){
            return{
                usually: 'm-1 bg-zinc-400 bg-opacity-30 hover:bg-opacity-50 focus:bg-opacity-90 text-zinc-100 px-1.5 mx-2 text-lg p-1 transition-all border border-zinc-600 rounded-lg shadow hover:shadow-md',
                Search: '',
            }
        },

        computed: {},
        methods: {
            Shut: function(){this.ShutModal(); window.location.reload();},
            HandleSubmit: function(){
                // ... 
                request.AddFund(document.getElementById('AFUID').value, document.getElementById('AFAMOUNT').value, sessionStorage.getItem('token'))
                .catch(err => {console.error(err)});
                this.Shut();
            },
            HandleSearch: function(){

            },
        }
    }
    
    </script>
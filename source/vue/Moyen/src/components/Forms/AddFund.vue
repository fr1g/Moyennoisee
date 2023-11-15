<template>
    <div>
        <form>
            <h3>Search Customer</h3>
            <div class="grid grid-cols-4">
                <input id="L-uid" type="number" v-model="Search" :class="this.usually + ' block col-span-3 w-full'" placeholder="UID Number"> 
                <span  v-on:click="HandleSearch()" class="block col-span-1 mx-2 translate-y-1">
                    <btn :cont="'QUERY'"/>
                </span> 
            </div>
            <div class="min-h-3">

            </div>          
            <h3>Cash Received</h3>
            <input id="L-sid" type="number" :class="this.usually + ' w-2/3'">

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
            Shut: function(){this.ShutModal()},
            HandleSubmit: function(){
                // ... 
                this.Shut();
            },
            HandleSearch: function(){

            },
        }
    }
    
    </script>
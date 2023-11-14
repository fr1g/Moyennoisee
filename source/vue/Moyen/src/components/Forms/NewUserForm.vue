<template>
    <div>
        <p>{{ preUser | SplitCaps }}</p>
        <form>
            <h3>Username</h3>
            <input id="s-name" type="text" :class="this.usually + ' w-2/3'" v-model="uname">
            <h3>Contact</h3>
            <input id="s-desc" type="text" :class="this.usually + ' w-2/3'" v-model="ucont">
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
    
    export default{
        name: 'NewUserForm',
        inject: ["ShutModal"],
        components: {btn},
        data: function(){
            return{
                usually: 'm-1 bg-zinc-400 bg-opacity-30 hover:bg-opacity-50 focus:bg-opacity-90 text-zinc-100 px-1.5 mx-2 text-lg p-1 transition-all border border-zinc-600 rounded-lg shadow hover:shadow-md',
                uname: '',
                ucont: '',

            }
        },
        computed: {
            preUser: function(){
                return `${this.uname == '' ? '...' : this.uname} can be contacted with: ${this.ucont == '' ? '...' : this.ucont}`;
            }
        },
        methods: {
            Shut: function(){this.ShutModal(); this.uname = ''; this.ucont = '';},
            HandleSubmit: function(){
                request.SubmitNewUser(this.uname, this.ucont, sessionStorage.getItem('token'))
                .then(result => {
                    console.log(result);
                }).catch(err => {console.error(err)});


                this.Shut();
            },
        },
        filters:{
            SplitCaps: function(value){
                let returnable = "";
                for(let ii of value.split(" ")){
                    returnable += ii.substring(0, 1).toUpperCase();
                    returnable += ii.substring(1, ii.length + 1);
                    returnable += " ";
                }
                return returnable;
            },
        }
    }
    
    </script>
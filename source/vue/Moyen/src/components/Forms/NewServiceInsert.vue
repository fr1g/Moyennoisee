<template>
<div>
    <br>
    <form>
        <h3>Name of New service</h3>
        <input id="s-name" v-model="sname" type="text" :class="this.usually + ' w-2/3'">

        <h3>Describe it</h3>
        <input id="s-desc" v-model="sdesc" type="text" :class="this.usually + ' w-2/3'">

        <h3>Cost</h3>
        <input id="s-price" v-model="scost" type="number" :class="this.usually + ' w-2/3'">

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
import request from '@/api/servCP'

export default{
    name: 'NewServiceInsert',
    components: {btn},
    inject: ["ShutModal"],
    data: function(){
        return{
            usually: 'm-1 bg-zinc-400 bg-opacity-30 hover:bg-opacity-50 focus:bg-opacity-90 text-zinc-100 px-1.5 mx-2 text-lg p-1 transition-all border border-zinc-600 rounded-lg shadow hover:shadow-md',
            sname: '',
            sdesc: '',
            scost: '',
        }
    },
    computed: {},
    methods: {
        Shut: function(){this.ShutModal()},
        HandleSubmit: function(){
            // ...
            request.SubmitNew(this.sname, this.sdesc, this.scost, '', sessionStorage.getItem('token')).then(response => {
                console.log(response)
                let res = JSON.parse(response);
                if(res.code != 200) PushToast('ERR unknown? ' + res.content, 'err')
            }).catch(err => { console.log(err); });
            this.Shut();
        },
    }
}

</script>
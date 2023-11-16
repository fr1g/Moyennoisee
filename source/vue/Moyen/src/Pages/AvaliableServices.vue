<template>
<div class="m-4 p-4 px-6">
    <h1 class="text-3xl mb-3 clear-both">Avaliable Services...  <span class="text-sm align-top" v-on:click="Insert()" ><btn cont="New" /></span> </h1>
    <div class="m-1 p-2 grid grid-cols-4 mx-6 mt-3">
        <Card v-for="card of CardList" :key="card.id"
            :name="card.name"
            :desc="card.describe"
            :price="card.cost"
            :plus="card.plus"
        />
        
    </div>
    <div class="inline-block mx-auto mt-3.5 pt-2" @click="LoadMore()">
        <btn cont="Load..." />
    </div>

</div>
</template>
<script> // @code
import Card from '@/components/CServiceCard'
import btn from '@/components/FormalButton'
import request from '@/api/servCP'


export default {
    name: 'AvaliableServices',
    data () {
        return {
            CardList: [],
            range: 0,

        }
    },
    mounted: function(){
        this.LoadMore();
    },
    inject: ['NewSrv'],
    components: {Card, btn, },
    methods: {
        PushCard: function(){},
        Insert: function(){
                  this.NewSrv();
              },
        LoadMore: function(){
            request.GetPaged(1 + this.range, sessionStorage.getItem('token'))
            .then(response => {
                var parsed = JSON.parse(response.replace(', ]"', ']').replace('"content": "[', '"content": ['));
                this.CardList = this.CardList.concat(parsed.content);
                this.range += 1;
                console.log(this.CardList)
            }).catch(err => { if(err.toString().includes('response.replace is not a function')) { PushToast('Reached the bottom! :: ' + this.loadedRange, 'warn');; return;} console.error(err + '?')});
        }
    },
}
</script>
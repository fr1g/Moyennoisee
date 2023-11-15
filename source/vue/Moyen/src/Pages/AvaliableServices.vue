<template>
<div class="m-4 p-4">
    <h1 class="text-3xl mb-3 clear-both">Avaliable Services...  <br><span class="text-lg -translate-y-1" v-on:click="Insert()" ><btn cont="New" /></span> </h1>
    <div class="m-1 p-2 grid grid-cols-3">
        <Card v-for="card of CardList" :key="card.id"

            :name="card.name"
        />
    </div>
    <div class="inline-block mx-auto w-1/3 mt-3.5 pt-2">
        <btn cont="Load..." />
    </div>

</div>
</template>
<script> // @code
import Card from '@/components/CServiceCard'
import btn from '@/components/FormalButton'


export default {
    name: 'AvaliableServices',
    data () {
        return {
        CardList: {},

        }
    },
    inject: ['NewSrv'],
    components: {Card, btn, },
    methods: {
        PushCard: function(){},
        Insert: function(){
                  this.NewSrv();
              },
    },
}
</script>
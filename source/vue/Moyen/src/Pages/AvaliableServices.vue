<template>
<div class="m-4 p-4">
    <h1 class="text-3xl mb-3 clear-both">Avaliable Services...  <br><span class="text-lg -translate-y-1" v-on:click="Insert()" ><btn cont="New" /></span> </h1>

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
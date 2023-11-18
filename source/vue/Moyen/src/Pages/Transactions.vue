<template>
<div class=" m-8 p-5 h-full">
<h1 class="font-semibold text-2xl mb-6">Transaction Logs: 
    <span 
    :class="((this.ask.toString() == 'NaN' | this.ask == '') | this.ask == undefined ? 'hidden' : '')">
        For: {{ this.ask }}</span></h1>
    <div class="border border-transparent rounded-lg p-5 bg-zinc-600 bg-opacity-60 hover:bg-opacity-70 active:bg-opacity-80 shadow hover:shadow-xl active:shadow-lg transition-all">
        <div class="pb-1">
            <p class="text-right text-lg mb-3"> 
                <span>
                    <label for="logs-filterUserLogs">
                        Search by User ID: 
                    </label>
                    <input id="logs-filterUserLogs" v-on:blur="DoSearch()" type="number" class="m-1 bg-zinc-400 bg-opacity-30 hover:bg-opacity-50 focus:bg-opacity-90 text-zinc-100 px-1.5 mx-2 text-lg p-1 transition-all border border-zinc-600 rounded-lg shadow hover:shadow-md">
                </span>
                <span @click="DoSearch()" v-on:keydown="HandleSearchButton(event)" class="bg-zinc-400 mr-2.5 bg-opacity-50 p-1.5 px-2 hover:bg-opacity-60 active:bg-opacity-70 transition-all shadow-lg hover:shadow-xl active:shadow rounded-lg">
                    &nbsp;do &raquo;
                </span>
                <span v-on:click="Insert()" class="bg-zinc-400 bg-opacity-50 ml-1 p-1.5 px-2 hover:bg-opacity-60 active:bg-opacity-70 transition-all shadow-lg hover:shadow-xl active:shadow rounded-lg">
                    + Manually Add
                </span>
            </p>
        </div>
        <table class="table  w-full ">
            <thead >
                <th  class="pb-6" >ID</th>
                <th  class="pb-6" >Customer</th>
                <th  class="pb-6" >For</th>
                <th  class="pb-6" >Add</th>
                <th  class="pb-6" >Time</th>
            </thead>
            <tbody class="mt-2" >
                <tr>
                    <td class=""></td>
                </tr>
                <tr :class="this.results.length == 0 ? '' : 'hidden' ">
                    <td>Nothing Avaliable to Display</td>
                </tr>
                <LogItem v-for="log in this.results" v-bind:key="log.id"
                        :lid="log.id"
                        :payer="(`${log.userName}(${log.userId})`)"
                        :serv="(`${log.serviceName}(${log.serviceId})`)"
                        :time="log.date"
                        :add="log.add"
                />
                <!-- 我真应该给这玩意加个EX-Field -->
            </tbody>
        </table>
        <div class="inline-block mx-auto w-1/3 mt-3.5 pt-2" @click="LoadMore()">
            <btn cont="Load More" />
        </div>
    </div>
</div>
</template>
<script> // @code
import btn from '@/components/FormalButton'
import LogItem from '@/components/CLogItem'
import router from '../router';
import request from '@/api/logCP'

export default {
    name: 'Transactions',
    components: {LogItem, btn},
    mounted: function(){
        this.ask = (this.$route.params.one == undefined ? NaN : this.$route.params.one);
        this.LoadMore();
    },
    inject: ['NewLogIns'],
    params: ['one', 'one?'],
    methods: {
        Insert: function(){
                this.NewLogIns();
            },
        LoadMore: function(){
            PushToast('Loading for more...', 'bg-stone-300');
            request.GetPaged( sessionStorage.getItem('token'), this.Loaded + 1, this.ask).then(
                response => {
                    console.log(response)

                    var parsed = JSON.parse(response.replace(', ]"', ']').replace('"content": "[', '"content": ['));
                    this.results = this.results.concat(parsed.content);
                    this.Loaded += 1;    
                }
            ).catch(err => { if(err.toString().includes('response.replace is not a function')) { PushToast('Reached the bottom! :: ' + this.loadedRange, 'warn');; return;} console.error(err + '?')});
        },
        ApplyContent: function(){},
        DoSearch: function(){
            let igoto = document.getElementById('logs-filterUserLogs').value;
            if(igoto == '0') igoto = ''; 
            router.push(`/log/${igoto}`);
            this.ask = this.$route.params.one;
            this.$forceUpdate();
            window.location.reload();
        },
        HandleSearchButton: function(event){
            if(event.key != 'Enter') return;
            this.DoSearch();
            //...
        }
        
    },
    data () {
        return {
            results: [ ],
            ask: '',
            Loaded: 0,
            
        }
    }
}
</script>
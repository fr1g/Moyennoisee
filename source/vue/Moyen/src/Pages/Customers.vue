<template>
  <div class=" m-8 p-5 h-full">
  <h1 class="font-semibold text-2xl mb-6">Customers: </h1>
      <div class="border border-transparent rounded-lg p-5 bg-zinc-600 bg-opacity-60 hover:bg-opacity-70 active:bg-opacity-80 shadow hover:shadow-xl active:shadow-lg transition-all">
          <div class="pb-1">
              <p class="text-right text-lg mb-3"> 
                <span>
                    <label for="USERSEARCH">
                        Search User: 
                    </label>
                    <input id="USERSEARCH"  v-on:keydown="(event) => {if(event.key == 'Enter') DoSearch()}" 
                                       v-on:blur="DoSearch()" type="text" class="m-1 bg-zinc-400 bg-opacity-30 hover:bg-opacity-50 focus:bg-opacity-90 text-zinc-100 px-1.5 mx-2 text-lg p-1 transition-all border border-zinc-600 rounded-lg shadow hover:shadow-md">
                    <span v-on:click="DoSearch()" class="bg-zinc-400 bg-opacity-50 ml-1 p-1.5 px-2 hover:bg-opacity-60 active:bg-opacity-70 transition-all shadow-lg hover:shadow-xl active:shadow rounded-lg">
                        @ Search
                    </span>
                </span>
                <span v-on:click="Insert()" class="bg-zinc-400 bg-opacity-50 ml-1 p-1.5 px-2 hover:bg-opacity-60 active:bg-opacity-70 transition-all shadow-lg hover:shadow-xl active:shadow rounded-lg">
                    + Manually Add
                </span>
              </p>
          </div>
          <table class="table table- w-full ">
              <thead >
                  <th  class="pb-6" >ID</th>
                  <th  class="pb-6" >Customer</th>
                  <th  class="pb-6" >Contact</th>
                  <th  class="pb-6" >Balance</th>
                  <th  class="pb-6" >E?</th>
              </thead>
              <tbody class="mt-2" >
                <tr>
                      <td class=""></td>
                </tr>
                <tr :class="this.results.length == 0 ? '' : 'hidden' ">
                    <td>Nothing Avaliable to Display</td>
                </tr>
                <CI v-for="usr in this.results" v-bind:key="usr.id"
                          :uid="usr.id"
                          :name="usr.name"
                          :contact="usr.contact"
                          :account="usr.balance"
                          :stat="usr.status"
                />
              </tbody>
          </table>
          <div class="inline-block mx-auto  mt-3.5 pt-2" @click="LoadMore()">
              <btn cont="Load..." />
          </div>
      </div>
  </div>
  </template>
  <script> // @code
  import btn from '@/components/FormalButton'
  import CI from '@/components/CustomerItem'
import request from '@/api/userControllerPoint'

  export default {
        name: 'Customers',
        components: {CI, btn},
        mounted: function(){
            this.LoadMore('p');

        },
        inject: ['NewUsr'],
        methods: {
            Insert: function(){
                this.NewUsr(); // let this one become a messenger that reports successfully inserted sth new.
            },
            LoadMore: function(situation = 'p'){
                
                if((document.getElementById('USERSEARCH').value != ''))
                    situation = 'e';
                if (situation == 'p')
                {
                    
                    request.GetPaged('p', 1 + this.loadedRange, sessionStorage.getItem('token'))
                    .then(response => {
                        var parsed = JSON.parse(response.replace(', ]"', ']').replace('"content": "[', '"content": ['));
                        this.results = this.results.concat(parsed.content);
                        ++this.loadedRange;
                    }).catch(err => { if(err.toString().includes('response.replace is not a function')) { PushToast('Reached the bottom! :: ' + this.loadedRange, 'warn');; return;} console.error(err + '?')});
                }
                else{
                    
                    request.SearchUser(document.getElementById('USERSEARCH').value,  1+this.SearchLoadRange, sessionStorage.getItem('token'))
                    .then(response => {
                        var parsed = JSON.parse(response.replace(', ]"', ']').replace('"content": "[', '"content": ['));
                        this.results = this.results.concat(parsed.content);
                        this.SearchLoadRange += 1;
                    }).catch(err => { if(err.toString().includes('response.replace is not a function')) { PushToast('Reached the bottom! :: ' + this.loadedRange, 'warn');; return;} console.error(err + '?')});
                }
            },
            ApplyContent: function(){},
            DoSearch: function(){
                this.SearchLoadRange = 0;
                this.results = [];
                this.LoadMore('ee');
            },
            
        },
        data () {
            return {
                results: [ ],
                cacheJson: '',
                loadedRange: 0,
                SearchLoadRange: 0,
            }
        } 
    }
</script>
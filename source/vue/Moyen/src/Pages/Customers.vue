<template>
  <div class=" m-8 p-5 h-full">
  <h1 class="font-semibold text-2xl mb-6">Customers: </h1>
      <div class="border border-transparent rounded-lg p-5 bg-zinc-600 bg-opacity-60 hover:bg-opacity-70 active:bg-opacity-80 shadow hover:shadow-xl active:shadow-lg transition-all">
          <div class="pb-1">
              <p class="text-right text-lg mb-3"> 
                  <span v-on:click="Insert()" class="bg-zinc-400 bg-opacity-50 ml-1 p-1.5 px-2 hover:bg-opacity-60 active:bg-opacity-70 transition-all shadow-lg hover:shadow-xl active:shadow rounded-lg">
                      + Manually Add
                  </span>
              </p>
          </div>
          <table class="table  w-full ">
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
                  <CI v-for="usr in this.results" v-bind:key="usr.id"
                          :uid="usr.id"
                          :name="usr.name"
                          :contact="usr.serv"
                          :account="usr.time"
                  />
              </tbody>
          </table>
          <div class="inline-block mx-auto w-1/3 mt-3.5 pt-2">
              <div class="grid grid-cols-3 gap-2 pb-1.5">
                  <div class="itm" v-on:click="prev()">
                      <btn :cont="'<<<'"/>
                  </div>
                  <div class="itm"></div>
                  <div class="itm" v-on:click="next()">
                      <btn :cont="'>>>'"/>
                  </div>
              </div>
          </div>
      </div>
  </div>
  </template>
  <script> // @code
  import btn from '@/components/FormalButton'
  import CI from '@/components/CustomerItem'
  export default {
      name: 'Customers',
      components: {CI, btn},
      mounted: function(){
          console.log(this.results[1]);
      },
      inject: ['NewUsr'],
      methods: {
          Insert: function(){
                  this.NewUsr();
              },
          prev: function(){},
          next: function(){},
          ApplyContent: function(){},
          
      },
      data () {
          return {
              results: [
                  {
                      id: 1,
                      name: 'ooch',
                      serv: 'xijianchui',
                      time: '2024-08-22'
                  }
              ]
          }
      }
  }
  </script>
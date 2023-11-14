<template>
<div class="fixed transition-all w-full h-full top-0 bottom-0 bg-zinc-700 bg-opacity-30 items-center px-auto" 
:class="this.visibility ? 'grid' : 'hidden'" >
    <div style="min-width: 33%; max-width: 77%;" class="inline-block z-50 shadow-lg hover:shadow-2xl active:shadow-xl top-11 mx-auto p-8 left-auto right-auto rounded-lg bg-zinc-500 transition-all">
        <h1 class="text-3xl font-bold italic text-left clear-both">
            {{ (title == undefined ? 'Hey...' : title)  }}
            <span class="float-right" v-on:click="shut()"> &times; </span>
        </h1>
        <slot>
            
        </slot>
    </div>
</div>
</template>
<script> // @code
export default {
    name: 'Modal',
    data () {
        return {
        msg: 'Welcome to Your Vue.js App'
        }
    },
    methods: {
        shut: function(){
            this.ShutModal();
        }
    },
    props: ['visibility', 'title', 'callback'],
    inject: ['ShutModal']
}
</script>
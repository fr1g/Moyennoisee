<template>
<div :class="this.iid == 0 ? 'hidden ' : ''" class="bg-zinc-500 m-3.5 p-3.5 bg-opacity-70 hover:bg-opacity-90 active:bg-opacity-100 shadow-lg hover:shadow-xl active:shadow transition-all rounded-lg border border-transparent">
    <h1 class="text-left mb-1 text-xl font-semibold" :class="(this.plus.toString().includes('disable') ? 'line-through italic opacity-70 text-left' : 'text')">{{ (this.name == undefined ? 'No Title' : this.name) }}</h1>
    <p class="text-left " >{{ (this.desc == undefined ? 'No Desc' : this.desc) }}</p>
    <br>
    <p class="clear-both">
        <span class="text-sm float-left translate-y-0.5">{{ (this.plus == undefined ? '#' : this.plus) }}</span>
        <span class="text-xl float-right font-mono price">{{ (this.price == undefined ? '--' : this.price) }}</span>
    </p>
    <p class="mt-10 text-right">
        <span @click="HandleUpdate()" class="px-1.5 py-1 transition-all rounded-xl active:shadow bg-amber-300 bg-opacity-60 hover:bg-opacity-80 active:bg-opacity-70 shadow-lg hover:shadow-xl">Update</span>
    </p>
    <span class="line-through hidden opacity-70"></span>
</div>
</template>
<script> // @code
export default {
    name: 'ServCard',
    props: ["name", "desc", "price", "plus", "iid"], // minimal not including modifications.
    data () {
        return {
        msg: 'Welcome to Your Vue.js App'
        }
    },
    inject: ['UTags'],
    methods: {
        HandleUpdate: function(){
            document.getElementById('STAGID').value = this.iid;
            document.getElementById('STAG').value = '';
            setInterval(() => {
                this.UTags();
            }, 10);

        }
    }
}
</script>
<style>
.price::before{
    content: '#$ ';
}
</style>
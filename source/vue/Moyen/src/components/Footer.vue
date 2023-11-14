<template>
<div class="min-w-screen p-5 bg-zinc-600 transition-all bottom-0 ">
    <div class="w-full shadow-lg shadow-zinc-400 bg-transparent"></div>
    <slot></slot>
    <p class="w-full text-lg text-center font-semibold italic animate-pulse">Moyennoisée Salon</p>
</div>
</template>
<script> // @code
export default {
    name: 'Footer',
    data () {
        return {
        
        }
    }
}
</script>
<template>
<div id="navigate" class="col-span-full w-full p-3  transition-all bg-opacity-90 hover:bg-opacity-100
             border border-zinc-800 bg-zinc-700 rounded-lg shadow hover:shadow-lg active:shadow-xl">
    <div class="e flex  w-full gap-3 min-w-full select-none">
        <h1 id="title" class="inline-block transition-all px-3.5 py-2 select-none text-zinc-200 opacity-90 font-extrabold">
            MoyenMan
        </h1>
        <slot></slot>

    </div>
</div>
</template>
<script> // @code
export default {
    name: 'Navigate',
    data () {
        return {
        
        }
    }
}
</script>

<style>
#navigate{
    display: flex;
}
*{
    user-select: none;
    cursor: default;
}
</style>
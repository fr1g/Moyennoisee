<template>
    <span class="bg-zinc-400 bg-opacity-50 mx-0.5 p-1.5 px-2 hover:bg-opacity-60 active:bg-opacity-70 transition-all shadow-lg hover:shadow-xl active:shadow rounded-lg">
        {{ this.cont }}
    </span>
</template>

<script>
export default{
    name: 'FormalButton',
    props: ['cont']
}
</script>
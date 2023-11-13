<template>
<div class="inline-block transition-all bg-zinc-600 text-zinc-100 border border-zinc-700 active:bg-opacity-100 bg-opacity-40 px-3.5 py-2 rounded-lg shadow-sm hover:shadow-md"
     :class="RightUpdate(this.position)" 
     @click="$router.push(target)"
     >
     {{ this.content }}
     </div>
</template>
<script> // @code

export default {
    name: 'NavigateItem',
    created: () => {
        console.log(this.a.props);
    },
    data () {
        return {

        }
    },
    props: ["type", "content", "position", "target", "classList"],
    methods: {
        RightUpdate: (val) => {
            return (val == "right" ? " ml-auto" : "");
        },
        Navigate: () => {
            // this.$router.push(this.target);     @click="Navigate()"
        }

    }
}
</script>
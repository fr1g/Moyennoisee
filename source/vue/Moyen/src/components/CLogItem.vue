<template>
<tr>
    <td class="" title="Log ID">
        <div :class="this.class">
            {{ lid }}
        </div>
    </td>
    <td class="" title="Payer Name">
        <div :class="this.class">
            {{ payer }}
        </div>
    </td>
    <td class="" title="Consumed Service">
        <div :class="this.class">
            {{ serv }}
        </div>
    </td>
    <td class="" title="Time Consumed">
        <div :class="this.class">
            {{ time }}
        </div>
    </td>
</tr>
</template>
<script> // @code
export default {
    name: 'CLogItem',
    data () {
        return {
        msg: 'Welcome to Your Vue.js App',
        class: 'border border-transparent  rounded-lg h-full text-xl p-1 ml-1 mb-1 bg-zinc-500 bg-opacity-60  hover:bg-opacity-70 active:bg-opacity-80 shadow hover:shadow-xl active:shadow-lg transition-all'
        }
    },
    props: ["lid", "payer", "serv", "time"]
}
</script>

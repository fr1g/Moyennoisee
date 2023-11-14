<template>
<div class=" m-8 p-5 h-full">
<h1 class="font-semibold text-2xl mb-6">Transaction Logs: </h1>
    <div class="border border-transparent rounded-lg p-5 bg-zinc-600 bg-opacity-60 hover:bg-opacity-70 active:bg-opacity-80 shadow hover:shadow-xl active:shadow-lg transition-all">
        <table class="table  w-full">
            <thead >
                <th  class="pb-6" >ID</th>
                <th  class="pb-6" >Customer</th>
                <th  class="pb-6" >For</th>
                <th  class="pb-6" >Time</th>
            </thead>
            <tbody class="mt-4" >
                <tr>
                    <td class="p-1"></td>
                </tr>
                <LogItem v-for="log in this.results" v-bind:key="log.id"
                        :lid="log.id"
                        :payer="log.name"
                        :serv="log.serv"
                        :time="log.time"
                />
            </tbody>
        </table>

    </div>
</div>
</template>

<style>
tr:nth-child(odd) > td > * {
    border: 1px rgba(244, 244, 244, 0.32) solid !important;
    opacity: .89;
}
</style>

<script> // @code
import LogItem from '@/components/CLogItem'
export default {
    name: 'Transactions',
    components: {LogItem},
    data () {
        return {
            results: [
                {
                    id: 1,
                    name: 'ooch',
                    serv: 'xijianchui',
                    time: '2024-08-22'
                },                {
                    id: 1,
                    name: 'ooch',
                    serv: 'xijianchui',
                    time: '2024-08-22'
                },                {
                    id: 1,
                    name: 'ooch',
                    serv: 'xijianchui',
                    time: '2024-08-22'
                },                {
                    id: 1,
                    name: 'ooch',
                    serv: 'xijianchui',
                    time: '2024-08-22'
                },                {
                    id: 1,
                    name: 'ooch',
                    serv: 'xijianchui',
                    time: '2024-08-22'
                },                {
                    id: 1,
                    name: 'ooch',
                    serv: 'xijianchui',
                    time: '2024-08-22'
                },
            ]
        }
    }
}
</script>
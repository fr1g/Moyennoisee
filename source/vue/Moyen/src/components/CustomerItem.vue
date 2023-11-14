<template>
    <tr>
        <td class="" title="UserID">
            <div :class="this.class">
                {{ uid }}
            </div>
        </td>
        <td class="" title="Customer Name">
            <div :class="this.class">
                {{ name }}
            </div>
        </td>
        <td class="" title="Contact">
            <div :class="this.class">
                {{ contact }}
            </div>
        </td>
        <td class="" title="Consumed Service">
            <div :class="this.class">
                {{ account }}
            </div>
        </td>        
        <td class="" title="DiS">
            <div :class="this.class">
                {{ this.elsewhat }} ?
            </div>
        </td>
    </tr>
    </template>
    <script> // @code
    export default {
        name: 'CusItem',
        data () {
            return {
            msg: 'Welcome to Your Vue.js App',
            class: 'border border-transparent  rounded-lg h-full text-xl p-1 ml-1 mb-1 bg-zinc-500 bg-opacity-60  hover:bg-opacity-70 active:bg-opacity-80 shadow hover:shadow-xl active:shadow-lg transition-all'
            }
        },
        props: ["uid", "name", "contact", "account", "elsewhat"]
    }
    </script>
    
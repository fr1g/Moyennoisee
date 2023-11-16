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
        <td class="text-left" title="Contact">
            <div :class="this.class + ' max-w-full overscroll-x-scroll overflow-y-hidden'">
                {{ contact }}
            </div>
        </td>
        <td class="" title="Consumed Service">
            <div :class="this.class">
                {{ account }}
            </div>
        </td>        
        <td class="max-w-fit" title="DiS">
            <div :class="this.class + 'min-h-full text-left'">ACTS: 
                <p class="align-middle text-sm font-semibold inline-block">
                    <a class="transition-all" @click="HandleSS()">SwDis</a>
                    <a class="transition-all" :class="(this.stat == '0' ? '' : 'disable')" @click="HandleAF()">AddFund</a>
                    <a class="transition-all" @click="HandleJumpLogs()">Logs</a>
                </p>
                <span class="text-sm" :class="(this.stat == '0' ? 'hidden' : '')">
                    #D
                </span>
            </div>
        </td>
    </tr>
    </template>
    <style>
    
    </style>
    <script> // @code
    import request from '@/api/userControllerPoint'
import router from '../router';

    export default {
        name: 'CusItem',
        data () {
            return {
            msg: 'Welcome to Your Vue.js App',
            class: 'border border-transparent  rounded-lg h-full text-xl p-1 ml-1 mb-1 bg-zinc-500 bg-opacity-60  hover:bg-opacity-70 active:bg-opacity-80 shadow hover:shadow-xl active:shadow-lg transition-all'
            }
        },
        inject: ["AF"],
        props: ["uid", "name", "contact", "account", "elsewhat", "stat"],
        methods: {
            HandleJumpLogs: function(){
                router.push(`/log/${this.uid}`);
            },
            HandleSS: function(){
                request.StatSwitch(this.uid, sessionStorage.getItem('token')).catch(err => {console.error(err)});
                this.$forceUpdate(); // ?
                PushToast('Submitted Disable Request, reloading...')
                window.location.reload();
            },
            HandleAF: function(){
                document.getElementById('AFUID').value = this.uid;
                // document.getElementById('AFQUERY').click();
                this.AF();
            },
        }
    }
    </script>
    
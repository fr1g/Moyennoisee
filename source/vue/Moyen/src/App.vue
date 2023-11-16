<template>
    <div id="app">
        <Navigate> 
            <NavItem content="Services" :target="'/services'" />
            <NavItem content="Customers" :target="'/customers'" />
            <NavItem content="Logs" :target="'/log'" />
            <NavItem content="Fund" position="right" @click.native="OpenAF()" />
            <NavItem :content="(this.AuthToken == null ? 'Auth' : 'Leave')" id="AuthBtn" :target="'/blank'" />
        </Navigate>
        <div class="min-h-screen max-w-screen bg-zinc-800 shadow-lg z-10">
            <router-view/>
        </div>
        
        <Footer>
            <p class="font-thin text-xs">AT - {{ (this.AuthToken == null ? '' : this.AuthToken).slice(1, 33) }}</p>
        </Footer>

        <Modal :visibility="this.ModalStatus" :title="this.ModalTitle" >
            <div :class="(this.ModalElementContentIden == 'text' ? 'inline' : 'hidden')">
                    {{ this.ModalText }}
            </div>            
            <div :class="(this.ModalElementContentIden == 'CreateUser' ? 'inline' : 'hidden')">
                <CreateUser />
            </div>            
            <div :class="(this.ModalElementContentIden == 'NewService' ? 'inline' : 'hidden')">
                <NewService />
            </div>            
            <div :class="(this.ModalElementContentIden == 'InsertLog' ? 'inline' : 'hidden')">
                <NewLog />
            </div>
            <div :class="(this.ModalElementContentIden == 'AF' ? 'inline' : 'hidden')">
                <AddFund />
            </div>
        </Modal>
    
    </div>
</template>

<script>
import Footer from '@/components/Footer'
import Navigate from '@/components/Navigate'
import NavItem from '@/components/NavigateItem'
import Modal from '@/components/Modal'

import NewService from '@/components/Forms/NewServiceInsert'
import CreateUser from '@/components/Forms/NewUserForm'
import NewLog from '@/components/Forms/NewLogInsert'
import AddFund from '@/components/Forms/AddFund'
import router from './router'

window.onclick = () => {if(!sessionStorage.getItem('token')) router.push('/login');}

export default {
    name: 'App',
    components: {Footer, Navigate, NavItem, Modal, NewService, NewLog, CreateUser, AddFund},
    mounted(){
        this.AuthToken = sessionStorage.getItem('token');
        document.getElementById('AuthBtn').addEventListener('click', () => { 
            if(sessionStorage.getItem('token')) {
                sessionStorage.removeItem('token'); 
                router.push('/blank');
                this.NewTextModal('In Progress of Vanish...', 'OFF')
                PushToast('Destroying connect, Waiting reload...', 'warn');
                window.location.reload(); 
            }
        })
        if(!sessionStorage.getItem('token')) router.push('/login');
    },
    data() {
        return{
            // ModalStatus: true,
            ModalStatus: false,
            ModalElementContentIden: 'text',
            ModalText: '',
            ModalTitle: 'Hey...',
            AuthToken: '',
        }
    },
    provide() {
        return{
            ShutModal: this.ShutModal,
            NewLogIns: this.OpenNewLogIns,
            NewUsr: this.OpenNewUser,
            NewSrv: this.OpenNewSrv,
            AF: this.OpenAF
        }
    },
    methods: {
        ShutModal: function(){
            this.ModalStatus = false;
        },
        ModalPush: function(iden, text = ''){
            this.ModalElementContentIden = iden;
            this.ModalText = text;
        },
        ShowModal: function(){
            this.ModalStatus = true;
        },
        NewTextModal: function(text, title = 'text'){
            this.ShutModal();
            this.ModalPush('text', text);
            this.ModalTitle = title
            this.ShowModal();
        },
        NewBusinessModal: function(target){
            this.ShutModal();
            this.ModalPush(target);
            this.ShowModal();
        },
        OpenNewLogIns: function(){this.NewBusinessModal('InsertLog'); this.ModalTitle = 'Manually Insert Log'},
        OpenNewUser: function(){this.NewBusinessModal('CreateUser'); this.ModalTitle = 'Add Customer'},
        OpenNewSrv: function(){this.NewBusinessModal('NewService'); this.ModalTitle = 'View Services'},
        OpenAF: function(){this.NewBusinessModal('AF'); this.ModalTitle = 'Add fund for...'},
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.default-height{
    min-height: 66vh;
}

tr:nth-child(odd) > td > * {
    border: 1px rgba(244, 244, 244, 0.32) solid !important;
    opacity: .89;
}

a{
    text-decoration: underline;
    color: rgb(95, 149, 233);
    opacity: 0.76;
}
a:hover{
    opacity: 0.9;
}
a:active{
    opacity: 1;
}
a:visited{
    opacity: 0.8;
    /* text-decoration: line-through; */
}

.disable{
    pointer-events: none;
    mix-blend-mode: difference;
}



</style>

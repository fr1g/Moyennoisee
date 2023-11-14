<template>
    <div id="app">
        <Navigate>
            <NavItem content="Services" :target="'/services'" />
            <NavItem content="Customers" :target="'/customers'" />
            <NavItem content="Logs" :target="'/log'" />
            <NavItem content="Auth/Leave" position="right" :target="'/login'" />
        </Navigate>
        <div class="h-screen max-w-screen bg-zinc-800 shadow-lg z-10">
            <router-view/>
        </div>
        <Footer></Footer>

        <Modal :visibility="this.ModalStatus" :title="this.ModalTitle" >
            <div :class="(this.ModalElementContentIden == 'text' ? 'inline' : 'hidden')">
                    {{ this.ModalText }}
            </div>            
            <div :class="(this.ModalElementContentIden == 'CreateUser' ? 'inline' : 'hidden')">
                
            </div>            
            <div :class="(this.ModalElementContentIden == 'NewService' ? 'inline' : 'hidden')">
                <NewService />
            </div>            
            <div :class="(this.ModalElementContentIden == 'InsertLog' ? 'inline' : 'hidden')">
                <NewLog />
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
import NewLog from '@/components/Forms/NewLogInsert'

export default {
    name: 'App',
    components: {Footer, Navigate, NavItem, Modal, NewService, NewLog},
    data() {
        return{
            // ModalStatus: true,
            ModalStatus: false,
            ModalElementContentIden: 'text',
            ModalText: '',
            ModalTitle: 'Hey...'
        }
    },
    provide() {
        return{
            ShutModal: this.ShutModal,
            NewLogIns: this.OpenNewLogIns
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
        NewTextModal: function(text){
            this.ShutModal();
            this.ModalPush('text', text);
            this.ShowModal();
        },
        NewBusinessModal: function(target){
            this.ShutModal();
            this.ModalPush(target);
            this.ShowModal();
        },
        OpenNewLogIns: function(){this.NewBusinessModal('InsertLog'); this.ModalTitle = 'Manually Insert Log'}
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

</style>

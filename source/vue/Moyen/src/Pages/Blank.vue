<template>
<div class="p-10">
    <h1>Reloading...</h1>
</div>
</template>
<script>
import router from '../router';

 // @code
export default {
    name: 'Blank',
    mounted(){
        setTimeout(() => {
            if(sessionStorage.getItem('token')) router.push('/');
            else router.push('/login');
        }, 1000);
    },
    data () {
        return {
        msg: 'Welcome to Your Vue.js App'
        }
    }
}
</script>
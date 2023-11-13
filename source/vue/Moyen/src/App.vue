<template>
    <div id="app">
        <Navigate>
            <NavItem content="Services" :target="'/services'" />
            <NavItem content="Customers" :target="'/customers'" />
            <NavItem content="Logs" :target="'/log'" />
            <NavItem content="Auth/Leave" position="right" :target="'/login'" />
        </Navigate>
        <div class="h-screen bg-zinc-800 shadow-lg z-10">
            <router-view/>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from '@/components/Footer'
import Navigate from '@/components/Navigate'
import NavItem from '@/components/NavigateItem'

export default {
    name: 'App',
    components: {Footer, Navigate, NavItem},
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
</style>

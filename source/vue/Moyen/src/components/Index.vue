<template>
<div class="p-6 bg-transparent">
    <h1 class="text-3xl text-center text-shadow font-sans font-thin my-5">
        <span class="font-bold" >Moyennoisée</span> Salle <br>
        <span class="italic text-2xl font-normal opacity-80"> Système de Gestion </span>
    </h1>
    <div class="inline-block mx-auto w-3/5">
        <ul class="">
            <li class="transition-all">Appuyez "Services" pour afficher toutes les cartes de service disponibles et ajouter de nouveaux services. </li>
            <li class="transition-all">Нажмите "Customers", чтобы просмотреть и добавить клиентов.</li>
            <li class="transition-all">Press "Logs" to view or insert T Logs.</li>
        </ul>
    </div>
    <p class="opacity-70 hover:opacity-100 active:opacity-80 transition-all text-xl font-sans my-6 border-l border-r p-3 rounded-lg mx-9 shadow hover:shadow-xl">
        Nota: Ad Codicem Admin Reset vel aliquas Operationes Ex-faciendas, quaeso accessum Ad machinam Exercitus huius rami.</p>
</div>
</template>
<style scoped>
li{
    text-align: left;
    list-style-type: disc;
    font-size: 6mm;
    font-style: italic;
    font-weight: 333;
    margin: 1.8rem;
    opacity: 0.78;
}
li:hover{
    opacity: 0.96;
}
</style>
<script> // @code

export default {
    name: 'Index',
    data () {
        return {
        msg: 'Das was Indeks'
        }
    },
    

}
</script>
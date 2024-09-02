<template>
<NavBar></NavBar>

<component :is="content"></component>


<div class="container mt-5">

    <div class="row">

        <div class="col-2 m-3"> 
            <button class="btn btn-primary" @click="select_menu('title')">Añadir Título</button>
        </div>
        <div class="col-2 m-3"> 
            <button class="btn btn-primary" @click="select_menu('topic')">Añadir Tema</button>
        </div>
        <div class="col-2 m-3"> 
            <button class="btn btn-primary" @click="select_menu('activity')">Añadir Actividad</button>
        </div>

    </div>
</div>


</template>

<script setup>
import NavBar from './components/general/NavBar.vue'
import MakeTitle from './components/moodker/MakeTitle.vue'
import MakeTopic from './components/moodker/MakeTopic.vue'
import MakeActivity from './components/moodker/MakeActivity.vue'
import {ref} from "vue"

const content =ref(null)

const select_menu=(menu)=>{
    if(menu==="title"){
        content.value=MakeTitle
    }else if(menu==="topic"){
        content.value=MakeTopic
    }else if(menu==="activity"){
        content.value=MakeActivity
    }else{
        content.value=""
    }

}

</script>

<style>

</style>

<template>
    <div class="container mt-5">
      <h4>Configurar Nuevo Tema</h4>
      <form @submit.prevent="submitData">
        <!-- Title Section -->
        <div class="row m-3">

                <div class="col-1">
                    <label for="parent" class="form-label">Título Padre</label>
                </div>
                <div class="col-4">
                    <input
                    type="text"
                    class="form-control"
                    id="parent"
                    placeholder="Ingrese el nombre del título contenedor"
                    v-model="topic.parent"
                    />
                </div>
                <div class="col-1">
                    <label for="tema" class="form-label">Tema</label>
                </div>
                <div class="col-4">
                    <input
                    type="text"
                    class="form-control"
                    id="tema"
                    v-model="topic.label"
                    placeholder="Ingrese una etiqueta para el tema"
                    />
                </div>
        </div>

        <div class="row">
          <div class="col-6">
              <h5>Recursos Principales</h5>
              <div class="row m-3">
                <div class="col-3">
                <label for="main_name">Etiqueta</label>
              </div>
              <div class="col-8">
                <input 
                type="text"
                class="form-control"
                id="main_name"
                placeholder="Ingrese la etiqueta de recursos principales"
                v-model="topic.main.name"
                />
              </div>
              </div>
              <div class="row m-3">
                <div class="col-3">
                <label for="main_url">Enlace</label>
              </div>
              <div class="col-8">
                <input 
                type="text"
                class="form-control"
                id="main_url"
                placeholder="Ingrese el enlace de recursos principales"
                v-model="topic.main.url"
                />
              </div>
              </div>
              
          </div>
          <div class="col-6">
              <h5>Recursos Opcionales</h5>
                <div class="row m-3">
                  <div class="col-3">
                  <label for="more_name">Etiqueta</label>
                </div>
                <div class="col-8">
                  <input 
                  type="text"
                  class="form-control"
                  id="more_name"
                  placeholder="Ingrese la etiqueta de recursos principales"
                  v-model="topic.more.name"
                  />
                </div>
                </div>
                <div class="row m-3">
                  <div class="col-3">
                  <label for="more_url">Enlace</label>
                </div>
                <div class="col-8">
                  <input 
                  type="text"
                  class="form-control"
                  id="more_url"
                  placeholder="Ingrese el enlace de recursos opcionales"
                  v-model="topic.more.url"
                  />
                </div>
                </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <h5>Videoconferencia</h5>
          </div>
          <div class="col-6">
            <div class="row m-3">
              <div class="col-3">
                <label for="video_name">Etiqueta</label>
              </div>
              <div class="col-8">
                <input 
                type="text"
                class="form-control"
                id="video_name"
                v-model="topic.video.name"
                placeholder="Ingrese la etiqueta del elemento"
                />
              </div>
            </div>
            <div class="row m-3">
              <div class="col-3">
                <label for="video_title">Título</label>
              </div>
              <div class="col-8">
                <input 
                type="text"
                class="form-control"
                id="video title"
                v-model="topic.video.title"
                placeholder="Ingrese el Título de la Descripción"
                />
              </div>
            </div>
            <div class="row m-3">
              <div class="col-3">
                <label for="video_url">Enlace</label>
              </div>
              <div class="col-8">
                <input 
                type="text"
                class="form-control"
                id="video_url"
                v-model="topic.video.url"
                placeholder="Ingrese el enlace de la videoconferencia"
                />
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="row m-3">
              <div class="col-3">
                <label for="video_desc">Descripción</label>
              </div>
              <div class="col-8">
                <textarea id="video_desc" class="form-control" v-model="topic.video.desc" rows="5" placeholder="Ingrese la descripción de la clase o unidad">

                </textarea>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <div class="row m-3">
              <div class="col-1">
                <label for="video_saves">Grabaciones</label>
              </div>
              <div class="col-4">
                <input 
                type="text"
                class="form-control"
                id="video_saves"
                placeholder="Ingrese el enlace de la grabación"
                />

              </div>
              <div class="col-4">
                <div class="container mt-5">
    <div class="mb-3">
        <label for="fecha" class="form-label">Selecciona una fecha:</label>
        <VueDatePicker v-model="date"></VueDatePicker>
    </div>
</div>

              </div>
            </div>
          </div>


        </div>
    

<div class="m-5">
  <pre>
    Titulo:{{topic.parent}}
    Tema: {{ topic.label }}
    Main
      Nombre: {{ topic.main.name }}
      Url: {{ topic.main.url }}
    More
      Nombre: {{ topic.more.name }}
      Url: {{ topic.more.url }}


  </pre>

</div>

        <!-- Submit Button -->
        <button type="button" class="btn btn-success" @click="createTopic()">Crear Tema</button>
      </form>

    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import VueDatePicker from '@vuepic/vue-datepicker';
  import '@vuepic/vue-datepicker/dist/main.css'
  const date = ref();
  //import axios from 'axios';
  
  // Define el estado reactivo usando ref
  //const main_name=ref("")
  
  const topic = ref({
    parent:"",
    label:"",
    main:
    {
      name:"Recursos Principales",
      url:""
    },
    more:
    {
      name:"Recursos Opcionales",
      url:""
    },
    video:
    {
      name:"Videoconferencia",
      title:"",
      url:"", 
      desc:`A continuación se pone a disposición de los estudiantes el enlace correspondiente para acceder a la sala de video destinada a las clases virtuales. Se requiere que el estudiante acceda a dicha plataforma durante las sesiones virtuales programadas o cuando se utilice como recurso complementario para los laboratorios llevados a cabo durante el curso.
En esta sección también se colocarán los enlaces a las respectivas grabaciones de las clases, cuando las mismas se realicen de forma híbrida o virtual. `,
      saves:[]
    },
    /*repo:{
      name:"",
      title:"",
      url:"", 
      desc:""}*/
  });
  
const createTopic=()=>{

}


  </script>
  
  <style scoped>
    .text-justify {
    text-align: left;
    }
  </style>
  
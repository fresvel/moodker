<template>
    <div class="container mt-5">
      <h4>Configurar Nuevo Tema</h4>
      <form @submit.prevent="submitData">
        <!-- Title Section -->
        <div class="row m-3">
                <div class="col-2">
                  <label for="number">N°</label>
                  <input 
                  type="number"
                  class="form-control"
                  id="number"
                  v-model="topic.number"
                  />
                </div>

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
                id="video_title"
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
                v-model="url_saves"
                placeholder="Ingrese el enlace de la grabación"
                />
              </div>
              <div class="col-4">
                    <label for="fecha" class="form-label">Selecciona una fecha:</label>
                    <datepicker  id="fecha" v-model="sdate"></datepicker>
              </div>
              <div class="col-3">
                <button class="btn btn-secondary" @click="addDate()">Añadir</button>
              </div>
            </div>
          </div>


        </div>

        <div class="row m-3">
          <div class="col-12">
            <div class="row">
              <ul class="mt-3 list-group">
                  <li v-for="(item, index) in arr_saves" :key="index" class="list-group-item d-flex justify-content-between align-items-center" >
                    <div class="text-justify"><h5>{{ item.date}}</h5> {{ item.url }}</div>
                    <button type="button" class="btn btn-danger btn-sm" @click="removeSave(index)">
                    Eliminar
                    </button>
                  </li>
                </ul>

            </div>

          </div>

        </div>

        <div class="row">
          <div class="col-12">
            <h5>Repositorio</h5>
          </div>
          <div class="col-6">
            <div class="row m-3">
              <div class="col-3">
                <label for="repo_name">Etiqueta</label>
              </div>
              <div class="col-8">
                <input 
                type="text"
                class="form-control"
                id="repo_name"
                v-model="topic.repo.name"
                placeholder="Ingrese la etiqueta del elemento"
                />
              </div>
            </div>
            <div class="row m-3">
              <div class="col-3">
                <label for="repo_title">Título</label>
              </div>
              <div class="col-8">
                <input 
                type="text"
                class="form-control"
                id="repo_title"
                v-model="topic.repo.title"
                placeholder="Ingrese el Título de la Descripción"
                />
              </div>
            </div>
            <div class="row m-3">
              <div class="col-3">
                <label for="repo_url">Enlace</label>
              </div>
              <div class="col-8">
                <input 
                type="text"
                class="form-control"
                id="repo_url"
                v-model="topic.repo.url"
                placeholder="Ingrese el enlace de la videoconferencia"
                />
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="row m-3">
              <div class="col-3">
                <label for="repo_desc">Descripción</label>
              </div>
              <div class="col-8">
                <textarea id="repo_desc" class="form-control" v-model="topic.repo.desc" rows="5" placeholder="Ingrese la descripción de la clase o unidad">

                </textarea>
              </div>
            </div>
          </div>
        </div>
    

<div class="m-5">
  <pre>
    Número: {{ topic.number}}
    Titulo:{{topic.parent}}
    Tema: {{ topic.label }}
    Main
      Nombre: {{ topic.main.name }}
      Url: {{ topic.main.url }}
    More
      Nombre: {{ topic.more.name }}
      Url: {{ topic.more.url }}
    Video
      name:{{ topic.video.name }}
      title:{{ topic.video.title }}
      url: {{ topic.video.url }}
      desc: {{ topic.video.desc }}
      saves: {{ topic.video.saves }}
    Repositorio
      name:{{ topic.repo.name }}
      title:{{ topic.repo.title }}
      url: {{ topic.repo.url }}
      desc:{{ topic.repo.desc }}


  </pre>

</div>

        <!-- Submit Button -->
        <button type="button" class="btn btn-success" @click="createTopic()">Crear Tema</button>
      </form>

    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Datepicker from 'vuejs3-datepicker';
  const response=ref("")
  const copySuccess = ref('');
  const copyError = ref('');
  import axios from 'axios';

  const url_saves=ref('')  
  const arr_saves=ref([])
  const topic = ref({
    number:0,
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
      saves:arr_saves
    },
    repo:{
      name:"Repositorio",
      title:"",
      url:"", 
      desc:`A continuación se pone a disposición de los estudiantes un enlace que les permitirá acceder de manera fácil y rápida al material bibliográfico empleado como fuente de consulta y apoyo durante el desarrollo del curso. Este recurso es fundamental para enriquecer su comprensión de los temas abordados y facilitar la profundización en los contenidos tratados en clase.`}
  });
  const sdate=ref(new Date())
  
  

  const addDate=()=>{
    const day = String(sdate.value.getDate()).padStart(2, '0');
    const month = String(sdate.value.getMonth() + 1).padStart(2, '0'); // Los meses en JavaScript son de 0 a 11
    const year = sdate.value.getFullYear();
    arr_saves.value.push({url:url_saves.value, date:`${day}-${month}-${year}`})
    console.log(arr_saves.value)
    
  }


  const removeSave=(index)=>{
    arr_saves.value.splice(index, 1);
  }

  const createTopic= async ()=>{
    try {
    // URL del endpoint al que se envían los datos
    
    
    const url = 'http://localhost:3050/moodker/v1/topic';

    // Enviar solicitud POST
    const res = await axios.post(url, topic.value);
    
    // Manejar la respuesta
    response.value = `Respuesta del servidor: ${res.data}`;
    console.log(res.data);
    copyToClipboard(res.data.topic)
    
  } catch (error) {
    // Manejar errores
    response.value = `Error: ${error.message}`;
  }
  
  
  
  }



  const copyToClipboard=(valueToCopy)=> {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(valueToCopy)
      .then(() => {
        copySuccess.value = 'Texto copiado al portapapeles!';
        copyError.value = '';
        alert("Valor listo")
      })
      .catch((err) => {
        copyError.value = 'Error al copiar: ' + err;
        copySuccess.value = '';
      });
  } else {
    // Fallback for older browsers
    const textarea = document.createElement('textarea');
    textarea.value = valueToCopy.value;
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      copySuccess.value = 'Texto copiado al portapapeles!';
      copyError.value = '';
    } catch (err) {
      copyError.value = 'Error al copiar: ' + err;
      copySuccess.value = '';
    }
    document.body.removeChild(textarea);
  }
}

  </script>
  
  <style scoped>
    
  </style>
  
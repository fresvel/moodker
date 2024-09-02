<template>

<div class="container mt-5">
  <div class="row m-3">
  <div class="col-12"> Configurar Nueva Actividad</div>

  <div class="col-6">
    <label for="activity_type"> Tipo</label>
    <input 
    type="text"
    class="form-control"
    id="activity_type"
    v-model="activity.type"
    placeholder="Ingrese el tipo de actividad"
    />
  </div>
  <div class="col-6">
    <label for="activity_title"> Título</label>
    <input 
    type="text"
    class="form-control"
    id="activity_title"
    v-model="activity.title"
    placeholder="Ingrese el titulo de la actividad"
    />
  </div>

  <div class="col-6">
    <label for="activity_desc"> Descripción</label>
    <textarea 
    id="activity_desc"
    class="form-control"
    v-model="activity.desc"
    placeholder="Ingrese aquí la descrición de la actividad"
    rows="5"
    >
    </textarea>
  </div>
  <div class="col-6">
    <label for="activity_url"> Enlace</label>
    <input 
    type="text"
    class="form-control"
    id="activity_url"
    v-model="activity.url"
    placeholder="Ingrese el enlace de recursos">
    
    <div class="row">
      <div class="col">
        <label for="fecha" >Fecha de Entrega: </label>
        <datepicker  id="fecha" v-model="sdate" class="m-3"></datepicker>
      </div>
      <div class="col">
        <label for="hora">Hora</label>
        <v-text-field
            v-model="time"
            :active="modal2"
            :focused="modal2"
            label="Seleccione una hora"
            prepend-icon="mdi-clock-time-four-outline"
            readonly
          >
            <v-dialog
              v-model="modal2"
              activator="parent"
              width="auto"
            >
              <v-time-picker
                v-if="modal2"
                format="24hr"
                v-model="time"
              ></v-time-picker>
            </v-dialog>
          </v-text-field>
      </div>

    </div>

  
  </div>

</div>

<button type="button" class="btn btn-success" @click="createActivity()">Crear Actividad</button>


<div class="m-5">
  <pre>
    activity
      Tipo: {{ activity.type }}
      titulo: {{ activity.title }}
      descrición: {{ activity.desc }}
      Enlace: {{ activity.url }}
      fecha: {{ formatDate(sdate) }}-{{ time }}
  </pre>

</div>


</div>

</template>
  
  <script setup>
import { ref } from 'vue';
import axios  from 'axios';
import Datepicker from 'vuejs3-datepicker'
//import TimePicker from '../general/TimePicker.vue';
import { VTimePicker } from 'vuetify/labs/VTimePicker'

const modal2 = ref(false)
const sdate=ref(new Date())
const time = ref(null);

  const copySuccess=ref('')
  const copyError=ref('')
  const response=ref('')

  const activity=ref({
    "type":"",
    "title":"",
    "desc":"",
    "url":"",
    "fecha":""
})


const createActivity= async()=>{
  
  try {
        
    const url = 'http://localhost:3050/moodker/v1/activity';
    const res = await axios.post(url, activity.value);
    
    activity.value.fecha=`${ formatDate(sdate.value) } - ${ time.value }`
    console.log(activity.value.fecha)
    response.value = `Respuesta del servidor: ${res.data}`;
    console.log(res.data);
    copyToClipboard(res.data.activity)
    
  } catch (error) {
    // Manejar errores
    response.value = `Error: ${error.message}`;
  }
}

function copyToClipboard(valueToCopy) {
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




const formatDate=(date)=> {
  const options = { day: '2-digit', month: 'short', year: 'numeric' };
  const formattedDate = new Intl.DateTimeFormat('es-EC', options).format(new Date(date));
  
  // Convertir la fecha formateada a una cadena con formato deseado
  return formattedDate.toUpperCase();
}
  </script>
  
  <style scoped>
    .text-justify {
    text-align: left;
    }
  </style>
  
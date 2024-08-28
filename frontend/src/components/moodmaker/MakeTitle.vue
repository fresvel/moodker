<template>
    <div class="container mt-5">
      <h4>Configurar un nuevo tema</h4>
      <form @submit.prevent="submitData">
        <!-- Title Section -->
        <div class="row mb-3">

                <div class="col-1">
                    <label for="number" class="form-label">Número</label>
                </div>
                <div class="col-1">
                    <input
                    type="number"
                    class="form-control"
                    id="number"
                    v-model.number="title.number"
                    />
                </div>
                <div class="col-1">
                    <label for="lema" class="form-label">Rótulo</label>
                </div>
                <div class="col-4">
                    <input
                    type="text"
                    class="form-control"
                    id="lema"
                    v-model="title.lema"
                    placeholder="Ingrese un rótulo"
                    />
                </div>

                <div class="col-1">
                    <label for="name" class="form-label">Título</label>
                </div>
                <div class="col-4"> 
                    <input
                    type="text"
                    class="form-control"
                    id="name"
                    v-model="title.name"
                    placeholder="Ingrese el nombre"
                    />

                </div>
                

        </div>
    
        <div class="row mb-3">
            <div class="col-6">
                Resultados de Aprendizaje de la asignatura
            </div>
            <div class="col-6">
                Resultados de Aprendizaje de la carrera
            </div>

        </div>
        <div class=" row mb-3">
          <div class="col-5">
            <textarea
                class="form-control"
                id="course"
                v-model="newrdac"
                placeholder="Ingrese los resultados de la asignatura"
                rows="4">
            </textarea>
          </div>
          <div class="col-1"> 
            <button type="button" class="btn btn-secondary" @click="addItem('c')">
                Añadir
            </button>
          </div>


          <div class="col-5">
            <textarea 
                class="form-control text-justify"
                id="program"
                v-model="newrdap"
                placeholder="Ingrese el programa"
                rows="4">

            </textarea>
            
            

          </div>
          <div class="col-1">
            <button type="button" class="btn btn-secondary" @click="addItem('p')">
                Añadir
            </button>

            <select class="form-select mt-3" aria-label="Default select example" v-model="newrdap">
                <option selected>Buscar</option>
                <option value="E055-001.- Discriminar conocimientos fundamentales sobre la estructuración y funcionamiento de las redes de información, para presentar una visión general sobre la convergencia de los servicios de telecomunicaciones.">E055-001</option>
                <option value="E055-002.- Integrar normas, procedimientos, métodos y técnicas destinados a conseguir un sistema de información seguro y confiable para mantener la Integridad, Disponibilidad, Privacidad, Control y Autenticidad de la información.">E055-002</option>
                <option value="E055-003.- Manejar eficientemente el lenguaje y la comunicación oral y escrita apoyados en herramientas tecnológicas para la producción académica e investigativa. ">E055-003</option>
                <option value="E055-004.- Analizar la lógica de los problemas en el marco del proceso general de investigación científica y tecnológica.">E055-004</option>
                <option value="E055-005.- Aplicar en su formación académica lineamientos y actitudes éticas, con un verdadero compromiso humano y cristiano de transformación social, como aporte a su desarrollo integral y profesional.">E055-005</option>
                <option value="E055-006.- Aplicar los fundamentos de las ciencias básicas mediante herramientas tecnológicas para la solución de problemas de Ingeniería.">E055-006</option>
                <option value="E055-007.- Desarrollar soluciones tecnológicas que contribuyan a la gestión estratégica empresarial, permitiendo que la información sirva para la toma de decisiones y para el posicionamiento de la empresa a nivel global.">E055-007</option>
                <option value="E055-008.- Relacionar el marco jurídico informático al contexto de la profesión.">E055-008</option>
            </select>
          </div>

        </div>
  
        
        <div class="mb-3 row">
            <div class="col-6">
                <ul class="mt-3 list-group">
                <li v-for="(item, index) in rdasc" :key="index" class="list-group-item d-flex justify-content-between align-items-center">
                    <div class="text-justify">{{ item }}</div>
                    <button type="button" class="btn btn-danger btn-sm" @click="removeRdasc(index)">
                    Eliminar
                    </button>
                </li>
                </ul> 
            </div>
            <div class="col-6">
                <ul class="mt-3 list-group">
                <li v-for="(item, index) in rdasp" :key="index" class="list-group-item d-flex justify-content-between align-items-center .text-justify">
                    {{ item }}
                    <button type="button" class="btn btn-danger btn-sm" @click="removeRdasp(index)">
                    Eliminar
                    </button>
                </li>
                </ul>
            </div>

        </div>

        <!-- Submit Button -->
        <button type="button" class="btn btn-success" @click="createTitle()">Crear Título</button>
      </form>
  
      <div class="mt-5">
        <h4>Datos Ingresados:</h4>
        <pre>
          Número: {{ title.lema }} {{ arabicToRoman(title.number) }}
          Nombre: {{ title.name }}
          RDA:
          Curso: {{ title.rda.course }}
          Programa: {{ title.rda.program }}
        </pre>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  
  // Define el estado reactivo usando ref
  const newrdac=ref("")
  const newrdap=ref("Buscar")
  const rdasc=ref([])
  const rdasp=ref([])
  const response=ref("")
  const copySuccess = ref('');
  const copyError = ref('');
  const title = ref({
    lema: "Unidad",
    number:1,
    name: "",
    rda: {
      course: rdasc,
      program: rdasp
    }
  });
  
    // Función para añadir el nuevo elemento al array
    function addItem(type) {

        if(type==='c'){
            if (newrdac.value.trim() !== '') {
            rdasc.value.push(newrdac.value.trim());
            newrdac.value = ''; // Limpiar el input después de añadir
            }
        }else if (type==='p'){
            if (newrdap.value.trim() !== '') {
            rdasp.value.push(newrdap.value.trim());
            newrdap.value = ''; // Limpiar el input después de añadir
            }
        }

    
    }


    function removeRdasc(index) {
        rdasc.value.splice(index, 1);
    }
    function removeRdasp(index) {
        rdasp.value.splice(index, 1);
    }

  // Función para convertir números arábigos a romanos
  function arabicToRoman(num) {
    if (isNaN(num)) return NaN;
    if (num <= 0 || num > 3999) return '';
  
    const romanNumerals = [
      { value: 1000, symbol: 'M' },
      { value: 900, symbol: 'CM' },
      { value: 500, symbol: 'D' },
      { value: 400, symbol: 'CD' },
      { value: 100, symbol: 'C' },
      { value: 90, symbol: 'XC' },
      { value: 50, symbol: 'L' },
      { value: 40, symbol: 'XL' },
      { value: 10, symbol: 'X' },
      { value: 9, symbol: 'IX' },
      { value: 5, symbol: 'V' },
      { value: 4, symbol: 'IV' },
      { value: 1, symbol: 'I' },
    ];
  
    let roman = '';
    for (const { value, symbol } of romanNumerals) {
      while (num >= value) {
        roman += symbol;
        num -= value;
      }
    }
  
    return roman;
  }
  
const createTitle = async () => {
  try {
    // URL del endpoint al que se envían los datos
    
    title.value.lema= title.value.lema+" "+arabicToRoman(title.value.number)
    const url = 'http://localhost:3050/moodker/v1/title';

    // Enviar solicitud POST
    const res = await axios.post(url, title.value);
    
    // Manejar la respuesta
    response.value = `Respuesta del servidor: ${res.data}`;
    console.log(res.data);
    copyToClipboard(res.data.title)
    
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


  </script>
  
  <style scoped>
    .text-justify {
    text-align: left;
    }
  </style>
  
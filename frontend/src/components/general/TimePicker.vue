<template>
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
  </template>
  <script setup>
import { ref } from 'vue';
import { VTimePicker } from 'vuetify/labs/VTimePicker'

    const time=ref(null) 
    const modal2 = ref(false)
  </script>

import { VTimePicker } from 'vuetify/labs/VTimePicker'
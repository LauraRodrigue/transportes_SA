<template>
    <div class="column items-center">

    <q-card class="my-card bg-amber-4 text-black"  style="height: 300px; width: 45%;">
      <q-card-section>
       <q-form @submit="onSubmit" @reset="onReset">
          <q-input
            filled
            v-model="name"
            label="Nombre"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />

          <q-input
            filled
            type="number"
            v-model="age"
            label="Contraseña"
            lazy-rules
            :rules="[
              (val) => (val > 0 && val < 100) || 'Please type a real age',
            ]"
          />

          <q-toggle v-model="accept" label="I accept the license and terms" />

          <div class="text-center">
            <q-btn label="Ingresar" type="submit" color="teal-5" />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
    </div>

</template>
<script setup></script>



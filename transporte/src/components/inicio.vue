<template>
    <div>
      <q-dialog v-model="fixed">
        <q-card class="modal-content">
          <q-card-section class="row items-center q-pb-none" style="color: rgb(113, 113, 113);">
            <div class="text-h6">{{ text }}</div>
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup />
          </q-card-section>
          <q-separator />
  
          <q-card-section style="max-height: 50vh" class="scroll">
            <q-input v-model="nuevaPlaca" label="Placa" style="width: 300px;" />
            <q-input v-model="nuevoNumeroBus" label="Número de Bus" style="width: 300px;" />
            <q-input v-model="nuevaCantidadAsientos" label="Cantidad de Asientos" style="width: 300px;" />
            <q-input v-model="nuevaEmpresaAsignada" label="Empresa Asignada" style="width: 300px;" />
          </q-card-section>
  
          <q-separator />
  
          <q-card-actions align="right">
            <q-btn flat label="Cerrar" color="primary" v-close-popup />
            <q-btn flat label="Guardar " color="primary" @click="guardarBus()" />
          </q-card-actions>
        </q-card>
      </q-dialog>
      <div>
        <h1>Buses</h1>
        <div class="btn-agregar">
          <q-btn color="secondary" label="Agregar" @click="agregarBus()" />
        </div>
        <q-table title="Buses" :rows="rows" :columns="columns" row-key="name">
          <template v-slot:body-cell-botones="props">
            <q-td :props="props" class="botones">
              <q-btn color="secondary" text-color="black"  label="✏️" @click="EditarBus(props.row._id)" />
              <q-btn color="orange" glossy label="🗑️" @click="InactivarBus(props.row._id)" v-if="props.row.estado == 1"/>
              
  
            </q-td>
          </template>
        </q-table>
        <div class="volver">
          <q-btn color="amber"><router-link to="/">Volver</router-link></q-btn>
  
        </div>
  
      </div>
    </div>
  </template>
  
  <script setup>
  import axios from 'axios';
  import { ref, onMounted } from 'vue';
  import { format } from 'date-fns';
  
  let apiUrl = 'https://transporte-czaa.onrender.com/api/bus/buses';
  let buses = ref([]);
  let rows = ref([]);
  
  let fixed = ref(false)
  
  async function obtenerInfo() {
    try {
      const responseBuses = await axios.get(apiUrl);
      buses.value = responseBuses.data.buses;
      rows.value = responseBuses.data.buses;
    } catch (error) {
      console.error('Error al obtener la información de los buses:', error);
    }
  }
  
  const columns = [
    { name: 'placa', label: 'Placa', field: 'placa', sortable: true },
    { name: 'numero_bus', label: 'Número de Bus', field: 'numero_bus', sortable: true },
    { name: 'cantidad_asientos', label: 'Cantidad de Asientos', field: 'cantidad_asientos' },
    { name: 'empresa_asignada', label: 'Empresa Asignada', field: 'empresa_asignada' },
    { name: 'estado', label: 'Estado', field: 'estado', sortable: true, format: (val) => (val ? 'Activo' : 'Inactivo') },
    {
      name: 'createAT', label: 'Fecha de Creación', field: 'createAT', sortable: true,
      format: (val) => format(new Date(val), 'yyyy-MM-dd')
    },
    {
      name: 'botones', label: 'Opciones',
      field: row => null,
      "sortable": false,
    },
  ];
  let text = ref('')
  let nuevaPlaca = ref('');
  let nuevoNumeroBus = ref('');
  let nuevaCantidadAsientos = ref('');
  let nuevaEmpresaAsignada = ref('');
  
  function agregarBus() {
    fixed.value = true;
    text.value = "Agregar Bus";
    nuevaPlaca.value = '';
    nuevoNumeroBus.value = '';
    nuevaCantidadAsientos.value = '';
    nuevaEmpresaAsignada.value = '';
  }
  
  function EditarBus(id) {
    const busSeleccionado = buses.value.find((bus) => bus._id === id);
    if (busSeleccionado) {
      fixed.value = true;
      text.value = "Editar Bus";
      nuevaPlaca.value = busSeleccionado.placa;
      nuevoNumeroBus.value = busSeleccionado.numero_bus;
      nuevaCantidadAsientos.value = busSeleccionado.cantidad_asientos;
      nuevaEmpresaAsignada.value = busSeleccionado.empresa_asignada;
    }
  }
  
  function InactivarBus(id) {
    try {
    } catch (error) {
      console.log(error, "Error al cambiar el estado del bus");
    }
  }
  
  onMounted(() => {
    obtenerInfo();
  });
  </script>
  
  <style scoped>
  .modal-content {
    width: 400px;
  }
  
  .botones button {
    margin: 2px;
  }
  
  .btn-agregar {
    width: 100%;
    margin-bottom: 5px;
    display: flex;
    justify-content: flex-end
  }
  
  .volver{
    width: 100%;
    margin-top: 5px;
  }
  </style>
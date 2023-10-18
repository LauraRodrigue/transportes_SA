<template>
    <div class="contenedor">
        <q-layout class="bg-orange-1" view="hHh lpR lFf">

            <q-header elevated class="bg-orange-10 text-white">
                <q-toolbar>
                    <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

                    <q-toolbar-title>
                        <q-avatar>
                            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
                        </q-avatar>
                        Transportes S.A.S
                    </q-toolbar-title>
                </q-toolbar>
            </q-header>

            <q-drawer class="bg-green-1" v-model="leftDrawerOpen" side="left" behavior="mobile" bordered>
                <div class="q-pa-md q-gutter-sm">
                    <q-avatar>
                        <img src="https://cdn.quasar.dev/img/avatar.png">
                    </q-avatar>
                </div>
                <div class="q-pa-md q-gutter-sm">
                    <q-avatar v-for="size in ['md']" :key="size" :size="size" color="primary" text-color="white"
                        icon="directions" />
                    <router-link to="/home"><q-btn text-color="black" label="Menu" /></router-link><br>

                    <q-avatar v-for="size in ['md']" :key="size" :size="size" color="primary" text-color="white"
                        icon="directions" />
                    <router-link to="/billete"><q-btn text-color="black" label="boletos" /></router-link><br>

                    <q-avatar v-for="size in ['md']" :key="size" :size="size" color="primary" text-color="white"
                        icon="directions" />
                    <router-link to="/buses"><q-btn text-color="black" label="buses" /></router-link><br>

                    <q-avatar v-for="size in ['md']" :key="size" :size="size" color="primary" text-color="white"
                        icon="directions" />
                    <router-link to="/cliente"><q-btn text-color="black" label="clientes" /></router-link><br>
                
                    <q-avatar v-for="size in ['md']" :key="size" :size="size" color="primary" text-color="white"
                        icon="directions" />
                    <router-link to="/conductor"><q-btn text-color="black" label="conductores" /></router-link><br>

                    <q-avatar v-for="size in ['md']" :key="size" :size="size" color="primary" text-color="white"
                        icon="directions" />
                    <router-link to="/horario"><q-btn text-color="black" label="horarios" /></router-link><br>

                    <q-avatar v-for="size in ['md']" :key="size" :size="size" color="primary" text-color="white"
                        icon="directions" />
                    <router-link to="/ruta"><q-btn text-color="black" label="rutas" /></router-link><br>

                    <q-avatar v-for="size in ['md']" :key="size" :size="size" color="primary" text-color="white"
                        icon="directions" />
                    <router-link to="/vendedor"><q-btn text-color="black" label="vendedores" /></router-link><br>
                </div>

            </q-drawer>

            <q-page-container>
                <router-view />
            </q-page-container>

        </q-layout>

    </div>
</template>
  
<script>
import { ref } from 'vue'

export default {
    setup() {
        const leftDrawerOpen = ref(false)

        return {
            leftDrawerOpen,
            toggleLeftDrawer() {
                leftDrawerOpen.value = !leftDrawerOpen.value
            }
        }
    }
}
</script>
  
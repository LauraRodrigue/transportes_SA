<template>
    <q-layout class="bg-orange-1" view="hHh lpR lFf">
  
      <q-header elevated class="bg-orange-10 text-white">
        <q-toolbar>
          <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
  
          <q-toolbar-title>
            <q-avatar>
              <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
            </q-avatar>
            Transportes S.A
          </q-toolbar-title>
        </q-toolbar>
      </q-header>
  
      <q-drawer v-model="leftDrawerOpen" side="left" behavior="mobile" bordered>
        <div class="q-pa-md q-gutter-sm">
      <q-avatar>
        <img src="https://cdn.quasar.dev/img/avatar.png">
      </q-avatar>
    </div>
      <router-link to="/"><q-btn color="white" text-color="black" label="login" /></router-link><br>
      <router-link to="/buses"><q-btn color="white" text-color="black" label="buses" /></router-link>
      </q-drawer>
  
      <q-page-container>
        <router-view />
      </q-page-container>
  
    </q-layout>
  
    <router-view></router-view>
  </template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
    setup () {
      const leftDrawerOpen = ref(false)
  
      return {
        leftDrawerOpen,
        toggleLeftDrawer () {
          leftDrawerOpen.value = !leftDrawerOpen.value
        }
      }
    }
  }
  </script>
  
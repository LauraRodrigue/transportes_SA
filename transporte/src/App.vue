<template>
  <q-layout class="uno" view="hHh lpR lFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" behavior="mobile" bordered>
      <router-link to="/"><q-btn color="white" text-color="black" label="login" /></router-link>
    <router-link to="/buses"><q-btn color="white" text-color="black" label="buses" /></router-link>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>

  <router-view></router-view>
</template>

<<<<<<< HEAD
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
=======



>>>>>>> 3ba9892e64943fced9161d037a243d5b04cd67a6

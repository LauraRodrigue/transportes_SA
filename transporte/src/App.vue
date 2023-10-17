<template>
  <div>
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

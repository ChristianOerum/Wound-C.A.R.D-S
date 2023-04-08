<template>

<RouterView v-slot="{ Component }">
    <Transition enter-from-class="opacity-0" enter-active-class="transition duration-500">
      <component :is="Component"/>
    </Transition>
  </RouterView>

</template>

<script setup lang="ts">
//import onMounted
import { onMounted } from 'vue'

//import store
import { store } from './store/store.js'

onMounted(() => {
  if (localStorage.getItem('loggedIn') == null) {
    store.state.loggedIn = false
    localStorage.setItem('loggedIn','false')
  }

  if (localStorage.getItem('wearingHelmet') == null) {
    store.state.wearingHelmet = false
    localStorage.setItem('wearingHelmet','false')
  }

  if (localStorage.getItem('wearingChestPlate') == null) {
    store.state.wearingChestPlate = false
    localStorage.setItem('wearingChestPlate','false')
  }

})

</script>

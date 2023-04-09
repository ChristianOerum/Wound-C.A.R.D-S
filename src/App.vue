<template>

<RouterView v-slot="{ Component }">

  <Transition enter-from-class="opacity-0" enter-active-class="transition duration-500">
      <component :is="Component"/>
    </Transition>

  </RouterView>

  <div class="h-[80px] w-[100%] bottom-[20px] absolute flex flex-col items-center justify-center">
      <nav_bar class="w-[90%]"></nav_bar>
  </div>

</template>

<script setup lang="ts">
//import onMounted
import { onMounted, onBeforeMount } from 'vue'

//import comps
import nav_bar from './components/nav_bar.vue';

//import apacitor/status-bar
import { StatusBar } from '@capacitor/status-bar';
import { NavigationBar } from '@hugotomazi/capacitor-navigation-bar'

//import store
import { store } from './store/store.js'

onBeforeMount(() => {

  StatusBar.setBackgroundColor({ color: '#1E2124' }).catch(err => {
      console.log(err);
    });

    NavigationBar.setColor({ color: '#1E2124' }).catch(err => {
      console.log(err);
    });

})

onMounted( async () => {

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

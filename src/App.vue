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
import { onBeforeMount } from 'vue'

//import comps
import nav_bar from './components/nav_bar.vue';

//firebase realtime db
import { db } from "./firebase";
import { ref, query, orderByChild, equalTo, onValue } from "firebase/database";

//import apacitor/status-bar
import { StatusBar } from '@capacitor/status-bar';
import { NavigationBar } from '@hugotomazi/capacitor-navigation-bar'

//import store
import { store } from './store/store.js'



onBeforeMount( async () => {

  StatusBar.setBackgroundColor({ color: '#1E2124' }).catch(err => {
      console.log(err);
    });

    NavigationBar.setColor({ color: '#1E2124' }).catch(err => {
      console.log(err);
    });

  if (localStorage.getItem('loggedIn') == null) {
    store.state.loggedIn = false
    localStorage.setItem('loggedIn','false')
  }

  if (localStorage.getItem('wearingHelmet') == null) {
    store.state.armor.wearingHelmet = false
    localStorage.setItem('wearingHelmet','false')
  }

  if (localStorage.getItem('wearingChestPlate') == null) {
    store.state.armor.wearingChestPlate = false
    localStorage.setItem('wearingChestPlate','false')
  }

  if (localStorage.getItem('UserLoggedIn') == null) {
    store.state.userInfo.loggedIn = ""
    localStorage.setItem('UserLoggedIn','false')
  }

  if (localStorage.getItem('UserId') == null) {
    store.state.userInfo.UserID = ""
    localStorage.setItem('UserId','')
  }

  if (localStorage.getItem('FirstName') == null) {
    store.state.userInfo.FirstName = ""
    localStorage.setItem('FirstName','')
  }

  if (localStorage.getItem('LastName') == null) {
    store.state.userInfo.LastName = ""
    localStorage.setItem('LastName','')
  }

  if (localStorage.getItem('Email') == null) {
    store.state.userInfo.Email = ""
    localStorage.setItem('Email','')
  }

  if (localStorage.getItem('Tag') == null) {
    store.state.userInfo.Tag = ""
    localStorage.setItem('Tag','')
  }

  if (store.state.loggedIn == true){
    const recordRef = ref(db, "users/" + store.state.userInfo.UserID);

        onValue(recordRef, (snapshot) => {
            const data = snapshot.val();

            store.state.userInfo.TeamList = data.teamList
            
        })
  }

})

</script>

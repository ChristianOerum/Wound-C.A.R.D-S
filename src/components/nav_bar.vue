<template>

    <div class="w-[100%] h-[100%] bg-[#36393E] rounded-xl grid relative pl-3 pr-3" style="grid-template-columns: 1fr 1fr 1fr 1fr">

        <div v-if="route.name == 'WoundCardMain' || route.name == 'GivenWoundCardPage'" class="col-start-1 col-span-1 w-auto h-[100%] flex flex-col items-center justify-center">
            <SVG_icon @click="goToWoundsMain()" class="w-12 h-12" name="Menu_woundcard" style="opacity: 1"></SVG_icon>
        </div>

        <div v-else class="col-start-1 col-span-1 w-auto h-[100%] flex flex-col items-center justify-center">
            <SVG_icon @click="goToWoundsMain()" class="w-12 h-12" name="Menu_woundcard" style="opacity: 0.2"></SVG_icon>
        </div>


        <div v-if="route.name == 'Team'" class="col-start-2 col-span-1 w-auto h-[100%] flex flex-col items-center justify-center">
            <SVG_icon @click="goToTeam()" class="w-12 h-12" name="Menu_team" style="opacity: 1"></SVG_icon>
        </div>

        <div v-else class="col-start-2 col-span-1 w-auto h-[100%] flex flex-col items-center justify-center">
            <SVG_icon @click="goToTeam()" class="w-12 h-12" name="Menu_team" style="opacity: 0.2"></SVG_icon>
        </div>


        <div v-if="route.name == 'Account'" class="col-start-3 col-span-1 w-auto h-[100%] flex flex-col items-center justify-center">
            <SVG_icon @click="goToAccount()" class="w-10 h-10" name="Menu_myaccount" style="opacity: 1"></SVG_icon>
        </div>

        <div v-else class="col-start-3 col-span-1 w-auto h-[100%] flex flex-col items-center justify-center">
            <SVG_icon @click="goToAccount()" class="w-10 h-10" name="Menu_myaccount" style="opacity: 0.2"></SVG_icon>
        </div>

        <div class="col-start-4 col-span-1 w-[100%] h-[100%] flex flex-col items-center justify-center pr-4">
            <SVG_icon @click="goToLogin()" class="w-9 h-9" name="Menu_logout" style="opacity: 0.2"></SVG_icon>
        </div>

    </div>

</template>

<script setup lang="ts">
//import comps
import SVG_icon from '../assets/SVG_icons.vue'

//import store
import { store } from '../store/store.js'

//import router and useroute
import { router } from '../router/index.js'
import { useRoute } from 'vue-router';


const route = useRoute()


//functioner
function goToLogin(){
    store.state.loggedIn = false
    localStorage.setItem('loggedIn','false')
    router.replace({ name: 'Login' })
}

function goToTeam(){
    router.replace({ name: 'Team' })
}

function goToAccount(){
    router.replace({ name: 'Account' })
}

function goToWoundsMain(){
    if (route.name != 'GivenWoundCardPage') {

        if (store.state.woundCardGenerated == true) {
        router.replace({ name: 'GivenWoundCardPage' })
        }
        else {
            router.replace({ name: 'WoundCardMain' }) 
        }
    }


    console.log(route.name)
}


</script>
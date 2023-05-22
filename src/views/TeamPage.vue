<template>

    <div class="bg-[#1E2124] h-screen w-screen grid grid-rows gap-[10px] p-[20px]" style="grid-template-rows: auto 50px 80px">

        <div v-if="store.state.userInfo.loggedIn == true" class="row-stars-1 row-span-1 h-100 w-100 relative overflow-y-scroll">

            <div v-for="(item, index) in test" :key="index" class="w-100 h-auto flex flex-col bg-black mb-2 rounded-md">
                <p class="text-white left-0 p-[8px]">{{ item.name }}</p>
            </div>

        </div>

        <div v-if="store.state.userInfo.loggedIn == true" class="h-[100%] w-[100%] grid gap-[10px] row-start-2 row-span-1" style="grid-template-columns: 1fr 1fr">

            <div class="col-start-1 col-span-2 bg-[#36393E] rounded-full grid p-[5px] items-center relative">

                <div @click="back()" class="w-6 h-6 rounded-md bg-white absolute right-5 opacity-20"></div>

            </div>

        </div>

        <p v-if="store.state.userInfo.loggedIn != true" class="row-start-2 row-span-1 text-center font-semibold text-white/[.2] text-[2.1vh]">"Mit Team" er ikke tilgængelig på Gæste enheder</p>

    </div>

</template>

<script setup lang="ts">
//import router and useroute
import { router } from '../router/index.js'

//import store
import { store } from '../store/store.js'

function back(){
    router.replace({ name: 'Scan' })
}

let test = [{name: "Jonas"},{name: "Lars"},{name: "Per"},{name: "Lasse"},{name: "Lasse"},{name: "Lasse"},{name: "Lasse"},{name: "Lasse"},{name: "Lasse"},{name: "Lasse"},{name: "Lasse"},{name: "Lasse"},{name: "Lasse"},{name: "Lasse"},{name: "Lasse"},{name: "Lasse"},{name: "Lasse"},{name: "Lasse"},{name: "Lasse"},{name: "Lasse"},{name: "Lasse"},{name: "Lasse"},{name: "Lasse"},{name: "Lasse"},{name: "Lasse"},{name: "Lasse"}]

</script>
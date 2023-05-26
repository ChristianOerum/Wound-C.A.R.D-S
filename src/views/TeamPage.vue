<template>

    <div class="bg-[#1E2124] h-screen w-screen grid grid-rows gap-[10px] p-[20px]" style="grid-template-rows: auto 50px 80px">
        
        <div v-if="store.state.userInfo.loggedIn == true" class="row-stars-1 row-span-1 h-100 w-100 relative overflow-y-scroll">

            <p class="text-center w-[100%] text-[#ffffff] font-semibold text-[26px] mb-5 mt-[10px]">Mit team</p>

            <div v-for="(item, index) in store.state.userInfo.TeamObjectArr" :key="index" class="w-100 h-auto mb-2">

                <div v-if="item.status == 'Alive'" class="w-100 h-auto flex flex-row bg-[#2C5717] rounded-md">
                    <p class="text-white left-2 p-[8px]">{{ item.tag }}</p>
                    <p class="text-black left-3 p-[8px]">{{ item.status }}</p>
                </div>

                <div v-if="item.status == 'Dead'" class="w-100 h-auto flex flex-row bg-[#571717] rounded-md">
                    <p class="text-white left-2 p-[8px]">{{ item.tag }}</p>
                    <p class="text-black left-3 p-[8px]">{{ item.status }}</p>
                </div>

                <div v-if="item.status == 'Under treatment'" class="w-100 h-auto flex flex-row bg-[#175757] rounded-md">
                    <p class="text-white left-2 p-[8px]">{{ item.tag }}</p>
                    <p class="text-black left-3 p-[8px]">{{ item.status }}</p>
                </div>

                <div v-if="item.status == 'Waiting for treatment'" class="w-100 h-auto flex flex-row bg-[#574D17] rounded-md">
                    <p class="text-white left-2 p-[8px]">{{ item.tag }}</p>
                    <p class="text-black left-3 p-[8px]">{{ item.status }}</p>
                </div>

            </div>

        </div>

        <div v-if="store.state.userInfo.loggedIn == true" class="h-[100%] w-[100%] grid gap-[10px] row-start-2 row-span-1" style="grid-template-columns: 1fr 1fr">


            <div class="col-start-1 col-span-2 bg-[#36393E] rounded-full p-[5px] relative flex items-center">

                <SVG_icon @click="back()" class="w-7 h-7 absolute right-5 opacity-50" name="QR"></SVG_icon>

            </div>

        </div>

        <p v-if="store.state.userInfo.loggedIn != true" class="row-start-2 row-span-1 text-center font-semibold text-white/[.2] text-[2.1vh]">"Mit Team" er ikke tilgængelig på Gæste enheder</p>

    </div>

</template>

<script setup lang="ts">
import SVG_icon from '../assets/SVG_icons.vue'

//import router and useroute
import { router } from '../router/index.js'

//import store
import { store } from '../store/store.js'

function back(){
    router.replace({ name: 'Scan' })
}

</script>
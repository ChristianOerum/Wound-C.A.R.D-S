<template>

    <div class="bg-[#1E2124] h-screen w-screen grid grid-rows gap-[10px] p-[20px]" style="grid-template-rows: auto 50px 80px">
        
        <div v-auto-animate v-if="store.state.userInfo.loggedIn == true" class="row-stars-1 row-span-1 h-100 w-100 relative overflow-y-scroll flex flex-col items-center">

            <p class="text-center w-[100%] text-[#ffffff] font-semibold text-[26px] mb-5 mt-[10px]">Mit team</p>

            <div v-for="(item, index) in store.state.userInfo.TeamObjectArr" :key="index" class="w-[90%] h-auto mb-2">

                <div v-if="item.status == 'Alive'" class="relative w-90 h-auto flex flex-row bg-gradient-to-r from-30% from-[#4B7448] to-[#36393E] rounded-xl">
                    <p class="text-white font-semibold left-2 p-[10px] ml-1">{{ item.tag }}</p>
                    <p class="text-black font-medium left-3 p-[10px]">{{ item.status }}</p>
                    <fa style="cursor: pointer" @click="deleteTeamMember(item, index)" icon="trash-can" class="w-auto h-[16px] ml-2 absolute top-3 right-4 opacity-20" />
                </div>

                <div v-if="item.status == 'Dead'" class="relative w-90 h-auto flex flex-row bg-gradient-to-r from-30% from-[#A34142] to-[#36393E] rounded-xl">
                    <p class="text-white font-semibold left-2 p-[10px] ml-1"><fa style="cursor: pointer" icon="skull" class="w-auto h-[16px] mr-2" />{{ item.tag }}</p>
                    <p class="text-black font-medium left-3 p-[10px]">{{ item.status }}</p>
                    <fa style="cursor: pointer" @click="deleteTeamMember(item, index)" icon="trash-can" class="w-auto h-[16px] ml-2 absolute top-3 right-4 opacity-20" />
                </div>

                <div v-if="item.status == 'Under treatment'" class="relative w-90 h-auto flex flex-row bg-gradient-to-r from-30% from-[#4796DC] to-[#36393E] rounded-xl">
                    <p class="text-white font-semibold left-2 p-[10px] ml-1"><fa style="cursor: pointer" icon="clock" class="w-auto h-[16px] mr-2" />{{ item.tag }}</p>
                    <p class="text-black font-medium left-3 p-[10px]">{{ item.status }}</p>
                    <fa style="cursor: pointer" @click="deleteTeamMember(item, index)" icon="trash-can" class="w-auto h-[16px] ml-2 absolute top-3 right-4 opacity-20" />
                </div>

                <div v-if="item.status == 'Waiting for treatment'" class="relative w-90 h-auto flex flex-row bg-gradient-to-r from-30% from-[#DCC047] to-[#36393E] rounded-xl">
                    <p class="text-white font-semibold left-2 p-[10px] ml-1"><fa style="cursor: pointer" icon="circle-exclamation" class="w-auto h-[16px] mr-2" />{{ item.tag }}</p>
                    <p class="text-black font-medium left-3 p-[10px]">{{ item.status }}</p>
                    <fa style="cursor: pointer" @click="deleteTeamMember(item, index)" icon="trash-can" class="w-auto h-[16px] ml-2 absolute top-3 right-4 opacity-20" />
                </div>

            </div>

        </div>

        <div v-if="store.state.userInfo.loggedIn == true" class="h-[100%] w-[100%] grid gap-[10px] row-start-2 row-span-1" style="grid-template-columns: 1fr 1fr">


            <div class="col-start-1 col-span-2 bg-[#282C30] rounded-full p-[5px] relative flex items-center">

                <SVG_icon @click="back()" class="w-7 h-7 absolute right-5 opacity-30" name="QR"></SVG_icon>

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

function deleteTeamMember(item, index) {

    store.state.userInfo.TeamObjectArr.splice(index, 1) 
}

</script>
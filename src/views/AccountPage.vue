<template>

    <div class="bg-[#1E2124] h-screen w-screen grid grid-rows gap-[10px] p-[20px]" style="grid-template-rows: auto 50px 80px">

        <div v-if="store.state.userInfo.loggedIn == true" class="row-start-2 row-span-1 w-[100%] h-[100%] bg-[#35342C] rounded-full p-[5px]">

            <div class="w-[100%] h-[100%] bg-[#D1B028] rounded-full flex flex-cols items-center justify-center font-semibold">

                <p class="text-[#584805] text-[2.1vh]">Opdater oplysninger</p>

            </div>

        </div>
        
        <p v-else class="row-start-2 row-span-1 text-center font-semibold text-white/[.2] text-[2.1vh]">"Min konto" er ikke tilgængelig på Gæste enheder</p>


        <div v-if="store.state.userInfo.loggedIn == true" class="row-start-1 row-span-1 flex flex-col items-center h-[100%]">

            <p class="text-center w-[90%] text-[#ffffff] font-semibold text-[26px] mb-6 mt-[10px]">Min konto</p>

            <input type="text" placeholder="Konto display name" class="placeholder-[#535659] bg-[#282C30] text-white font-semibold w-[90%] p-3 mb-7 rounded-xl focus:outline-[3px] focus:outline outline-[#F8D027]"/>

            <input type="text" placeholder="Fornavn" class="placeholder-[#535659] bg-[#282C30] text-white font-semibold w-[90%] p-3 mb-2 rounded-xl focus:outline-[3px] focus:outline outline-[#F8D027]"/>

            <input type="text" placeholder="Efternavn" class="placeholder-[#535659] bg-[#282C30] text-white font-semibold w-[90%] p-3 mb-2 rounded-xl focus:outline-[3px] focus:outline outline-[#F8D027]"/>

            <input type="text" placeholder="Email" class="placeholder-[#535659] bg-[#282C30] text-white font-semibold w-[90%] p-3 mb-9 rounded-xl focus:outline-[3px] focus:outline outline-[#F8D027]"/>

            <QrcodeVue :value="store.state.userInfo.UserID" :size="150" background="#1E2124" foreground="#505254" level="M"/>
            
            <p class="text-[#505254] text-[20px] font-semibold">{{ store.state.userInfo.UserID }}</p>

        </div>
        

    </div>

</template>

<script setup lang="ts">
//comp import
import QrcodeVue from 'qrcode.vue'

//import store
import { store } from '../store/store.js'


let someVar = "238456829302"
 
</script>
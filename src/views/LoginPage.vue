<template>

    <div class="h-screen w-screen bg-[#1E2124] relative">

        <div class="flex flex-col items-center justify-center h-[100%] w-[100%]">
            <img class="h-auto w-[50%]" src="../assets/svg/card_logo.svg">

            <p class="text-[36px] text-white font-semibold">Wound Cards</p>
            <p class="text-[18px] text-white/[.4] font-semibold mb-5">By C.A.R.D. Airsoft</p>  


            <div class="w-[80%] ">
                <input type="text" placeholder="Email" class="placeholder-[#535659] bg-[#36393E] text-white font-semibold w-[100%] p-3 mb-2 rounded-xl focus:outline-[3px] focus:outline outline-[#F8D027]"/>

                <input type="text" placeholder="Password" class="placeholder-[#535659] bg-[#36393E] text-white font-semibold w-[100%] p-3 mb-2 rounded-xl focus:outline-[3px] focus:outline outline-[#F8D027]"/>

                <div class="w-[100%] h-14 grid gap-2 mt-8" style="grid-template-columns: 1fr 1fr">
                    
                    <div class="bg-[#6D6130] h-[100%] w-[100%] col-start-1 row-span-1 flex flex-cols items-center justify-center p-[5px] rounded-full">
                        <div class="bg-[#F8D027] flex flex-cols items-center justify-center w-[100%] h-[100%] rounded-full">
                            <p class="text-[#584805] font-semibold ">Login</p>
                        </div>
                    </div>

                    <div @click="loginAsGuest()" class="bg-[#2D3034] h-[100%] w-[100%] col-start-2 row-span-1 flex flex-cols items-center justify-center p-[5px] rounded-full">
                        <div class="bg-[#424549] flex flex-cols items-center justify-center w-[100%] h-[100%] rounded-full">
                            <p class="text-white/[.7] font-semibold">Gæst</p>
                        </div>
                    </div>

                </div>

            </div>

            <p class="absolute bottom-[35px] font-semibold text-white/[0.1]">App v1.003</p>
            <p class="absolute bottom-[20px] text-[10px] font-semibold text-white/[0.1]">Copyright © 2023 C.A.R.D. Airsoft. Alle rettigheder forbeholdes.</p>
        </div>

    </div>

</template>

<script setup lang="ts">
//import router
import { router } from '../router/index.js'

//import store
import { store } from '../store/store.js'

function loginAsGuest(){
    store.state.loggedIn = true
    localStorage.setItem('loggedIn','true')
    router.replace({ name: 'WoundCardMain' })
}

function loginAsUser(){
    console.log("not yet available")
}

</script>
<template>

    <div class="h-[100%] w-[100%] grid gap-[10px]" style="grid-template-columns: 1fr 1fr">


        <div v-if="$store.state.armor.wearingChestPlate == false" @click="toggleChestPlate()" class="col-start-1 col-span-1 bg-[#36393E] rounded-full grid p-[5px]" style="grid-template-columns: 1fr 2fr">

            <div class="col-start-1 h-[100%] w-[100%] flex flex-col items-center justify-center">

                <SVG_icon class=" h-8 w-8" name="plateCarrier_Off"></SVG_icon>

            </div>

            <div class="col-start-2 bg-[#282B30] rounded-full p-1 relative">

                <div class="absolute left-1 rounded-full bg-[#424549] h-8 w-8"></div>

            </div>

        </div>


        <div v-else @click="toggleChestPlate()" class="col-start-1 col-span-1 bg-[#3E3C2F] rounded-full grid p-[5px]" style="grid-template-columns: 1fr 2fr">

            <div class="col-start-1 h-[100%] w-[100%] flex flex-col items-center justify-center">

                <SVG_icon class="h-8 w-8" name="plateCarrier_On"></SVG_icon>

            </div>

            <div class="col-start-2 bg-[#282B30] rounded-full p-1 relative">

                <div class="absolute right-1 rounded-full bg-[#71652C] h-8 w-8"></div>

            </div>

        </div>






        <div v-if="$store.state.armor.wearingHelmet == false" @click="toggleHelmet()" class="col-start-2 col-span-1 bg-[#36393E] rounded-full grid p-[5px]" style="grid-template-columns: 1fr 2fr">

            <div class="col-start-1 h-[100%] w-[100%] flex flex-col items-center justify-center">

                <SVG_icon class="h-9 w-9" name="combatHelmet_Off"></SVG_icon>

            </div>


            <div class="col-start-2 bg-[#282B30] rounded-full p-1 relative">

                <div class="absolute left-1 rounded-full bg-[#424549] h-8 w-8"></div>

            </div>

        </div>


        <div v-else @click="toggleHelmet()" class="col-start-2 col-span-1 bg-[#3E3C2F] rounded-full grid p-[5px]" style="grid-template-columns: 1fr 2fr">

            <div class="col-start-1 h-[100%] w-[100%] flex flex-col items-center justify-center">

                <SVG_icon class="h-9 w-9" name="combatHelmet_On"></SVG_icon>

            </div>


            <div class="col-start-2 bg-[#282B30] rounded-full p-1 relative">

                <div class="absolute right-1 rounded-full bg-[#71652C] h-8 w-8"></div>

            </div>

        </div>



    </div>

</template>

<script setup lang="ts">
//import comps
import SVG_icon from '../assets/SVG_icons.vue'

//import store
import { store } from '../store/store.js'

//funktioner
function toggleChestPlate() {
    store.state.armor.wearingChestPlate = !store.state.armor.wearingChestPlate
}

function toggleHelmet() {
    store.state.armor.wearingHelmet = !store.state.armor.wearingHelmet
}


</script>
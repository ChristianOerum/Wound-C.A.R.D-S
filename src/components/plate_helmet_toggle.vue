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

//import store and useRoute
import { store } from '../store/store.js'
import { useRoute } from 'vue-router';

let index = Number(localStorage.getItem("generatedWoundCard_Index"))
const route = useRoute()

//funktioner
function updateTreatCountdown(){
    if (route.name == "GivenWoundCardPage") {

    if ((store.state.wound_cards[index].chestWound == true && store.state.armor.wearingChestPlate == true) || (store.state.wound_cards[index].headWound == true && store.state.armor.wearingHelmet == true) && (store.state.wound_cards[index].behandlings_timer.armorTrue.timerActive == true)) {

    store.state.respawn_timer = store.state.wound_cards[index].behandlings_timer.armorTrue.time
    }

    else if ((store.state.wound_cards[index].chestWound == true && store.state.armor.wearingChestPlate == false) || (store.state.wound_cards[index].headWound == true && store.state.armor.wearingHelmet == false) && (store.state.wound_cards[index].behandlings_timer.armorFalse.timerActive == true)) {

    store.state.respawn_timer = store.state.wound_cards[index].behandlings_timer.armorFalse.time
    }

    else if (store.state.wound_cards[index].chestWound == false && store.state.wound_cards[index].headWound == false && store.state.wound_cards[index].behandlings_timer.armorFalse.timerActive == true) {

    store.state.respawn_timer = store.state.wound_cards[index].behandlings_timer.armorFalse.time
    }

    }
}


function toggleChestPlate() {
    store.state.armor.wearingChestPlate = !store.state.armor.wearingChestPlate
    localStorage.setItem('wearingChestPlate',store.state.armor.wearingChestPlate)

    updateTreatCountdown()
}

function toggleHelmet() {
    store.state.armor.wearingHelmet = !store.state.armor.wearingHelmet
    localStorage.setItem('wearingHelmet',store.state.armor.wearingHelmet)

    updateTreatCountdown()
}


</script>
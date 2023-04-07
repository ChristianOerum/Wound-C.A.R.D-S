<template>

    <div class="bg-[#1E2124] h-screen w-screen grid grid-rows gap-[10px] p-[20px]" style="grid-template-rows: auto 50px 80px">

        <div class="row-start-1 row-span-1 w-[100%] h-[100%] relative flex flex-col items-center">

            <p class="text-center w-[90%] text-[#ffffff] font-semibold text-[26px] mt-[10px]">Du er blevet skudt!</p>

            <div class="w-15 gap-4 h-11 grid" style="grid-template-rows: 1fr 1fr">

                <div v-if="$store.state.armor.wearingChestPlate == false" class="col-start-1 col-span-1 w-[100%] h-[100%] flex flex-col items-center justify-center">
                    <SVG_icon class=" h-8 w-8" name="plateCarrier_Off"></SVG_icon>
                </div>

                <div v-else class="col-start-1 col-span-1 w-[100%] h-[100%] flex flex-col items-center justify-center">
                    <SVG_icon class=" h-8 w-8" name="plateCarrier_On"></SVG_icon>
                </div>

                <div v-if="$store.state.armor.wearingHelmet == false" class="col-start-2 col-span-1 w-[100%] h-[100%] flex flex-col items-center justify-center">
                    <SVG_icon class=" h-9 w-9" name="combatHelmet_Off"></SVG_icon>
                </div>

                <div v-else class="col-start-2 col-span-1 w-[100%] h-[100%] flex flex-col items-center justify-center">
                    <SVG_icon class=" h-9 w-9" name="combatHelmet_On"></SVG_icon>
                </div>

            </div>


            <img class="h-[100px] absolute bottom-[10px] h-[85%]" :src='getSVGsrc()'>



            <div class="absolute bottom-[35px] h-fit w-[100%] text-[18px] text-white">

                <div v-if="(store.state.wound_cards[index].chestWound == true && store.state.armor.wearingChestPlate == true) || (store.state.wound_cards[index].headWound == true && store.state.armor.wearingHelmet == true)">
                    <p class="font-semibold text-[#F8D027]">Skader1:</p>
                    <p class="mb-2 opacity-[0.9]">{{ store.state.wound_cards[index].skade }}</p>

                    <p class="font-semibold text-[#F8D027]">Behandling:</p>
                    <p class="mb-2 opacity-[0.9]">{{ store.state.wound_cards[index].behandling.armorTrue }}</p>

                    <p class="font-semibold text-[#F8D027]">Efter behandlingen:</p>
                    <p class="mb-4 opacity-[0.9]">{{ store.state.wound_cards[index].efter_behandlingen.armorTrue }}</p>

                    <div v-if="store.state.wound_cards[index].behandlings_timer.armorTrue.timerActive == true" class="bg-[#3E3C2F]/[.7] h-[50px] w-[100%] rounded-full p-[7px]">
                    </div>
                </div>

                <div v-else-if="(store.state.wound_cards[index].chestWound == true && store.state.armor.wearingChestPlate == false) || (store.state.wound_cards[index].headWound == true && store.state.armor.wearingHelmet == false)">
                    <p class="font-semibold text-[#F8D027]">Skader2:</p>
                    <p class="mb-2 opacity-[0.9]">{{ store.state.wound_cards[index].skade }}</p>

                    <p class="font-semibold text-[#F8D027]">Behandling:</p>
                    <p class="mb-2 opacity-[0.9]">{{ store.state.wound_cards[index].behandling.armorFalse }}</p>

                    <p class="font-semibold text-[#F8D027]">Efter behandlingen:</p>
                    <p class="mb-4 opacity-[0.9]">{{ store.state.wound_cards[index].efter_behandlingen.armorFalse }}</p>

                    <div v-if="store.state.wound_cards[index].behandlings_timer.armorFalse.timerActive == true" class="bg-[#3E3C2F]/[.7] h-[50px] w-[100%] rounded-full p-[7px]">
                    </div>
                </div>

                <div v-else-if="store.state.wound_cards[index].chestWound == false && store.state.wound_cards[index].headWound == false ">
                    <p class="font-semibold text-[#F8D027]">Skader3:</p>
                    <p class="mb-2 opacity-[0.9]">{{ store.state.wound_cards[index].skade }}</p>

                    <p class="font-semibold text-[#F8D027]">Behandling:</p>
                    <p class="mb-2 opacity-[0.9]">{{ store.state.wound_cards[index].behandling.armorFalse }}</p>

                    <p class="font-semibold text-[#F8D027]">Efter behandlingen:</p>
                    <p class="mb-4 opacity-[0.9]">{{ store.state.wound_cards[index].efter_behandlingen.armorFalse }}</p>

                    <div v-if="store.state.wound_cards[index].behandlings_timer.armorFalse.timerActive == true" class="bg-[#3E3C2F]/[.7] h-[50px] w-[100%] rounded-full p-[7px]">
                    </div>
                </div>



            </div>



        </div>



        <plate_helmet_toggle class="row-start-2 row-span-1 h-[50px]"></plate_helmet_toggle>

        <nav_bar class="row-start-3 row-span-1 h-[80px]"></nav_bar>

    </div>

</template>

<script setup lang="ts">
//import comps
import nav_bar from '../components/nav_bar.vue'
import plate_helmet_toggle from '../components/plate_helmet_toggle.vue'
import SVG_icon from '../assets/SVG_icons.vue'

//import store
import { store } from '../store/store.js'

let index = Number(localStorage.getItem("generatedWoundCard_Index"))


function getSVGsrc() {
    console.log(store.state.wound_cards[index].vectorSrc)
    return ("../assets/svg/blank_avatar.svg") 
}

</script>
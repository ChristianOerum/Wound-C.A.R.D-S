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


            <img id="vectorAvatar" class="h-[100px] absolute bottom-[10px] h-[85%]" src="../assets/svg/blank_avatar.svg">



            <div class="absolute bottom-[35px] h-fit w-[100%] text-[18px] text-white">



                <div v-if="(store.state.wound_cards[index].chestWound == true && store.state.armor.wearingChestPlate == true) || (store.state.wound_cards[index].headWound == true && store.state.armor.wearingHelmet == true)">
                    <p class="font-semibold text-[#F8D027]">{{ "Kort Nr. " + store.state.wound_cards[index].id }}</p>
                    
                    <p class="font-semibold text-[#F8D027]">Skader:</p>
                    <p class="mb-2 opacity-[0.9]">{{ store.state.wound_cards[index].skade }}</p>

                    <p class="font-semibold text-[#F8D027]">Behandling:</p>
                    <p class="mb-2 opacity-[0.9]">{{ store.state.wound_cards[index].behandling.armorTrue }}</p>

                    <p class="font-semibold text-[#F8D027]">Efter behandlingen:</p>
                    <p class="mb-4 opacity-[0.9]">{{ store.state.wound_cards[index].efter_behandlingen.armorTrue }}</p>

                    <div v-if="store.state.wound_cards[index].behandlings_timer.armorTrue.dead == true" class="bg-[#6D3030]/[.3] h-[50px] w-[100%] rounded-full p-[5px]">
                    
                        <div @click="woundCardTreated()" class="bg-[#892829]/[.7] w-[100%] h-[100%] rounded-full flex flex-row items-center justify-center">
                            
                            <SVG_icon class=" h-5 w-5 mr-2" name="skull"></SVG_icon>
                            <p class="font-semibold">Klik ved respawn</p>
                            <SVG_icon class=" h-5 w-5 ml-2" name="skull"></SVG_icon>

                        </div>
                    
                    </div>

                    <div v-else-if="store.state.wound_cards[index].behandlings_timer.armorTrue.timerActive == false" class="bg-[#3E3C2F]/[.7] h-[50px] w-[100%] rounded-full p-[5px]">
                    
                        <div @click="woundCardTreated()" class="bg-[#F8D027]/[.8] w-[100%] h-[100%] rounded-full flex flex-row items-center justify-center">
                            
                            <p class="font-semibold text-[#584805]">Behandel</p>

                        </div>
                
                    </div>


                    <div v-else-if="store.state.wound_cards[index].behandlings_timer.armorTrue.timerActive == true && store.state.respawn_timer > 0" class="bg-[#3E3C2F]/[.7] h-[50px] w-[100%] rounded-full p-[5px] relative flex flex-row items-center">
                        
                        <p class="ml-3 font-semibold text-[#F8D027] text-[22px]">{{ fmtMSS(store.state.respawn_timer) }}</p>

                        <div id="behandel_button1" @click="woundCardCountdownStart()" class="w-auto h-[calc(100%-10px)] bg-[#F8D027] flex flex-cols items-center rounded-full absolute right-[0px] right-[5px]">
                            <SVG_icon class=" h-5 w-5 ml-2" name="clock"></SVG_icon>
                            <p class="ml-1 mr-3 font-semibold text-[#584805]">Behandel</p>
                        </div>
                    
                    </div>

                    <div v-else-if="store.state.wound_cards[index].behandlings_timer.armorTrue.timerActive == true && store.state.respawn_timer <= 0" class="bg-[#3E3C2F]/[.7] h-[50px] w-[100%] rounded-full p-[5px] relative flex flex-row items-center">
                        
                        <div @click="woundCardTreated()" class="bg-[#F8D027]/[.8] w-[100%] h-[100%] rounded-full flex flex-row items-center justify-center">
                            
                            <p class="font-semibold text-[#584805]">Behandel</p>

                        </div>
                    
                    </div>

                </div>






                <div v-else-if="(store.state.wound_cards[index].chestWound == true && store.state.armor.wearingChestPlate == false) || (store.state.wound_cards[index].headWound == true && store.state.armor.wearingHelmet == false)">
                    <p class="font-semibold text-[#F8D027]">{{ "Kort Nr. " + store.state.wound_cards[index].id }}</p>
                    
                    <p class="font-semibold text-[#F8D027]">Skader:</p>
                    <p class="mb-2 opacity-[0.9]">{{ store.state.wound_cards[index].skade }}</p>

                    <p class="font-semibold text-[#F8D027]">Behandling:</p>
                    <p class="mb-2 opacity-[0.9]">{{ store.state.wound_cards[index].behandling.armorFalse }}</p>

                    <p class="font-semibold text-[#F8D027]">Efter behandlingen:</p>
                    <p class="mb-4 opacity-[0.9]">{{ store.state.wound_cards[index].efter_behandlingen.armorFalse }}</p>

                    <div v-if="store.state.wound_cards[index].behandlings_timer.armorFalse.dead == true" class="bg-[#6D3030]/[.3] h-[50px] w-[100%] rounded-full p-[5px]">
                    
                        <div @click="woundCardTreated()" class="bg-[#892829]/[.7] w-[100%] h-[100%] rounded-full flex flex-row items-center justify-center">
                            
                            <SVG_icon class=" h-5 w-5 mr-2" name="skull"></SVG_icon>
                            <p class="font-semibold">Klik ved respawn</p>
                            <SVG_icon class=" h-5 w-5 ml-2" name="skull"></SVG_icon>

                        </div>
                    
                    </div>

                    <div v-else-if="store.state.wound_cards[index].behandlings_timer.armorFalse.timerActive == false" class="bg-[#3E3C2F]/[.3] h-[50px] w-[100%] rounded-full p-[5px]">
                    
                        <div @click="woundCardTreated()" class="bg-[#F8D027]/[.8] w-[100%] h-[100%] rounded-full flex flex-row items-center justify-center">
                            
                            <p class="font-semibold text-[#584805]">Behandel</p>

                        </div>
                    
                    </div>

                    <div v-else-if="store.state.wound_cards[index].behandlings_timer.armorFalse.timerActive == true && store.state.respawn_timer > 0" class="bg-[#3E3C2F]/[.7] h-[50px] w-[100%] rounded-full p-[5px] relative flex flex-row items-center">
                    
                        <p class="ml-3 font-semibold text-[#F8D027] text-[22px]">{{ fmtMSS(store.state.respawn_timer) }}</p>

                        <div id="behandel_button2" @click="woundCardCountdownStart()" class="w-auto h-[calc(100%-10px)] bg-[#F8D027] flex flex-cols items-center rounded-full absolute right-[0px] right-[5px]">
                            <SVG_icon class=" h-5 w-5 ml-2" name="clock"></SVG_icon>
                            <p class="ml-1 mr-3 font-semibold text-[#584805]">Behandel</p>
                        </div>
                    
                    </div>

                    <div v-else-if="store.state.wound_cards[index].behandlings_timer.armorFalse.timerActive == true && store.state.respawn_timer <= 0" class="bg-[#3E3C2F]/[.7] h-[50px] w-[100%] rounded-full p-[5px] relative flex flex-row items-center">
                        
                        <div @click="woundCardTreated()" class="bg-[#F8D027]/[.8] w-[100%] h-[100%] rounded-full flex flex-row items-center justify-center">
                            
                            <p class="font-semibold text-[#584805]">Behandel</p>

                        </div>
                    
                    </div>

                </div>






                <div v-else-if="store.state.wound_cards[index].chestWound == false && store.state.wound_cards[index].headWound == false ">
                    <p class="font-semibold text-[#F8D027]">{{ "Kort Nr. " + store.state.wound_cards[index].id }}</p>
                    
                    <p class="font-semibold text-[#F8D027]">Skader:</p>
                    <p class="mb-2 opacity-[0.9]">{{ store.state.wound_cards[index].skade }}</p>

                    <p class="font-semibold text-[#F8D027]">Behandling:</p>
                    <p class="mb-2 opacity-[0.9]">{{ store.state.wound_cards[index].behandling.armorFalse }}</p>

                    <p class="font-semibold text-[#F8D027]">Efter behandlingen:</p>
                    <p class="mb-4 opacity-[0.9]">{{ store.state.wound_cards[index].efter_behandlingen.armorFalse }}</p>

                    <div v-if="store.state.wound_cards[index].behandlings_timer.armorFalse.dead == true" class="bg-[#6D3030]/[.3] h-[50px] w-[100%] rounded-full p-[5px]">
                    
                        <div @click="woundCardTreated()" class="bg-[#892829]/[.7] w-[100%] h-[100%] rounded-full flex flex-row items-center justify-center">
                            
                            <SVG_icon class=" h-5 w-5 mr-2" name="skull"></SVG_icon>
                            <p class="font-semibold">Klik ved respawn</p>
                            <SVG_icon class=" h-5 w-5 ml-2" name="skull"></SVG_icon>

                        </div>
                    
                    </div>

                    <div v-else-if="store.state.wound_cards[index].behandlings_timer.armorFalse.timerActive == false" class="bg-[#3E3C2F]/[.7] h-[50px] w-[100%] rounded-full p-[5px]">
                    
                        <div @click="woundCardTreated()" class="bg-[#F8D027]/[.8] w-[100%] h-[100%] rounded-full flex flex-row items-center justify-center">
                            
                            <p class="font-semibold text-[#584805]">Behandel</p>

                        </div>
                    
                    </div>

                    <div v-else-if="store.state.wound_cards[index].behandlings_timer.armorFalse.timerActive == true && store.state.respawn_timer > 0" class="bg-[#3E3C2F]/[.7] h-[50px] w-[100%] rounded-full p-[5px] relative flex flex-row items-center">
                        
                        <p class="ml-3 font-semibold text-[#F8D027] text-[22px]">{{ fmtMSS(store.state.respawn_timer) }}</p>

                        <div id="behandel_button3" @click="woundCardCountdownStart()" class="w-auto h-[calc(100%-10px)] bg-[#F8D027] flex flex-cols items-center rounded-full absolute right-[0px] right-[5px]">
                            <SVG_icon class=" h-5 w-5 ml-2" name="clock"></SVG_icon>
                            <p class="ml-1 mr-3 font-semibold text-[#584805]">Behandel</p>
                        </div>
                    
                    </div>

                    <div v-else-if="store.state.wound_cards[index].behandlings_timer.armorFalse.timerActive == true && store.state.respawn_timer <= 0" class="bg-[#3E3C2F]/[.7] h-[50px] w-[100%] rounded-full p-[5px] relative flex flex-row items-center">
                        
                        <div @click="woundCardTreated()" class="bg-[#F8D027]/[.8] w-[100%] h-[100%] rounded-full flex flex-row items-center justify-center">
                            
                            <p class="font-semibold text-[#584805]">Behandel</p>

                        </div>
                    
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

//import avatars
import chest_avatar from '../assets/svg/chest_avatar.svg'
import torso_back_chest_avatar from '../assets/svg/torso-chest-back_avatar.svg'
import head_avatar from '../assets/svg/head_avatar.svg'
import left_hand_avatar from '../assets/svg/left_hand_avatar.svg'
import right_hand_avatar from '../assets/svg/right_hand_avatar.svg'
import lower_arm_right_avatar from '../assets/svg/lower_arm_right_avatar.svg'
import lower_arm_left_avatar from '../assets/svg/lower_arm_left_avatar.svg'
import left_upper_arm_shoulder_avatar from '../assets/svg/left_upper_arm_shoulder_avatar.svg'
import right_upper_arm_shoulder_avatar from '../assets/svg/right_upper_arm_shoulder_avatar.svg'
import mag_avatar from '../assets/svg/mag_avatar.svg'
import sidearm_avatar from '../assets/svg/sidearm_avatar.svg'
import radio_avatar from '../assets/svg/radio_avatar.svg'
import throat_avatar from '../assets/svg/throat_avatar.svg'
import right_thigh_avatar from '../assets/svg/right_thigh_avatar.svg'
import left_thigh_avatar from '../assets/svg/left_thigh_avatar.svg'


//import store og router
import { store } from '../store/store.js'
import { router } from '../router/index.js'
import { useRoute } from 'vue-router';

//import onmount
import { onMounted } from 'vue'
import { onBeforeUnmount } from 'vue'

let index = Number(localStorage.getItem("generatedWoundCard_Index"))
const route = useRoute()
let id

onMounted(() => {

    const svg = document.getElementById('vectorAvatar')

    if (store.state.wound_cards[index].vectorSrc == "chest") {
        svg.src = chest_avatar
    }
    
    else if (store.state.wound_cards[index].vectorSrc == "torso") {
        svg.src = torso_back_chest_avatar
    }

    else if (store.state.wound_cards[index].vectorSrc == "head") {
        svg.src = head_avatar
    }

    else if (store.state.wound_cards[index].vectorSrc == "right-hand") {
        svg.src = right_hand_avatar
    }

    else if (store.state.wound_cards[index].vectorSrc == "left-hand") {
        svg.src = left_hand_avatar
    }

    else if (store.state.wound_cards[index].vectorSrc == "left-lower-arm") {
        svg.src = lower_arm_left_avatar
    }

    else if (store.state.wound_cards[index].vectorSrc == "right-lower-arm") {
        svg.src = lower_arm_right_avatar
    }

    else if (store.state.wound_cards[index].vectorSrc == "throat") {
        svg.src = throat_avatar
    }

    else if (store.state.wound_cards[index].vectorSrc == "equipment-mags") {
        svg.src = mag_avatar
    }

    else if (store.state.wound_cards[index].vectorSrc == "left-thigh") {
        svg.src = left_thigh_avatar
    }

    else if (store.state.wound_cards[index].vectorSrc == "right-thigh") {
        svg.src = right_thigh_avatar
    }

    else if (store.state.wound_cards[index].vectorSrc == "sidearm") {
        svg.src = sidearm_avatar
    }

    else if (store.state.wound_cards[index].vectorSrc == "equipment-radio") {
        svg.src = radio_avatar
    }

    else if (store.state.wound_cards[index].vectorSrc == "right-upper-arm") {
        svg.src = right_upper_arm_shoulder_avatar
    }

    else if (store.state.wound_cards[index].vectorSrc == "left-upper-arm") {
        svg.src = left_upper_arm_shoulder_avatar
    }


    if ((store.state.wound_cards[index].chestWound == true && store.state.armor.wearingChestPlate == true) || (store.state.wound_cards[index].headWound == true && store.state.armor.wearingHelmet == true) && (store.state.wound_cards[index].behandlings_timer.armorTrue.timerActive == true)) {

    store.state.respawn_timer = store.state.wound_cards[index].behandlings_timer.armorTrue.time
    }

    else if ((store.state.wound_cards[index].chestWound == true && store.state.armor.wearingChestPlate == false) || (store.state.wound_cards[index].headWound == true && store.state.armor.wearingHelmet == false) && (store.state.wound_cards[index].behandlings_timer.armorFalse.timerActive == true)) {

    store.state.respawn_timer = store.state.wound_cards[index].behandlings_timer.armorFalse.time
    }

    else if (store.state.wound_cards[index].chestWound == false && store.state.wound_cards[index].headWound == false && store.state.wound_cards[index].behandlings_timer.armorFalse.timerActive == true) {

    store.state.respawn_timer = store.state.wound_cards[index].behandlings_timer.armorFalse.time
    }


})


onBeforeUnmount(() => {
    clearInterval(id)
    store.state.countdownStarted = false
})

function fmtMSS(s){return(s-(s%=60))/60+(9<s?':':':0')+s}

function woundCardTreated(){
    console.log("Wound Treated!")
    store.state.woundCardGenerated = false
    router.replace({ name: 'WoundCardMain' })
}

function woundCardCountdownStart(){

    if (store.state.countdownStarted == false){
        
        store.state.countdownStarted = true

        function countdown() {
            if (store.state.respawn_timer == 0 || store.state.countdownStarted == false) {
                clearInterval(id);
                store.state.countdownStarted = false
            }
            store.state.respawn_timer -= 1
        }
        id = setInterval(countdown,1000);
    }

}


</script>
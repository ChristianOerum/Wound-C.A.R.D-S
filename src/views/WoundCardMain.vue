<template>

    <div class="bg-[#1E2124] h-screen w-screen grid grid-rows gap-[10px] p-[20px]" style="grid-template-rows: auto 50px 80px">

        <div class="row-start-1 row-span-1 w-[100%] h-[100%] relative flex flex-col items-center">

            <p class="text-center w-[90%] text-[#686A6C] font-semibold text-[2.1vh] mt-[10px]">Swipe for at generer nyt random wound-card.</p>

            <img class="h-[100px] absolute bottom-[10px] h-[85%]" src='../assets/svg/blank_avatar.svg'/>



            <div class="bg-[#3E3C2F]/[.7] absolute bottom-[35px] h-[70px] w-[55%] rounded-full p-[7px]">

                <div class="bg-[#F8D027]/[.14] h-[100%] rounded-full overflow-hidden relative">

                    <div id="slider" class="relative rounded-full bg-[#F8D027] h-[100%] w-[56px] flex flex-col items-center justify-center">
                        
                        <p id="swipe-text" class="absolute font-semibold w-max text-[1.9vh] text-[#ffffff]/[.2] w-[80px] left-[66px] top-[50%] translate-y-[-50%]">Swipe her</p>

                        <SVG_icon class="h-[70%] w-[70%]" name="dice"></SVG_icon>

                    </div>

                </div>

            </div>



        </div>



        <plate_helmet_toggle class="row-start-2 row-span-1 h-[50px]"></plate_helmet_toggle>

    </div>

</template>

<script setup lang="ts">
//import comps
import plate_helmet_toggle from '../components/plate_helmet_toggle.vue'
import SVG_icon from '../assets/SVG_icons.vue'

//import store
import { store } from '../store/store.js'
import { router } from '../router/index.js'
 
//vue imports
import { onMounted } from 'vue'



onMounted(() => {
    const slider = document.getElementById('slider')
    const swipe_text = document.getElementById('swipe-text')
    
    var mouseDown = false, mouseX = 0

    slider.addEventListener('touchstart', function (evt) {
        slider.style.transition = ""
        mouseDown = true;
    });

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    document.addEventListener('touchmove', function (evt) {
            if (!mouseDown) {
                return
            }
            else {
                var deltaX = evt.touches[0].clientX - mouseX
                mouseX = evt.touches[0].clientX
                let sliderX = (mouseX-((window.innerWidth*0.55)/2)) - (56/2)
                let sliderXMax = window.innerWidth - ((window.innerWidth*0.55)) - 56
                swipe_text.style.opacity = "0"
                swipe_text.style.transition = "opacity .3s ease"

                slider.style.left = (sliderX)+"px";

            

                if (  sliderX >= sliderXMax ) {
                    console.log("confirmed")
                    slider.style.left = sliderXMax + "px"
                    mouseDown = false;

                    let genIndex= getRandomInt(store.state.wound_cards.length)

                    localStorage.setItem("generatedWoundCard_Index", String(genIndex))

                    console.log("Card id: " + store.state.wound_cards[genIndex].id)

                    store.state.woundCardGenerated = true
                    router.replace({ name: 'GivenWoundCardPage' })
                }

            } 
        })

    document.addEventListener('touchend', function (evt) {
        if (mouseDown == true) {
            swipe_text.style.opacity = "1"
            swipe_text.style.transition = "opacity .3s ease"

            slider.style.left = "0px"
            slider.style.transition = "left .7s ease"
            mouseDown = false;
        }
    });

})

</script>
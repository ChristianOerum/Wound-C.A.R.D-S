<template>

    <div class="bg-[#1E2124] h-screen w-screen grid grid-rows gap-[10px] p-[20px]" style="grid-template-rows: auto 50px 80px">

        <div class="row-start-1 row-span-1 w-[100%] h-[100%] relative flex flex-col items-center">

            <p class="text-center w-[90%] text-[#686A6C] font-semibold text-[18px] mt-[10px]">Swipe for at generer nyt random wound-card.</p>

            <img class="h-[100px] absolute bottom-[10px] h-[85%]" src='../assets/svg/blank_avatar.svg'/>



            <div class="bg-[#3E3C2F]/[.7] absolute bottom-[35px] h-[70px] w-[55%] rounded-full p-[7px]">

                <div class="bg-[#F8D027]/[.14] h-[100%] rounded-full overflow-hidden">

                    <div id="slider" class="relative rounded-full bg-[#F8D027] h-[100%] w-[56px] flex flex-col items-center justify-center">
                        
                        <SVG_icon class="h-[70%] w-[70%]" name="dice"></SVG_icon>

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

//vue imports
import { onMounted } from 'vue'


onMounted(() => {
    const slider = document.getElementById('slider')
    
    var mouseDown = false, mouseX = 0

    slider.addEventListener('touchstart', function (evt) {
        slider.style.transition = ""
        mouseDown = true;
    });

    document.addEventListener('touchmove', function (evt) {
            if (!mouseDown) {
                return
            }
            else {
                var deltaX = evt.touches[0].clientX - mouseX
                mouseX = evt.touches[0].clientX
                let sliderX = (mouseX-((window.innerWidth*0.55)/2)) - (56/2)
                let sliderXMax = window.innerWidth - ((window.innerWidth*0.55)) - 56

                slider.style.left = (sliderX)+"px";

            

                if (  sliderX >= sliderXMax ) {
                    console.log("confirmed")

                    slider.style.left = sliderXMax + "px"
                    mouseDown = false;
                }

            } 
        })

    document.addEventListener('touchend', function (evt) {
        if (mouseDown == true) {
            slider.style.left = "0px"
            slider.style.transition = "left .7s ease"
            mouseDown = false;
        }
    });

})

</script>
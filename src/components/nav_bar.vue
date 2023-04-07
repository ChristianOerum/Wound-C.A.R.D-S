<template>

    <div class="w-[100%] h-[100%] bg-[#36393E] rounded-xl grid relative" style="grid-template-columns: 1fr 1fr 1fr">

        <div  class="col-start-1 col-span-1 w-auto h-[100%] flex flex-col items-center justify-center">
            <SVG_icon class="w-12 h-12" name="Menu_woundcard" style="opacity: 1"></SVG_icon>
        </div>

        <div class="col-start-2 col-span-1 w-auto h-[100%] flex flex-col items-center justify-center">
            <SVG_icon class="w-12 h-12" name="Menu_team" style="opacity: 0.2"></SVG_icon>
        </div>

        <div class="col-start-3 col-span-1 w-auto h-[100%] flex flex-col items-center justify-center">
            <SVG_icon class="w-10 h-10" name="Menu_myaccount" style="opacity: 0.2"></SVG_icon>
        </div>

    </div>

</template>

<script setup lang="ts">
//import comps
import SVG_icon from '../assets/SVG_icons.vue'

</script>
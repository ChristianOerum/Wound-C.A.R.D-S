<template>
    <div class="w-100 h-screen flex flex-col items-center justify-center relative">
        <QrStream @click="gotoPage()" class="h-100 w-100 relative" @decode="onDecode" @init="onInit"></QrStream>
    </div>
</template>


<script setup lang="ts">
//qr scanner
import { QrStream } from 'vue3-qr-reader';

//firebase realtime db
import { db } from "../firebase";
import { ref, query, orderByChild, equalTo, onValue } from "firebase/database";

//import store
import { store } from '../store/store.js'

//import router and useroute
import { router } from '../router/index'

function gotoPage(){
    console.log("clicked")
    router.replace({ name: 'Team' })
}

function onDecode(decodedString){
    console.log(decodedString)
    if (decodedString != "") {
        router.replace({ name: 'Team' })
    }
}

function onInit() {
      console.log("Scanning...")
}

</script>
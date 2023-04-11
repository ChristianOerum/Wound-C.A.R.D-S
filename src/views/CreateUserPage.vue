<template>

    <div class="h-[100%] w-[100%] bg-[#1E2124]">

        <button @click="writeUserData()">Click to generate</button>

    </div>

</template>

<script setup lang="ts">

//import firebase + firebase.js db
import { db } from '../firebase.js'
import { ref, set, push } from 'firebase/database'

function writeUserData() {

    const usersRef = ref(db, 'users')

    const newUserRef = push(usersRef)

    set(newUserRef, {
        first_name: "Chris",
        last_name: "Ørum",
        email: "chri@bubbles.dk",
        tag: "Mr_Bubbles",
        password: "bubbles123"
    })
}





</script>
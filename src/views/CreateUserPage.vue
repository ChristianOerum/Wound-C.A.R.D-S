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
        first_name: "test2",
        last_name: "test2",
        email: "test2@bubbles.dk",
        tag: "test2",
        password: "test2",
        teamList: ""
    }).then(() => {
    
        const userId = newUserRef.key;
        const medicalRef = ref(db, 'medicalStatus')
        const newMedicalRef = push(medicalRef)

        set(newMedicalRef, {
            relatedID: userId,
            status: "Alive",
            tag: "test2"
        })

        console.log("added user and medical")

    }).catch((error) => {
        console.log("Error creating user: " + error);
    });

}

</script>
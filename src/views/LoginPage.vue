<template>

    <div class="h-screen w-screen bg-[#1E2124] relative">

        <div class="flex flex-col items-center justify-center h-[100%] w-[100%]">
            <img class="h-auto w-[50%]" src="../assets/svg/card_logo.svg">

            <p class="text-[4vh] text-white font-semibold">Wound Cards</p>
            <p class="text-[2.1vh] text-white/[.4] font-semibold mb-5">By C.A.R.D. Airsoft</p>  


            <div class="w-[80%] ">
                <input id="email" type="email" placeholder="Email" class="placeholder-[#535659] bg-[#282C30] text-white font-semibold w-[100%] p-3 mb-2 rounded-xl focus:outline-[3px] focus:outline outline-[#F8D027]"/>

                <input id="password" type="password" placeholder="Password" class="placeholder-[#535659] bg-[#282C30] text-white font-semibold w-[100%] p-3 mb-2 rounded-xl focus:outline-[3px] focus:outline outline-[#F8D027]"/>

                <div class="w-[100%] h-14 grid gap-2 mt-8" style="grid-template-columns: 1fr 1fr">
                    
                    <div @click="loginAsUser()" class="bg-[#6D6130] h-[100%] w-[100%] col-start-1 row-span-1 flex flex-cols items-center justify-center p-[5px] rounded-full">
                        <div class="bg-[#F8D027] flex flex-cols items-center justify-center w-[100%] h-[100%] rounded-full">
                            <p class="text-[#584805] font-semibold ">Login</p>
                        </div>
                    </div>

                    <div @click="loginAsGuest()" class="bg-[#2D3034] h-[100%] w-[100%] col-start-2 row-span-1 flex flex-cols items-center justify-center p-[5px] rounded-full">
                        <div class="bg-[#424549] flex flex-cols items-center justify-center w-[100%] h-[100%] rounded-full">
                            <p class="text-white/[.7] font-semibold">Gæst</p>
                        </div>
                    </div>

                </div>

            </div>

            <p class="absolute bottom-[35px] font-semibold text-white/[0.1]">App v1.14</p>
            <p class="absolute bottom-[20px] text-[10px] font-semibold text-white/[0.1]">Copyright © 2023 C.A.R.D. Airsoft. Alle rettigheder forbeholdes.</p>
        </div>

    </div>

</template>

<script setup lang="ts">

//firebase realtime db
import { db } from "../firebase";
import { ref, query, orderByChild, equalTo, onValue } from "firebase/database";

//import store
import { store } from '../store/store.js'

//import router and useroute
import { router } from '../router/index'

function loginAsGuest(){
    store.state.loggedIn = true
    localStorage.setItem('loggedIn','true')
    gotoPage()
}

function loginAsUser(){

    const usersRef = ref(db, "users");
    const valueToQuery = document.getElementById('email').value;
    const queryRef = query(usersRef, orderByChild("email"), equalTo(valueToQuery));

    onValue(queryRef, (snapshot) => {
    const data = snapshot.val();
    // Handle the data as needed
    
    if (data) {
    Object.keys(data).forEach((documentId) => {
        const userData = data[documentId];
            //console.log(documentId);
            //console.log(userData.password);
        if(document.getElementById('password').value == userData.password) {
            console.log("logged in")

            store.state.userInfo.loggedIn = true
            store.state.loggedIn = true
            store.state.userInfo.UserID = documentId
            store.state.userInfo.FirstName = userData.first_name
            store.state.userInfo.LastName = userData.last_name
            store.state.userInfo.Email = userData.email
            store.state.userInfo.Tag = userData.tag
            localStorage.setItem('loggedIn','true')
            gotoPage()
        }
        else {
            console.log('Login failed')
        }
    });
    }
    else {
        console.log('Login failed')
    }
});

}

function gotoPage(){
    router.replace({ name: 'WoundCardMain' })
}

</script>
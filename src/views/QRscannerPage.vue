<template>
    <div class="w-100 h-screen flex flex-col items-center justify-center relative">
        <QrStream @click="gotoPage()" class="h-100 w-100 relative" @decode="onDecode" @init="onInit"></QrStream>
    </div>
</template>


<script setup lang="ts">
//qr scanner
import { QrStream } from 'vue3-qr-reader';

//mixins
import { firebaseInit } from '../mixins/firebaseInit';

//firebase realtime db
import { db } from "../firebase";
import { ref, update, get } from "firebase/database";

//import store
import { store } from '../store/store.js'

//import router and useroute
import { router } from '../router/index'

function gotoPage(){
    console.log("clicked")
    router.replace({ name: 'Team' })
}

function onDecode(decodedString){
    if (decodedString != "") {
        console.log("scanned")
        let tempArr
        const recordRef = ref(db, "users/" + store.state.userInfo.UserID);

        get(recordRef).then((snapshot) => {
            const data = snapshot.val();

            for (const element of data.teamList) {
                if (element == decodedString || decodedString.charAt(0) != "-" ) {
                    console.log("ID already in your list or QR is invalid.")
                    //Kill function
                    return
                }
            }

            if (data.teamList.length > 0 ) {
                console.log("test1")
                tempArr = data.teamList
                tempArr.push(decodedString)
                console.log(tempArr)
            } 
            else {
                console.log("test2")
                tempArr = [decodedString]
            }

            const updateData = {
                teamList: tempArr
            };

            console.log(recordRef)
            update(recordRef, updateData)
            .then(() => {
                console.log("Updated team list");

                firebaseInit()

                router.replace({ name: 'Team' })
            })
            .catch((error) => {
                console.error("Error updated team list:", error);
            });

            })
}
}

function onInit() {
      console.log("Scanning...")
}

</script>
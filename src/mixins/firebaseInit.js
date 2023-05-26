//firebase realtime db
import { db } from "../firebase";
import { ref, query, orderByChild, equalTo, onValue, get, child, update } from "firebase/database";

//import store
import { store } from '../store/store.js'
  
export async function firebaseInit() {

        console.log(store.state.userInfo.UserID)
        const recordRef = ref(db, "users/" + store.state.userInfo.UserID);
          
          get(recordRef).then((snapshot) => {
              const data = snapshot.val();
    
              console.log(data.teamList)
    
              store.state.userInfo.loggedIn = true
              store.state.loggedIn = true
              store.state.userInfo.FirstName = data.first_name
              store.state.userInfo.LastName = data.last_name
              store.state.userInfo.Email = data.email
              store.state.userInfo.Tag = data.tag
              store.state.userInfo.TeamList = data.teamList
              localStorage.setItem('loggedIn','true')
    
              localStorage.setItem('UserLoggedIn','true')
              localStorage.setItem('FirstName',data.first_name)
              localStorage.setItem('LastName',data.last_name)
              localStorage.setItem('Email',data.email)
              localStorage.setItem('Tag',data.tag)
    
      const usersRef = ref(db, "medicalStatus");
      const queryRef = query(usersRef, orderByChild("relatedID"), equalTo(store.state.userInfo.UserID));

      get(queryRef).then((snapshot) => {
        const recordKey = Object.keys(snapshot.val())[0];
        const recordRef = child(usersRef, recordKey);
        const recordData = snapshot.val()[recordKey];

        let updateData = {
          status: "Alive"
        };

          update(recordRef, updateData)
          .then(() => {
              console.log("Updated team list");
          })
          .catch((error) => {
              console.error("Error updated team list:", error);
          });

      })

      store.state.userInfo.TeamObjectArr = []

      for (const element of store.state.userInfo.TeamList) {
        
            const usersRef = ref(db, "medicalStatus");
            let newStr = element.replace(/ /g,'')
            const queryRef = query(usersRef, orderByChild("relatedID"), equalTo(newStr));
    
            get(queryRef).then((snapshot) => {
              const data = snapshot.val();
              
              if (data) {
              Object.keys(data).forEach((documentId) => {
                const medicalData = data[documentId];
    
                console.log(medicalData)
                store.state.userInfo.TeamObjectArr.push(medicalData)
              })
              }
    
              //store.state.userInfo.TeamObjectArr.push(data)
            })
    
            console.log(store.state.userInfo.TeamObjectArr)
        }
    
    
        for (const element of store.state.userInfo.TeamList) {
    
          const usersRef = ref(db, "medicalStatus");
          let newStr = element.replace(/ /g,'')
          const queryRef = query(usersRef, orderByChild("relatedID"), equalTo(newStr));
    
          onValue(queryRef, (snapshot) => {

            console.log("OnValue triggered")
            const data = snapshot.val();
            // Handle the data as needed
            //console.log(data)
    
            if (data) {
            Object.keys(data).forEach((documentId) => {
                const userData = data[documentId];
                //
                //console.log(userData.relatedID)
                //tempArr.push(userData)
                let index = store.state.userInfo.TeamObjectArr.indexOf(store.state.userInfo.TeamObjectArr.find((element) => element.relatedID === userData.relatedID));
                console.log(store.state.userInfo.TeamObjectArr[index])
                store.state.userInfo.TeamObjectArr[index] = userData
    
    
            })
            }
            })
          }
        })
}
    
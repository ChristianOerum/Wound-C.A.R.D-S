import { createStore } from 'vuex';

export const store = createStore({
    state: {
        userInfo: {
          loggedIn: JSON.parse(localStorage.getItem('UserLoggedIn')),
          UserID: localStorage.getItem('UserId'),
          FirstName: localStorage.getItem('FirstName'),
          LastName: localStorage.getItem('LastName'),
          Email: localStorage.getItem('Email'),
          Tag: localStorage.getItem('Tag'),
          TeamList: [],
          TeamObjectArr: []
          
        },
        armor: {
          wearingHelmet: JSON.parse(localStorage.getItem('wearingHelmet')),
          wearingChestPlate: JSON.parse(localStorage.getItem('wearingChestPlate')),
        },
        generated_WoundcardIndex: 0,
        respawn_timer: 0,
        countdownStarted: false,
        loggedIn: JSON.parse(localStorage.getItem('loggedIn')),
        woundCardGenerated: false,
        wound_cards: [

          { 
            id: 1,
            skade: "Du er ramt i venstre hånd.",
            chestWound: false,
            headWound: false,
            behandling: {
              armorTrue: "",
              armorFalse: "Forbind patientens knyttede hånd, hånden er nu ubrugelig, Giv patienten smertestillende."
            },
            efter_behandlingen: {
              armorTrue: "",
              armorFalse: "Du er kampdygtig igen. Hånden kan ikke længere bruges."
            },
            behandlings_timer: {
              armorTrue: {timerActive: false, time: null, dead: false},
              armorFalse: {timerActive: false, time: null, dead: false}
            },
            vectorSrc: "left-hand"
          },

          { 
            id: 2,
            skade: "Du er ramt i højre hånd",
            chestWound: false,
            headWound: false,
            behandling: {
              armorTrue: "",
              armorFalse: "Forbind patientens knyttede hånd, hånden er nu ubrugelig, Giv patienten smertestillende."
            },
            efter_behandlingen: {
              armorTrue: "",
              armorFalse: "Du er kampdygtig igen. Hånden kan ikke længere bruges."
            },
            behandlings_timer: {
              armorTrue: {timerActive: false, time: null, dead: false},
              armorFalse: {timerActive: false, time: null, dead: false}
            },
            vectorSrc: "right-hand"
          },

          { 
            id: 4,
            skade: "Du er ramt i højre underarm.",
            chestWound: false,
            headWound: false,
            behandling: {
              armorTrue: "",
              armorFalse: "Du er ramt i højre underarm. Forbind patientens underarm. Giv smertestillende."
            },
            efter_behandlingen: {
              armorTrue: "",
              armorFalse: "Du er kampdygtig igen. Armen kan ikke længere bruges."
            },
            behandlings_timer: {
              armorTrue: {timerActive: false, time: null, dead: false},
              armorFalse: {timerActive: false, time: null, dead: false}
            },
            vectorSrc: "right-lower-arm"
          },

          { 
            id: 5,
            skade: "Du er ramt i venstre overarm. Blødende kødsår.",
            chestWound: false,
            headWound: false,
            behandling: {
              armorTrue: "",
              armorFalse: "Anlæg tourniquet. Forbind patientens overarm. Giv smertestillende."
            },
            efter_behandlingen: {
              armorTrue: "",
              armorFalse: "Du er kampdygtig igen."
            },
            behandlings_timer: {
              armorTrue: {timerActive: false, time: null, dead: false},
              armorFalse: {timerActive: false, time: null, dead: false}
            },
            vectorSrc: "left-upper-arm"
          },

          { 
            id: 3,
            skade: "Du er ramt i venstre underarm",
            chestWound: false,
            headWound: false,
            behandling: {
              armorTrue: "",
              armorFalse: "Anlæg tourniquet. Forbind patientens underarm Lav en slynge som armen kan hænge i. Giv smertestillende."
            },
            efter_behandlingen: {
              armorTrue: "",
              armorFalse: "Du er kampdygtig igen. Armen kan ikke længere bruges."
            },
            behandlings_timer: {
              armorTrue: {timerActive: false, time: null, dead: false},
              armorFalse: {timerActive: false, time: null, dead: false}
            },
            vectorSrc: "left-lower-arm"
          },

          { 
            id: 6,
            skade: "Du er ramt i højre overarm. Blødende kødsår.",
            chestWound: false,
            headWound: false,
            behandling: {
              armorTrue: "",
              armorFalse: "Anlæg tourniquet. Forbind patientens overarm. Giv smertestillende."
            },
            efter_behandlingen: {
              armorTrue: "",
              armorFalse: "Du er kampdygtig igen."
            },
            behandlings_timer: {
              armorTrue: {timerActive: false, time: null, dead: false},
              armorFalse: {timerActive: false, time: null, dead: false}
            },
            vectorSrc: "right-upper-arm"
          },

          { 
            id: 8,
            skade: "Du er ramt i højre lår. Pulsåre revet over. Bevidstløs pga. blodtab.",
            chestWound: false,
            headWound: false,
            behandling: {
              armorTrue: "",
              armorFalse: "Anlæg tourniquet. Forbind patientens lår. Giv drop i 5min."
            },
            efter_behandlingen: {
              armorTrue: "",
              armorFalse: "Du er kampdygtig igen."
            },
            behandlings_timer: {
              armorTrue: {timerActive: false, time: null, dead: false},
              armorFalse: {timerActive: true, time: 300, dead: false}
            },
            vectorSrc: "right-thigh"
          },

          { 
            id: 9,
            skade: "Du er ramt i halsen. Bløder voldsomt. Besvimet.",
            chestWound: false,
            headWound: false,
            behandling: {
              armorTrue: "",
              armorFalse: "Forbind patientens hals. Giv patienten drop i 5min."
            },
            efter_behandlingen: {
              armorTrue: "",
              armorFalse: "Du er kampdygtig igen."
            },
            behandlings_timer: {
              armorTrue: {timerActive: false, time: null, dead: false},
              armorFalse: {timerActive: true, time: 300, dead: false}
            },
            vectorSrc: "throat"
          },

          { 
            id: 10,
            skade: "Du er ramt i hovedet.",
            chestWound: false,
            headWound: true,
            behandling: {
              armorTrue: "Giv patienten smertestillende",
              armorFalse: " Patienten er død."
            },
            efter_behandlingen: {
              armorTrue: "Du er kampdygtig igen.",
              armorFalse: "Patienten er død."
            },
            behandlings_timer: {
              armorTrue: {timerActive: false, time: null, dead: false},
              armorFalse: {timerActive: false, time: null, dead: true}
            },
            vectorSrc: "head"
          },

          { 
            id: 11,
            skade: "Du er ramt i hovedet. (strejfeskud)",
            chestWound: false,
            headWound: true,
            behandling: {
              armorTrue: "Tilses af Medic i 1min.",
              armorFalse: "Forbind patientens hoved. Giv smertestillende"
            },
            efter_behandlingen: {
              armorTrue: "Du er kampdygtig igen.",
              armorFalse: "Du er kampdygtig igen."
            },
            behandlings_timer: {
              armorTrue: {timerActive: true, time: 60, dead: false},
              armorFalse: {timerActive: false, time: null, dead: false}
            },
            vectorSrc: "head"
          },

          { 
            id: 13,
            skade: "Du er ramt i ansigtet.",
            chestWound: false,
            headWound: true,
            behandling: {
              armorTrue: "Ingen. Patienten er død.",
              armorFalse: "Ingen. Patienten er død."
            },
            efter_behandlingen: {
              armorTrue: "Patienten er død.",
              armorFalse: "Patienten er død."
            },
            behandlings_timer: {
              armorTrue: {timerActive: false, time: null, dead: true},
              armorFalse: {timerActive: false, time: null, dead: true}
            },
            vectorSrc: "head"
          },

          { 
            id: 14,
            skade: "Du er ramt i dit udstyr. Projektilet splintres imod to fyldte magasiner. Du har fået mindre skrammer og har svage smerter.",
            chestWound: false,
            headWound: false,
            behandling: {
              armorTrue: "",
              armorFalse: "Giv smertestillende. (Har du ikke to fyldte magasiner): Anlæg forbinding om maven"
            },
            efter_behandlingen: {
              armorTrue: "",
              armorFalse: "Du er kampdygtig igen. To af dine fyldte magasiner eller ét fyldt boks magasin er ubrugeligt."
            },
            behandlings_timer: {
              armorTrue: {timerActive: false, time: null, dead: false},
              armorFalse: {timerActive: false, time: null, dead: false}
            },
            vectorSrc: "equipment-mags"
          },

          { 
            id: 7,
            skade: "Du er ramt i venstre lår. Pulsåre revet over. Bevidstløs pga. blodtab",
            chestWound: false,
            headWound: false,
            behandling: {
              armorTrue: "",
              armorFalse: "Anlæg tourniquet. Forbind patientens lår. Giv drop i 5min."
            },
            efter_behandlingen: {
              armorTrue: "",
              armorFalse: "Du er kampdygtig igen."
            },
            behandlings_timer: {
              armorTrue: {timerActive: false, time: null, dead: false},
              armorFalse: {timerActive: true, time: 300, dead: false}
            },
            vectorSrc: "left-thigh"
          },

          { 
            id: 15,
            skade: "Du er ramt i dit side-arm",
            chestWound: false,
            headWound: false,
            behandling: {
              armorTrue: "",
              armorFalse: "Tilses af medic i 1min (Intet side-arm): Anlæg forbinding på hoften og givsmertestillende."
            },
            efter_behandlingen: {
              armorTrue: "",
              armorFalse: "Du er kampdygtig igen. Side-arm er ubrugelig."
            },
            behandlings_timer: {
              armorTrue: {timerActive: false, time: null, dead: false},
              armorFalse: {timerActive: false, time: null, dead: false}
            },
            vectorSrc: "sidearm"
          },

          { 
            id: 17,
            skade: "Du er ramt i brystet.",
            chestWound: true,
            headWound: false,
            behandling: {
              armorTrue: "Giv smertestillende.",
              armorFalse: "Patienten er ramt i lungen. Forbind patientens bryst. Giv drop i 5min. Giv smertestillende."
            },
            efter_behandlingen: {
              armorTrue: "Du er kampdygtig igen.",
              armorFalse: "Du er kampdygtig igen."
            },
            behandlings_timer: {
              armorTrue: {timerActive: false, time: null, dead: false},
              armorFalse: {timerActive: true, time: 300, dead: false}
            },
            vectorSrc: "chest"
          },

          { 
            id: 18,
            skade: "Du er ramt i brystet. Projektilet har ramt dig omkring brystet.",
            chestWound: true,
            headWound: false,
            behandling: {
              armorTrue: " Patienten er i choktilstand. Patienten kan ikke kommunikere, kæmpe eller træffe beslutninger. Tilses af medic i 5min. Giv smertestillende.",
              armorFalse: "Patienten er død."
            },
            efter_behandlingen: {
              armorTrue: "Du er kampdygtig igen.",
              armorFalse: "Patienten er død."
            },
            behandlings_timer: {
              armorTrue: {timerActive: true, time: 300, dead: false},
              armorFalse: {timerActive: false, time: null, dead: true}
            },
            vectorSrc: "chest"
          },

          { 
            id: 19,
            skade: "Du er ramt i ryggen",
            chestWound: true,
            headWound: false,
            behandling: {
              armorTrue: "Patienten er i choktilstand. Patienten kan ikke kommunikere, kæmpe eller træffe beslutninger. Tilses af medic i 3min. Giv smertestillende.",
              armorFalse: "Patienten er død."
            },
            efter_behandlingen: {
              armorTrue: "Du er kampdygtig igen.",
              armorFalse: "Patienten er død."
            },
            behandlings_timer: {
              armorTrue: {timerActive: true, time: 180, dead: false},
              armorFalse: {timerActive: false, time: null, dead: true}
            },
            vectorSrc: "torso"
          },

          { 
            id: 20,
            skade: "Du er ramt i ryggen",
            chestWound: true,
            headWound: false,
            behandling: {
              armorTrue: "Giv smertestillende.",
              armorFalse: "Forbind  patientens øvre ryg. Forbindingen skal anlægges under evt. udstyr Giv smertestillende. Giv drop i 5min."
            },
            efter_behandlingen: {
              armorTrue: "Du er kampdygtig igen.",
              armorFalse: "Du er kampdygtig igen."
            },
            behandlings_timer: {
              armorTrue: {timerActive: false, time: null, dead: false},
              armorFalse: {timerActive: true, time: 300, dead: false}
            },
            vectorSrc: "torso"
          },

          { 
            id: 12,
            skade: "Du er ramt i hovedet.",
            chestWound: false,
            headWound: true,
            behandling: {
              armorTrue: "Hjelmen ødelægges, patienten overlever men er bevidstløs i 3min. Giv smertestillende. Hjelmen er nu ubrugelig",
              armorFalse: "Patienten er død."
            },
            efter_behandlingen: {
              armorTrue: "Du er kampdygtig igen.",
              armorFalse: "Patienten er død."
            },
            behandlings_timer: {
              armorTrue: {timerActive: true, time: 180, dead: false},
              armorFalse: {timerActive: false, time: null, dead: true}
            },
            vectorSrc: "head"
          },

          { 
            id: 12,
            skade: "Du er ramt i hovedet.",
            chestWound: false,
            headWound: true,
            behandling: {
              armorTrue: "Hjelmen ødelægges, patienten overlever men er bevidstløs i 3min. Giv smertestillende. Hjelmen er nu ubrugelig",
              armorFalse: "Patienten er død."
            },
            efter_behandlingen: {
              armorTrue: "Du er kampdygtig igen.",
              armorFalse: "Patienten er død."
            },
            behandlings_timer: {
              armorTrue: {timerActive: true, time: 180, dead: false},
              armorFalse: {timerActive: false, time: null, dead: true}
            },
            vectorSrc: "head"
          },

          { 
            id: 16,
            skade: "Du er ramt i din radio.",
            chestWound: false,
            headWound: false,
            behandling: {
              armorTrue: "",
              armorFalse: "Tilses af medic i 1min. (Ingen radio): Anlæg forbinding som dækker skulder og armhule. Forbindingen skal ligges under evt. udstyr. Giv smertestillende. Giv drop i 5min."
            },
            efter_behandlingen: {
              armorTrue: "",
              armorFalse: "Du er kampdygtig igen. Din radio er ubrugelig."
            },
            behandlings_timer: {
              armorTrue: {timerActive: false, time: null, dead: false},
              armorFalse: {timerActive: true, time: 300, dead: false}
            },
            vectorSrc: "equipment-radio"
          },


        ]
      },
      mutations: {
        agreePrivacyPolicy(state) {
          localStorage.setItem('agreedToPrivacy', true);
          state.agreedToPrivacy = true;
      }
      }

})
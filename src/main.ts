import { createApp } from 'vue'
import { store } from './store/store.js';

import App from './App.vue'
import router from './router/index.js';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

//import tailwind
import './assets/style.css'

//import auto animate
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

library.add(fas)

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(autoAnimatePlugin)
  .use(store)
  .component("fa", FontAwesomeIcon)
  
router.isReady().then(() => {
  app.mount('#app');
});
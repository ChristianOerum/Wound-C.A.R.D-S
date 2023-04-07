import { createStore } from 'vuex';

export const store = createStore({
    state: {
        armor: {
          wearingHelmet: true,
          wearingChestPlate: true,
        }
      }
})
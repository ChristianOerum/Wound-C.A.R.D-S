import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.woundcard.app',
  appName: 'woundcard-app',
  webDir: 'dist',
  bundledWebRuntime: false,
  android: {
    backgroundColor: '#303336'
},
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      launchFadeOutDuration: 700,
      splashImmersive: true,
      splashFullScreen: true,
      layoutName: 'launch_screen',
      useDialog: false,
      androidSplashResourceName: "splash",
      androidScaleType: "FIT_CENTER",
      backgroundColor: "#1E2124",


    },
  },
};

export default config;

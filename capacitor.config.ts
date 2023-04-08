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
      androidSplashResourceName: 'splash',
      layoutName: 'launch_screen',
      androidScaleType: 'CENTER_INSIDE',

    },
  },
};

export default config;

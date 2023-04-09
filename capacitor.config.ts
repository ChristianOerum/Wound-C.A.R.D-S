import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.wound-cards',
  appName: 'Wound C.A.R.Ds',
  webDir: 'dist',
  bundledWebRuntime: false,
  android: {
    backgroundColor: '#1E2124'
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
      androidScaleType: "FIT_CENTER",
      backgroundColor: "#1E2124",

    },
  },
};

export default config;

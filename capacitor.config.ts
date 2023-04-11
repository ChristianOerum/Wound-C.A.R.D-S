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
      launchShowDuration: 2000,
			launchAutoHide: true,
			launchFadeOutDuration: 700,
			androidSplashResourceName: "splash",
			layoutName: "launch_screen",
			androidScaleType: "FIT_CENTER",
			backgroundColor: "#1E2124",
			showSpinner: true,
			androidSpinnerStyle: "large",
			iosSpinnerStyle: "large",
			spinnerColor: "#F8D027"

    },
  },
};

export default config;

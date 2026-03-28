import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'jo.edu.btec.excellence',
  appName: 'بوابة BTEC للتميز',
  webDir: 'dist',
  android: {
    allowMixedContent: false,
    captureInput: true,
    webContentsDebuggingEnabled: false
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#1e3a5f',
      showSpinner: false
    }
  }
};

export default config;

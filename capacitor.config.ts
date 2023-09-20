import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'kelpie.solutions.img2text',
  appName: 'Kelpie OCR',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;

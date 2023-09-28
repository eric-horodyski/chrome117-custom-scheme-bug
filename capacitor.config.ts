import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "io.ionic.starter",
  appName: "chrome117-custom-scheme-bug",
  webDir: "dist",
  server: {
    androidScheme: "ionicapp",
  },
};

export default config;

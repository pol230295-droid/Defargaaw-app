import { registerRootComponent } from "expo";

import App from "./App";

// registerRootComponent appelle AppRegistry.registerComponent('main', () => App)
// et garantit l'initialisation correcte du moteur Expo, que l'application soit
// lancée depuis Expo Go ou depuis un build natif.
registerRootComponent(App);

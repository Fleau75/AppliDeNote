// Importation de la fonction createApp à partir de la bibliothèque Vue.
import { createApp } from 'vue'

// Importation du composant racine App de Vue.js à partir du fichier App.vue.
import App from './App.vue'

// Importation de l'instance du routeur définie dans le fichier router/index.js.
import router from './router'

// Importation des styles principaux de l'application à partir de main.css.
import './assets/main.css'

// Importation des styles pour les icônes de Font Awesome.
import '@fortawesome/fontawesome-free/css/all.css'

// Création et montage de l'instance de l'application Vue.
// Le routeur est appliqué via .use(router) et l'application est montée sur l'élément HTML avec l'id 'app'.
createApp(App).use(router).mount('#app')

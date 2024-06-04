// Importation des fonctions nécessaires depuis vue-router pour créer un routeur
import { createRouter, createWebHistory } from 'vue-router'
// Importation du composant Home qui servira de page d'accueil
import Home from '../views/HomePage.vue'

// Définition du tableau des routes de l'application
const routes = [
  {
    path: '/', // Chemin d'accès URL pour la route
    name: 'HomePage', // Nom de la route, utilisé pour la référencer plus facilement dans le code
    component: Home // Composant Vue à afficher lorsque l'utilisateur navigue vers cette route
  }
]

// Création de l'instance de routeur en utilisant l'historique basé sur l'API History du navigateur
const router = createRouter({
  history: createWebHistory(), // Utilise l'historique du navigateur pour une navigation propre sans # dans l'URL
  routes // Les routes définies ci-dessus sont passées à l'instance du routeur
})

// Exportation du routeur configuré pour qu'il puisse être utilisé dans l'application principale Vue
export default router

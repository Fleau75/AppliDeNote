<template>
  <div class="app-container">
    <!-- Navbar avec un gestionnaire d'événement pour créer une note -->
    <Navbar @createNote="createNote" />
    <div class="content">
      <div class="sidebar">
        <!-- Sidebar pour sélectionner ou supprimer des notes -->
        <Sidebar
          @noteSelected="selectNote"
          @deleteNote="deleteNote"
          :notes="notes"
          :selectedNoteId="selectedNote ? selectedNote.id : null"
        />
      </div>
      <div class="main-content">
        <!-- Affiche le composant NoteDetail si une note est sélectionnée -->
        <NoteDetail v-if="selectedNote" :note="selectedNote" @noteUpdated="updateNote" />
        <!-- Affiche un message si aucune note n'est sélectionnée -->
        <div v-else class="no-note-selected">
          <p>
            Sélectionnez une note pour la visualiser ou cliquez sur "Créer une nouvelle note" pour
            en ajouter une.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Importation des composants nécessaires
import Navbar from './components/AppNavbar.vue'
import Sidebar from './components/Sidebar.vue'
import NoteDetail from './components/NoteDetail.vue'

export default {
  // Déclaration des composants utilisés dans ce fichier
  components: {
    Navbar,
    Sidebar,
    NoteDetail
  },
  data() {
    return {
      // Chargement des notes depuis le localStorage ou initialisation d'un tableau vide
      notes: JSON.parse(localStorage.getItem('notes')) || [],
      selectedNote: null // Référence à la note actuellement sélectionnée
    }
  },
  methods: {
    // Méthode pour sélectionner une note
    selectNote(note) {
      this.selectedNote = note
    },
    // Méthode pour créer une nouvelle note
    createNote() {
      const newNote = {
        id: Date.now().toString(), // ID unique basé sur le timestamp actuel
        title: 'Nouvelle Note',
        content: '',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }
      this.notes.push(newNote) // Ajout de la nouvelle note au tableau des notes
      localStorage.setItem('notes', JSON.stringify(this.notes)) // Sauvegarde dans le localStorage
      this.selectNote(newNote) // Sélection de la nouvelle note créée
    },
    // Méthode pour mettre à jour une note existante
    updateNote(updatedNote) {
      const index = this.notes.findIndex((note) => note.id === updatedNote.id)
      if (index !== -1) {
        this.notes.splice(index, 1, updatedNote)
        localStorage.setItem('notes', JSON.stringify(this.notes)) // Mise à jour dans le localStorage
      }
    },
    // Méthode pour supprimer une note
    deleteNote(noteId) {
      this.notes = this.notes.filter((note) => note.id !== noteId)
      localStorage.setItem('notes', JSON.stringify(this.notes)) // Mise à jour du localStorage
      if (this.selectedNote && this.selectedNote.id === noteId) {
        this.selectedNote = null
      }
    }
  }
}
</script>

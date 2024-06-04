<template>
  <div>
    <!-- Boucle sur chaque note dans la liste des notes, affichage côté gauche -->
    <div
      v-for="note in notes" <!-- v-for pour itérer sur chaque note -->
      :key="note.id" <!-- Clé unique pour chaque élément de liste pour optimiser le rendu réactif -->
      :class="['note-item', { 'selected-note': note.id === selectedNoteId }]" <!-- Classes conditionnelles -->
      @click="selectNote(note)" <!-- Gestionnaire de clic pour sélectionner une note -->
    >
      <!-- Titre de la note avec une icône -->
      <div class="note-title"><i class="fas fa-sticky-note"></i> {{ note.title }}</div>
      <!-- Bouton pour supprimer la note, stoppe la propagation pour éviter le clic sur l'élément parent -->
      <button @click.stop="deleteNote(note.id)" class="delete-note-button">
        <i class="fas fa-trash"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    notes: Array, <!-- Propriété pour les notes passées au composant -->
    selectedNoteId: String <!-- Propriété pour l'ID de la note sélectionnée -->
  },
  methods: {
    // Méthode pour émettre un événement de sélection de note
    selectNote(note) {
      this.$emit('noteSelected', note) <!-- Émission de l'événement avec l'objet note -->
    },
    // Méthode pour émettre un événement de suppression de note
    deleteNote(noteId) {
      this.$emit('deleteNote', noteId) <!-- Émission de l'événement avec l'ID de la note à supprimer -->
    }
  }
}
</script>

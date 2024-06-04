<template>
  <div class="navbar">
    <!-- Bouton pour créer une nouvelle note, avec un icône FontAwesome -->
    <button @click="createNote" class="create-note-button">
      <i class="fas fa-plus"></i> Créer une nouvelle note
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    // Méthode qui émet un événement pour créer une nouvelle note
    createNote() {
      this.$emit('createNote') // Émission de l'événement 'createNote'
    }
  }
}
</script>

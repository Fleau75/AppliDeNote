<template>
  <div>
    <!-- Champ de saisie pour éditer le titre de la note avec liaison bidirectionnelle et référence pour le focus initial -->
    <input
      type="text"
      v-model="note.title"
      @input="updateTitle"
      ref="title"
      class="editable-title"
    />
    <!-- Zone de texte pour éditer le contenu de la note, également avec liaison bidirectionnelle -->
    <textarea v-model="note.content" @input="updateContent" class="editable-textarea"></textarea>
    <!-- Affiche le nombre de mots dans le contenu de la note -->
    <p>Compteur de mots: {{ wordCount }}</p>
    <!-- Affiche la date de création de la note, formatée -->
    <p>Créée le: {{ formatDate(note.created_at) }}</p>
    <!-- Affiche la dernière date de mise à jour de la note, formatée -->
    <p>Dernière mise à jour: {{ formatDate(note.updated_at) }}</p>
  </div>
</template>

<script>
export default {
  props: {
    // Réception de l'objet note comme propriété
    note: Object
  },
  mounted() {
    // Focus automatique sur le champ du titre lors du montage du composant
    this.$refs.title.focus()
  },
  computed: {
    // Calcul du nombre de mots dans le contenu de la note
    wordCount() {
      return this.note.content ? this.note.content.trim().split(/\s+/).length : 0
    }
  },
  methods: {
    // Méthode pour mettre à jour le titre et sauvegarder la note
    updateTitle(event) {
      this.note.title = event.target.value
      this.saveNote()
    },
    // Méthode pour sauvegarder la note lors de la modification du contenu
    updateContent() {
      this.saveNote()
    },
    // Sauvegarde de la note et mise à jour de la date de dernière modification
    saveNote() {
      this.note.updated_at = new Date().toISOString()
      this.$emit('noteUpdated', this.note) // Émission d'un événement pour signaler la mise à jour de la note
    },
    // Méthode pour formater les dates en français avec options complètes
    formatDate(date) {
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }
      return new Date(date).toLocaleDateString('fr-FR', options)
    }
  }
}
</script>

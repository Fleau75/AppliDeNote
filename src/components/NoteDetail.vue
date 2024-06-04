<template>
  <div>
    <!-- Champ de saisie pour éditer le titre de la note, lié bidirectionnellement au modèle de données -->
    <input
      type="text"
      v-model="note.title"
      @input="updateTitle"
      ref="title"
      class="editable-title"
    />
    <!-- Zone de texte pour éditer le contenu de la note, également liée bidirectionnellement -->
    <textarea v-model="note.content" @input="updateContent" class="editable-textarea"></textarea>
    <!-- Affiche le nombre de mots dans le contenu de la note -->
    <p>Compteur de mots: {{ wordCount }}</p>
    <!-- Affiche la date de création formatée de la note -->
    <p>Créée le: {{ formatDate(note.created_at) }}</p>
    <!-- Affiche la date de dernière mise à jour formatée de la note -->
    <p>Dernière mise à jour: {{ formatDate(note.updated_at) }}</p>
  </div>
</template>

<script>
export default {
  props: {
    note: Object // Réception de l'objet note comme propriété du composant parent
  },
  mounted() {
    // Mise en focus automatique du champ de titre à la création du composant
    if (this.$refs.title) {
      this.$refs.title.focus()
    }
  },
  computed: {
    // Compteur de mots basé sur le contenu de la note
    wordCount() {
      return this.note.content ? this.note.content.trim().split(/\s+/).length : 0
    }
  },
  methods: {
    // Mise à jour du titre de la note lors d'une saisie dans le champ de texte
    updateTitle(event) {
      this.note.title = event.target.value
      this.saveNote() // Appel de la méthode pour sauvegarder les modifications
    },
    // Mise à jour du contenu de la note lors d'une saisie dans la zone de texte
    updateContent() {
      this.saveNote() // Sauvegarde à chaque modification du contenu
    },
    // Sauvegarde des modifications apportées à la note
    saveNote() {
      this.note.updated_at = new Date().toISOString() // Mise à jour de la date de dernière modification
      this.$emit('noteUpdated', this.note) // Émission d'un événement pour notifier le composant parent
    },
    // Formatage des dates en français avec options détaillées pour l'affichage
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

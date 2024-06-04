<script>
export default {
  data() {
    return {
      // Chargement des notes qui sont dans le localStorage, ou initialisation à un tableau vide si aucun élément n'est trouvé
      notes: JSON.parse(localStorage.getItem('notes')) || []
    }
  },
  methods: {
    // Méthode pour créer une nouvelle note
    createNote() {
      // Création d'une nouvelle note avec un identifiant unique basé sur le timestamp, un titre par défaut, et les champs de contenu et dates
      const newNote = {
        id: Date.now().toString(), // Utilise le timestamp comme identifiant unique
        title: 'Nouvelle Note', // Titre par défaut pour la nouvelle note
        content: '', // Contenu initialement vide
        created_at: new Date().toISOString(), // Date de création au format ISO
        updated_at: new Date().toISOString() // Date de dernière mise à jour au format ISO
      }
      this.notes.push(newNote) // Ajout de la nouvelle note au tableau des notes
      localStorage.setItem('notes', JSON.stringify(this.notes)) // Sauvegarde du tableau des notes dans le localStorage
    }
  }
}
</script>

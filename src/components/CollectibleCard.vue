<!-- src/components/CollectibleCard.vue -->
<template>
    <div class="collectible-card">
      <h3>{{ player.name }}</h3>
      <p>Equipo: {{ player.team }}</p>
      <img :src="player.image" alt="Imagen del Jugador" />
      <button @click="addToCollection">Añadir a la Colección</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      player: {
        type: Object,
        required: true,
      },
    },
    methods: {
      addToCollection() {
        this.$emit('add-to-collection', this.player);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos específicos para este componente */
  .collectible-card {
    border: 1px solid #ddd;
    padding: 10px;
    margin: 10px;
  }
  
  .collectible-card img {
    max-width: 100%;
    height: auto;
  }
  </style>
  
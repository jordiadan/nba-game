<!-- src/components/PlayerCard.vue -->
<template>
    <div class="player-card">
      <h3>{{ player.name }}</h3>
      <p>Puntuación: {{ player.score }}</p>
      <button @click="increaseScore">Incrementar Puntuación</button>
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
      increaseScore() {
        // Crea una copia del objeto player y modifica la copia
        const updatedPlayer = { ...this.player, score: this.player.score + 1 };
        
        // Emite un evento para notificar al padre sobre el cambio
        this.$emit('update:player', updatedPlayer);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos específicos para este componente */
  .player-card {
    border: 1px solid #ddd;
    padding: 10px;
    margin: 10px;
  }
  </style>
  
<!-- src/components/GameBoard.vue -->
<template>
  <div>
    <h1>Tablero del Juego</h1>
    <div>
      <PlayerCard v-for="player in players" :key="player.id" :player="player" @update:player="updatePlayer" />
    </div>
    <div>
      <CollectibleCard
        v-for="player in players"
        :key="player.id"
        :player="player"
        @add-to-collection="addToCollection"
      />
    </div>
  </div>
</template>

<script>
import PlayerCard from './PlayerCard.vue';
import CollectibleCard from './CollectibleCard.vue';

export default {
  data() {
    return {
      players: [
        { id: 1, name: 'Jugador 1', score: 0, team: 'Equipo A', image: 'url_a_la_imagen' },
        { id: 2, name: 'Jugador 2', score: 0, team: 'Equipo B', image: 'url_a_la_imagen' },
        // Agrega más jugadores según sea necesario
      ],
      collection: [],
    };
  },
  components: {
    PlayerCard,
    CollectibleCard,
  },
  methods: {
    updatePlayer(updatedPlayer) {
      // Actualizar el jugador en la lista de jugadores
      const index = this.players.findIndex(player => player.id === updatedPlayer.id);
      if (index !== -1) {
        this.$set(this.players, index, updatedPlayer);
      }
    },
    addToCollection(player) {
      // Añadir jugador a la colección
      this.collection.push(player);
      // Puedes realizar otras acciones según sea necesario
    },
  },
};
</script>

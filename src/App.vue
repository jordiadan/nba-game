<!-- src/App.vue -->
<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link to="/collection">Colección</router-link>
    <router-link to="/board">Board</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
// Elimina la importación y la sección components si no planeas usar el componente aquí
// import GameBoard from './components/GameBoard.vue';

export default {
  // components: {
  //   GameBoard,
  // },
};
</script>

<style>
/* Estilos globales aquí */
</style>

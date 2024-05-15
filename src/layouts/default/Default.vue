<template>
  <v-app class="bg-cinza">
    <div class="loading-spin" v-if="$root.isLoading">
      <v-progress-circular
        :size="50"
        color="#fd683e"
        indeterminate
      ></v-progress-circular>
      <div><h4>Carregando</h4></div>
    </div>
    <default-view />
  </v-app>
</template>

<script>
  import DefaultView from './View.vue';

  export default {
    components: {
      DefaultView,
    },
  }
</script>

<style>
  .loading-spin{
    width: 100%;
    height: 100%;
    min-width: 100%;
    min-height: 100%;
    background: rgba(255, 255, 255, 0.98);
    position: fixed;
    top:0;
    left: 0;
    z-index: 9999;
    overflow: hidden;
  }
  .loading-spin div{
    margin: 0;
    display: flex;
    position: relative;
    top: 50%;
    left: 50%;
  }
  .loading-spin h4{
    margin-top: 10px;
    margin-left: -20px;
    color: #fd683e;
    letter-spacing: 0.1em;
  }
</style>

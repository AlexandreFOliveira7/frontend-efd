<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { ref } from 'vue'

  export default {
    setup() {
      const isLoading = ref(true)

      // expose the ref to the template
      return {
        isLoading,
      }
    },
  }
</script>

<template>
  <div class="bg-black text-white py-4 px-4">
    <p>
      &copy; {{ year }} <a href="https://www.onad-rdc.net/">CNAC</a> - Tous
      droits réservés
    </p>
  </div>
</template>

<script setup lang="ts">
const year = ref(new Date().getFullYear());
</script>

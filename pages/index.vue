<template>
  <NuxtLayout name="dashboard">
    <div
      class="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-5"
    >
      <div class="card shadow rounded p-3 bg-lime-950 text-white">
        <span class="text-5xl font-bold mb-3">78</span>
        <div>
          <Icon name="fluent:people-team-32-filled" size="2em" />
          <p class="text-2xl font-semibold">athletes</p>
          <p>inscrit(e)s</p>
        </div>
      </div>
      <div class="card shadow rounded p-5 bg-cyan-950 text-white">
        <span class="text-5xl font-bold mb-3">4</span>
        <div>
          <Icon name="fa6-solid:passport" size="2em" />
          <p class="text-2xl font-semibold">Fédérations</p>
        </div>
      </div>
      <div class="card shadow rounded p-5 bg-orange-600 text-white">
        <span class="text-5xl font-bold mb-3">17</span>
        <div>
          <Icon name="mdi-plus" />
          <p class="text-2xl font-semibold">Disciplines</p>
        </div>
      </div>
      <div class="card shadow rounded p-5 bg-rose-950 text-white">
        <span class="text-5xl font-bold mb-3">26</span>
        <div>
          <Icon name="mdi-plus" />
          <p class="text-2xl font-semibold">Provinces</p>
          <p>inscrit(e)s</p>
        </div>
      </div>
    </div>
    <div class="tables">
      
      <SharedDataTable :headers="headers" :rows="rows" />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: "auth",
  layout: "dashboard",
});

const headers =ref(['nom', 'post-nom', 'prenom','numero d\'enregistrement', 'statut', 'discipline',])
const rows =ref([])

const layout = "dashboard";
</script>

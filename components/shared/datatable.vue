<template>
  <div class="datatable-container bg-blue">
    <table class="min-w-full divide-y divide-gray-200 shadow">
      <thead>
        <tr>
          <th
            v-for="(header, index) in headers"
            :key="index"
            scope="col"
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="(row, index) in rows" :key="index">
          <td
            v-for="(item, idx) in row"
            :key="idx"
            class="px-6 py-4 whitespace-nowrap"
          >
            {{ item }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
defineProps({
  headers: {
    type: Array,
    required: true,
  },
  rows: {
    type: Array,
    required: true,
  },
});
</script>

<style>
.datatable-container {
  overflow-x: auto;
}
</style>

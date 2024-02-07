<script setup lang="ts">
const route = useRoute()
const subdomain = useSubdomain()
</script>

<template>
  <div class="mx-auto mt-5 flex min-h-screen max-w-7xl flex-col bg-white p-3 shadow">
    <div class="align-text-bottom flex text-gray-800 h-15px">
      Hello, this is
      <p class="mx-2 text-2xl font-bold text-gray-800">{{ route.params.url }}</p>
      provider page!
    </div>
    <div class=''>Subdomain is {{ subdomain }}</div>
  </div>
</template>

<style scoped></style>

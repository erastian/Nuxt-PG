<script setup lang="ts">
const config = useRuntimeConfig()
const route = useRoute()

const { pending, data: article, error } = await useFetch(`${config.public.API_URL}/articles/${route.params.url}`)

</script>

<template>
  <div class="mx-auto flex flex-col max-w-7xl bg-white mt-5 p-3 min-h-screen shadow">
    <div class="text-2xl font-bold text-gray-800">
      {{ pending }}
    </div>
    <p>{{ error?.statusCode }}</p>
    <div>{{ article }}</div>
  </div>
</template>

<style scoped>

</style>

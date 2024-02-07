<script setup lang="ts">
import { useArticlesStore } from '#imports'

const articleStore = useArticlesStore()
articleStore.fetchArticles()

</script>

<template>
  <div class="mx-auto mt-5 flex min-h-screen max-w-7xl flex-col rounded-lg bg-white p-3 shadow-2xl">
    <div class="mb-7 text-4xl font-bold text-gray-800">Hello world</div>

    <div class="">Limit: {{ articleStore.limit }}</div>
    <div class="">Offset: {{ articleStore.offset }}</div>
    <div class="mt-10 flex">
      <div v-if="articleStore.isLoading" class="mx-auto text-gray-500">
        <Icon name="svg-spinners:6-dots-scale-middle" size="64" />
      </div>
      <!--      <div v-else-if="error" class="text-center text-2xl">Error with status <b>{{ error.statusCode }}</b>.-->
      <!--        {{ error.message }}-->
      <!--      </div>-->
      <ul v-else class="grid grid-cols-4 gap-4">
        <li
          v-for="article in articleStore.articlesFeed"
          :key="article.id"
          class="rounded-lg border border-gray-200 shadow-md duration-150 ease-in hover:shadow-lg"
        >
          <NuxtLink :to="`/article/${article.url}`">
            <img v-if="article.cover" class="rounded-t-lg" :src="article.cover" alt="" />
            <img v-else class="rounded-t-lg" src="~/assets/images/img-not-found.svg" alt="" />
          </NuxtLink>
          <div class="p-3">
            <NuxtLink class="text-lime-600 underline" :to="`/article/${article.url}`">
              {{ article.title }}
            </NuxtLink>

            {{ article.description }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>

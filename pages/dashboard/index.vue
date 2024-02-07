<script setup lang="ts">
const sessionStore = useSessionStore()

definePageMeta({
  layout: 'dashboard-layout',
  middleware: ['role-admin']
})

onMounted(async () => {
  try {
    await sessionStore.getUser()
  } catch (e: Error | any) {
    console.log(e) // eslint-disable-line no-console
  }
})

const draftArticles = ref<any[]>([])

const { data } = await usePrivateApi().get('/articles/drafts')
draftArticles.value = data
console.log('Draft articles', data) // eslint-disable-line no-console
</script>

<template>
  <div v-if="sessionStore.isLoading" class="mx-auto text-gray-500">
    <Icon name="svg-spinners:6-dots-scale-middle" size="64" />
  </div>
  <div v-else>
    <div class="mb-5 text-2xl text-white">Hello, i'm Dashboard</div>
    <div class="card h-250 mb-5 rounded border-2 bg-white p-3 shadow-md md:w-1/2 lg:w-1/3">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias amet architecto, culpa
      eligendi explicabo hic illum labore maiores minima molestiae molestias natus odio placeat
      quaerat sequi tempore unde veritatis.
    </div>
    <div class="card h-250 mb-5 rounded border-2 bg-white p-3 shadow-md md:w-1/2 lg:w-1/3">
      {{ draftArticles }}
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<template>
  <div class="flex">
    <div class="min-h-screen md:w-2/5 md:flex bg-blue-600 hidden">
      <div class="absolute top-5 left-10 text-gray-100 hover:text-white flex">
        <a href="" @click.prevent="$router.back()">
          <Icon class="-mt-1" name="ph:arrow-left" size="24" />
          Back
        </a>
      </div>
      <div class="m-auto">
        <NuxtLink to="/">
          <img src="~/assets/images/bigLogo.svg" alt="Logo">
        </NuxtLink>
      </div>
    </div>
    <div class="min-h-screen flex md:w-3/5 bg-white w-full">
      <div class="flex flex-col h-fit w-2/4 m-auto align-middle">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

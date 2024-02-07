<script setup lang="ts">
import { useAppStore } from '~/stores/app'

const { toggleSidebar } = useAppStore()
</script>

<template>
  <button class="me-5" @click="toggleSidebar()">
    <Icon name="ph:text-align-left" size="32" class="hover:stroke-gray-900" />
  </button>
  <div class="">
    Dashboard header
  </div>
  <div class="ms-auto me-5">
    <Icon
      name="ph:bell-light"
      size="28"
      class="text-gray-400 hover:text-gray-700 cursor-pointer"
    />
  </div>
  <div class="">
    MENU
  </div>
</template>

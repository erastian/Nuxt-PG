<script setup lang="ts">
import clsx from 'clsx'
import { useAppStore } from '~/stores/app'

const appStore = useAppStore()
const { sideBarIsOpen } = storeToRefs(appStore)
</script>

<template>
  <div class="flex h-screen w-full">
    <div
      :class="
        clsx(
          `flex h-screen flex-col bg-purple-900 py-5 drop-shadow-lg delay-75 duration-150 ease-in-out`,
          sideBarIsOpen ? 'w-16' : 'w-72'
        )
      "
    >
      <DashboardMenu />
    </div>
    <div class="flex w-full flex-col">
      <div class="flex h-14 w-full items-center bg-gradient-to-r from-purple-200 to-pink-200 px-5">
        <DashboardHeader />
      </div>
      <div class="h-screen p-5 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 ">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped></style>

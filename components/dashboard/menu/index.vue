<script setup lang="ts">
import clsx from 'clsx'
import { useAppStore } from '~/stores/app'

const appStore = useAppStore()
const { sideBarIsOpen } = storeToRefs(appStore)
</script>

<template>
  <NuxtLink to="/" class="flex flex-col items-center mb-10">
    <Icon name="ph:alien-fill" size="42" class="text-center text-fuchsia-300 hover:text-pink-500 logo-shadow" />
    <div class="h-5">
      <div v-if="!sideBarIsOpen" class="text-gray-100 hover:text-pink-500">This is Dashboard</div>
    </div>
  </NuxtLink>
  <div :class="clsx(sideBarIsOpen ? 'px-3 justify-center' : 'px-5 ', 'flex')">
    <div class="flex flex-col gap-4">
      <NuxtLink to="/dashboard" class="flex cursor-pointer text-gray-100 hover:text-pink-500">
        <Icon name="ph:buildings" size="24" :class="clsx(!sideBarIsOpen ? 'me-3' : '')" />
        <div v-if="!sideBarIsOpen">Dashboard</div>
      </NuxtLink>
      <NuxtLink
        to="/dashboard/calendar"
        class="flex cursor-pointer text-gray-100 hover:text-pink-500"
      >
        <Icon name="ph:calendar" size="24" :class="clsx(!sideBarIsOpen ? 'me-3' : '')" />
        <div v-if="!sideBarIsOpen">Calendar</div>
      </NuxtLink>
      <NuxtLink
        to="/dashboard/patients"
        class="flex cursor-pointer text-gray-100 hover:text-pink-500"
      >
        <Icon name="ph:users-three" size="24" :class="clsx(!sideBarIsOpen ? 'me-3' : '')" />
        <div v-if="!sideBarIsOpen">Patients</div>
      </NuxtLink>
      <NuxtLink
        to="/dashboard/reviews"
        class="flex cursor-pointer text-gray-100 hover:text-pink-500"
      >
        <Icon name="ph:chats-circle" size="24" :class="clsx(!sideBarIsOpen ? 'me-3' : '')" />
        <div v-if="!sideBarIsOpen">Reviews</div>
      </NuxtLink>
      <NuxtLink
        to="/dashboard/services"
        class="flex cursor-pointer text-gray-100 hover:text-pink-500"
      >
        <Icon name="ph:office-chair" size="24" :class="clsx(!sideBarIsOpen ? 'me-3' : '')" />
        <div v-if="!sideBarIsOpen">Services</div>
      </NuxtLink>
      <NuxtLink
        to="/dashboard/availability"
        class="flex cursor-pointer text-gray-100 hover:text-pink-500"
      >
        <Icon name="ph:calendar-check" size="24" :class="clsx(!sideBarIsOpen ? 'me-3' : '')" />
        <div v-if="!sideBarIsOpen">Availability</div>
      </NuxtLink>
      <NuxtLink
        to="/dashboard/profile"
        class="flex cursor-pointer text-gray-100 hover:text-pink-500"
      >
        <Icon name="ph:user-rectangle" size="24" :class="clsx(!sideBarIsOpen ? 'me-3' : '')" />
        <div v-if="!sideBarIsOpen">Profile & Account</div>
      </NuxtLink>
      <NuxtLink
        to="/dashboard/settings"
        class="flex cursor-pointer text-gray-100 hover:text-pink-500"
      >
        <Icon name="ph:gear-fine" size="24" :class="clsx(!sideBarIsOpen ? 'me-3' : '')" />
        <div v-if="!sideBarIsOpen">Settings</div>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.logo-shadow {
  filter: drop-shadow(0 0 10px #ff3cac);
}
.router-link-active {
  filter: drop-shadow(0 0 3px #ff3cac);
}
</style>

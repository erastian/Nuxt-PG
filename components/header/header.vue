<script setup lang="ts">
import { useSessionStore } from '#imports'

const sessionStore = useSessionStore()
const mobileMenuOpen = ref(false)
</script>

<template>
  <header class="bg-white opacity-95 shadow-2xl">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <NuxtLink to="/" class="-m-1.5 p-1.5">
          <Icon
            name="ph:alien-fill"
            size="42"
            class="text-center text-gray-700 hover:text-gray-500"
          />
          <span class="ms-5 font-semibold hover:text-gray-500">Your Company</span>
        </NuxtLink>
      </div>
      <div class="">
        <NuxtLink to="/dashboard">Dashboard</NuxtLink>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
        </button>
      </div>
      <div v-if="sessionStore.isAuth" class="hidden lg:flex lg:flex-1 lg:justify-end">
        <div class="me-3 pe-3 border-e-2">Welcome, {{ sessionStore.user?.username }}</div>
        <a
          href=""
          class="me-3 text-sm font-semibold leading-6 text-gray-900"
          @click.prevent="sessionStore.logout()"
        >Logout
        </a>
      </div>
      <div v-else class="hidden lg:flex lg:flex-1 lg:justify-end">
        <NuxtLink
          :to="{ path: '/auth', query: { t: 'login' } }"
          class="me-3 text-sm font-semibold leading-6 text-gray-900"
        >
          Log in
        </NuxtLink>
        <NuxtLink
          :to="{ path: '/auth', query: { t: 'register' } }"
          class="text-sm font-semibold leading-6 text-gray-900"
        >
          Register
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>

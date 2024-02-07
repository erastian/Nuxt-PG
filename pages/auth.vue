<script setup lang="ts">
import Input from '~/components/shared/Input.vue'

definePageMeta({
  layout: 'auth-layout'
})

const sessionStore = useSessionStore()
const route = useRoute()

type variantProps = 'register' | 'login'
const variant = ref<variantProps>('register')

if (route.query.t === 'login') {
  variant.value = 'login'
} else if (route.query.t === 'register') {
  variant.value = 'register'
}

const email = ref('')
const password = ref('')
const username = ref('')

useHead({
  title: `NuxtProbe: ${variant.value}`
})

const toggleVariant = () => {
  variant.value = variant.value === 'login' ? 'register' : 'login'
  useHead({
    title: `NuxtProbe: ${variant.value === 'register' ? 'Registration' : 'Login into account'}`
  })
}

const onSubmit = () => {
  if (variant.value === 'register') {
    sessionStore.register({
      username: username.value,
      email: email.value,
      password: password.value
    })
  } else if (variant.value === 'login') {
    sessionStore.login({ email: email.value, password: password.value })
  }
}
const socialAction = (action: string) => {
  console.log('Ggl auth ', action) // eslint-disable-line no-console
  // isLoading.value = true
  //
  // await signIn(action, { redirect: false })
}
</script>

<template>
  <div class="mb-8 text-2xl font-bold leading-9 tracking-tight">
    {{ variant === 'register' ? 'Registration' : 'Login into account' }}
    <div v-if="variant === 'register'" class="mt-6 text-sm font-light">
      Already have the account?
      <button class="ms-1 text-blue-500 underline" @click="toggleVariant">Login</button>
    </div>
  </div>
  <form action="" @submit.prevent="onSubmit">
    <Input
      v-if="variant === 'register'"
      id="username"
      v-model="username"
      name="username"
      type="text"
      label="Username"
      placeholder="Add your username here..."
      class="mb-5"
    />
    <Input
      id="email"
      v-model="email"
      name="email"
      type="email"
      label="Email"
      placeholder="Add email here..."
      class="mb-5"
    />
    <Input
      id="password"
      v-model="password"
      name="password"
      type="password"
      label="Password"
      placeholder="Add password here..."
      class="mb-10"
    />
    <button
      class="mt-10 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      type="submit"
      :disabled="sessionStore.isLoading"
    >
      Submit
    </button>

    <div class="mt-6">
      <div class="relative">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t border-gray-300" />
        </div>
        <div class="relative flex justify-center text-sm">
          <span class="bg-white px-2 text-gray-500"> Or Continue with </span>
        </div>
      </div>
      <div class="mt-6 flex gap-2">
        <button @click="socialAction('google')">
          <Icon name="bi:google" />
        </button>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import clsx from 'clsx'

interface InputProps {
  label: string
  id: string
  name: string
  placeholder?: string
  type?: string
  required?: boolean
  disabled?: boolean
  modelValue: string | number
}

const props = defineProps<InputProps>()
const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <div>
    <label :for="id" class="block text-sm font-medium leading-6 text-gray-900">{{ label }}</label>
    <div class="relative mt-2 rounded-md shadow-sm">
      <input
        :id="id"
        v-model="value"
        :name="name"
        :type="type"
        :placeholder="placeholder"
        :required="required"
        :disabled="disabled"
        :class="
          clsx(
            `block w-full rounded-md border-0 py-1.5 pl-5 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-0 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6`,
            disabled && 'cursor-default opacity-50'
          )
        "
      />
    </div>
  </div>
</template>

<!-- .vitepress/theme/Layout.vue -->

<template>
    <div :class="customClass">
      <slot />
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vitepress'
  import { ref, watch } from 'vue'
  import './flashback-page.css'
  
  const route = useRoute()
  const customClass = ref('')
  
  watch(() => route.path, (newPath) => {
    customClass.value = newPath.startsWith('/flashback') ? 'flashback-page' : ''
  }, { immediate: true })
  </script>
<!-- .vitepress/theme/Layout.vue -->

<template>
    <div :class="customClass">
      <slot />
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vitepress'
  import './flashback-page.css'
  
  const route = useRoute()
  
  const customClass = route.path.startsWith('/flashback') ? 'flashback-page' : ''
  </script>
<!-- .vitepress/theme/Layout.vue -->

<template>
    <div :class="customClass">
      <slot />
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vitepress'
  import './flashback.css'
  
  const route = useRoute()
  
  const customClass = route.path.startsWith('/flashback') ? 'flashback' : ''
  </script>
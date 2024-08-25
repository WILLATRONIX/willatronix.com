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
  
  <style scoped>
  .flashback-page {
    color: #333;
  }
  
  .flashback-page a {
    color: #f0c808;
  }
  
  .flashback-page a:hover {
    color: #e6b800;
  }
  
  .flashback-page .btn {
    background-color: #f0c808;
    border-color: #f0c808;
    color: #333;
  }
  
  .flashback-page .btn:hover {
    background-color: #e6b800;
    border-color: #e6b800;
  }
  
  .flashback-page h1,
  .flashback-page h2,
  .flashback-page h3 {
    color: #f0c808;
  }
  
  .flashback-page .specific-component {
    border-color: #f0c808;
  }
  </style>
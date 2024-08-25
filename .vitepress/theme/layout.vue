<!-- .vitepress/theme/Layout.vue -->

<template>
    <div id="page-container">
      <slot />
    </div>
  </template>
  
  <script setup>
  import { onMounted, onUpdated } from 'vue'
  import { useRoute } from 'vitepress'
  import './flashback-page.css'
  
  const route = useRoute()
  
  function applyClass() {
    const pageContainer = document.getElementById('page-container')
    if (route.path.startsWith('/flashback')) {
      pageContainer.classList.add('flashback-page')
    } else {
      pageContainer.classList.remove('flashback-page')
    }
  }
  
  onMounted(applyClass)
  onUpdated(applyClass)
  </script>
  
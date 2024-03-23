<template>
  <div>
    <Navbar />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

onMounted(() => {
    initFlowbite();
})
</script>
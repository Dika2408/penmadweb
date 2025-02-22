<script setup lang="ts">
import Sidebar from '../components/Sidebar.vue';

</script>

<template>
  <div>
    <Header />

    <slot />

    <Foot />
  </div>
</template>
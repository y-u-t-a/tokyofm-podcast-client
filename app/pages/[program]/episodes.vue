<template>
  <h1>{{ id }}</h1>
</template>

<script setup lang="ts">
const route = useRoute("program-episodes")
const id = route.params.program
</script>

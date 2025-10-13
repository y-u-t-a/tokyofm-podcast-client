<template>
  <h1>{{ id }}</h1>
  <pre v-if="data">{{ data }}</pre>
</template>

<script setup lang="ts">
const route = useRoute("program-episodes")
const id = route.params.program

const { execute, data, pending } = useFetch(`/api/${id}/episodes`, { immediate: false })

onMounted(() => {
  execute()
})
</script>

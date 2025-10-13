<template>
  <h1>{{ id }}</h1>
  <Loading :loading="pending" />
  <pre v-if="data">{{ data }}</pre>
</template>

<script setup lang="ts">
useHead({
  title: "エピソード | TFM Client"
})

const route = useRoute("program-episodes")
const id = route.params.program

const { execute, data, pending } = useFetch(`/api/${id}/episodes`, { immediate: false })

onMounted(() => {
  execute()
})
</script>

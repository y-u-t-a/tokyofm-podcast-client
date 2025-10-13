<template>
  <h2 class="text-xl font-bold mb-4">番組を検索</h2>
  <form class="mb-6">
    <UInput
      v-model="search"
      name="name"
      icon="i-lucide-search"
      placeholder="番組名で検索..."
      class="w-full"
      size="xl"
    />
    <button hidden type="submit" />
  </form>
  <div v-if="pending">Loading...</div>
  <div v-if="!pending && data" class="grid gap-x-4 gap-y-6 grid-cols-3">
    <div v-for="program in data.programs" class="hover:opacity-70">
      <NuxtLink :to="`/${program.id}/episodes`">
        <img :src="program.img" :alt="program.title" />
        <span class="block text-start whitespace-normal break-words">{{ program.title }}</span>
      </NuxtLink>
    </div>
  </div>
  <div v-if="!pending && data && data.programs.length === 0">データがありません</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const route = useRoute("index")
const search = ref(route.query.name as string || "")

const { execute, data, pending } = useFetch("/api/search", { query: { name: route.query.name }, immediate: false })


onMounted(() => {
  if (route.query.name != undefined) {
    execute()
  }
})
</script>
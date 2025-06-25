<template>
  <div>
    <h2>{{ post?.title }}</h2>
    <p>{{ post?.content }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from '@/api/axios'

const post = ref<any>(null)
const route = useRoute()

onMounted(async () => {
  const id = route.params.id
  const res = await axios.get(`/api/posts/${id}/`)
  post.value = res.data
})
</script>

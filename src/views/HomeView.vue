<template>
  <div class="w-full max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
    <!-- 头部区域 -->
    <header class="flex flex-col items-center justify-center py-4">
      <img src="@/assets/favicon.png" alt="ML 图标" class="w-28 h-28" />
      <h1 class="text-3xl font-bold mt-4">LYJ的博客</h1>
      <p class="text-gray-500 text-sm mt-1">欢迎来到我的个人博客站点</p>
      <p class="text-gray-500 text-sm mt-1">343577362@qq.com</p>
    </header>

    <!-- 博客列表 -->
    <section class="py-6">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-2xl font-semibold flex items-center gap-2">📚 博客文章列表</h2>
        <router-link
          to="/create"
          class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          ➕ 发布新文章
        </router-link>
      </div>

      <div class="space-y-4">
        <div
          v-for="post in posts"
          :key="post.id"
          class="border rounded-lg p-4 hover:shadow-md transition-shadow"
        >
          <router-link
            :to="`/post/${post.id}`"
            class="text-lg font-semibold text-blue-700 hover:underline"
          >
            {{ post.title }}
          </router-link>
          <p class="text-gray-500 text-sm mt-1">文章 ID：{{ post.id }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

const posts = ref([])

onMounted(async () => {
  const res = await axios.get('http://127.0.0.1:8000/api/posts/')
  posts.value = res.data
})
</script>



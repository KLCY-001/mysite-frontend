<!-- PostCreateView.vue -->
<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
    <div class="w-full max-w-[800px] bg-white p-8 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-6">发布新文章</h2>

      <form @submit.prevent="submitPost" class="space-y-4">
        <div>
          <label class="block font-semibold">标题：</label>
          <input v-model="title" class="w-full border px-3 py-2 rounded" />
        </div>
        <div>
          <label class="block font-semibold">Slug：</label>
          <input v-model="slug" class="w-full border px-3 py-2 rounded" />
        </div>
        <div>
          <label class="block font-semibold">内容：</label>
          <textarea v-model="content" rows="6" class="w-full border px-3 py-2 rounded"></textarea>
        </div>
        <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
          提交
        </button>
        <!-- 新增退出按钮 -->
          <button
            type="button"
            @click="goHome"
            class="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded"
          >
            退出
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from '@/api/axios'
import { useRouter } from 'vue-router'

const router = useRouter()  // ✅ 初始化路由

const title = ref('')
const slug = ref('')
const content = ref('')

const submitPost = async () => {
  await axios.post('/api/posts/', {
    title: title.value,
    slug: slug.value,
    content: content.value,
  })
  router.push('/') // 提交成功跳转
}

const goHome = () => {
  router.push('/') // 退出按钮跳转
}
</script>
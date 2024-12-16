<template>
  <div class="page-demo">
    <header class="demo-header">
      <nav>
        <el-menu mode="horizontal">
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">产品</el-menu-item>
          <el-menu-item index="3">关于</el-menu-item>
        </el-menu>
      </nav>
    </header>

    <main class="demo-content">
      <template v-if="isLoading">
        <div class="loading">
          <el-skeleton :rows="6" animated />
        </div>
      </template>
      <template v-else>
        <Content v-if="canShowContent" :model="model" :content="content" :api-key="apiKey" />
        <div v-else class="fallback">
          <h1>内容未找到</h1>
          <p>请在Builder.io中创建页面内容。</p>
        </div>
      </template>
    </main>

    <footer class="demo-footer">
      <p>&copy; 2024 Demo Site</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import '@builder.io/sdk-vue/css'
import type { BuilderContent } from '@builder.io/sdk-vue'
import { Content, fetchOneEntry, isPreviewing, getBuilderSearchParams } from '@builder.io/sdk-vue'
import { onMounted, ref } from 'vue'

const isLoading = ref(true)
const content = ref<BuilderContent | null>(null)
const canShowContent = ref(false)
const apiKey = 'c3f12d55dfe8411e8f06a4c982cd5303'
const model = 'page'

onMounted(async () => {
  try {
    const searchParams = new URL(window.location.href).searchParams
    content.value = await fetchOneEntry({
      model,
      apiKey,
      options: getBuilderSearchParams(searchParams),
      userAttributes: {
        urlPath: window.location.pathname,
      },
    })

    canShowContent.value = Boolean(content.value) || isPreviewing()
  } catch (error) {
    console.error('Failed to load Builder content:', error)
  } finally {
    isLoading.value = false
  }
})
</script>

<style scoped>
.page-demo {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.demo-header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.demo-content {
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.demo-footer {
  background: #f5f5f5;
  padding: 1rem;
  text-align: center;
}

.fallback {
  padding: 2rem;
  text-align: center;
  background: #f9f9f9;
  border-radius: 8px;
  margin: 2rem 0;
}

@media (max-width: 768px) {
  .demo-content {
    padding: 1rem;
  }
}
</style>

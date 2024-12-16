<template>
  <div class="header">
    <h1 class="greeting">你好, {{ username }}</h1>
    <el-input
      v-model="searchQuery"
      placeholder="Search"
      prefix-icon="Search"
      class="search-input"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// import { Search } from '@element-plus/icons-vue'

const username = ref('yuezheng2006')
const searchQuery = ref('')
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.greeting {
  font-size: 24px;
  font-weight: 500;
  color: var(--el-text-color-primary);
  margin: 0;
}

.search-input {
  width: 240px;
}
</style>

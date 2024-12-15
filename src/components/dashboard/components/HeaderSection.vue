<template>
  <header class="header-container">
    <h2 class="welcome-text">Hello Steve 👋🏼,</h2>
    <el-input
      v-model="searchQuery"
      placeholder="Search"
      prefix-icon="el-icon-search"
      class="search-input"
    />
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const searchQuery = ref('')
</script>

<style scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 39px;
}

.welcome-text {
  font-size: 24px;
  font-weight: 500;
  color: #000;
}

.search-input {
  width: 216px;
  border-radius: 8px;
  box-shadow: 2px 4px 20px rgba(199, 210, 223, 0.5);
}

@media (max-width: 991px) {
  .header-container {
    flex-direction: column;
    gap: 20px;
  }

  .search-input {
    width: 100%;
  }
}
</style>

<template>
  <el-menu class="sidebar" :default-active="activeMenu" @select="handleSelect">
    <div class="logo">
      <el-image :src="logoUrl" class="logo-img" />
      <span class="logo-text">PC Dashboard</span>
    </div>

    <el-menu-item index="dashboard">
      <el-icon><Monitor /></el-icon>
      <span>Dashboard</span>
    </el-menu-item>

    <el-menu-item index="products">
      <el-icon><Goods /></el-icon>
      <span>Products</span>
    </el-menu-item>

    <el-menu-item index="customers">
      <el-icon><User /></el-icon>
      <span>Customers</span>
    </el-menu-item>

    <el-menu-item index="help">
      <el-icon><QuestionFilled /></el-icon>
      <span>Help</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Monitor, Goods, User, QuestionFilled } from '@element-plus/icons-vue'

const logoUrl = '/assets/logo.svg'
const activeMenu = ref('dashboard')

const handleSelect = (index: string) => {
  activeMenu.value = index
}
</script>

<style scoped>
.sidebar {
  height: 100%;
  border-right: none;
}

.logo {
  display: flex;
  align-items: center;
  padding: 20px;
  gap: 8px;
}

.logo-img {
  width: 32px;
  height: 32px;
}

.logo-text {
  font-size: 18px;
  font-weight: 600;
  color: var(--el-text-color-primary);
}
</style>

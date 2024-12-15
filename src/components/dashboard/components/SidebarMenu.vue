<template>
  <div class="sidebar-container">
    <div class="logo-section">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/c3f12d55dfe8411e8f06a4c982cd5303/87c510f6928226e054443ff007e141f9c890777692a605b57ca143bb1803c285?apiKey=c3f12d55dfe8411e8f06a4c982cd5303&"
        alt="Dashboard Logo"
        class="logo-image"
      />
      <h1 class="logo-text">Dashboard</h1>
    </div>

    <nav class="nav-menu">
      <el-menu :default-active="activeMenu" class="menu-list" @select="handleSelect">
        <el-menu-item index="dashboard" class="menu-item">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/c3f12d55dfe8411e8f06a4c982cd5303/61815d9b782225afddd7c292addab097773b6835284035e77d9521d76725df45?apiKey=c3f12d55dfe8411e8f06a4c982cd5303&"
            alt=""
            class="menu-icon"
          />
          <span>Dashboard</span>
        </el-menu-item>

        <el-menu-item index="product" class="menu-item">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/c3f12d55dfe8411e8f06a4c982cd5303/e0e235f3493cd365ee2e11fda38978f390a82f024ab163beb2a25d311b86f141?apiKey=c3f12d55dfe8411e8f06a4c982cd5303&"
            alt=""
            class="menu-icon"
          />
          <span>Product</span>
        </el-menu-item>

        <el-menu-item index="customers" class="menu-item active">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/c3f12d55dfe8411e8f06a4c982cd5303/7a3ccde314faf3075248c175cc423bf1ed4941a06ebc81574783391ced639f90?apiKey=c3f12d55dfe8411e8f06a4c982cd5303&"
            alt=""
            class="menu-icon"
          />
          <span>Customers</span>
        </el-menu-item>

        <el-menu-item index="help" class="menu-item">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/c3f12d55dfe8411e8f06a4c982cd5303/d7cbf0e7d980d5b2e6074b93b645ed417f7db377847f8dbb13ff08802b1793bb?apiKey=c3f12d55dfe8411e8f06a4c982cd5303&"
            alt=""
            class="menu-icon"
          />
          <span>Help</span>
        </el-menu-item>
      </el-menu>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeMenu = ref('customers')

const handleSelect = (key: string) => {
  activeMenu.value = key
}
</script>

<style scoped>
.sidebar-container {
  background-color: #fff;
  box-shadow: 4px 10px 60px rgba(175, 183, 192, 0.5);
  height: 100%;
  padding: 36px 28px;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 54px;
}

.logo-image {
  width: 37px;
  height: 37px;
}

.logo-text {
  font-size: 26px;
  font-weight: 600;
  color: #000;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 18px;
  border-radius: 8px;
}

.menu-icon {
  width: 24px;
  height: 24px;
}

.menu-item.active {
  background-color: #5932ea;
  color: #fff;
}

@media (max-width: 991px) {
  .sidebar-container {
    padding: 20px;
  }
}
</style>

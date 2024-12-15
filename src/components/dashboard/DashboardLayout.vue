<template>
  <div>
    <el-container class="dashboard-layout">
      <el-aside class="sidebar">
        <SidebarMenu />
      </el-aside>
      <el-main class="main-content">
        <HeaderSection />
        <StatsSection />
        <CustomersTable />
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import SidebarMenu from './components/SidebarMenu.vue'
import HeaderSection from './components/HeaderSection.vue'
import StatsSection from './components/StatsSection.vue'
import CustomersTable from './components/CustomersTable.vue'
</script>

<style scoped>
.dashboard-layout {
  background-color: rgb(240, 241, 247);
  min-height: 100vh;
}

.sidebar {
  width: 24%;
  padding: 0;
}

.main-content {
  width: 76%;
  padding: 40px 80px;
}

@media (max-width: 991px) {
  .main-content {
    padding: 40px 20px;
  }

  .sidebar {
    width: 100%;
  }
}
</style>

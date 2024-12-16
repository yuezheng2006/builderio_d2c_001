<template>
  <el-container class="dashboard-container">
    <el-aside width="250px">
      <SidebarView />
    </el-aside>
    <el-main>
      <HeaderView />
      <StatsCardsView />
      <CustomersTableView />
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import SidebarView from './SidebarView.vue'
import HeaderView from './HeaderView.vue'
import StatsCardsView from './StatsCardsView.vue'
import CustomersTableView from './CustomersTableView.vue'
// import { useDashboardInteractor } from '../interactors/DashboardInteractor'

// const dashboardInteractor = useDashboardInteractor()

onMounted(() => {
  // dashboardInteractor.initializeDashboard()
})
</script>

<style scoped>
.dashboard-container {
  min-height: 100vh;
  background-color: var(--el-bg-color-page);
}
</style>

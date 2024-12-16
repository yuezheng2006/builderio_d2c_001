<template>
  <el-row :gutter="20">
    <el-col v-for="stat in stats" :key="stat.id" :xs="24" :sm="12" :md="8">
      <el-card class="stat-card" shadow="hover">
        <div class="stat-content">
          <el-image :src="stat.icon" class="stat-icon" />
          <div class="stat-info">
            <div class="stat-label">{{ stat.label }}</div>
            <div class="stat-value">{{ stat.value }}</div>
            <div
              class="stat-trend"
              :class="{
                positive: stat.trend > 0,
                negative: stat.trend < 0,
              }"
            >
              <el-icon>
                <component :is="stat.trend > 0 ? 'ArrowUp' : 'ArrowDown'" />
              </el-icon>
              <span>{{ Math.abs(stat.trend) }}% this month</span>
            </div>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { computed } from 'vue'
// import { ArrowUp, ArrowDown } from '@element-plus/icons-vue'
import { useStatsPresenter } from '../presenters/StatsPresenter'

const statsPresenter = useStatsPresenter()
const stats = computed(() => statsPresenter.getStats())
</script>

<style scoped>
.stat-card {
  margin-bottom: 20px;
}

.stat-content {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.stat-icon {
  width: 48px;
  height: 48px;
}

.stat-info {
  flex: 1;
}

.stat-label {
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 4px;
}

.stat-value {
  font-size: 32px;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 8px;
}

.stat-trend {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
}

.positive {
  color: var(--el-color-success);
}

.negative {
  color: var(--el-color-danger);
}
</style>

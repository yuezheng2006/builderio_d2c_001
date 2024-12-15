<template>
  <div class="stat-card">
    <img :src="iconSrc" :alt="title" class="stat-icon" />
    <div class="stat-content">
      <span class="stat-title">{{ title }}</span>
      <span class="stat-value">{{ value }}</span>
      <div v-if="trend" class="trend-container" :class="trendTypeClass">
        <el-icon><ArrowUp v-if="trendType === 'positive'" /><ArrowDown v-else /></el-icon>
        <span>{{ trend }} this month</span>
      </div>
      <img
        v-if="showActiveUsers"
        src="https://cdn.builder.io/api/v1/image/assets/c3f12d55dfe8411e8f06a4c982cd5303/c6f42a91-c308-4c19-98c6-d53d40c36628?apiKey=c3f12d55dfe8411e8f06a4c982cd5303&"
        alt="Active users visualization"
        class="active-users-viz"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ArrowUp, ArrowDown } from '@element-plus/icons-vue'

interface Props {
  title: string
  value: string
  trend?: string
  trendType?: 'positive' | 'negative'
  iconSrc: string
  showActiveUsers?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showActiveUsers: false,
})

const trendTypeClass = computed(() => ({
  'trend-positive': props.trendType === 'positive',
  'trend-negative': props.trendType === 'negative',
}))
</script>

<style scoped>
.stat-card {
  display: flex;
  gap: 20px;
}

.stat-icon {
  width: 84px;
  height: 84px;
}

.stat-content {
  display: flex;
  flex-direction: column;
}

.stat-title {
  color: #666565;
  font-size: 14px;
}

.stat-value {
  font-size: 32px;
  font-weight: 600;
  margin: 4px 0;
}

.trend-container {
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 12px;
}

.trend-positive {
  color: #00ac4f;
}

.trend-negative {
  color: #d0004b;
}

.active-users-viz {
  width: 100px;
  margin-top: 6px;
  border-radius: 50%;
}
</style>

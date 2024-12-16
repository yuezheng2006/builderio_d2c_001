import { ref, computed } from 'vue'
import type { DashboardStats } from '../entities/DashboardTypes'

export function useStatsPresenter() {
  const stats = ref<DashboardStats[]>([
    {
      id: 'total-customers',
      label: 'Total Customers',
      value: '5,423',
      trend: 16,
      icon: '/assets/icons/customers.svg',
    },
    {
      id: 'members',
      label: 'Members',
      value: '1,893',
      trend: -1,
      icon: '/assets/icons/members.svg',
    },
    {
      id: 'active-now',
      label: 'Active Now',
      value: '189',
      trend: 4,
      icon: '/assets/icons/active.svg',
    },
  ])

  const getStats = () => stats.value

  return {
    getStats,
  }
}

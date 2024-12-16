import { ref } from 'vue'

export function useDashboardInteractor() {
  const isInitialized = ref(false)

  const initializeDashboard = async () => {
    if (isInitialized.value) return

    try {
      await Promise.all([fetchInitialStats(), fetchInitialCustomers()])
      isInitialized.value = true
    } catch (error) {
      console.error('Failed to initialize dashboard:', error)
    }
  }

  const fetchInitialStats = async () => {
    const response = await fetch('/api/dashboard/stats')
    if (!response.ok) throw new Error('Failed to fetch stats')
    return await response.json()
  }

  const fetchInitialCustomers = async () => {
    const response = await fetch('/api/dashboard/customers?page=1&pageSize=10')
    if (!response.ok) throw new Error('Failed to fetch customers')
    return await response.json()
  }

  return {
    initializeDashboard,
  }
}

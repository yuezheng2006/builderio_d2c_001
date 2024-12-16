import type { PaginationParams, ApiResponse, Customer } from '../entities/DashboardTypes'

export const API_HOST = 'https://user-api.builder-io.workers.dev/'

export function useCustomersInteractor() {
  const fetchCustomers = async (params: PaginationParams): Promise<ApiResponse<Customer>> => {
    const queryParams = new URLSearchParams({
      page: params.page.toString(),
      pageSize: params.pageSize.toString(),
      sortBy: params.sortBy,
    })

    const response = await fetch(`${API_HOST}?${queryParams}`)
    if (!response.ok) {
      throw new Error('Failed to fetch customers')
    }
    return await response.json()
  }

  return {
    fetchCustomers,
  }
}

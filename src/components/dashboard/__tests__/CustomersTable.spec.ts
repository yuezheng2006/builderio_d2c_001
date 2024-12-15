import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import CustomersTable from '../components/CustomersTable.vue'

describe('CustomersTable', () => {
  it('renders correctly', () => {
    const wrapper = mount(CustomersTable)
    expect(wrapper.find('.customers-section').exists()).toBe(true)
  })

  it('fetches users on mount', async () => {
    const mockFetch = vi.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            data: [],
            total: 0,
          }),
      })
    )
    global.fetch = mockFetch

    mount(CustomersTable)
    expect(mockFetch).toHaveBeenCalled()
  })

  it('handles sort correctly', async () => {
    const wrapper = mount(CustomersTable)
    await wrapper.find('.sort-btn').trigger('click')
    expect(wrapper.vm.sortBy).toBe('location.city')
  })
})

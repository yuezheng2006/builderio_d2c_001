import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import CustomersList from '../CustomersList.vue'

vi.mock('fetch')

describe('CustomersList', () => {
  it('renders loading state', () => {
    const wrapper = mount(CustomersList)
    expect(wrapper.find('.el-loading-spinner').exists()).toBe(true)
  })

  it('handles sort change', async () => {
    const wrapper = mount(CustomersList)
    await wrapper.find('[data-test="sort-name"]').trigger('click')
    expect(wrapper.vm.sortBy).toBe('name.first')
  })
})

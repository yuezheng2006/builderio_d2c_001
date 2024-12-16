import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import CustomersTableView from '../views/CustomersTableView.vue'
import { useCustomersInteractor } from '../interactors/CustomersInteractor'
import { useCustomersPresenter } from '../presenters/CustomersPresenter'

vi.mock('../interactors/CustomersInteractor')
vi.mock('../presenters/CustomersPresenter')

describe('CustomersTableView', () => {
  const mockCustomers = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      city: 'New York',
      country: 'USA',
      status: 'active',
      photo: 'photo.jpg',
    },
  ]

  beforeEach(() => {
    vi.clearAllMocks()
    vi.mocked(useCustomersInteractor).mockReturnValue({
      fetchCustomers: vi.fn().mockResolvedValue({
        data: mockCustomers,
        total: 1,
        page: 1,
        pageSize: 10,
      }),
    })

    vi.mocked(useCustomersPresenter).mockReturnValue({
      formatCustomers: vi.fn().mockReturnValue([
        {
          ...mockCustomers[0],
          name: 'John Doe',
          location: 'New York, USA',
        },
      ]),
    })
  })

  it('fetches and displays customers', async () => {
    const wrapper = mount(CustomersTableView)
    await wrapper.vm.$nextTick()

    expect(wrapper.find('.el-table').exists()).toBe(true)
    expect(wrapper.find('.el-pagination').exists()).toBe(true)
  })

  it('handles sort change', async () => {
    const wrapper = mount(CustomersTableView)
    await wrapper.vm.$nextTick()

    await wrapper.find('.el-radio-button__original').trigger('change')
    expect(
      vi.mocked(useCustomersInteractor).mock.results[0].value.fetchCustomers
    ).toHaveBeenCalledTimes(2)
  })
})

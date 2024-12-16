import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import StatsCardsView from '../views/StatsCardsView.vue'
import { useStatsPresenter } from '../presenters/StatsPresenter'

vi.mock('../presenters/StatsPresenter')

describe('StatsCardsView', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders all stat cards', () => {
    const mockStats = [
      {
        id: 'total-customers',
        label: 'Total Customers',
        value: '5,423',
        trend: 16,
        icon: '/test.svg',
      },
    ]

    vi.mocked(useStatsPresenter).mockReturnValue({
      getStats: () => mockStats,
    })

    const wrapper = mount(StatsCardsView)
    expect(wrapper.findAll('.stat-card').length).toBe(1)
    expect(wrapper.find('.stat-value').text()).toBe('5,423')
  })

  it('displays correct trend indicators', () => {
    const mockStats = [
      {
        id: 'test',
        label: 'Test',
        value: '100',
        trend: 5,
        icon: '/test.svg',
      },
    ]

    vi.mocked(useStatsPresenter).mockReturnValue({
      getStats: () => mockStats,
    })

    const wrapper = mount(StatsCardsView)
    expect(wrapper.find('.positive').exists()).toBe(true)
    expect(wrapper.find('.negative').exists()).toBe(false)
  })
})

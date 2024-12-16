import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import DashboardView from '../views/DashboardView.vue'
import { useDashboardInteractor } from '../interactors/DashboardInteractor'

vi.mock('../interactors/DashboardInteractor')

describe('DashboardView', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('initializes dashboard on mount', () => {
    const mockInitialize = vi.fn()
    vi.mocked(useDashboardInteractor).mockReturnValue({
      initializeDashboard: mockInitialize,
    })

    mount(DashboardView)
    expect(mockInitialize).toHaveBeenCalledOnce()
  })
})

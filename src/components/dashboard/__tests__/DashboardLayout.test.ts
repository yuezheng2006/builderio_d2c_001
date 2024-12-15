import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import DashboardLayout from '../DashboardLayout.vue'
import SidebarMenu from '../SidebarMenu.vue'
import MainContent from '../MainContent.vue'

describe('DashboardLayout', () => {
  it('renders sidebar and main content', () => {
    const wrapper = mount(DashboardLayout)
    expect(wrapper.findComponent(SidebarMenu).exists()).toBe(true)
    expect(wrapper.findComponent(MainContent).exists()).toBe(true)
  })
})

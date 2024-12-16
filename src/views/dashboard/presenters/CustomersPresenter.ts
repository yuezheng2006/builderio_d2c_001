import type { Customer } from '../entities/DashboardTypes'

export function useCustomersPresenter() {
  const formatCustomers = (customers: Customer[]) => {
    return customers.map((customer: Customer) => ({
      ...customer,
      photo: customer.picture.large,
      username: `${customer.name.first} ${customer.name.last}`,
      location: `${customer.location.state}, ${customer.location.city}`,
      status: customer.id.name ? 'active' : 'inactive',
    }))
  }

  return {
    formatCustomers,
  }
}

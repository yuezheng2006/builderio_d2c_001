import type { Customer } from '../entities/DashboardTypes'

export function useCustomersPresenter() {
  const formatCustomers = (customers: Customer[]) => {
    return customers.map((customer: Customer) => ({
      ...customer,
      photo: customer.picture.large,
      name: `${customer.name.first} ${customer.name.last}`,
      location: `${customer.location.state}, ${customer.location.city}`,
      Status: 'Active',
    }))
  }

  return {
    formatCustomers,
  }
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface DashboardStats {
  id: string
  label: string
  value: string
  trend: number
  icon: string
}

export type Customer = {
  gender: string
  name: {
    title: string
    first: string
    last: string
  }
  location: {
    street: {
      number: number
      name: string
    }
    city: string
    state: string
    country: string
    postcode: number
    coordinates: {
      latitude: string
      longitude: string
    }
    timezone: {
      offset: string
      description: string
    }
  }
  email: string
  login: {
    uuid: string
    username: string
    password: string
    salt: string
    md5: string
    sha1: string
    sha256: string
  }
  dob: {
    date: string
    age: number
  }
  registered: {
    date: string
    age: number
  }
  phone: string
  cell: string
  id: {
    name: string
    value: string
  }
  picture: {
    large: string
    medium: string
    thumbnail: string
  }
  nat: string
  [key: string]: any
}

export interface PaginationParams {
  page: number
  pageSize: number
  sortBy: string
}

export interface ApiResponse<T> {
  data: T[]
  total: number
  page: number
  pageSize: number
}

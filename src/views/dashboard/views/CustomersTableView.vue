<template>
  <el-card class="customers-table">
    <template #header>
      <div class="table-header">
        <div class="header-left">
          <h2 class="title">All Customers</h2>
          <el-tag type="success" effect="plain">Active Members</el-tag>
        </div>
        <div class="header-right">
          <span class="sort-label">Sort by:</span>
          <el-radio-group v-model="sortBy" size="small" @change="handleSortChange">
            <el-radio-button label="name">Name</el-radio-button>
            <el-radio-button label="location">Location</el-radio-button>
          </el-radio-group>
        </div>
      </div>
    </template>

    <el-table v-loading="loading" :data="customers" style="width: 100%" row-key="id">
      <el-table-column label="Photo" width="80">
        <template #default="{ row }">
          <el-avatar :src="row.photo" :alt="row.name" />
        </template>
      </el-table-column>

      <el-table-column prop="name" label="Name" />
      <el-table-column prop="location" label="Location" />

      <el-table-column prop="status" label="Status" width="120">
        <template #default="{ row }">
          <el-tag :type="row.status === 'active' ? 'success' : 'info'" size="small">
            {{ row.status }}
          </el-tag>
        </template>
      </el-table-column>
    </el-table>

    <div class="pagination">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :total="total"
        :page-sizes="[10, 20, 50]"
        layout="total, sizes, prev, pager, next"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useCustomersPresenter } from '../presenters/CustomersPresenter'
import { useCustomersInteractor } from '../interactors/CustomersInteractor'
import type { Customer } from '../entities/DashboardTypes'

const customersPresenter = useCustomersPresenter()
const customersInteractor = useCustomersInteractor()

const loading = ref(false)
const customers = ref<Customer[]>([])
const total = ref(0)
const currentPage = ref(1)
const pageSize = ref(10)
const sortBy = ref('name')

const fetchCustomers = async () => {
  loading.value = true
  try {
    const response = await customersInteractor.fetchCustomers({
      page: currentPage.value,
      pageSize: pageSize.value,
      sortBy: sortBy.value,
    })
    const resData = customersPresenter.formatCustomers(response.data)
    console.log('reData', resData)
    customers.value = resData
    total.value = response.total
  } finally {
    loading.value = false
  }
}

const handleSortChange = () => {
  currentPage.value = 1
  fetchCustomers()
}

const handleSizeChange = (val: number) => {
  pageSize.value = val
  fetchCustomers()
}

const handleCurrentChange = (val: number) => {
  currentPage.value = val
  fetchCustomers()
}

onMounted(() => {
  fetchCustomers()
})
</script>

<style scoped>
.customers-table {
  margin-top: 24px;
}

.table-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.title {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.sort-label {
  color: var(--el-text-color-secondary);
}

.pagination {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
</style>

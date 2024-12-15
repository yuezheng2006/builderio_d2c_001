<template>
  <section class="customers-section">
    <div class="header-row">
      <div class="title-container">
        <h3 class="main-title">All Customers</h3>
        <span class="subtitle">Active Members</span>
      </div>

      <div class="sort-container">
        <span class="sort-label">Sort by:</span>
        <div class="sort-buttons">
          <el-button
            :class="['sort-btn', { active: sortBy === 'location.city' }]"
            @click="handleSort('location.city')"
          >
            Location
          </el-button>
          <el-button
            :class="['sort-btn', { active: sortBy === 'name.first' }]"
            @click="handleSort('name.first')"
          >
            Name
          </el-button>
        </div>
      </div>
    </div>

    <el-table v-loading="loading" :data="users" class="customers-table">
      <el-table-column label="Photo" width="100">
        <template #default="{ row }">
          <img
            :src="row.picture.thumbnail"
            :alt="`${row.name.first} ${row.name.last}`"
            class="user-avatar"
          />
        </template>
      </el-table-column>

      <el-table-column label="Name">
        <template #default="{ row }"> {{ row.name.first }} {{ row.name.last }} </template>
      </el-table-column>

      <el-table-column label="Location">
        <template #default="{ row }">
          {{ row.location.city }}, {{ row.location.country }}
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      v-model:current-page="currentPage"
      :total="totalItems"
      :page-size="10"
      layout="prev, pager, next"
      class="pagination"
      @current-change="handlePageChange"
    />
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface User {
  name: {
    first: string
    last: string
  }
  location: {
    city: string
    country: string
  }
  picture: {
    thumbnail: string
  }
}

const users = ref<User[]>([])
const loading = ref(true)
const currentPage = ref(1)
const totalItems = ref(0)
const sortBy = ref<string>('name.first')

async function fetchUsers(page: number, sort: string | null = null) {
  loading.value = true
  try {
    const url = `https://user-api.builder-io.workers.dev/${sort ? `?sortBy=${sort}` : ''}${
      sort ? '&' : '?'
    }page=${page}`
    const response = await fetch(url)
    const data = await response.json()
    users.value = data.data
    totalItems.value = data.total
  } catch (error) {
    console.error('Error fetching users:', error)
  } finally {
    loading.value = false
  }
}

function handleSort(field: string) {
  sortBy.value = field
  fetchUsers(currentPage.value, field)
}

function handlePageChange(page: number) {
  fetchUsers(page, sortBy.value)
}

onMounted(() => {
  fetchUsers(1)
})
</script>

<style scoped>
.customers-section {
  background-color: #fff;
  border-radius: 16px;
  padding: 30px 34px;
  margin-top: 50px;
  box-shadow: 0px 10px 60px rgba(168, 176, 185, 0.5);
}

.header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.main-title {
  font-size: 22px;
  font-weight: 600;
  color: #000;
}

.subtitle {
  font-size: 14px;
  color: #00ac4f;
}

.sort-container {
  display: flex;
  align-items: center;
  gap: 20px;
}

.sort-label {
  font-size: 12px;
  color: #433c3c;
}

.sort-buttons {
  display: flex;
  gap: 10px;
}

.sort-btn {
  border-radius: 8px;
  background-color: #f4f4f6;
  border: 1px solid #cecece;
  padding: 10px 15px;
  font-size: 12px;

  &.active {
    background-color: #5932ea;
    color: #fff;
  }
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.pagination {
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
}

@media (max-width: 991px) {
  .customers-section {
    padding: 20px;
    margin-top: 30px;
  }

  .header-row {
    flex-direction: column;
    gap: 20px;
  }

  .sort-container {
    width: 100%;
    justify-content: space-between;
  }
}
</style>

# Vue 3 + TypeScript Code Style Guide

## Project Structure

```
src/
├── assets/
├── components/
│   ├── base/
│   └── common/
├── composables/
├── models/          # Domain models & interfaces
├── router/
├── services/        # API/Business logic services
├── stores/          # Pinia stores
├── types/           # TypeScript types/interfaces
├── utils/           # Helper functions
└── views/           # Page components
```

## Component Structure

```ts
<script setup lang="ts">
// 1. Type imports
import type { PropType } from 'vue'
import type { User } from '@/models/user.model'

// 2. Component imports
import BaseButton from '@/components/base/BaseButton.vue'
import UserAvatar from '@/components/common/UserAvatar.vue'

// 3. Service imports
import { useUserService } from '@/services/user.service'

// 4. Store imports
import { useUserStore } from '@/stores/user.store'

// 5. Composition API imports
import { ref, computed, onMounted } from 'vue'

// 6. Props definition
const props = defineProps({
  user: {
    type: Object as PropType<User>,
    required: true
  },
  status: {
    type: String as PropType<'active' | 'inactive'>,
    default: 'active'
  }
})

// 7. Emits definition
const emit = defineEmits<{
  (e: 'update', payload: User): void
  (e: 'delete', id: number): void
}>()

// 8. Services/Store initialization
const userService = useUserService()
const userStore = useUserStore()

// 9. Reactive state
const searchQuery = ref('')
const isLoading = ref(false)

// 10. Computed properties
const filteredUsers = computed(() =>
  userStore.users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
)

// 11. Methods
const handleUserUpdate = async (userData: User) => {
  isLoading.value = true
  try {
    await userService.update(userData)
    emit('update', userData)
  } finally {
    isLoading.value = false
  }
}

// 12. Lifecycle hooks
onMounted(async () => {
  await userStore.fetchUsers()
})
</script>

<template>
  <div class="user-profile">
    <div class="user-profile__header">
      <user-avatar
        :src="user.avatar"
        :alt="user.name"
        class="user-profile__avatar"
      />
    </div>

    <base-button
      :loading="isLoading"
      @click="handleUserUpdate(user)"
    >
      Update Profile
    </base-button>
  </div>
</template>

<style scoped lang="scss">
// BEM naming convention
.user-profile {
  &__header {
    display: flex;
    align-items: center;
  }

  &__avatar {
    width: 48px;
    height: 48px;
  }
}
</style>
```

## Key Guidelines

1. Use `<script setup>` syntax
2. Follow strict import order (types → components → services → stores → composables)
3. Use TypeScript strict mode
4. Use clean architecture patterns:
   - Services for API/business logic
   - Models for domain entities
   - Stores for state management
5. Use BEM for CSS naming
6. Prefix event handlers with 'handle'
7. Use async/await for asynchronous operations
8. Use type imports with 'type' keyword
9. Keep services pure and injectable
10. Use composables for reusable logic

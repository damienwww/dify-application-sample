<script setup>
import { useAgentsStore } from '@/stores/agents'

const agentsStore = useAgentsStore()

const handleSearchChange = (value) => {
  agentsStore.setSearchQuery(value)
}

const handleCategoryChange = (category) => {
  agentsStore.setCategory(category)
}
</script>

<template>
  <div class="search-filter-bar">
    <div class="search-section">
      <el-input
        v-model="agentsStore.searchQuery"
        placeholder="搜索智能体..."
        clearable
        size="large"
        class="search-input"
        @input="handleSearchChange"
      >
        <template #prefix>
          <el-icon><Search /></el-icon>
        </template>
      </el-input>
    </div>
    
    <div class="filter-section">
      <el-scrollbar class="category-scrollbar">
        <div class="category-tags">
          <el-tag
            v-for="category in agentsStore.categories"
            :key="category"
            :type="agentsStore.selectedCategory === category ? 'primary' : 'info'"
            :effect="agentsStore.selectedCategory === category ? 'dark' : 'plain'"
            size="large"
            class="category-tag"
            @click="handleCategoryChange(category)"
          >
            {{ category }}
          </el-tag>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<style scoped>
.search-filter-bar {
  background: var(--el-bg-color);
  padding: 24px;
  border-bottom: 1px solid var(--el-border-color-lighter);
}

.search-section {
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
}

.search-input {
  max-width: 600px;
  margin: 0 auto;
}

.search-input :deep(.el-input__inner) {
  border-radius: 24px;
  padding-left: 48px;
}

.search-input :deep(.el-input__prefix) {
  left: 16px;
}

.filter-section {
  width: 100%;
}

.category-scrollbar {
  width: 100%;
}

.category-tags {
  display: flex;
  gap: 12px;
  padding: 8px 0;
  min-width: max-content;
  justify-content: center;
}

.category-tag {
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 20px;
  padding: 8px 16px;
  white-space: nowrap;
  user-select: none;
}

.category-tag:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .search-filter-bar {
    padding: 16px;
  }
  
  .search-section {
    margin-bottom: 16px;
  }
  
  .search-input {
    max-width: 100%;
  }
  
  .category-tags {
    gap: 8px;
    padding: 4px 0;
  }
  
  .category-tag {
    padding: 6px 12px;
    font-size: 13px;
  }
}
</style>
<script setup>
import { computed } from 'vue'
import { useAgentsStore } from '@/stores/agents'
import SearchFilter from '@/components/SearchFilter.vue'
import AgentCard from '@/components/AgentCard.vue'

const agentsStore = useAgentsStore()

const filteredAgents = computed(() => agentsStore.filteredAgents)
const hasResults = computed(() => filteredAgents.value.length > 0)
</script>

<template>
  <div class="home-view">
    <SearchFilter />
    
    <div class="agents-container">
      <div class="container-content">
        <div v-if="hasResults" class="agents-grid">
          <AgentCard 
            v-for="agent in filteredAgents" 
            :key="agent.id" 
            :agent="agent"
          />
        </div>
        
        <div v-else class="no-results">
          <div class="no-results-content">
            <el-icon class="no-results-icon"><DocumentRemove /></el-icon>
            <h3 class="no-results-title">没有找到相关智能体</h3>
            <p class="no-results-desc">试试调整搜索关键词或筛选条件</p>
            <el-button 
              type="primary" 
              @click="agentsStore.setSearchQuery(''); agentsStore.setCategory('全部')"
            >
              清空筛选条件
            </el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-view {
  min-height: 100vh;
}

.agents-container {
  padding: 24px 24px 40px;
  background: var(--el-bg-color-page);
}

.container-content {
  max-width: 1400px;
  margin: 0 auto;
}

.agents-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  gap: 24px;
  margin-top: 16px;
  justify-content: center;
}

.no-results {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  padding: 40px;
}

.no-results-content {
  text-align: center;
  max-width: 400px;
}

.no-results-icon {
  font-size: 64px;
  color: var(--el-color-info);
  margin-bottom: 16px;
}

.no-results-title {
  font-size: 20px;
  color: var(--el-text-color-primary);
  margin: 0 0 8px 0;
  font-weight: 600;
}

.no-results-desc {
  color: var(--el-text-color-regular);
  margin: 0 0 24px 0;
  line-height: 1.5;
}

@media (max-width: 1200px) {
  .agents-grid {
    grid-template-columns: repeat(auto-fill, 300px);
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .agents-container {
    padding: 16px 16px 32px;
  }
  
  .agents-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 16px;
    margin-top: 12px;
  }
  
  .no-results {
    min-height: 300px;
    padding: 20px;
  }
  
  .no-results-icon {
    font-size: 48px;
  }
  
  .no-results-title {
    font-size: 18px;
  }
}

@media (max-width: 480px) {
  .agents-container {
    padding: 12px 12px 24px;
  }
  
  .agents-grid {
    grid-template-columns: 1fr;
    gap: 12px;
    margin-top: 8px;
  }
}
</style>

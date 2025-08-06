<script setup>
const props = defineProps({
  agent: {
    type: Object,
    required: true
  }
})

const handleCardClick = () => {
  window.open(props.agent.difyUrl, '_blank')
}
</script>

<template>
  <el-card 
    class="agent-card" 
    shadow="hover"
    @click="handleCardClick"
  >
    <div class="card-header">
      <div class="icon-wrapper">
        <component :is="agent.icon" class="agent-icon" />
      </div>
      <div class="card-meta">
        <h3 class="agent-name">{{ agent.name }}</h3>
        <el-tag class="category-tag" type="info" size="small">
          {{ agent.category }}
        </el-tag>
      </div>
    </div>
    
    <div class="card-content">
      <p class="agent-description">{{ agent.description }}</p>
      
      <div class="features-section">
        <div class="features-list">
          <el-tag 
            v-for="feature in agent.features" 
            :key="feature"
            class="feature-tag"
            size="small"
            type="primary"
            effect="plain"
          >
            {{ feature }}
          </el-tag>
        </div>
      </div>
    </div>
    
    <div class="card-footer">
      <div class="stats">
        <div class="stat-item">
          <el-icon><Star /></el-icon>
          <span class="stat-value">{{ agent.rating }}</span>
        </div>
        <div class="stat-item">
          <el-icon><User /></el-icon>
          <span class="stat-value">{{ agent.users }}+</span>
        </div>
      </div>
      <el-button 
        type="primary" 
        size="small" 
        class="try-button"
        @click.stop="handleCardClick"
      >
        立即体验
        <el-icon class="ml-1"><Right /></el-icon>
      </el-button>
    </div>
  </el-card>
</template>

<style scoped>
.agent-card {
  height: 300px;
  width: 300px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid transparent;
  overflow: hidden;
  border-radius: 16px;
  background: var(--el-bg-color);
  position: relative;
}

.agent-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--el-color-primary), var(--el-color-primary-light-3));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.agent-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border-color: var(--el-color-primary-light-7);
}

.agent-card:hover::before {
  opacity: 1;
}

.card-header {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--el-border-color-extra-light);
}

.icon-wrapper {
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, var(--el-color-primary) 0%, var(--el-color-primary-light-3) 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
  position: relative;
  overflow: hidden;
}

.icon-wrapper::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transform: rotate(45deg);
  transition: transform 0.6s ease;
}

.agent-card:hover .icon-wrapper::before {
  transform: rotate(45deg) translate(100%, 100%);
}

.agent-icon {
  font-size: 28px;
  color: white;
  position: relative;
  z-index: 1;
}

.card-meta {
  flex: 1;
  min-width: 0;
}

.agent-name {
  font-size: 22px;
  font-weight: 700;
  color: var(--el-text-color-primary);
  margin: 0 0 8px 0;
  line-height: 1.3;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  letter-spacing: -0.5px;
}

.category-tag {
  background-color: var(--el-color-info-light-9);
  color: var(--el-color-info);
  border-color: var(--el-color-info-light-7);
  font-weight: 500;
  border-radius: 8px;
}

.card-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.agent-description {
  color: var(--el-text-color-regular);
  line-height: 1.6;
  font-size: 15px;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-align: justify;
  word-break: break-word;
  height: 72px;
}

.features-section {
  flex: 1;
  display: flex;
  align-items: flex-end;
}

.features-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
}

.feature-tag {
  background-color: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
  border-color: var(--el-color-primary-light-7);
  border-radius: 12px;
  font-weight: 500;
  font-size: 12px;
  transition: all 0.3s ease;
}

.feature-tag:hover {
  background-color: var(--el-color-primary-light-7);
  transform: scale(1.05);
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
  border-top: 1px solid var(--el-border-color-extra-light);
  margin-top: 16px;
}

.stats {
  display: flex;
  gap: 20px;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--el-text-color-regular);
  font-size: 14px;
  font-weight: 500;
}

.stat-item .el-icon {
  font-size: 16px;
  color: var(--el-color-warning);
}

.stat-value {
  font-weight: 600;
  color: var(--el-text-color-primary);
}

.try-button {
  font-size: 13px;
  padding: 10px 20px;
  border-radius: 20px;
  font-weight: 600;
  background: linear-gradient(135deg, var(--el-color-primary), var(--el-color-primary-light-3));
  border-color: transparent;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 4px;
}

.try-button:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

.ml-1 {
  margin-left: 4px;
}

@media (max-width: 768px) {
  .agent-card {
    height: 280px;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
  
  .card-header {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 12px;
  }
  
  .icon-wrapper {
    width: 64px;
    height: 64px;
  }
  
  .agent-icon {
    font-size: 32px;
  }
  
  .agent-name {
    font-size: 20px;
    text-align: center;
    white-space: normal;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
  }
  
  .agent-description {
    font-size: 14px;
    text-align: left;
  }
  
  .card-footer {
    flex-direction: column;
    gap: 16px;
    align-items: stretch;
  }
  
  .stats {
    justify-content: center;
  }
  
  .try-button {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .agent-card {
    height: 260px;
    width: 100%;
  }
  
  .card-header {
    gap: 10px;
  }
  
  .icon-wrapper {
    width: 56px;
    height: 56px;
  }
  
  .agent-icon {
    font-size: 28px;
  }
  
  .agent-name {
    font-size: 18px;
  }
  
  .agent-description {
    font-size: 13px;
    height: 60px;
  }
  
  .features-list {
    gap: 6px;
  }
  
  .feature-tag {
    font-size: 11px;
  }
}
</style>
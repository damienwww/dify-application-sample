<script setup>
import { computed } from 'vue'
import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()

const themeIcon = computed(() => themeStore.isDark ? 'Sunny' : 'Moon')
</script>

<template>
  <el-header class="app-header">
    <div class="header-content">
      <div class="logo-section">
        <h1 class="logo-text">我的AI工坊</h1>
      </div>
      
      <div class="header-actions">
        <el-button 
          :icon="themeIcon"
          circle
          size="large"
          @click="themeStore.toggleTheme"
          class="theme-toggle"
        />
      </div>
    </div>
  </el-header>
</template>

<style scoped>
.app-header {
  height: 80px !important;
  background: var(--el-bg-color);
  border-bottom: 1px solid var(--el-border-color-lighter);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.header-content {
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-section {
  display: flex;
  align-items: center;
}

.logo-text {
  font-size: 32px;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
  letter-spacing: -1px;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.theme-toggle {
  background-color: var(--el-bg-color-page);
  border-color: var(--el-border-color);
  color: var(--el-text-color-primary);
  transition: all 0.3s ease;
}

.theme-toggle:hover {
  background-color: var(--el-color-primary);
  border-color: var(--el-color-primary);
  color: white;
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .header-content {
    padding: 0 16px;
  }
  
  .logo-text {
    font-size: 24px;
  }
  
  .theme-toggle {
    size: medium;
  }
}

@media (max-width: 480px) {
  .logo-text {
    font-size: 20px;
  }
}
</style>
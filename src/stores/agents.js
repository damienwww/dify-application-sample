import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import agentsData from '@/data/agents.json'

export const useAgentsStore = defineStore('agents', () => {
  const agents = ref(agentsData)
  const searchQuery = ref('')
  const selectedCategory = ref('全部')

  const categories = computed(() => {
    const cats = ['全部', ...new Set(agents.value.map(agent => agent.category))]
    return cats
  })

  const filteredAgents = computed(() => {
    let filtered = agents.value

    if (selectedCategory.value !== '全部') {
      filtered = filtered.filter(agent => agent.category === selectedCategory.value)
    }

    if (searchQuery.value) {
      filtered = filtered.filter(agent => 
        agent.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        agent.description.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        agent.features.some(feature => 
          feature.toLowerCase().includes(searchQuery.value.toLowerCase())
        )
      )
    }

    return filtered
  })

  const setSearchQuery = (query) => {
    searchQuery.value = query
  }

  const setCategory = (category) => {
    selectedCategory.value = category
  }

  return {
    agents,
    searchQuery,
    selectedCategory,
    categories,
    filteredAgents,
    setSearchQuery,
    setCategory
  }
})
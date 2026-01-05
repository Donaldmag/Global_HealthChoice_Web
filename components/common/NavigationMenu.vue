<template>
  <div class="main-menu">
    <nav class="navigation">
      <ul class="nav menu">
        <li
          v-for="item in menuItems"
          :key="item.id"
          :class="{ active: item.active, 'has-dropdown': item.submenu }"
          @mouseenter="item.submenu ? showDropdown(item.id) : null"
          @mouseleave="item.submenu ? hideDropdown(item.id) : null"
        >
          <NuxtLink 
            :to="item.to" 
            class="menu-link"
            @click="handleMenuClick(item)"
          >
            {{ item.label }}
            <i 
              v-if="item.submenu" 
              class="icofont-rounded-down"
            ></i>
          </NuxtLink>
          
          <ul 
            v-if="item.submenu && activeDropdown === item.id"
            class="dropdown"
          >
            <li 
              v-for="subItem in item.submenu"
              :key="subItem.id"
            >
              <NuxtLink 
                :to="subItem.to"
                class="submenu-link"
              >
                {{ subItem.label }}
              </NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  menuItems: {
    type: Array,
    required: true,
    default: () => []
  }
});

const activeDropdown = ref(null);

const showDropdown = (menuId) => {
  activeDropdown.value = menuId;
};

const hideDropdown = () => {
  activeDropdown.value = null;
};

const handleMenuClick = (item) => {
  if (!item.submenu) {
    emit('menu-click', item.id);
  }
};

const emit = defineEmits(['menu-click']);
</script>
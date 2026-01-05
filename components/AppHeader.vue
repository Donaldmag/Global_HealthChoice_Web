<template>
  <header class="header">
    <!-- Topbar -->
    <CommonTopBar :contact-info="contactInfo" />
    
    <!-- Header Inner -->
    <div class="header-inner">
      <div class="container">
        <div class="inner">
          <div class="row align-items-center">
            <!-- Logo Section -->
            <div class="col-lg-3 col-md-3 col-12">
              <div class="logo">
                <NuxtLink to="/">
                  <img
                    :src="logoConfig.src"
                    :alt="logoConfig.alt"
                    :width="logoConfig.width"
                    :height="logoConfig.height"
                  />
                </NuxtLink>
                <strong class="text- fs-6 pt-2 text-color">
                  {{ logoConfig.companyName.first }}
                  <span>{{ logoConfig.companyName.second }}</span>
                </strong>
              </div>
              <!-- Mobile Nav -->
              <div class="mobile-nav"></div>
            </div>

            <!-- Desktop Navigation -->
            <div class="col-lg-7 col-md-9 col-12">
              <CommonNavigationMenu
                :menu-items="menuItems"
                @menu-click="handleNavigation"
              />
            </div>

            <!-- CTA Button -->
            <div class="col-lg-2 col-12">
              <div class="get-quote">
                <NuxtLink
                  :to="ctaButton.to"
                  class="btn"
                >
                  {{ ctaButton.label }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/ End Header Inner -->
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useNavigation } from '@/composables/useNavigation';

// Use composable
const {
  menuItems,
  contactInfo,
  logoConfig,
  ctaButton,
  setActiveMenu
} = useNavigation();

// Reactive state
const isScrolled = ref(false);

// Methods
const handleNavigation = (menuId) => {
  setActiveMenu(menuId);
  // Navigate using Nuxt router
  navigateTo(menuItems.find(item => item.id === menuId)?.to || '/');
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
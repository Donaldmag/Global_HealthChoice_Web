<template>
  <!-- Start Blog Area / Services Area -->
  <section class="blog section" id="services">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <CommonSectionHeader
            :title="servicesData.title"
            :subtitle="servicesData.subtitle"
            :image="servicesData.sectionImage"
            alt="Services section divider"
          />
        </div>
      </div>
      
      <!-- Services Grid -->
      <!-- <div class="row">
        <div 
          v-for="service in displayedServices"
          :key="service.id"
          :class="gridColumnClass"
          class="mb-4"
        >
          <CommonServiceCard
            :service="service"
            :show-category="servicesData.config.showCategories"
            :show-date="servicesData.config.showDates"
            @click="handleServiceClick"
            @link-click="handleServiceLinkClick"
          />
        </div>
      </div> -->
      
      <!-- View All Button -->
      <!-- <div v-if="servicesData.config.showViewAllButton" class="row mt-5">
        <div class="col-lg-12 text-center">
          <button 
            class="btn btn-primary view-all-btn"
            @click="handleViewAllClick"
          >
            View All Services <i class="fa fa-arrow-right"></i>
          </button>
        </div>
      </div> -->
    </div>
  </section>
  <!-- End Blog Area / Services Area -->
</template>

<script setup>
import { useServices } from '@/composables/useServices';
import { computed, ref } from 'vue';

// Use composable
const { 
  servicesData, 
  handleServiceClick, 
  loadMoreServices 
} = useServices();

// State
const showAllServices = ref(false);

// Computed properties
const displayedServices = computed(() => {
  if (showAllServices.value) {
    return [...servicesData.services, ...servicesData.additionalServices];
  }
  return servicesData.services;
});

const gridColumnClass = computed(() => {
  const cols = servicesData.config.itemsPerRow;
  switch(cols) {
    case 1: return 'col-12';
    case 2: return 'col-lg-6 col-md-6 col-12';
    case 3: return 'col-lg-4 col-md-6 col-12';
    case 4: return 'col-lg-3 col-md-6 col-12';
    default: return 'col-lg-4 col-md-6 col-12';
  }
});

// Méthodes
const handleServiceLinkClick = (service) => {
  console.log(`Service link clicked: ${service.title}`);
  // Navigation
  navigateTo(service.link);
};

const handleViewAllClick = () => {
  if (showAllServices.value) {
    // Si déjà en mode "view all", naviguer vers la page des services
    navigateTo('/services');
  } else {
    // Sinon, charger plus de services
    showAllServices.value = true;
    loadMoreServices();
  }
};

// Exposer des méthodes si besoin
defineExpose({
  getServicesCount: () => displayedServices.value.length,
  toggleViewAll: () => {
    showAllServices.value = !showAllServices.value;
  }
});
</script>

<style scoped>
.blog.section {
  padding: 80px 0;
  background-color: #f8f9fa;
}

.view-all-btn {
  padding: 12px 40px;
  border-radius: 4px;
  background-color: #3498db;
  color: white;
  border: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

.view-all-btn:hover {
  background-color: #2980b9;
  transform: translateY(-3px);
  box-shadow: 0 5px 20px rgba(41, 128, 185, 0.3);
}

.view-all-btn i {
  font-size: 0.9rem;
  transition: transform 0.3s;
}

.view-all-btn:hover i {
  transform: translateX(5px);
}

/* Responsive */
@media (max-width: 992px) {
  .blog.section {
    padding: 60px 0;
  }
  
  .view-all-btn {
    padding: 10px 30px;
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .blog.section {
    padding: 50px 0;
  }
  
  .mb-4 {
    margin-bottom: 30px !important;
  }
}
</style>